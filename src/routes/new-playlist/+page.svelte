<!-- <script>
  import Story from '../../components/story.svelte'
</script> -->


<script>

const slides = document.querySelectorAll('input[name="carousel"]');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; 

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        slides[index].checked = true;
        currentIndex = index;
    }
}


prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
});


nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
});

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

    <!-- SLIDE -->



  <div class="container">
    <div class="carousel-container">
    
      <input type="radio" id="slide1" name="carousel" checked>
    <input type="radio" id="slide2" name="carousel">
    <input type="radio" id="slide3" name="carousel">
      <ul class="carousel">
  <!-- Eerste slide -->
  <li class="slide">
    <ul class="slide-content">
      <li>
        <figure>
          <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
          <figcaption>
            <h3>The dinosaur family</h3>
            <p class="beschrijving">
              Long ago there was a family of dinosaurs that lived in a deserted place. The little dinosaur is making a new friend.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>

      <li>
        <figure>
          <img src="/Frame 104.svg" class="schildpad" alt="pinguin" />
          <figcaption>
            <h3>Six o’clock</h3>
            <p class="beschrijving">
              A group of friends try to take over the playground. Jesper and Wylan want to take over the swings, but one person stands in their way.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>

      <li>
        <figure>
          <img src="/Frame 105.svg" class="schildpad" alt="schilpad" />
          <figcaption>
            <h3>Toys on the Orient Express</h3>
            <p class="beschrijving">
              A child looses his toy during a train ride. He is determined to find it back.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>
    </ul>
  </li>

  <!-- Tweede slide -->
  <li class="slide">
    <ul class="slide-content">
      <li>
        <figure>
          <img src="/Frame 105.svg" class="schildpad" alt="schilpad" />
          <figcaption>
            <h3>Toys on the Orient Express</h3>
            <p class="beschrijving">
              A child looses his toy during a train ride. He is determined to find it back.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>

      <li>
        <figure>
          <img src="/Frame 104.svg" class="schildpad" alt="pinguin" />
          <figcaption>
            <h3>Six o’clock</h3>
            <p class="beschrijving">
              A group of friends try to take over the playground. Jesper and Wylan want to take over the swings, but one person stands in their way.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>

      <li>
        <figure>
          <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
          <figcaption>
            <h3>The dinosaur family</h3>
            <p class="beschrijving">
              Long ago there was a family of dinosaurs that lived in a deserted place. The little dinosaur is making a new friend.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>
      
      <!-- Voeg hier de volgende drie lijstitems toe, zoals in de eerste slide -->
    </ul>
  </li>

  <!-- Derde slide -->
  <li class="slide">
    <ul class="slide-content">
      <li>
        <figure>
          <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
          <figcaption>
            <h3>The dinosaur family</h3>
            <p class="beschrijving">
              Long ago there was a family of dinosaurs that lived in a deserted place. The little dinosaur is making a new friend.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>


      <li>
        <figure>
          <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
          <figcaption>
            <h3>The dinosaur family</h3>
            <p class="beschrijving">
              Long ago there was a family of dinosaurs that lived in a deserted place. The little dinosaur is making a new friend.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>


      <li>
        <figure>
          <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
          <figcaption>
            <h3>The dinosaur family</h3>
            <p class="beschrijving">
              Long ago there was a family of dinosaurs that lived in a deserted place. The little dinosaur is making a new friend.
            </p>
          </figcaption>
        </figure>
        <img src="/Rectangle 135.svg" class="vlag-icon" alt="engelse-vlag" />
        <div class="iconen-onder">
          <img src="/Group 316 (1).svg" class="links-onder" alt="playbutton-blue" />
          <p class="time">3 min. 5 sec</p>
          <div class="rechts-onder">
            <img src="/Frame 64.svg" class="download-icon" alt="download-icon" />
            <img src="/Group 4.svg" class="add-icon" alt="add-icon" />
          </div>
        </div>
      </li>
      <!-- Voeg hier weer drie lijstitems toe -->
    </ul>
  </li>
</ul>

<div class="carousel-controls">
  <button id="prevBtn" class="carousel-button" aria-label="Vorige slide"><</button>
  
  <div class="carousel-nav" role="tablist" aria-label="Slide navigatie">
      <button class="nav-dot" role="tab" aria-label="Slide 1" aria-controls="slide1"></button>
      <button class="nav-dot" role="tab" aria-label="Slide 2" aria-controls="slide2"></button>
      <button class="nav-dot" role="tab" aria-label="Slide 3" aria-controls="slide3"></button>
  </div>
  
  <button id="nextBtn" class="carousel-button" aria-label="Volgende slide">></button>
