<script>
  let currentSlide = 0;
  const totalSlides = 3;

  function goToSlide(slideIndex) {
    if (slideIndex >= totalSlides) {
      currentSlide = 0;
    } else if (slideIndex < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = slideIndex;
    }

    const carousel = document.querySelector(".carousel");
    const slideWidth = carousel.clientWidth;
    carousel.scrollTo({
      left: currentSlide * slideWidth,
      behavior: "smooth",
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }
</script>

<div class="container">
  <div class="carousel-container">
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
                  Long ago there was a family of dinosaurs that lived in a
                  deserted place. The little dinosaur is making a new friend.
                </p>
              </figcaption>
            </figure>
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
          </li>

          <li>
            <figure>
              <img src="/Frame 104.svg" class="schildpad" alt="pinguin" />
              <figcaption>
                <h3>Six o’clock</h3>
                <p class="beschrijving">
                  A group of friends try to take over the playground. Jesper and
                  Wylan want to take over the swings, but one person stands in
                  their way.
                </p>
              </figcaption>
            </figure>
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
          </li>

          <li>
            <figure>
              <img src="/Frame 105.svg" class="schildpad" alt="schilpad" />
              <figcaption>
                <h3>Toys on the Orient Express</h3>
                <p class="beschrijving">
                  A child looses his toy during a train ride. He is determined
                  to find it back.
                </p>
              </figcaption>
            </figure>
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
                  A child looses his toy during a train ride. He is determined
                  to find it back.
                </p>
              </figcaption>
            </figure>
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
          </li>

          <li>
            <figure>
              <img src="/Frame 104.svg" class="schildpad" alt="pinguin" />
              <figcaption>
                <h3>Six o’clock</h3>
                <p class="beschrijving">
                  A group of friends try to take over the playground. Jesper and
                  Wylan want to take over the swings, but one person stands in
                  their way.
                </p>
              </figcaption>
            </figure>
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
          </li>

          <li>
            <figure>
              <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
              <figcaption>
                <h3>The dinosaur family</h3>
                <p class="beschrijving">
                  Long ago there was a family of dinosaurs that lived in a
                  deserted place. The little dinosaur is making a new friend.
                </p>
              </figcaption>
            </figure>
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
          </li>
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
                  Long ago there was a family of dinosaurs that lived in a
                  deserted place. The little dinosaur is making a new friend.
                </p>
              </figcaption>
            </figure>
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
          </li>

          <li>
            <figure>
              <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
              <figcaption>
                <h3>The dinosaur family</h3>
                <p class="beschrijving">
                  Long ago there was a family of dinosaurs that lived in a
                  deserted place. The little dinosaur is making a new friend.
                </p>
              </figcaption>
            </figure>
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
          </li>

          <li>
            <figure>
              <img src="/Frame 103.svg" class="schildpad" alt="schilpad" />
              <figcaption>
                <h3>The dinosaur family</h3>
                <p class="beschrijving">
                  Long ago there was a family of dinosaurs that lived in a
                  deserted place. The little dinosaur is making a new friend.
                </p>
              </figcaption>
            </figure>
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
          </li>
        </ul>
      </li>
    </ul>

    <div class="carousel-button">
      <button on:click={prevSlide} aria-label="Vorige slide">
        <img src="/left.svg" class="button-carousel" alt="Volgende slide" />
      </button>

      <div class="radio-buttons">
        <input
          type="radio"
          name="carousel"
          id="slide1"
          value="0"
          checked
          on:click={() => goToSlide(0)}
        />
        <label for="slide1"></label>

        <input
          type="radio"
          name="carousel"
          id="slide2"
          value="1"
          on:click={() => goToSlide(1)}
        />
        <label for="slide2"></label>

        <input
          type="radio"
          name="carousel"
          id="slide3"
          value="2"
          on:click={() => goToSlide(2)}
        />
        <label for="slide3"></label>
      </div>

      <button on:click={nextSlide} aria-label="Volgende slide">
        <img src="/right.svg" class="button-carousel" alt="Volgende slide" />
      </button>
    </div>
  </div>
</div>

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
    --label-btn: #ccc;
    --heading-font-color: white;
    --icon-btn-color: white;
  }

  p {
    font-size: var(--card-time-font-size);
    line-height: 12px;
    text-align: left;
  }

  .container {
    width: 100%;
    overflow-y: hidden;
    /* max-width: 1200px; */
    /* height: 100%; */
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    width: 100%;
    transition: 0.3s ease-in;
  }

  .carousel ul {
    display: flex;
    border-radius: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
  }

  .slide {
    display: flex;
    flex: 100%;
    scroll-snap-align: start;
    /* min-width: 100%; */
  }

  .slide-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;
    position: relative;
  }

  .slide-content li {
    margin: 2px;
    margin-left: 10px;
    flex: 1;
    background-color: var(--card-bg-color);
    border-radius: 8px;
    position: relative;
  }

  .vlag-icon {
    position: absolute;
    right: 11px;
    top: 10px;
  }

  figure {
    display: flex;
    align-items: center;
    text-align: left;
    margin-left: 20px;
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }

  figure img {
    max-width: 150px;
    margin-right: 20px;
    height: auto;
  }

  figure figcaption {
    flex-grow: 1;
    margin-bottom: 25px;
  }

  h3 {
    margin: 0 0 5px;
    font-size: 12px;
  }

  p.beschrijving {
    margin: 0;
    font-size: 10px;
    line-height: 1.5;
    width: 220px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  p.time {
    margin-right: 95px;
    margin-top: 5px;
  }

  .iconen-onder {
    position: absolute;
    top: 60px;
    left: 0;
    right: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .rechts-onder {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  img.links-onder {
    margin-left: 80px;
  }

  .carousel-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-right: 30px;
    /* margin-top: 40px; */
  }

  .radio-buttons input[type="radio"] {
    display: none;
  }

  .radio-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  .radio-buttons label {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--label-btn);
    cursor: pointer;
    text-align: center;
  }

  .radio-buttons input[type="radio"]:checked + label {
    background-color: var(--carousel-btn);
    opacity: 50%;
  }

  button {
    padding: 2px 7px;
    margin-top: 10px;
    background-color: var(--carousel-btn);
    color: var(--icon-btn-color);
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: var(--carousel-btn);
    opacity: 50%;
  }

  .carousel-container {
    display: flex;
    flex-direction: column;
    overflow: hidden;
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

  .button-carousel {
    margin: 0;
  }
</style>
