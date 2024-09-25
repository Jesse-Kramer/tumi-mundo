<script>
    export let csr = false;
</script>

<main>
<body>

<section>
    <div class="heading">
        <a>back</a>
        <h1>Sign up</h1> 
    </div>
   

    <form>
        <label for="fname">Name</label><br>
        <input type="text" id="fname" name="fname" placeholder="Your name"><br>
        <label for="lname">Email</label><br>
        <input type="text" id="lname" name="lname" placeholder="Your email">
        <label for="password">Password</label><br>
        <input type="text" id="password" name="password" placeholder="Password (atleast 8 characters)">
      </form>
</section>


</body>
</main>

<style>

.heading{
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    margin-bottom: 20px;
}
.heading > h1{
    margin: auto;
}

input{
    width: 100%;
    padding: 10px;
    background-color: lightgrey;
    border: none;
    border-radius: 5px;
}


</style>

