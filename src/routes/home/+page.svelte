<script>
    import Menu from '../../components/menu.svelte';
</script>

<section>
    <article>
        <img src="/progress.svg" alt="Progress bar">
        <div class="progress-text">
            <p>Today's listening</p>
            <h1>00:00</h1>
            <p>Of your 5-minute goal</p>
        </div>
    </article>
    <article>
        <img src="/characters/rat.svg" alt="Rat character"/>
    </article>
    <Menu/>
</section>

<style>
section {
    background: url('/home-background.png'), linear-gradient(to bottom, #3F93B7, #1C5872);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
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