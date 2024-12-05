<script>
    let AnimationProgress = false;

    function handleAnimation() {
        AnimationProgress = true;
    }

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
            star.style.zIndex = '1';

            // Random opacity, position, and size
            star.style.opacity = 0.5 + Math.random() * 0.5; // Between 0.5 and 1
            star.style.bottom = `${Math.random() * 35}%`; // Random top within 30% of the height
            star.style.left = `${Math.random() * 100}%`; // Random left across 100% of the width

            // Optional: Twinkle effect using animation
            star.style.animation = 'twinkle 3s infinite ease-in-out';

            sky.appendChild(star);
        }
    });
</script>

<main>
    <section>
        <ul>
            <li>
                <svg class:is-after={AnimationProgress} on:animationend={handleAnimation} width="200" height="200" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1_3613)">
                    <circle cx="14.3794" cy="14.3794" r="9.59147" transform="rotate(-35.5257 14.3794 14.3794)" fill="#F9CB54"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_1_3613" x="0.787109" y="0.787109" width="27.1844" height="27.1844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1_3613"/>
                    </filter>
                    </defs>
                </svg>                
            </li>
            <li>
                <svg width="390" height="210" viewBox="0 0 390 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_132)">
                    <path d="M174.659 112.85C174.659 144.106 90.7998 169.444 274.241 169.444C352.859 169.444 373.824 144.106 373.824 112.85C373.824 81.5932 329.239 56.2549 274.241 56.2549C219.243 56.2549 174.659 81.5932 174.659 112.85Z" fill="#645EB0"/>
                    <path d="M10 120.935C10 147.726 24.6806 169.445 102.977 169.445C176.38 169.445 195.954 147.726 195.954 120.935C195.954 94.1435 154.327 72.4249 102.977 72.4249C51.6273 72.4249 10 94.1435 10 120.935Z" fill="#645EB0"/>
                    <path d="M74.6797 96.6797C74.6797 132.401 90.6369 161.359 175.742 161.359C255.528 161.359 276.804 132.401 276.804 96.6797C276.804 60.9581 231.557 32 175.742 32C119.927 32 74.6797 60.9581 74.6797 96.6797Z" fill="#645EB0"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_132" x="-26" y="0" width="435.824" height="209.445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="18"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_132"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_132" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </li>
            <li>
                <svg width="359" height="239" viewBox="0 0 359 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_147)">
                    <path d="M202.278 134.056C202.278 169.923 276.5 199 114.139 199C44.5556 199 26 169.923 26 134.056C26 98.1877 65.4611 69.1111 114.139 69.1111C162.817 69.1111 202.278 98.1877 202.278 134.056Z" fill="#645EB0"/>
                    <path d="M322.889 134.056C322.889 169.923 308.972 199 234.75 199C165.167 199 146.611 169.923 146.611 134.056C146.611 98.1877 186.072 69.1111 234.75 69.1111C283.428 69.1111 322.889 98.1877 322.889 134.056Z" fill="#645EB0"/>
                    <path d="M257.944 96.9444C257.944 132.812 244.028 161.889 169.806 161.889C100.222 161.889 81.6667 132.812 81.6667 96.9444C81.6667 61.0766 121.128 32 169.806 32C218.483 32 257.944 61.0766 257.944 96.9444Z" fill="#645EB0"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_147" x="-10" y="0" width="368.889" height="239" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="18"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_147"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_147" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </li>
            <li>
                <svg width="390" height="210" viewBox="0 0 390 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_137)">
                    <path d="M183.008 112.85C183.008 144.106 108.138 169.444 271.916 169.444C342.106 169.444 360.824 144.106 360.824 112.85C360.824 81.5932 321.018 56.2549 271.916 56.2549C222.813 56.2549 183.008 81.5932 183.008 112.85Z" fill="#645EB0"/>
                    <path d="M36 120.935C36 147.726 49.1069 169.444 119.01 169.444C184.545 169.444 202.021 147.726 202.021 120.935C202.021 94.1434 164.856 72.4248 119.01 72.4248C73.165 72.4248 36 94.1434 36 120.935Z" fill="#645EB0"/>
                    <path d="M93.7464 96.6797C93.7464 132.401 107.993 161.359 183.975 161.359C255.208 161.359 274.204 132.401 274.204 96.6797C274.204 60.9581 233.807 32 183.975 32C134.143 32 93.7464 60.9581 93.7464 96.6797Z" fill="#645EB0"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_137" x="0" y="0" width="396.824" height="209.444" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="18"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_137"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_137" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </li>




            <li>
                <svg width="100" height="100" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30.9593" cy="30.9594" r="22.1943" transform="rotate(-35.5257 30.9593 30.9594)" fill="#1D224D"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6761 10.7953C14.4509 18.3473 13.374 30.2013 19.67 39.0197C25.966 47.8379 37.5273 50.6686 47.0162 46.2873C46.0677 47.2786 45.0133 48.1958 43.8558 49.0223C33.8799 56.1448 20.0189 53.8317 12.8964 43.8558C5.77392 33.8799 8.08705 20.0189 18.0629 12.8964C19.2205 12.0699 20.4305 11.3705 21.6761 10.7953Z" fill="#FFFCFF"/>
                </svg>                
            </li>
            <li>
                <svg width="369" height="239" viewBox="0 0 369 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_142)">
                    <path d="M212.278 134.056C212.278 169.923 286.5 199 124.139 199C54.5556 199 36 169.923 36 134.056C36 98.1877 75.4611 69.1111 124.139 69.1111C172.817 69.1111 212.278 98.1877 212.278 134.056Z" fill="#645EB0"/>
                    <path d="M332.889 134.056C332.889 169.923 318.972 199 244.75 199C175.167 199 156.611 169.923 156.611 134.056C156.611 98.1877 196.072 69.1111 244.75 69.1111C293.428 69.1111 332.889 98.1877 332.889 134.056Z" fill="#645EB0"/>
                    <path d="M267.944 96.9444C267.944 132.812 254.028 161.889 179.806 161.889C110.222 161.889 91.6667 132.812 91.6667 96.9444C91.6667 61.0766 131.128 32 179.806 32C228.483 32 267.944 61.0766 267.944 96.9444Z" fill="#645EB0"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_142" x="0" y="0" width="368.889" height="239" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="18"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_142"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_142" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </li>
            <li>
                <svg width="390" height="210" viewBox="0 0 390 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_132)">
                    <path d="M174.659 112.85C174.659 144.106 90.7998 169.444 274.241 169.444C352.859 169.444 373.824 144.106 373.824 112.85C373.824 81.5932 329.239 56.2549 274.241 56.2549C219.243 56.2549 174.659 81.5932 174.659 112.85Z" fill="#645EB0"/>
                    <path d="M10 120.935C10 147.726 24.6806 169.445 102.977 169.445C176.38 169.445 195.954 147.726 195.954 120.935C195.954 94.1435 154.327 72.4249 102.977 72.4249C51.6273 72.4249 10 94.1435 10 120.935Z" fill="#645EB0"/>
                    <path d="M74.6797 96.6797C74.6797 132.401 90.6369 161.359 175.742 161.359C255.528 161.359 276.804 132.401 276.804 96.6797C276.804 60.9581 231.557 32 175.742 32C119.927 32 74.6797 60.9581 74.6797 96.6797Z" fill="#645EB0"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_132" x="-26" y="0" width="435.824" height="209.445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="18"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_132"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_132" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </li>
            <li>
                <svg width="390" height="210" viewBox="0 0 390 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_137)">
                    <path d="M183.008 112.85C183.008 144.106 108.138 169.444 271.916 169.444C342.106 169.444 360.824 144.106 360.824 112.85C360.824 81.5932 321.018 56.2549 271.916 56.2549C222.813 56.2549 183.008 81.5932 183.008 112.85Z" fill="#645EB0"/>
                    <path d="M36 120.935C36 147.726 49.1069 169.444 119.01 169.444C184.545 169.444 202.021 147.726 202.021 120.935C202.021 94.1434 164.856 72.4248 119.01 72.4248C73.165 72.4248 36 94.1434 36 120.935Z" fill="#645EB0"/>
                    <path d="M93.7464 96.6797C93.7464 132.401 107.993 161.359 183.975 161.359C255.208 161.359 274.204 132.401 274.204 96.6797C274.204 60.9581 233.807 32 183.975 32C134.143 32 93.7464 60.9581 93.7464 96.6797Z" fill="#645EB0"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_1_137" x="0" y="0" width="396.824" height="209.444" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="18"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_137"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_137" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </li>
            <li>
                <div class="sky"></div>
            </li>
         </ul>
    </section>
