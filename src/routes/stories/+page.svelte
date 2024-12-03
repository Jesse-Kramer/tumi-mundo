<script>
    import Story from '../../components/layout/story.svelte';
    import Playlist from '../../components/layout/playlist.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>
<main>
    <section>
        <h2>Stories</h2>
        <ul>
            {#each data.stories as story}
                <Story {story} />
            {/each}
        </ul>
    </section>
    <section>
        <h2>Playlists</h2>
        <ul>
            {#each data.playlists as playlist}
                <Playlist {playlist} />
            {/each}
        </ul>
      </section>
      <section>
        <h2>Stories</h2>
        <ul>
            {#each data.stories as story}
                <Story {story} />
            {/each}
        </ul>
    </section>
    <section>
        <h2>Playlists</h2>
        <ul>
            {#each data.playlists as playlist}
                <Playlist {playlist} />
            {/each}
        </ul>
      </section>
</main>

<style>
    main {
        background: rgb(20,33,81);
        background: linear-gradient(0deg, rgba(20,33,81,1) 0%, rgba(71,24,113,1) 100%);
        padding: 1.2em;
        color: white;
        height: 100%;
    }

    section {
        margin: 2.5em 0 2.5em 0;
    }

    ul {
        list-style: none;
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
