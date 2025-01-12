<script>
    import Story from '../../components/layout/story.svelte';
    import Search from '../../components/forms/search.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<header>
    <div class="heading">
        <a href="/stories"><img src="/icons/back-button-2.svg" alt="backbutton" class="heading-back" height="14px" width="24px"></a>
        <h1>All stories</h1>
    </div>

     <!-- <Search/> -->

    <ul class="nav-ul">
        <li>
            <select name="animal" id="animal-select" aria-label="Choose an animal">
                <option value="animal">Animal</option>
                    {#each data.buddys as buddy}
                        <option value="{ buddy.animal }">{ buddy.animal }</option>
                    {/each}
        </li>
        <li>
            <select name="season" id="season-select" aria-label="Choose a season">
                <option value="season">Season</option>
                <option value="summer">Summer</option>
        </li>
        <li>
            <select name="language" id="language"aria-label="Choose a language">
                <option  value="languages">Languages</option>
                    {#each data.languages as language}
                        <option value="{ language.language }">{ language.language }</option>
                    {/each}
        </li>
        <li>
            <select name="sorting" id="sorting"aria-label="Choose a sorting">
                <option value="sorting">Sorting</option>
                <option value="from a to z">From A - Z</option>
                <option value="from z to a">From Z to A</option>
                <option value="short to long playtime">Short to long playtime</option>
                <option value="long to short playtime">Long to short playtime</option>
        </li>
    </ul>
</header>

<section class="story-list">
    {#each data.stories as story}
        <Story {story} />
    {/each}
</section>

<style>
@font-face {
    font-family: 'Poppins';
    src: url('/assets/fonts/poppins-regular.woff2') format('woff2'),
         url('/assets/fonts/poppins-regular.woff') format('woff');
    font-display: swap;
}

:root{
    background-image: linear-gradient(#471871, #142151);
    font-family: Poppins, sans-serif;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
}

/* styling for header */
.heading, ul{
    display: flex;
    
    align-items: center;
}

select, header, .nav-ul > li{
    width: 100%;
}

.heading{
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding: 1rem;
    margin-top: 1rem;
    position: relative; 
}

.heading > h1{
    position: absolute;
    left: 50%;
    font-size: 1.7rem;
    transform: translateX(-50%);
}

.heading-back{
    align-self: self-start;
}

header {
    z-index: 10;
    height: 100%;
    justify-content: space-between; 
    padding: 10px 20px;
    background-color: transparent;
}

/* styling for the nav and dropdowns */
.nav-ul > li {
    background-color: #571899;
    font-size: 1em;
    padding: .2rem .3rem;
    border-radius: 5px;
}

.nav-ul {
    margin-top: .3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: .5rem;
    list-style-type: none;
    overflow-x: auto;
}

select {
    background-color: transparent;
    overflow-x: auto; 
    border: none;
}

option, option:active{
    color: black;
}

section {
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
}

h2 {
    font-size: 24px;
    margin-bottom: 16px;
}

/* Styling for stories. */
section.story-list {
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
}

@media only screen and (min-width: 865px) {
  .nav-ul {
    gap: 1rem;
 }
}
</style>
