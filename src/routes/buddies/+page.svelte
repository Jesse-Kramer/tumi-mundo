<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <section>

  </section>
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

  </section>
</main>

<style>
  main {
    height: 100dvh; /* for dynamic viewport height */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel {
    max-width: 430px;
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
    padding: 1em;
    text-align: center;
    scroll-snap-align: center;
  }

  .carousel ul li img { 
    height:18.5em;
    width:auto;
  }
</style>
