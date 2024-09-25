<script>
    export let csr = false;
</script>

<main>
<body>

<section>
    <a href="skip">Skip</a>
    <img>
        <h1>Learn languages</h1>
            <p>Every household is different. Some only speak one language, other even as much as three!
                Learning more than one language has great neurological benefits for anyone at any age. With TuMi Mundo your child can learn up to 3 languages.
            </p>
    <a href="continue">Continue</a>
</section>

</body>
</main>





<style>
*{
    color: white;
    font-family: sans-serif;
    text-decoration: none;

    --main-blue: #599AE7;
    --secondary-blue: #4A82C3;
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
a:nth-of-type(1){
    margin-left: auto;
    color: white;
}
a:nth-of-type(2){
    margin: auto;
    border-radius: 5px;
    width: 90%;
    background-color: var(--secondary-blue);
    padding: 10px;
    text-align: center;
    
}

</style>