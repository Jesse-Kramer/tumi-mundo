<title>onboarding-3</title>
<section>
    <a href="skip">Skip</a>
    <div class="mouse">
        <picture class="eclipse">
            <source srcset="/characters/Ellipse131-3.svg?format=avif" type="image/avif">
            <source srcset="/characters/Ellipse131-3.svg?format=webp">
            <img src="h/characters/Ellipse131-3.svg" alt="eclipse" loading="lazy" width="250px">
        </picture>
        <picture class="rat">
            <source srcset="/characters/mouse.svg?format=avif" type="image/avif">
            <source srcset="/characters/mouse.svg?format=webp">
            <img src="/characters/mouse.svg" alt="rat image" height="250px">
        </picture>
    </div>
   
    <h1>See the results</h1>
        <p>
            See the results of the tests and watch as your child learns a language with TuMi Mundo.
            The older your child becomes the further into the method you go, it starts with listening, it ends with being able to have a full conversation.
        </p>
    <a href="/sign-up-1">Make an account</a>
</section>

<style>
*{
    color: white;
    font-family: sans-serif;
    text-decoration: none;

    --main-blue: #069E8F;
    --secondary-blue: #04786C;
}
html,main,body{
    margin: 0;
    padding: 0;
}
section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: var(--main-blue);
    margin: -8px;
}
.mouse {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center; 
    align-items: center;   
    position: relative; 
}
picture {
    position: relative; 
}
.rat {
    position: absolute;
    top: 0; 
    left: 0; 
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    max-width: 100%;
    height: auto;
}
h1, p {
    text-align: center;
}
h1 {
    font-size: 20px;
    margin-bottom: 1em;
}
p {
    font-size: 14px;
    max-width: 45ch;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
}
a:nth-of-type(1) {
    margin-left: auto;
    color: white;
    font-size: 20px;
    padding: 1em;
}
a:nth-of-type(2) {
    margin: auto;
    margin-bottom: 40px;
    border-radius: 10px;
    width: 80%;
    background-color: var(--secondary-blue);
    padding: 15px;
    text-align: center;
    font-size: 16px;
}
</style>