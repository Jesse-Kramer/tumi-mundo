
<script>
    import Story from '../../components/layout/story.svelte';
    import Playlist from '../../components/layout/playlist.svelte';

    import Menu2 from '../../components/core/menu2.svelte';

    let currentPage = "lessons";

    /** @type {import('./$types').PageData} */
    export let data;

</script>

<main>
<Menu2 {currentPage}/>

<header>
    <h1>Lessons</h1>

    <ul>
        <li>1. Listening</li>
    </ul>
</header>

<section class="own-playlist">
    <h2>Own playlists</h2>
    <ul>
        <li class="playlist-1">
            <img src="/temp/temp-story.svg" class="story-img">
            <h3>The octopus who was very hungry</h3>
            <small>    
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#F3A22A"/>
                    <path d="M17.0874 13.0613C17.7817 12.5241 17.7817 11.4759 17.0874 10.9387C14.9891 9.31508 12.6461 8.03537 10.146 7.14743L9.68929 6.98522C8.8155 6.67488 7.89254 7.26607 7.77425 8.16805C7.44374 10.6882 7.44374 13.3118 7.77425 15.8319C7.89254 16.7339 8.8155 17.3251 9.68929 17.0148L10.146 16.8526C12.6461 15.9646 14.9891 14.6849 17.0874 13.0613Z" fill="white"/>
                </svg><a href="all-stories">31 min. 55 sec
            </a></small>
        </li>
        <li class="create-playlist">
            <img src="/icons/create-playlist.svg">
            <h3>Make a playlist !</h3>
            <small><a href="/create-playlist">Add your favorite stories in one playlist</a></small>
        </li>
    </ul>
</section>

<section class="all-stories">
    <h2>All stories</h2>
    <nav class="language-filter">

        <input type="checkbox" id="checkbox-nl">
        <label for="checkbox-nl"><img src="/languages/Dutch.svg">Dutch</label>
    
        <input type="checkbox" id="checkbox-en">
        <label for="checkbox-en"><img src="/languages/English.svg">English</label>

        <a href="/all-stories">Show all</a>
    </nav>

    <section class="story-list">
        {#each data.stories as story}
            <Story {story} />
        {/each}
    </section>

    <nav>
        <button><img src="/icons/carousel-left-button.svg"></button>
            <ul>
                <li><input type="radio"></li>
                <li><input type="radio"></li>
                <li><input type="radio"></li>
            </ul>
        <button><img src="/icons/carousel-right-button.svg"></button>
    </nav>

</section>

<section class="own-playlist">
    <h2>Liked playlists</h2>
    <section class="playlist-list">
      {#each data.playlists.filter(playlist => playlist.isLiked) as playlist}
        <Playlist {playlist} />
      {/each}
    </section>
</section>

<section class="own-playlist suggested-playlist">
    <h2>Suggested playlists</h2>
    <section class="playlist-list">
        {#each data.playlists.filter(playlist => !playlist.isLiked) as playlist}
            <Playlist {playlist} />
        {/each}
    </section>
</section>


</main>

<style>

/* styling for all stories & carousel nav */
.all-stories{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
nav{
    display: flex;
    margin-top: 1em;
    align-items: center;
    justify-content: center;
}
nav > ul{
    display: flex;
    margin: 0 1.5em;
}
nav > button{
    border: none;
    border-radius: .5em;
    padding:  1em;
    height: 2em;
    width: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9264F4;
}
nav > button > img{
    height: 1.5em;
}
/*  */
/* styling for all stories page */
.language-filter{
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    width: 100%;
}
.language-filter > a{
    margin-left: auto;
}
.language-filter > a:hover{
    text-decoration: underline;
}
label{
    display: flex;
    align-items: center;
    padding: .3em;
    padding-right: .5em;
    background-color: #998DB2;
    color: black;
    border-radius: .5em;
}
label:nth-of-type(1){
    margin-right: 1em;
}
input[type=checkbox]{
    opacity: 0;
    position: absolute;
}
input[type=checkbox]:checked + label{
    background-color: white;
    font-weight: bold;
}
label > img{
    height: 1.5em;
    width: auto;
    margin-right: 0.5em;
}

/*  */
h1{
    margin-top: 2rem;
    margin-bottom: 1rem;
}
h2{
    font-size: 1.3em;
}
header{
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2{
    margin-bottom: .75rem;
}
.create-playlist, .playlist-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.playlist-1 > img{
    width: 100%;
}
.playlist-1{
    background-color: white;
}
.playlist-1 > a small{
    color: black;
}
.playlist-1 > h3{
    font-weight: bold;
}
.own-playlist{
    display: flex;
    flex-direction: column;
}
.own-playlist > ul{
    display: flex;
    gap: 10px;
    overflow-x: auto;
}
.own-playlist > ul > li{
    height: 12.5rem;
    width: 9rem;
    color: black;
    border-radius: .5rem;
    padding: .7em;
}
.create-playlist{
    background-color: #494375;
    text-align: center;
    color: white;
}
.create-playlist > h3{
    margin-bottom: 1em;
    color: white;
    font-weight: bold;
    font-size: 1em;
}
.create-playlist > a{
    color: white;
    font-size: 1em;
}
.create-playlist > small{
    color: white;
}
:root{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main{
    height: 100%;
    color: white;
    background-image: linear-gradient(#471871, #142151);
    display: flex;
    flex-direction: column;
    /* align-items: center; */
}
section{
    padding: 1rem;
}
.playlist-1 > small{
    align-self: start;
    margin-top: auto;
}
small img {
    vertical-align: middle;
    padding-right: .3em;
    height: 2em;
    width: 2em;
}

/*  styling for suggested playlist page*/

section.playlist-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 1rem; 
    scroll-snap-type: x mandatory; 
}
section.playlist-list > article {
    flex: 0 0 auto;
    scroll-snap-align: center; 
}

@media only screen and (min-width: 600px) {
    main{
    align-items: center;
}
}


</style>