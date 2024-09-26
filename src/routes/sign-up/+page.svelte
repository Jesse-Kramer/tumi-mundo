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



    <article>
        <div>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>

            <p>Agree to the terms of services and the privacy policy <a href="/" class="click-here">(click here for more information)</a></p>
        </div>
   
        <div>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>

            <p>Agree to share data with research universities and participate in research <a href="/" class="click-here">(click here for more information)</a> </p>
        </div>

    </article>

    <a href="/" class="sign-upbtn">Sign up!</a>
</section>


</body>
</main>

<style>
*{
    padding: 0;
    margin: 0;
}
section{
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
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
label{
    font-size: 13px;
}
p{
    font-size: 8px;
    max-width: 40ch;
}

input{
    width: 90%;
    padding: 10px;
    background-color: lightgrey;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px ;
    font-size: 10px;
}
label{
    margin-bottom: 10px;
}
div{
    display: flex;
    flex-direction: row;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 10px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 2px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}
.sign-upbtn{
    margin: auto;
    margin-bottom: 0;
    border-radius: 5px;
    width: 90%;
    background-color: #3D7A95;
    padding: 5px;
    text-align: center;
    font-size: 10px;
    color: white;
    text-decoration: none;   
}
.click-here{
    color: #3D7A95;
}
</style>