</main>

<style>
main {
    height: 275vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(20,33,81,1) 0%, rgba(71,24,113,1) 33%, rgba(255,153,0,1) 47%, rgba(255,226,192,1) 62%, rgba(147,196,214,1) 70%, rgba(26,162,239,1) 82%, rgba(193,202,253,1) 100%);
    background-blend-mode: screen;
    position: relative;
}

.sky {
    width: 100%;
    height: 100%
}

section {
    height: 100%;
}

svg.is-after {
    display: none;
}

ul li:nth-of-type(1) svg {
    position: fixed;
    top: 15%;
    left: 5%;
}

ul li:nth-of-type(2) svg {
    position: absolute;
    top: 10%;
    left: 0;
}

ul li:nth-of-type(3) svg {
    position: absolute;
    top: 13%;
    right: 20%;
    width: 50%;
}

ul li:nth-of-type(4) svg {
    position: absolute;
    top: 11%;
    right: 0;
    width: 50%;
}

ul li:nth-of-type(5) svg {
    position: absolute;
    bottom: 25%;
    right: 10%;
    z-index: 2;
}

ul li:nth-of-type(6) svg {
    position: absolute;
    bottom: 20%;
    left: 1%;
    z-index: 2;
}

ul li:nth-of-type(7) svg {
    position: absolute;
    bottom: 17.5%;
    right: 1%;
    z-index: 2;
}

