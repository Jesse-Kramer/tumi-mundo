import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

const assetBaseUrl = "https://fdnd-agency.directus.app/assets/";

// Helper function to fetch data for a specific collection
export async function fetchCollection(fetch, collectionName) {
    const directus = getDirectusInstance(fetch);
    return await directus.request(readItems(collectionName));
}

// Helper function to fetch all required data
export async function fetchAllData(fetch) {
    const directus = getDirectusInstance(fetch);

    // Fetch all required data in parallel
    const [
        users,
        profiles,
        profileStatistics,
        buddies,
        languages,
        audios,
        playlists,
        speakers,
        stories,
        likes,
        playlistStories,
        profileUsers
    ] = await Promise.all([
        fetchCollection(fetch, 'tm_users'),
        fetchCollection(fetch, 'tm_profile'),
        fetchCollection(fetch, 'tm_profile_statistics'),
        fetchCollection(fetch, 'tm_buddy'),
        fetchCollection(fetch, 'tm_language'),
        fetchCollection(fetch, 'tm_audio'),
        fetchCollection(fetch, 'tm_playlist'),
        fetchCollection(fetch, 'tm_speaker_profile'),
        fetchCollection(fetch, 'tm_story'),
        fetchCollection(fetch, 'tm_likes'),
        fetchCollection(fetch, 'tm_playlist_stories'),
        fetchCollection(fetch, 'tm_profile_user')
    ]);

    return {
        users,
        profiles,
        profileStatistics,
        buddies,
        languages,
        audios,
        playlists,
        speakers,
        stories,
        likes,
        playlistStories,
        profileUsers
    };
}

// Helper function to convert seconds to "min sec" format
function formatPlaytime(seconds) {
    const minutes = Math.floor(seconds / 60); // Calculate minutes
    const remainingSeconds = seconds % 60;   // Calculate remaining seconds
    return `${minutes} min ${remainingSeconds} sec`;
}

// Helper function to enrich stories with audio and language details
export function mapStoriesWithDetails(stories, audios, languages) {

    return stories.map((story) => {
        const language = languages.find((lang) => lang.id === story.language)?.language || "unknown.svg";
        const storyAudios = story.audio.map((audioId) => {
            const audioData = audios.find((audio) => audio.id === audioId);
            if (audioData) {
                return {
                    id: audioData.id,
                    file: `${assetBaseUrl}${audioData.audio_file}`,
                    voice_colours: audioData.voice_colours,
                    speaker_profile: audioData.speaker_profile
                };
            }
            return null;
        }).filter(Boolean);

        story.image = story.image ? `${assetBaseUrl}${story.image}` : "unknown.svg";

        if (story.playtime) {
            story.playtime = formatPlaytime(story.playtime);
        }

        story.language = language;

        return {
            ...story,
            audios: storyAudios
        };
    });
}

export function mapPlaylistsWithDetails(playlists, stories, playlistStories) {
    const storyMap = new Map(stories.map((story) => [story.id, story]));

    return playlists.map((playlist) => {
        // Get the related story IDs from the playlist_stories junction table
        const relatedStoryIds = playlistStories
            .filter((link) => link.playlist_id === playlist.id)  // Filter by playlist_id
            .map((link) => link.story_id);  // Get the story_id for each link

        // Get the stories for the playlist based on the related story IDs
        const playlistStoriesData = relatedStoryIds
            .map((storyId) => {
                const story = storyMap.get(storyId);
                return story;
            })
            .filter(Boolean); // Filter out undefined stories

        // Calculate total playtime
        const totalPlaytime = playlistStoriesData.reduce((sum, story) => {
            return sum + (story.playtime || 0);
        }, 0);


        // Format the total playtime
        const formattedPlaytime = totalPlaytime > 0 ? formatPlaytime(totalPlaytime) : "N/A";

        // Log the final enriched playlist
        const enrichedPlaylist = {
            ...playlist,
            image: playlist.image ? `${assetBaseUrl}${playlist.image}` : "unknown.svg",
            playtime: formattedPlaytime,
            stories: playlistStoriesData, // Enriched stories
        };

        return enrichedPlaylist;
    });
}

export function mapUsersWithProfiles(users, profiles, profileUsers) {
    const profileMap = new Map(profiles.map((profile) => [profile.id, profile]));

    return users.map((user) => {
        const relatedProfileIds = profileUsers
            .filter((link) => link.user_id === user.id)
            .map((link) => link.profile_id);

        const userProfilesData = relatedProfileIds
        .map((profileId) => {
            const profile = profileMap.get(profileId);
            return profile;
        })
        .filter(Boolean); // Filter out undefined stories


        const enrichedUser = {
            ...user,
            profiles: userProfilesData,
        };

        return enrichedUser;
    })
}