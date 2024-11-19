/** @type {import('./$types').PageLoad} */
export let csr = true;

import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);

    // Fetch all required data
    const accounts = await directus.request(readItems('tm_users'));
    const profiles = await directus.request(readItems('tm_profile'));
    const profileStatistics = await directus.request(readItems('tm_profile_statistics'));
    const buddys = await directus.request(readItems('tm_buddy'));
    const languages = await directus.request(readItems('tm_language'));
    const audios = await directus.request(readItems('tm_audio'));
    const playlists = await directus.request(readItems('tm_playlist'));
    const speakers = await directus.request(readItems('tm_speaker_profile'));
    const stories = await directus.request(readItems('tm_story'));
    const likes = await directus.request(readItems('tm_likes'));

    // Base URL for audio assets
    const assetBaseUrl = "https://fdnd-agency.directus.app/assets/";

    // Map stories to their corresponding audio files and languages
    const storiesWithDetails = stories.map((story) => {
        // Map audios to include audio file URL and language
        const storyAudios = story.audio.map((audioId) => {
            const audioData = audios.find((audio) => audio.id === audioId);
            if (audioData) {
                // Find the language name based on language_id
                const language = languages.find((lang) => lang.id === audioData.languague_id)?.language || "Unknown";

                return {
                    id: audioData.id,
                    file: `${assetBaseUrl}${audioData.audio_file}`, // Full audio URL
                    voice_colours: audioData.voice_colours,
                    language_id: audioData.languague_id,
                    language, // Include the language name
                    speaker_profile: audioData.speaker_profile
                };
            }
            return null;
        }).filter(Boolean); // Remove null values for unmatched audio IDs

        // Extract unique languages for the story based on its audios
        const storyLanguages = [...new Set(storyAudios.map((audio) => audio.language))];

        return {
            ...story,
            audios: storyAudios,
            languages: storyLanguages // List of unique languages for this story
        };
    });

    return {
        accounts,
        profiles,
        profile_statistics: profileStatistics,
        buddys,
        languages,
        playlists,
        speakers,
        likes,
        stories: storiesWithDetails // Stories now include corresponding audios and languages
    };
}
