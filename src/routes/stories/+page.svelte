<script>
    import Story from '../../components/layout/story.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <h2>Stories</h2>
    <section class="story-list">
        {#each data.stories as story}
        <Story {story} />
        {/each}
    </section>
</main>

<style>
    main {
        background-color: purple;
        padding: 20px;
        color: white;
    }

    section.story-list {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }
</style>