ul li:nth-of-type(8) svg {
    position: absolute;
    bottom: 20%;
    width: 50%;
    right: 1%;
    z-index: 2;
}

ul li:nth-of-type(2) svg path,
ul li:nth-of-type(3) svg path,
ul li:nth-of-type(4) svg path {
    fill: #fff
}

/* Scroll driven animations */
@supports (animation-timeline: auto) {
    @media (prefers-reduced-motion: no-preference) {
        ul li:nth-of-type(1) svg {
            animation: sunrise ease-out;
            animation-timeline: scroll(root);
            animation-range: 0 45%; 
        }

        ul li:nth-of-type(2) svg{
            animation: slide-in-right linear forwards;
            animation-timeline: view();
            animation-range: cover -10%;
        }

        ul li:nth-of-type(3) svg {
            animation: slide-in-left linear forwards;
            animation-timeline: view();
            animation-range: cover;
        }

        ul li:nth-of-type(4) svg{
            animation: slide-in-right linear forwards;
            animation-timeline: view();
            animation-range: contain;
        }

        ul li:nth-of-type(6) svg{
            animation: slide-in-right linear forwards;
            animation-timeline: view();
            animation-range: entry;
        }

        ul li:nth-of-type(7) svg {
            animation: slide-in-left linear forwards;
            animation-timeline: view();
            animation-range: entry;
        }

        ul li:nth-of-type(8) svg{
            animation: slide-in-right linear forwards;
            animation-timeline: view();
            animation-range: entry;
        }
    }
}

/* Animations */
@keyframes fade-in {
    from {
        opacity: 0;
    }
	to {
		opacity: 1;
	}
}

@keyframes appear {
    10%, 40% {scale: .3; opacity: 0;}
    100% {scale: 1; opacity: 1;}
}

@keyframes pop-up {
    0% {scale: .3;}
    30% {scale: .5;}
    60% {scale: 1.5;}
    100% {scale: 1;}
}

@keyframes slide-in-left {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slide-in-right {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes sunrise {
    25%{
      opacity: 85%;
    }
    50%{
      opacity: 90%;
    }
    75%{
      opacity: 95%;
    }
    100% {
      opacity: 100%;
    }
  }
</style>
