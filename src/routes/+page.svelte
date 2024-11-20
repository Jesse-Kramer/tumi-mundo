<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
</script>

<section>
    <h2>Accounts</h2>
    <article>
        {#if data.accounts && data.accounts.length > 0}
            <ul>
                {#each data.accounts as account}
                    <li>{account.name}</li>
                    <li>{account.email}</li>
                    <li>{account.profile}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen accounts</p>
    {/if}
    </article>

    <h2>Buddys</h2>
    <article>
        {#if data.buddys && data.buddys.length > 0}
            <ul>
                {#each data.buddys as buddy}
                    <li>{buddy.name}</li>
                    <li>{buddy.animal}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen buddys</p>
    {/if}
    </article>

    <h2>Profiles</h2>
    <article>
        {#if data.profiles && data.profiles.length > 0}
            <ul>
                {#each data.profiles as profile}
                    <li>{profile.name_of_child}</li>
                    <li>{profile.gender}</li>
                    <li>{profile.date_of_birth}</li>
                    <li>{profile.current_language}</li>
                    <li>{profile.new_language_to_learn}</li>
                    <li>{profile.buddy}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen profiles</p>
    {/if}
    </article>
    <h2>Stories</h2>
    <article>
    {#each data.stories as story}
        <h2>{story.title}</h2>
        <p>{story.summary}</p>
        {#if story.audios.length > 0}
            <ul>
                {#each story.audios as audio}
                    <li>
                        <p>Audio File: <a href={audio.file} target="_blank">{audio.file}</a></p>
                        <p>Voice Colours: {audio.voice_colours.join(', ')}</p>
                        <p>Speaker Profile: {audio.speaker_profile}</p>
                        <p>Language: {audio.language}</p>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>No audio available for this story.</p>
        {/if}
    {/each}
    </article>
    <h2>Playlists</h2>
    <article>
        {#if data.playlists && data.playlists.length > 0}
            <ul>
                {#each data.playlists as playlist}
                    <li>{playlist.title}</li>
                    <li>{playlist.description}</li>
                    <li>{playlist.stories}</li>
                    <li>{playlist.slug}</li>
                    <li>{playlist.language_id}</li>
                    <li>{playlist.creator}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen playlists</p>
    {/if}
    </article>

    <h2>Languages</h2>
    <article>
        {#if data.languages && data.languages.length > 0}
            <ul>
                {#each data.languages as language}
                    <li>{language.language}</li>
                {/each}
            </ul>
    {:else}
        <!-- This will show if no people are available -->
        <p>Er zijn geen languages</p>
    {/if}
    </article>
</section>