<script>
    export let currentPage;

    console.log(currentPage)
</script>

<header>
    <nav>
        <ul>
            <li class:active={currentPage === 'home'}>
                <a href="/">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.7595C5 11.4018 5 10.7229 5.27446 10.1262C5.54892 9.52943 6.06437 9.08763 7.09525 8.20401L8.09525 7.34687C9.95857 5.74974 10.8902 4.95117 12 4.95117C13.1098 4.95117 14.0414 5.74974 15.9047 7.34687L16.9047 8.20401C17.9356 9.08763 18.4511 9.52943 18.7255 10.1262C19 10.7229 19 11.4018 19 12.7595V16.9999C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 20.9999 16.8856 20.9999 15 20.9999H9C7.11438 20.9999 6.17157 20.9999 5.58579 20.4142C5 19.8284 5 18.8856 5 16.9999V12.7595Z" stroke="white" stroke-width="2"/>
                        <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                      
                    <p>Home</p>
                </a>
            </li>
            <li class:active={currentPage === 'testing'}>
                <a href="/testing">
                    <svg class="fill" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30672 16.3821C5.6451 16.899 6.04387 17.3775 6.49676 17.8067C7.61895 18.8703 9.02532 19.586 10.5457 19.8671C12.0661 20.1482 13.6354 19.9826 15.0637 19.3905C16.492 18.7984 17.7181 17.8051 18.5937 16.5308C19.4693 15.2564 19.9568 13.7557 19.9973 12.21C20.0378 10.6644 19.6296 9.14014 18.822 7.82167C18.0143 6.5032 16.842 5.44701 15.4466 4.78089C14.5023 4.33008 13.4833 4.07101 12.448 4.01294L13.0032 6.08484C13.5483 6.17728 14.0809 6.34509 14.585 6.58577C15.6315 7.08536 16.5108 7.8775 17.1165 8.86635C17.7222 9.8552 18.0284 10.9984 17.998 12.1576C17.9676 13.3168 17.602 14.4424 16.9453 15.3982C16.2886 16.3539 15.369 17.0989 14.2978 17.543C13.2266 17.9871 12.0496 18.1112 10.9093 17.9004C9.76901 17.6896 8.71423 17.1529 7.87259 16.3551C7.69685 16.1886 7.53198 16.0121 7.37862 15.8269L5.30672 16.3821Z" fill="white"/>
                        <path d="M5.91239 4.06647C6.68924 3.47037 7.54796 2.99272 8.46042 2.64739C8.87978 2.48868 9.08946 2.40932 9.28694 2.51053C9.48442 2.61174 9.54649 2.84338 9.67063 3.30667L11.7412 11.0341C11.8632 11.4894 11.9242 11.7171 11.8206 11.8964C11.7171 12.0758 11.4894 12.1368 11.0341 12.2588L3.30667 14.3294C2.84338 14.4535 2.61174 14.5156 2.42535 14.3952C2.23896 14.2747 2.20284 14.0535 2.13061 13.6109C1.97344 12.6481 1.95774 11.6656 2.08555 10.6947C2.25696 9.39275 2.68314 8.13728 3.33975 7C3.99636 5.86272 4.87054 4.8659 5.91239 4.06647Z" stroke="white" stroke-width="2"/>
                    </svg>                        
                    <p>Testing</p>
                </a>
            </li>
            <li class:active={currentPage === 'lessons'}>
                <a href="/lessons">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.5 12V17C20.5 18.8856 20.5 19.8284 19.9142 20.4142C19.3284 21 18.3856 21 16.5 21H7C5.61929 21 4.5 19.8807 4.5 18.5V18.5C4.5 17.1193 5.61929 16 7 16H16.5C18.3856 16 19.3284 16 19.9142 15.4142C20.5 14.8284 20.5 13.8856 20.5 12V7C20.5 5.11438 20.5 4.17157 19.9142 3.58579C19.3284 3 18.3856 3 16.5 3H8.5C6.61438 3 5.67157 3 5.08579 3.58579C4.5 4.17157 4.5 5.11438 4.5 7V18.5" stroke="white" stroke-width="2"/>
                        <path d="M9 8L15 8" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>                        
                    <p>Lessons</p>
                </a>
            </li>
            <li class:active={currentPage === 'statistics'}>
                <a href="/statistics">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L8 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 12V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 8V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" stroke-width="2"/>
                    </svg>                        
                    <p>Statistics</p>
                </a>
            </li>
            <li class:active={currentPage === 'profile'}>
                <a href="/profile">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7274 20.9471C19.2716 19.6713 18.2672 18.5439 16.8701 17.7399C15.4729 16.9358 13.7611 16.5 12 16.5C10.2389 16.5 8.52706 16.9358 7.12991 17.7399C5.73276 18.5439 4.72839 19.6713 4.27259 20.9471" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="12" cy="8.5" r="4" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>                        
                    <p>Profile</p>
                </a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        height: 4em;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        background-color: #292929;
        color: #fff;
    }

    nav, ul {
        height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        display: flex;
        justify-content: space-around;
        width: 100%
    }

    li, li a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .active a svg path, .active a svg rect, .active a svg circle, .active a p {
        stroke: #599AE7;
        color: #599AE7;
    }

    .active a svg.fill path {
        fill: #599AE7;
    }

    .active a {
        border-bottom: 3px solid #599AE7;
    }

</style>