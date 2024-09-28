<title>onboarding-2</title>
<section>
    <a href="/sign-up-1">Skip</a>
    <div class="mouse">
        <picture class="eclipse">
            <source srcset="/characters/Ellipse131-2.svg?format=avif" type="image/avif">
            <source srcset="/characters/Ellipse131-2.svg?format=webp">
            <img src="h/characters/Ellipse131-2.svg" alt="eclipse" loading="lazy" width="250">
        </picture>
        <picture class="rat">
            <source srcset="/characters/mouse.svg?format=avif" type="image/avif">
            <source srcset="/characters/mouse.svg?format=webp">
            <img src="/characters/mouse.svg" alt="rat image" height="250">
        </picture>
    </div>
   
        <h1>Test the progress</h1>
            <p>
                During the learning journal you can measure the improvement of your child.  
                There is an option to share the data with researchers to further improve the method and participate in special researches! You can manage the option to share your data at any given time in the app.
            </p>
    <a href="/onboarding-3">Continue</a>
</section>


<style>

*{
    color: white;
    font-family: sans-serif;
    text-decoration: none;

    --main-blue: #3F92B6;
    --secondary-blue: #3D7A95;
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