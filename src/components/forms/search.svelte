<script>
    import { onMount } from "svelte"
    import { createEventDispatcher } from "svelte"; // https://www.youtube.com/watch?v=ECCAS5BfC7o
    export let data = []; 
    export let searchTerm = "";

    // Dispatch events to notify the parent
    const dispatch = createEventDispatcher();

    // Reactive filtered data
    $: filteredData = searchTerm
        ? data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : data;

    // Emit filtered data whenever it changes
    $: dispatch("filter", filteredData);

    // Emit the full list on component load
    onMount(() => {
        dispatch("filter", data);
    });
</script>

<div>
    <!-- Search Field -->
    <input
        type="text"
        id="searchbar"
        placeholder="Search..." 
        class="search"
        bind:value={searchTerm}
    /> <!-- Removed "languages" from placeholder so we can re-use this component. -->
</div>

<style>
/* Add styles for the search field */
.search {
    background-image: url(/icons/search-icon.svg);
    background-repeat: no-repeat;
    background-position: 2% 50%;
    padding: 13px 30px;
    border-radius: 8px;
    border: none;
    width: 100%;
    max-width: 500px; /* Optionele maximale breedte */
    margin: 10px auto; /* Centraal uitlijnen */
    box-sizing: border-box; /* Zorg ervoor dat padding en border in de breedte worden meegenomen */
}
div{
    width: 100%;
}
</style>
