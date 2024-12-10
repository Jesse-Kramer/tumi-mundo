/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData, mapStoriesWithDetails } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    // Enrich stories with details
    const storiesWithDetails = mapStoriesWithDetails(data.stories, data.audios, data.languages);

    return {
        ...data,
        stories: storiesWithDetails, // Stories now include corresponding audios and languages
        languages: data.languages
    };
}
