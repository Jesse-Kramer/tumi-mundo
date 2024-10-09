
<!-- <script>
  import Story from '../../components/story.svelte'
</script> -->

<script>

  // Maak een variabele voor de slide met daarin een array aan voor de verschillende slides 
  let slides = ['Slide 1', 'Slide 2', 'Slide 3'];
  let currentSlide = 0; 
  // Toon de eerste slide al (omdat 0 = 1)

  
  function goToSlide(slideIndex) {
    if (slideIndex >= slides.length) {
      currentSlide = 0; // Terug naar de eerste slide
    } else if (slideIndex < 0) {
      currentSlide = slides.length - 1; // Ga naar de laatste slide
    } else {
      currentSlide = slideIndex; // Ga naar de aangegeven slide
    }
  }

  // Event listeners voor knoppen
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

</script>

<a href="/">Go to Home</a>

<body>
  <main>
    <h1>Lessons</h1>
    <nav>
      <a href="/" class="button-listening">Listening</a>
      <img src="/Music Note 2.svg" class="music-note" alt="music-note" />

      <a href="/" class="button-listening">2.</a>
    </nav>

    <section class="content">
      <h2 class="titel">Own playlists</h2>

      <article class="kaart">
        <article class="octopus-kaart">
          <img src="/Frame 27.svg" class="octopus" alt="octopus" />
          <p class="octopus-tekst">The octopus who was very hungry</p>

          <div class="tijd-en-playbutton">
            <img
              src="/Group 316.svg"
              class="playbutton-orange"
              alt="play-button"
            />
            <p class="tijd">31 min. 55 sec</p>
          </div>
        </article>

        <article class="maak-playlist">
          <img src="/Group 321.svg" class="playlist-icon" alt="playlist-icon" />
          <p class="playlist-text">Make a playlist !</p>
          <p></p>
          <p class="favorite-text">Add your favorite stories in one playlist</p>
        </article>
      </article>
    </section>

    <section class="content">
      <h2 class="storie-titel">All stories</h2>

      <div class="buttons">
        <div class="button-ned">
          <img
            src="/Rectangle 133.svg"
            class="ned-vlag"
            alt="nederlandse-vlag"
          />
          <a href="/" class="button-text">Dutch</a>
        </div>

        <div class="button-eng">
          <img
            src="/Rectangle 135.svg"
            class="engelse-vlag"
            alt="engelse-vlag"
          />
          <a href="/" class="button-text">English</a>
        </div>
      </div>
    </section>

    <form class="carousel-container">
      <!-- Radio buttons voor het besturen van de slides -->
      <input type="radio" name="carousel" id="slide1" checked={currentSlide === 0} />
      <input type="radio" name="carousel" id="slide2" checked={currentSlide === 1} />
      <input type="radio" name="carousel" id="slide3" checked={currentSlide === 2}/>

      <article class="carousel">
        <article class="carousel-slide">
          <!-- <Story/> -->
          <article class="story-content">
            <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

            <div class="tekst">
              <p class="title">The dinosaur family</p>
              <p class="description">
                Long ago there was a family of dinosaurs that lived in a
                deserted place. The little dinosaur is making a new friend.
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
        </article>

        <!-- Slide 2 -->
        <article class="carousel-slide">
          <article class="story-content">
            <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

            <div class="tekst">
              <p class="title">The dinosaur family</p>
              <p class="description">
                Long ago there was a family of dinosaurs that lived in a
                deserted place. The little dinosaur is making a new friend.
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
            <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

            <div class="tekst">
              <p class="title">The dinosaur family</p>
              <p class="description">
                Long ago there was a family of dinosaurs that lived in a
                deserted place. The little dinosaur is making a new friend.
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
            <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

            <div class="tekst">
              <p class="title">The dinosaur family</p>
              <p class="description">
                Long ago there was a family of dinosaurs that lived in a
                deserted place. The little dinosaur is making a new friend.
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
        </article>

        <!-- -- Slide 3 -->
        <article class="carousel-slide">
          <article class="story-content">
            <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

            <div class="tekst">
              <p class="title">The dinosaur family</p>
              <p class="description">
                Long ago there was a family of dinosaurs that lived in a
                deserted place. The little dinosaur is making a new friend.
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
            <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />

            <div class="tekst">
              <p class="title">The dinosaur family</p>
              <p class="description">
                Long ago there was a family of dinosaurs that lived in a
                deserted place. The little dinosaur is making a new friend.
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
        </article>

        <article class="content-container">
          <article class="right-content"></article>
          <article class="right-content"></article>
          <article class="right-content"></article>
        </article>
      </article>

      <div class="carousel-button">
        <button id="prev" on:click={prevSlide}>
          <img src="/left.svg" class="add-icon" alt="add-icon" />
        </button>

        <!-- Labels om de slides te besturen -->
        <div class="carousel-controls">
          <label for="slide1"></label>
          <label for="slide2"></label>
          <label for="slide3"></label>
        </div>

        <button id="next" on:click={nextSlide}>
          <img src="/right.svg" class="add-icon" alt="add-icon" />
        </button>
      </div>
    </form>

    <section class="content">
      <h2>Liked playlist</h2>

      <article class="pinguin-kaart">
        <article class="pinguin-card">
          <img src="/Frame 27 (1).svg" class="pinguin" alt="pinguin" />
          <p class="pinguin-tekst">Penguin activities!</p>

          <div class="pinguin-icon">
            <img
              src="/Group 316.svg"
              class="playbutton"
              alt="play-button"
            />
            <p class="tijd">31 min. 55 sec</p>

            <img src="/Heart.svg" class="heart-icon" alt="heart-icon" />
          </div>
        </article>

        <article class="pinguin-card">
          <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
          <p class="pinguin-tekst">
            Christmas stories, for the festive season.
          </p>

          <div class="pinguin-icons">
            <img
              src="/Group 316.svg"
              class="playbutton"
              alt="play-button"
            />
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
            <img
              src="/Group 316.svg"
              class="playbutton"
              alt="play-button"
            />
            <p class="tijd">31 min. 55 sec</p>

            <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
          </div>
        </article>

        <article class="pinguin-card">
          <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
          <p class="pinguin-tekst">
            Christmas stories, for the festive season.
          </p>

          <div class="pinguin-icons">
            <img
              src="/Group 316.svg"
              class="playbutton"
              alt="play-button"
            />
            <p class="tijd">31 min. 55 sec</p>

            <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
          </div>
        </article>

        <article class="pinguin-card">
          <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
          <p class="pinguin-tekst">
            Christmas stories, for the festive season.
          </p>

          <div class="pinguin-icons">
            <img
              src="/Group 316.svg"
              class="playbutton"
              alt="play-button"
            />
            <p class="tijd">31 min. 55 sec</p>

            <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
          </div>
        </article>


      </article>
    </section>
  </main>
