<script>
    export let currentPage;

</script>

<header>
    <nav>
        <ul>
            <li>
                <a href="/">
                    <img src="/icons/house-icon.svg" alt="">
                    <p>Home</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <img src="/icons/tests-icon.svg" alt="">
                    <p>Testing</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <img src="/icons/lessons-icon.svg" alt="">
                    <p>Lessons</p>
                </a>
            </li>
            <li>
                <a href="/">                
                    <img src="/icons/new-chart-icon.svg" alt="">
                    <p>Statistics</p>
                </a>
            </li>
            <li>
                <a href="/">
                    <img src="/icons/profile-icon.svg" alt="">
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

</style>