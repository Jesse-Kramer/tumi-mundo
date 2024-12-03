<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const sky = document.querySelector('.sky');

        // Generate 20-30 stars
        const starCount = Math.floor(Math.random() * 10) + 20; // Between 20 and 30
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('span');

            // Inline styles for each star
            star.style.position = 'absolute';
            star.style.width = '3px';
            star.style.height = '3px';
            star.style.background = 'white';
            star.style.borderRadius = '50%';

            // Random opacity, position, and size
            star.style.opacity = 0.5 + Math.random() * 0.5; // Between 0.5 and 1
            star.style.top = `${Math.random() * 15}%`; // Random top within 30% of the height
            star.style.left = `${Math.random() * 100}%`; // Random left across 100% of the width

            // Optional: Twinkle effect using animation
            star.style.animation = 'twinkle 3s infinite ease-in-out';

            sky.appendChild(star);
        }
    });
</script>

<main>
    <div class="sky"></div>
    <img src="/moon.svg" alt="">
    <img src="/sun.svg" alt="">
    <img src="/cloud1.svg" alt="">
    <img src="/cloud2.svg" alt="">
    <img src="/cloud3.svg" alt="">
    <img src="/cloud4.svg" alt="">
    <img src="/clouds-float.svg" alt="">
</main>

<style>
main {
    overflow: hidden;
    height: 400vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(20,33,81,1) 0%, rgba(71,24,113,1) 33%, rgba(255,153,0,1) 47%, rgba(255,226,192,1) 62%, rgba(147,196,214,1) 70%, rgba(26,162,239,1) 82%, rgba(193,202,253,1) 100%);    background-blend-mode: screen;
    position: relative;
}

.sky {
    width: 100%;
    height: 100%
}

main img:nth-of-type(1) {
    position: absolute;
    top: 5%;
    right: 10%
}

main img:nth-of-type(2) {
    position: absolute;
    bottom: 17.5%;
    width: 40%;
    left: 5%;
}

main img:nth-of-type(3) {
    position: absolute;
    bottom: 50%;
    width: 50%;
    left: 1%;
}

main img:nth-of-type(4) {
    position: absolute;
    bottom: 45%;
    width: 30%;
    right: 1%;
}


main img:nth-of-type(5) {
    position: absolute;
    bottom: 42.5%;
    width: 50%;
    right: 1%;
}

main img:nth-of-type(6) {
    position: absolute;
    bottom: 40%;
    width: 50%;
    left: 1%;
}


main img:nth-of-type(7) {
    position: absolute;
    bottom: 30%;
    width: 150%;
}



/* Twinkle effect */
@keyframes twinkle {
    0%, 100% {
        opacity: 0.8;
    }
    50% {
        opacity: 1;
    }
}
</style>
