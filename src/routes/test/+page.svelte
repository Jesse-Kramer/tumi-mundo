<script>
    import Menu from '../../components/core/menu.svelte';
    import Menu2 from '../../components/core/menu2.svelte';

    let currentPage = "home";
    let isActive = false;

    function toggleActiveState() {
        isActive = !isActive;
    }
</script>

<section>
    <Menu2 {currentPage} />
    <article>
        <div class="progress-text">
            <!-- Progress-tekst kan hier -->
        </div>
    </article>
    <article>
        <img src="/characters/rat.svg" alt="Rat character" class="rat" class:active={isActive}/>
    </article>
</section>

<button on:click={toggleActiveState}>
    Click me
</button>

<!-- Het div-element waar de class 'active' wordt toegevoegd -->
<!-- <div class:active={isActive}></div> -->

<style>

@view-transition {
	navigation: auto;
}

.rat{
    max-width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rat.active{
    scale: 3;
}
/* Basis div */
div {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    opacity: 0;
    /* transition: opacity 0.3s ease-in-out; */
}

/* Actieve toestand */
div.active {
    background-color: black;
    opacity: 0.9;
}

/* Knopstijl */
button {
    z-index: 1;
    top: 75%;
    right: 10%;
    position: absolute;
    height: 3rem;
    width: 3rem;
}

/* Sectie en artikelen */
section {
    background: url('/home-background.png'), linear-gradient(to bottom, #3F93B7, #1C5872);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    height: 100dvh; /* Voor dynamische viewport hoogte */
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

article:first-of-type {
    grid-area: 1 / 1 / 2 / 2;
    flex-direction: column;
    position: relative;
}

article:nth-of-type(2) {
    grid-area: 3 / 1 / 4 / 2;
}

article {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

article:first-of-type img {
    max-width: 290px;
}

.progress-text {
    position: absolute;
    text-align: center;
    transform: translateY(20%);
}

article:first-of-type h1 {
    font-size: 36px;
    font-weight: 400;
}

article:first-of-type p:nth-of-type(2) {
    font-size: 10px;
}

</style>

