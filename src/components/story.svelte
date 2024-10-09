<!-- <script>
  const stories = [
    { title: "The dinosaur family", description: "Long ago there was a family of dinosaurs that lived in a deserted place The little dinosaur is making a new friend"  ,playtime: "1 min, 3 sec"},
    { title: "Six o’clock", description: "  A group of friends try to take over the playground. Jesper and Wylan want to take over the swings, but one person stands in their way.", playtime: "3 min, 4 sec"},
    { title: "Toys on the Orient Express", description: "A child looses his toy during a train ride. He is determined to find it back.", playtime: "2 min, 1 sec"}
  ];
</script>

{#each stories as {title, description, playtime}}
<article class="story-content">
    <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

    <div class="tekst">
        <p class="title">{title}</p>
        <p class="description">{description}</p>
    </div>

    <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />

    <div class="iconen-onder">
        <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
        <p class="time">{playtime}</p>

        <div class="rechts-onder">
        <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
        <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
        </div>
    </div>
</article>


<article class="story-content">
    <img src="/Frame 104.svg" class="schildpad" alt="pinguin" />

    <div class="tekst">
      <p class="title">Six o’clock</p>
      <p class="description">
        A group of friends try to take over the playground. Jesper and
        Wylan want to take over the swings, but one person stands in
        their way.
      </p>
    </div>

    <img
      src="/Rectangle 135.svg"
      class="vlag-icon"
      alt="engelse-vlag"
    />

    <div class="iconen-onder">
      <img
        src="/Group 316 (1).svg"
        class="links-onder"
        alt="playbutton-blue"
      />
      <p class="time">3 min. 5 sec</p>

      <div class="rechts-onder">
        <img
          src="/Frame 64.svg"
          class="download-icon"
          alt="download-icon"
        />
        <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
      </div>
    </div>
  </article>

  <article class="story-content">
    <img src="/Frame 105.svg" class="schildpad" alt="bomen" />

    <div class="tekst">
      <p class="title">Toys on the Orient Express</p>
      <p class="description">
        A child looses his toy during a train ride. He is determined to
        find it back.
      </p>
    </div>

    <img
      src="/Rectangle 135.svg"
      class="vlag-icon"
      alt="engelse-vlag"
    />

    <div class="iconen-onder">
      <img
        src="/Group 316 (1).svg"
        class="links-onder"
        alt="playbutton-blue"
      />
      <p class="time">3 min. 5 sec</p>

      <div class="rechts-onder">
        <img
          src="/Frame 64.svg"
          class="download-icon"
          alt="download-icon"
        />
        <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
      </div>
    </div>
  </article>

{/each}

<style>
  :root {
    --card-bg-color: #f3f3f3;
  }

  p {
    font-size: var(--card-time-font-size);
    line-height: 12px;
    text-align: left;
  }

  article.story-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    max-width: 800px;
    height: 65px;
    background-color: var(--card-bg-color);
    padding: 20px;
    position: relative;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: 155px;
  }


  .title {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .description {
    margin-bottom: 35px;
    line-height: 12px;
    width: 220px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: 10px;
  }

  .time {
    margin-top: 10px;
    margin-right: 129px;
  }

  .tekst {
    flex-grow: 1;
    font-size: 8px;
    padding: 0;
  }

  img.schildpad {
    object-fit: cover;
    width: 70px;
    height: 75px;
    border-radius: 8px;
    margin-bottom: 5px;
    margin-right: 2px;
    margin-left: 0;
    transform: translateX(-8px);
  }

  .vlag-icon {
    position: absolute;
    top: 11px;
    right: 10px;
  }

  .iconen-onder {
    position: absolute;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
    bottom: 5px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  .links-onder {
    margin-left: 93px;
  }

  .rechts-onder {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 2px;
  }

</style> -->
