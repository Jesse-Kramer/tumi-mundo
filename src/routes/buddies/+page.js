/** @type {import('./$types').PageLoad} */
export let csr = true;

import { fetchAllData } from '$lib/api';

export async function load({ fetch }) {
    const data = await fetchAllData(fetch);

    return {
        ...data,
        buddies: data.buddies
    };
}
