<script>

  import { onMount } from 'svelte';

  let currentSlide = 0;

  onMount(() => {
    const carousel = document.querySelector('.carousel');
    const indicators = document.querySelectorAll('.indicator');

    const buttons = document.querySelectorAll('.carousel-button');
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const direction = this.classList.contains('left') ? -1 : 1;
        scrollCarousel(carousel, direction);
      });
    });

    function scrollCarousel(carousel, direction) {
      const scrollAmount = carousel.clientWidth;
      carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth',
      });

      // Update the current slide index
      currentSlide = (currentSlide + direction + indicators.length) % indicators.length;
    }


    // Maak indicators clickable
    indicators.forEach(indicator => {
      indicator.addEventListener('click', function () {
        const targetSlide = Number(this.dataset.slide);
        const difference = targetSlide - currentSlide;

        scrollCarousel(carousel, difference);
        currentSlide = targetSlide;
      });
    });
  });
</script>
  
 
 <!-- carousel 1: shirts -->
  <div class="carousel-container">
    <!-- <button type="button" class="carousel-button left" aria-label="left-button">o</button> -->
        <section>
            <ul class="carousel">
              <li>
                  <section>
                    <a href="/sign-up">Skip</a>
                    <div class="Mouse">
                        <picture class="eclipse">
                            <source srcset="/characters/Ellipse131.svg?format=avif" type="image/avif">
                            <source srcset="/characters/Ellipse131.svg?format=webp">
                            <img src="h/characters/Ellipse131.svg" alt="eclipse" loading="lazy" width="250">
                        </picture>
                        <picture class="Rat">
                            <source srcset="/characters/Mouse.svg?format=avif" type="image/avif">
                            <source srcset="/characters/Mouse.svg?format=webp">
                            <!-- svelte-ignore a11y-img-redundant-alt -->
                            <img src="/characters/Mouse.svg" alt="Rat image" height="250">
                        </picture>
                    </div>

                    <div class="carousel-indicators">
                      <span class="indicator active" data-slide="0"></span>
                      <span class="indicator" data-slide="1"></span>
                      <span class="indicator" data-slide="2"></span>
                    </div>
                  
                    <h1>Learn languages</h1>
                    <p>
                        Every household is different. Some only speak one language, others even as much as three!
                        Learning more than one language has great neurological benefits for anyone at any age. With TuMi Mundo your child can learn up to 3 languages.
                    </p>
                    <!-- <a href="/onboarding-2">Continue</a> -->
                    <button type="button" class="carousel-button right button-1" data-target=".carousel" aria-label="right-button">Continue</button>  
                </section>
              </li>

              <li>
                  <section class="slide-2">
                    <a href="/sign-up">Skip</a>
                      <div class="Mouse">
                          <picture class="eclipse">
                              <source srcset="/characters/Ellipse131-2.svg?format=avif" type="image/avif">
                              <source srcset="/characters/Ellipse131-2.svg?format=webp">
                              <img src="/characters/Ellipse131-2.svg" alt="eclipse" loading="lazy" width="250">
                          </picture>
                          <picture class="Rat">
                              <source srcset="/characters/Mouse.svg?format=avif" type="image/avif">
                              <source srcset="/characters/Mouse.svg?format=webp">
                              <!-- svelte-ignore a11y-img-redundant-alt -->
                              <img src="/characters/Mouse.svg" alt="Rat image" height="250">
                          </picture>
                      </div>

                      <div class="carousel-indicators">
                        <span class="indicator" data-slide="0"></span>
                        <span class="indicator active" data-slide="1"></span>
                        <span class="indicator" data-slide="2"></span>
                      </div>
                  
                        <h1>Test the progress</h1>
                            <p>
                                During the learning journal you can measure the improvement of your child.  
                                There is an option to share the data with researchers to further improve the method and participate in special researches! You can manage the option to share your data at any given time in the app.
                            </p>
                    <!-- <a href="/onboarding-3">Continue</a> -->
                    <button type="button" class="carousel-button right button-2" data-target=".carousel" aria-label="right-button">Continue</button>  
                </section>
              </li>

              <li>
                  <section class="slide-3">
                    <a href="/sign-up">Skip</a>
                    <div class="Mouse">
                        <picture class="eclipse">
                            <source srcset="/characters/Ellipse131-3.svg?format=avif" type="image/avif">
                            <source srcset="/characters/Ellipse131-3.svg?format=webp">
                            <img src="h/characters/Ellipse131-3.svg" alt="eclipse" loading="lazy" width="250">
                        </picture>
                        <picture class="Rat">
                            <source srcset="/characters/Mouse.svg?format=avif" type="image/avif">
                            <source srcset="/characters/Mouse.svg?format=webp">
                            <!-- svelte-ignore a11y-img-redundant-alt -->
                            <img src="/characters/Mouse.svg" alt="Rat image" height="250">
                        </picture>
                    </div>

                    <!-- Carousel Indicators -->
                    <div class="carousel-indicators">
                      <span class="indicator" data-slide="0"></span>
                      <span class="indicator" data-slide="1"></span>
                      <span class="indicator active" data-slide="2"></span>
                    </div>
                  
                    <h1>See the results</h1>
                        <p>
                            See the results of the tests and watch as your child learns a language with TuMi Mundo.
                            The older your child becomes the further into the method you go, it starts with listening, it ends with being able to have a full conversation.
                        </p>
                    <a href="/sign-up" class="make-acc">Make an account</a>
                </section>
              </li>
            </ul>
        </section>

  </div>


  <style>

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid lightgray;
  background-color: transparent;
  margin: 0 5px;
  cursor: pointer;
}

.indicator.active {
  background-color: white; /* Actieve indicator kleur */
}


/* STYLING VOOR DE PAGINA */

* {
    color: white;
    text-decoration: none;
    --main-blue: #599AE7;
    --secondary-blue: #4A82C3;
}
section:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
    width: 100vw;
}
.slide-2{
  background-color: #3F92B6;
}
.slide-3{
  background-color: #069E8F;
}
.Mouse {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center; 
    align-items: center;   
    position: relative; 
}
picture {
    position: relative; 
}
.Rat {
    position: absolute;
    top: 0; 
    left: 0; 
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    max-width: 100%;
    height: auto;
}
h1, p {
    text-align: center;
}
h1 {
    font-size: 20px;
    margin-bottom: 1em;
}
p {
    font-size: 14px;
    max-width: 45ch;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
}
a:nth-of-type(1) {
    margin-left: auto;
    color: white;
    font-size: 20px;
    padding: 1em;
}
button, a:nth-of-type(2) {
    margin: auto;
    margin-bottom: 40px;
    border-radius: 10px;
    width: 80%;
    /* background-color: var(--secondary-blue); */
    padding: 15px;
    text-align: center;
    font-size: 16px;
    border: none;
}
/*  */
.button-1 {
    background-color: #4A82C3; /* Eerste button */
}

.button-2 {
    background-color: #3D7A95; /* Tweede button */
}
.make-acc{
  background-color: #04786C;
}

.carousel{
  display: flex;
  scroll-snap-type: x mandatory;
  width: 100%;
  overflow: auto;
  align-self: center;
}
.carousel > li{
  scroll-behavior: smooth;
  scroll-snap-align: center;
  display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
    width: 100vw;
    background-color: var(--main-blue);
    
}

</style>