</body>

<style>
  :root {
    --playlist-bg-color: #471871;
    --btn-color: #1cb854;
    --btn-color-two: #37C6AB;

    --card-bg-color-two:#494375;
    --card-bg-color: #f3f3f3;
    --card-time-font-size: 8px;
    --card-description-font-size: 11px;
    --card-font-color: #000000;

    --languages-btn-color: white;
    --languages-font-color: #1f1230;
    --languages-font-size: 12px;
    --carousel-btn: #9264f4;


  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: var(--playlist-bg-color);
    margin: 0;
    padding: 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    transform: translateX(120px);
    gap: 10px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
    margin-top: 50px;
    color: white;
  }

  a.button-listening {
    font-size: 1em;
    color: white;
    background-color: var(--btn-color);
    padding: 8px 90px;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 30px;
    transform: translateX(-18px);
  }

  a.button-listening:hover {
    background-color: var(--btn-color);
  }

  a.button-listening:nth-child(3) {
    background-color: #37C6AB;
    opacity: 40%;
  }

  img.music-note {
    position: absolute;
    left: 190px;
    top: 7px;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--bg-color);
  }

  article.kaart article.maak-playlist {
    background-color: var(--card-bg-color-two);
  }

  article.kaart {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-right: 55px;
    margin-bottom: 30px;
  }

  article.kaart article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 105px;
    height: 175px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    transform: translateX(-18px);
  }

  .tijd-en-playbutton {
    display: flex;
    align-items: center;
  }

  img.octopus {
    width: 100px;
    height: 95px;
    object-fit: cover;
    border-radius: 8px;
  }

  img.playbutton-orange {
    width: 24px;
    height: 24px;
    transform: translateX(-10px);
  }


  img.playlist-icon {
    margin-top: 22px;
    margin-bottom: 8px;
  }

  .titel {
    font-size: 1.3em;
    transform: translateX(-18px);
  }

  h2 {
    font-size: 1.3em;
    text-align: left;
    color: white;
    margin-bottom: 10px;
    transform: translateX(-13px);
  }

  p {
    font-size: var(--card-time-font-size);
    line-height: 12px;
    text-align: left;
  }

  .octopus-tekst {
    font-size: var(--card-description-font-size);
    text-align: left;
    color: var(--card-font-color);
    line-height: 16.5px;
    margin: 0;
    margin-left: 5px;
  }


  .playlist-text {
    color: white;
    font-weight: 600;
    margin: 0;
    font-size: 12px;
    line-height: 16.5px;
    margin-bottom: 3px;
  }

  .favorite-text {
    color: white;
    margin: 0;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 9px;
    font-weight: 300;
    line-height: 12px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    transform: translateX(-82px);
    text-decoration: none;
  }

  .button-ned,
  .button-eng {
    display: flex;
    align-items: center;
    color: black;
    background-color: white;
    padding: 3px 8px;
    border-radius: 10px;
    margin-bottom: 10px;
    text-decoration: none;
  }

  .button-text {
    margin-bottom: 0;
    text-decoration: none;
    color: var(--card-font-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-left: 3px;
  }

  .ned-vlag,
  .engelse-vlag {
    width: 24px;
    height: 24px;
    margin-right: 3px;
    transform: translateX(-3px);
  }

  h2.storie-titel {
    margin-top: 3em;
    transform: translateX(-75px);
  }

  form.carousel-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  input[type="radio"] {
    display: none;
  }

  article.carousel {
    display: flex;
    transition: transform 0.5s ease;
  }

  .carousel-slide {
    display: none;
    flex-direction: column;
    transition: 0.2s ease;
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

  article.right-content {
    padding: 20px;
    position: relative;
    margin: 5px;
    margin-right: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100px;
    max-width: 800px;
    height: 65px;
    background-color:var(--card-bg-color);
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

  /* Laat alleen de geselecteerde slide zien */
  #slide1:checked ~ .carousel .carousel-slide:nth-child(1),
  #slide2:checked ~ .carousel .carousel-slide:nth-child(2),
  #slide3:checked ~ .carousel .carousel-slide:nth-child(3) {
    display: flex;
  }


  div.carousel-button {
    display: flex;
    justify-content: space-evenly;
    gap: 5px;
    margin-top: 10px;
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 30px;
  }

  #prev{
    background-color: var(--carousel-btn);
    opacity: 50%;
  }

  #next {
    background-color: var(--carousel-btn);
  }


  /* Styling voor de controls (indicators) */
  .carousel-controls {
    display: flex;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .carousel-controls label {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  section.last-content {
    transform: translateX(65px);
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
    width: 105px;
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

  img.heart-icon  {
    width: 28px;
    height: 30px;
    transform: translateX(5px);
  }

  img.playlist-icon {
    margin-top: 22px;
    margin-bottom: 8px;
  }
  
  p.tijd {
    transform: translateX(2px);
  }
</style>

