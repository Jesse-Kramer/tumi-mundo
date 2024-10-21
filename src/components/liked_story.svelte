<section class="content">
  <h2>Liked playlist</h2>

  <article class="pinguin-kaart">
    <article class="pinguin-card">
      <img src="/Frame 27 (1).svg" class="pinguin" alt="pinguin" />
      <p class="pinguin-tekst">Penguin activities!</p>

      <div class="pinguin-icon">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Heart.svg" class="heart-icon" alt="heart-icon" />
      </div>
    </article>

    <article class="pinguin-card">
      <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
      <p class="kerstpinguin-tekst">
        Christmas stories, for the festive season.
      </p>

      <div class="pinguin-icons">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Heart.svg" class="heart-icon" alt="heart-icon" />
      </div>
    </article>
  </article>
</section>

<section class="last-content">
  <h2>Suggested playlist</h2>

  <article class="pinguin-kaart">
    <article class="pinguin-card">
      <img src="/Frame 27 (1).svg" class="pinguin" alt="pinguin" />
      <p class="pinguin-tekst">Penguin activities!</p>

      <div class="pinguin-icon">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
      </div>
    </article>

    <article class="pinguin-card">
      <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
      <p class="kerstpinguin-tekst">
        Christmas stories, for the festive season.
      </p>

      <div class="pinguin-icons">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
      </div>
    </article>

    <article class="pinguin-card">
      <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
      <p class="kerstpinguin-tekst">
        Christmas stories, for the festive season.
      </p>

      <div class="pinguin-icons">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
      </div>
    </article>
  </article>
</section>

<style>

section.content {
  margin-top: 30px;
}

  section.last-content {
    transform: translateX(70px);
  }

  h2 {
    color: white;
    transform: translateX(-14px);
    margin-bottom: 10px;
  }

  article.pinguin-kaart {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-right: 55px;
    margin-bottom: 30px;
  }

  article.pinguin-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 110px;
    height: 170px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    transform: translateX(-14px);
  }

  img.pinguin {
    width: 105px;
    height: 95px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 3px;
  }

  .pinguin-tekst {
    font-size: var(--card-description-font-size);
    text-align: left;
    color: var(--card-font-color);
    line-height: 16.5px;
    margin: 0;
    margin-bottom: 10px;
  }

  .kerstpinguin-tekst {
    font-size: var(--card-description-font-size);
    text-align: left;
    color: var(--card-font-color);
    line-height: 16.5px;
    margin: 0;
    margin-bottom: 5px;
  }

  .pinguin-icon {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;
  }

  .pinguin-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  img.empty-heart {
    width: 22px;
    height: 30px;
    transform: translateX(5px);
  }

  img.playbutton {
    width: 24px;
    height: 24px;
    transform: translateX(-2px);
  }

  img.heart-icon {
    width: 28px;
    height: 30px;
    transform: translateX(5px);
  }

  p.tijd {
    transform: translateX(2px);
    font-size: var(--card-time-font-size);
    line-height: 12px;
    text-align: left;
  }

</style>
