<title>sign-up</title>
<section>
    <div class="heading">
        <a>back</a>
        <h1>Sign up</h1> 
    </div>
   
    <form>
        <label for="fname">Name</label>
            <input type="text" id="fname" name="fname" placeholder="Your name" aria-label="name">
        <label for="lname">Email</label>
            <input type="text" id="lname" name="lname" placeholder="Your email" aria-label="email">
        <label for="password">Password</label>
            <input type="text" id="password" name="password" placeholder="Password (atleast 8 characters)" aria-label="password">

        <article>
            <div>
                <label class="switch">
                    <input type="checkbox" aria-label="toggle-button">
                    <span class="slider round"></span>
                </label>

                <p>Agree to the terms of services and the privacy policy <a href="/" class="click-here">(click here for more information)</a></p>
            </div>
    
            <div>
                <label class="switch">
                    <input type="checkbox" aria-label="toggle-button">
                    <span class="slider round"></span>
                </label>

                <p>Agree to share data with research universities and participate in research <a href="/" class="click-here">(click here for more information)</a></p>
            </div>
        </article>

        <input type="submit" value="Sign up!" class="sign-upbtn">
    </form>
</section>


<style>
*{
    padding: 0;
    margin: 0;
}
section, form{
    display: flex;
    flex-direction: column;
}
section {
    padding: 10px;
    min-height: 100vh;
}
form {
    flex-grow: 1;
}
.heading{
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    margin: 40px 0 40px 0;
}
.heading > h1{
    margin: auto;
}
label{
    font-size: 20px;
}
p{
    font-size: 16px;
    max-width: 40ch;
}

input{
    padding: 20px;
    background-color: #EEEEEE;
    border: none;
    border-radius: 10px;
    margin-bottom: 20px ;
    font-size: 16px;
}
label{
    margin-bottom: 10px;
}
div{
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}

/* Styling voor de toggle button */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-right: 10px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
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
.slider.round {
  border-radius: 17px;
}
.slider.round:before {
  border-radius: 50%;
}
.sign-upbtn{
    bottom: 0;
    border-radius: 5px;
    width: 100%;
    background-color: #3D7A95;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: white;
    text-decoration: none; 
    margin-top: auto;  
    margin-bottom: 30px;
}
.click-here{
    color: #599AE7;
}

</style>
