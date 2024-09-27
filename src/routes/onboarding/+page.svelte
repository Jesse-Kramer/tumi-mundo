<main>
<body>

<section>
    <a href="skip">Skip</a>
    <div class="mouse">
        <img src="/characters/Ellipse131.svg" alt="rat image">
        <img src="/characters/mouse.svg" alt="rat image">
    </div>
   
        <h1>Learn languages</h1>
            <p>
                Every household is different. Some only speak one language, other even as much as three!
                Learning more than one language has great neurological benefits for anyone at any age. With TuMi Mundo your child can learn up to 3 languages.
            </p>
    <a href="/onboarding/2">Continue</a>
</section>

</body>
</main>

<style>
.mouse{
    height: 300px;
}
img{
    height: auto;
    width: 200px ;
    position: absolute;
}
*{
    color: white;
    font-family: sans-serif;
    text-decoration: none;

    --main-blue: #599AE7;
    --secondary-blue: #4A82C3;
    --story-title: 12px;
    --story-p: 8px;
    --SemiBold-h1: 28px;
    --SemiBold-h2: 20px;
    --Regular-h3: 12px;
}
body{
    background-color: var(--main-blue);
    height: 100%;
}
section{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
img{
    height: 300px;
    margin-top: 20px;
}
h1, p{
    text-align: center;
}
h1{
    font-size: var(--Regular-h3);
}
p{
    font-size: var(--story-p);
}
a:nth-of-type(1){
    margin-left: auto;
    color: white;
    font-size: var(--Regular-h3);
}
a:nth-of-type(2){
    margin: auto;
    margin-bottom: 0;
    border-radius: 5px;
    width: 90%;
    background-color: var(--secondary-blue);
    padding: 10px;
    text-align: center;
    font-size: var(--Regular-h3);
    
}

</style>