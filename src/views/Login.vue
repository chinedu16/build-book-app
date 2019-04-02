<template>
    <div class="container">
        <div class="split left">
            <carousel :per-page="1" :autoplay="true" :autoplayTimeout="2000" :loop="true">
                <slide style="margin-top: -10px;">
                    <img src="https://img.icons8.com/nolan/100/000000/book.png">
                    <h1>Read Books</h1>
                    <p>Create your account to get started. <br> 
                        After that, you can share books and make friends.</p>
                </slide>
                <slide style="margin-top: -10px;">
                    <img src="https://img.icons8.com/nolan/100/000000/star.png">
                    <h1>Review Them</h1>
                    <p>Create your account to get started. <br>
                        After that, you can share books and make friends.</p>
                </slide>
            </carousel>
            
        </div>
        <div class="split right">
            
            <div class="form">
                
                <div class="form-header" style="text-align: center;">
                    <img src="https://img.icons8.com/dusk/128/000000/idea.png">
                    <p  style="font-weight: bolder; font-size: 20px;">Welcome!</p>
                    <p>Sign-in your account to get started. After that, you can continue being awesome!</p>
                </div>
                
                <label for="fname">EMAIL</label>
                <input type="text" id="fname" name="email" >
                <label for="fname">PASSWORD</label>
                <input type="text" id="fname" name="password" >
                <router-link to='/home'> <input type="submit" value="Login"> </router-link>
                <br>
                <label for="fname">YOU DO NOT HAVE AN ACCOUNT? <router-link to='/register'><a href="">Signup</a></router-link> </label>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel,
        Slide
  }
}
</script>

<style scoped>

.form {
    width: 350px;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
    font-size: 10px;
    font-weight: bold;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

h1 {
  font-size: 2rem;
  color:  rgba(38, 132, 240, 0.8);
  white-space: nowrap;
}

button {
  text-transform:uppercase;
  padding:1em 2em;
  font-size:1rem;
  font-weight:bold;
  background:transparent;
  color:  rgba(38, 132, 240, 0.8);; 
  border: 0.2rem #FFF solid;
}

button:hover{
  /*sets the hover status of the buttons to a variable value*/
  background-color: var(--button-hover-color);
  border-color: var(--button-hover-color); 
  cursor:pointer;
}
html, body {
  padding: 0;
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.container {
  width: 100%;
  height: 650px;
  display: flex;
}
.split {
  transition:all 1s ease;
  flex: 1 1 35%;
  display : flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /*sets the background image and color mask, defaulted to the values corresponding to the left*/
  background: 
    linear-gradient(var(--bg-color),var(--bg-color)) repeat-x top / 100% 100%,
    var(--bg-url) center center no-repeat / cover;
}
.left {
    background-color : white;
}
.right {
    width: 0px;
    --bg-color: rgba(38, 132, 240, 0.8);
    --bg-url:url('https://image.ibb.co/m3ZbRb/programmer.png');
    --button-hover-color: rgba(92, 92, 92, 0.3);
}

.split:hover{
  /*grows an element on hover*/
  flex-grow: 10;
}

</style>
