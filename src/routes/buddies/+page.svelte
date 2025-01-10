<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <section class="carousel">
    <ul>
      {#each data.buddies as buddy}
      <li>
        <img src="../characters/{buddy.animal}.svg" alt="">
        <h3>{ buddy.name }</h3>
        <p>The { buddy.animal }</p>
      </li>
      {/each}
    </ul>
  </section>
  <section>
    <button>Kiezen</button>
  </section>
</main>

<style>
  main {
    background: linear-gradient(to bottom, #3A9ECA, #2B627A);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
    color: white;
    margin: auto;
  }

  .carousel {
    display: flex;
    align-items: center;
  }

  .carousel ul {
    display: flex;
    overflow: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scroll-snap-align: center;
    gap: 2em;
  }

  .carousel ul li {
    max-height: 25em;
    width: 100vw;
    padding: 1em;
    text-align: center;
    scroll-snap-align: center;
  }

  .carousel ul li img { 
    height:18.5em;
    width:90vw;
  }
</style>
