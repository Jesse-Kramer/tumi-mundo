<script>
    export let story;

    // SELECT THE FIRST AUDIO FILE, EX: NO SPEAKER PROFILE SELECTED
    const firstAudio = story.audios?.[0]?.file || null;

    const {image, title, language, summary, playtime} = story

</script>

<li class="story-container">
    <div class="story-image flex-items">
        <!-- <img src="{story.image}" alt="" height="60px" width="64px"> -->
        <picture>
          <source srcset="{image}?width=64&format=webp" type="image/webp">
          <source srcset="{image}?width=64" type="image/jpeg">
          <img src="{image}" alt="{title} cover image" height="60" width="64" loading="lazy">
      </picture>
    </div>
    <h2 class="story-title">{title}</h2>
    <div class="story-language flex-items">
        <img src="/languages/{language}.svg" alt="{language} flag" height="17.59" width="17.58">
    </div> 
    <p class="story-summary">{summary}</p>
    <div class="story-playtime flex-items">
        <a href={firstAudio} target="_blank"><img src="/icons/story-playtime.svg" alt="Icon for playtime" height="17.59" width="17.59"></a>
        <p>{playtime}</p>
    </div>
    <div class="story-icons flex-items">
        <img src="/icons/download-icon.svg" alt="Icon for download" height="17.59" width="17.59">
        <img src="/icons/add-to-playlist.svg" alt="Icon for adding to playlist" height="12" width="12">
    </div>
</li>

<style>
    li {
      width: 22.5em;
      max-height: 5.3em;
      display: grid;
      grid-template-columns: repeat(6, auto);
      grid-template-rows: repeat(2, 1fr);
      background-color: #fff;
      overflow: hidden;
      padding: 10px;
      border-radius: 4px;
      color: black;
    }

    .story-title {
      font-size: 10px;
      font-weight: 600;
      grid-area: 1 / 3 / 2 / 6;
    }

    p {
      font-size: 8px;
    }

    img {
      max-width: 1.1em;
    }

    .story-image {
      grid-area: 1 / 1 / 4 / 2;
    }

    .story-image img{
      max-width: 3.75em;
      min-height: 4em;
      object-fit: cover;
    }

    .story-language {
      grid-area: 1 / 6 / 2 / 7;
      justify-content: flex-end;
    }
    
    .story-summary {
      grid-area: 2 / 3 / 3 / 7;
      width: 275px;
      max-height: 1.5em;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      overflow: hidden;
    }

    .story-playtime {
      grid-area: 3 / 3 / 4 / 6; 
    }

    .story-playtime a {
      display: flex;
      align-items: center;
    }

    .story-icons {
      grid-area: 3 / 6 / 4 / 7; 
      justify-content: flex-end;
    }

    .flex-items {
      display: flex;
      align-items: center;
      gap: 8px;
    }
</style>