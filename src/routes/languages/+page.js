/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData } from '$lib/api';

export async function load({ fetch, url }) {
    const searchQuery = url.searchParams.get("search"); // Haal de zoekterm op uit de URL

    const data = await fetchAllData(fetch); // Haal alle data op

    // Filter de talen als een zoekterm is opgegeven
    if (searchQuery) {
        data.languages = data.languages.filter(language =>
            language.language.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return {
        ...data,
        languages: data.languages
    };
}