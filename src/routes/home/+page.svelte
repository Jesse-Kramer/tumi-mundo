<script>
    import Menu from '../../components/core/menu.svelte';

    import Menu2 from '../../components/core/menu2.svelte';

    import Popup from '../../components/layout/popup.svelte';

    let currentPage = "home";
</script>

<section>
    <Menu2 {currentPage}/>
    <article>
        <img src="/progress.svg" alt="Progress bar">
        <div class="progress-text">
            <p>Today's listening</p>
            <h1>00:00</h1>
            <p>Of your 5-minute goal</p>
        </div>
    </article>

    <article>
        <Popup/>  
        <img src="/characters/Rat.svg" alt="Rat character"/>
    </article>
</section>

<style>

section {
    background: url('/home-background.png'), linear-gradient(to bottom, #3F93B7, #1C5872);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
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
    /* grid-area: 3 / 1 / 4 / 2;  */
    display: flex;
    flex-direction: column;
}

article {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

article:first-of-type img {
    width: 30vh;
}

.progress-text {
    position: absolute;
    text-align: center;
    transform: translateY(20%);
}

article:first-of-type h1{
    font-size: 36px;
    font-weight: 400;
}

article:first-of-type p:nth-of-type(2){
    font-size: 10px;
} 

article img {
    max-width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>