</div>


</div>

</div>
<!-- SLIDE END -->
      <!-- <div class="carousel-container">
   
        <input
          type="radio"
          name="carousel"
          id="slide1"
          checked={currentSlide === 0}
        />
        <input
          type="radio"
          name="carousel"
          id="slide2"
          checked={currentSlide === 1}
        />
        <input
          type="radio"
          name="carousel"
          id="slide3"
          checked={currentSlide === 2}
        /> -->

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
                  A child looses his toy during a train ride. He is determined
                  to find it back.
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
                  A child looses his toy during a train ride. He is determined
                  to find it back.
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
        </article>
        
     

     <!-- TEST -->
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
            <p class="pinguin-tekst">
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
            <p class="pinguin-tekst">
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
            <p class="pinguin-tekst">
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

  </main>
</body>

<style>
  :root {
    --playlist-bg-color: #471871;
    --btn-color: #1cb854;
    --btn-color-two: #37c6ab;

    --card-bg-color-two: #494375;
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
    background-color: #37c6ab;
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

  /* ---- */
  .container {
    width: 100%;
    overflow: hidden; 
}

.carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory; 
}

.carousel ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0; 
}

.slide {
    display: flex; 
    scroll-snap-align: start; 
    width: 100vw; 
}

.slide-content {
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    /* padding: 20px;  */
    height: 60vh; 
    position: relative;
}

.slide-content li {
    margin: 10px 0; 
    margin-left: 10px;
    flex: 1; 
    border: 1px solid #ccc; 
    background-color: #f9f9f9;
    border-radius: 8px;
    overflow: hidden; 
}

.vlag-icon {
    position: absolute;
    right: 10px;
    top: 25px;
    width: 24px;
  }

  figure {
    display: flex;
    align-items: center;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px; 
  }

  figure img {
    max-width: 150px;
    margin-right: 20px;
    height: auto;
  }


  figure figcaption {
    flex-grow: 1;
  }

  h3 {
    margin: 0 0 5px;
    font-size: 16px;
  }

  p.beschrijving {
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
    width: 220px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  p.time {
    margin-top: 10px;
    margin-right: 70px;
    font-size: 16px;
  }

  .iconen-onder {
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
  }

  .rechts-onder {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 2px;
  }

  img.links-onder {
    margin-left: 15px;
    width: 24px;
  }

  img.download-icon {
    width: 28px;
  }

  img.add-icon {
    width: 20px;
  }


/* Hide radio buttons */
input[type="radio"] {
    display: none;
}

/* Styling for navigation dots */
.nav-dot {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 5px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
}

input#slide1:checked ~ .carousel ul {
    transform: translateX(0);
}

input#slide2:checked ~ .carousel ul {
    transform: translateX(-100%);
}

input#slide3:checked ~ .carousel ul {
    transform: translateX(-200%);
}

/* Active navigation dot styling */
input#slide1:checked ~ .carousel-nav label[for="slide1"],
input#slide2:checked ~ .carousel-nav label[for="slide2"],
input#slide3:checked ~ .carousel-nav label[for="slide3"] {
    background-color: #007BFF;
}

/* Smooth transition for carousel slides */
.carousel ul {
    transition: 0.6s ease-in-out;
}

/* De wrapper voor de knoppen en de navigatiedots */
.carousel-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
}

/* Styling voor de knoppen */
.carousel-button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

.carousel-button:hover {
    background-color: #0056b3;
}

/* De navigatiedots */
.carousel-nav {
    display: flex;
    justify-content: center;
    gap: 10px; /* Ruimte tussen de dots */
}

.nav-dot {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
}

.nav-dot:hover {
    background-color: #666;
}


  /* ---- */

  .carousel-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  /* input[type="radio"] {
    display: none;
  } */

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



  /* .iconen-onder {
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
  }

  .rechts-onder {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 2px;
  }

  img.links-onder {
    margin-left: 15px;
    width: 24px;
  }

  img.download-icon {
    width: 28px;
  }

  img.add-icon {
    width: 20px;
  } */
  


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

  #prev {
    background-color: var(--carousel-btn);
    opacity: 50%;
  }

  #next {
    background-color: var(--carousel-btn);
  }

  /* .carousel-controls {
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
  }   */


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

  img.heart-icon {
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
