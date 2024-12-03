/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData, mapStoriesWithDetails, mapPlaylistsWithDetails } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    // Enrich stories with details
    const storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);

    // Enrich stories with details
    const enrichedPlaylists = mapPlaylistsWithDetails(data.playlists, data.stories, data.playlistStories);

    return {
        ...data,
        stories: storiesWithDetails, // Stories now include corresponding audios and languages
        playlists: enrichedPlaylists // Playlists now include enriched details like playtime
    };
}
