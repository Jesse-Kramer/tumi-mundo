<script>
console.log(userId, profileId);
import Input from '../../components/forms/input.svelte';

</script>

<main>
    <section>
        <h1>Tumi Mundo</h1>
        <p>Your language learning app</p>

        <div class="buttons">
            <label class="popup-button" for="login-popup">Login</label>
            <a href="/onboarding" class="sign-up">New to Tumi Mundo? Sign up!</a>
            <a href="/log-in">I don't remember my password/username</a>
        </div>
    </section>

    <div class="popup-container">
        <input type="checkbox" id="login-popup">
        <div class="popup">
            <label for="login-popup" class="transparent-label"></label>
            <div class="popup-inner">
                <div class="popup-title">
                    <h2>Log in</h2>
                    <div class="close-div">
                        <img src="/icons/menu-close.svg" height="16px" width="15px" alt="close button">
                        <label for="login-popup" class="popup-close-btn">Close</label>
                    </div>
                </div>
                <div class="popup-content">
                    <form action="/profile-selection">
                        <ul>
                            <li><Input type="email"/></li>
                            <li><Input type="password"/></li>
                            <li><button type="submit" class="login-popup">Log in</button></li>
                            <li><a href="/">I don't remember my password/username</a></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>


<style>

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
}
section{
    padding: 0 2rem;
}
main, section, .buttons {
    display: flex;
    flex-direction: column;
}

section, .buttons {
    align-items: center;
}

main {
    background-image: url(/log-in-bg.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    height: 100dvh; /* for dynamic viewport height */
    width: 100%;
    color: white;
    font-family: Poppins, sans-serif;
}

section {
    flex-grow: 1;
    justify-content: start;
}

h1 {
    margin-top: 45%;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: .5rem;
}

p, button, label {
    font-size: 16px;
}

.buttons {
    margin-top: auto;
    gap: 10px;
    margin-bottom: 60px;
    width: 100%;
}

button, .popup-button, .login-popup, .sign-up{
    text-decoration: none;
    border: 1px solid white;
    border-radius: 10px;
    padding: .8rem;
    width: 100%;
    background-color: #378DB3;
    color: white;
    text-align: center;
    cursor: pointer;
    margin: auto;
    display: block;
}

button, .sign-up{
    text-decoration: none;
    background-color: #F0F0F0;
    color: #535353;
    padding: .8rem 1rem;
}

button:hover, .popup-button:hover {
    background-color: #2a6d91;
}
a{
    color: #378EB4;
    text-decoration: underline;
    width: 100%;
    text-align: center;
}
/* styling for popup heading */
.popup-title {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    position: relative; 
}

.popup-title h2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
}

.close-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-left: auto;
}

.close-div img {
    cursor: pointer;
    margin-right: -10px;
}

.close-div label {
    cursor: pointer;
    font-size: 14px; 
    color: #333; 
    margin-right: -10px;
}

h2{
    margin: auto;
}

h2, label{
    color: black;
}
input{
    padding: 1rem;
    background-color: #EEEEEE;
    border: none;
    border-radius: 30px;
    margin-bottom: 20px ;
    font-size: 16px;
    height: 3rem;
}
label{
    margin-bottom: 10px;
}

/* Styling for popup */
.popup-container {
    display: inline-block;
}

.popup-container .popup {
    position: fixed;
    top: 15%;
    top: 0;
    width: 100%;
    height: 150%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: 250ms all;
}

.popup-container .popup .popup-inner {
    height: 500px;
    width: 400px;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 20px;
    background: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 150%;
    transition: 250ms all;
}

.popup-container .popup .popup-inner .popup-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.popup-title{
    justify-content: space-between;
}
.popup-container .popup .popup-inner .popup-title .popup-close-btn {
    cursor: pointer;
    display: block;
    line-height: 30px;
    padding: 0 15px;
    font-size: 14px;
    color: #222;
    border-radius: 3px;
}

.popup-container .popup .popup-inner .popup-content ul li {
    margin-bottom: 10px;
}

.popup-container .popup .popup-inner .popup-content ul li:last-child {
    margin-bottom: 0;
}

.popup-container .popup .popup-inner .popup-content ul li input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    line-height: 34px;
    padding: 0 15px;
    font-size: 14px;
    box-sizing: border-box;
}

.popup-container .popup .transparent-label {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    cursor: pointer;
}

.popup-container > input {
    display: none;
}

.popup-container > input:checked + .popup {
    opacity: 1;
    visibility: visible;
}

.popup-container > input:checked + .popup .popup-inner {
    top: 50%;
}
</style>