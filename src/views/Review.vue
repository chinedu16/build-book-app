<template>

  <div class="main">
    <header class="header-fixed">
      <div class="header-limiter">
        <h1><a href="#">Book<span>App</span></a></h1>
      </div>
    </header>

   <div class="sidebar">
        <nav>
            <router-link to="/timeline"><a href="">Timeline</a></router-link>
            <router-link to="/home"> <a href="">My Books</a></router-link>
            <router-link to="/review"><a href=""> Add Review</a></router-link>
            <router-link to="/notification"><a href="">Notification</a></router-link>
        </nav>
    </div>

    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p>Add Books Review</p>
        </div>
        <div class="search">
          <input type="text" id="fname" name="password" placeholder="Search Books..">
        </div>
      </div>
      <div class="content-body">

          <div class="card">
            <div id="left">
                <div class="bg-img"></div>
            </div>
            <div id="right">
                <div class="card-content-aside">
                    <h1>Remote: Office Not Required</h1>
                    <span> Stephen king</span>
                    <span>/ <i class="fas fa-star" style="color: rgba(38, 132, 240, 0.8);"> </i> 4.68</span><p>2,346 reviews</p>
                </div>

                <div class="card-content-main">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus nulla. Pellentesque at imperdiet leo.</p>
                    <a href="/#">Full Synopsis</a>
                </div>
                <br>
                <hr>
                <div class="card-content-rating" style="text-align: center; font-size: 15px; font-weight: 600; display: flow-root;">
                    <p>TAP TO ADD RATING</p>
                    <p style="margin-left:130px"><star-rating v-bind:star-size="35" :increment="0.5"></star-rating></p>
                    
                </div>
                <br>
                <div class="btn" style="text-align: center; ">
                    <router-link to='/success'><button>Next</button></router-link>
                </div>

                
            </div>
            
        
        </div>
          
    </div>

    </div>
  </div>
    

    
</template>

<script>
import Vue from 'vue'
import VueStarRating from 'vue-star-rating';
Vue.component('star-rating', VueStarRating.default);
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Header from '@/components/Partials/Header.vue'

export default {
    name: 'home',
    components: {
    // HelloWorld,
    // Header
    }
}
</script>

<style scoped>
/* Start card component */

.card {
    display: flex;
}

#left {
  flex: 0 0 45%;
}

#right {
  flex: 1;
  margin-left: 20px;
}
.bg-img {
  background-size: cover;
  background-image:url('https://jlongroadmedia.files.wordpress.com/2013/12/catchingfire.jpg');
  min-height: 500px;
  background-position: center;
  background-color: #ccc;
}

button {
    width: 300px;
    background: rgb(0,179,0);
    background: linear-gradient(90deg, rgba(0,179,0,1) 0%, rgba(0,153,0,1) 100%);
    border: 1px solid rgb(225,255,128);
    color: white;
    font-weight: bold;
    padding: .5rem 1rem;
    cursor: pointer;
    border-radius: .25rem;
}

/* end card components */

/* Start Sidebar component */
.sidebar nav {
  margin-left: 200px;
}
.sidebar nav a {
  margin-right: 20px;
  text-decoration: none;
  color: #2c3e50;
}
.sidebar nav a:hover {
  color: rgba(38, 132, 240, 0.8);
}
.sidebar nav a:active {
  color: rgba(38, 132, 240, 0.8);
}


.sidebar {
  padding: 10px;
  font-weight: bold;
  border-bottom-style: inset;
  border-bottom-color: #2c3e50;
  border-width: thin;
}

/* End sidebar component */


.main {
  background: aliceblue;
  margin-left: -7px;
  margin-right: -7px;
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
.content {
    min-height: 783px;
}
.content .content-body {
  margin-top: 60px;
  height: auto;
  padding: 10px;
  background-color: #ffffff;
  margin-left: 250px;
  margin-right: 250px;
  border-style: ridge;
  border-radius: 5px;
  border-color: aliceblue;
}
.content .content-header {
  margin-left: 250px;
  margin-right: 250px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}

.content .content-header p {
  font-size: 23px;
    font-weight: bold;
}
.content .content-header .search {
  width: 300px;
}
.header-fixed {
    margin: -7px;
    background: rgb(255,128,170);
    background: linear-gradient(90deg, rgba(255,128,170,1) 0%, rgba(255,194,102,1) 100%);
	
	box-shadow:0 1px 1px #ccc;
	padding: 20px 40px;
	height: 80px;
	color: #ffffff;
	box-sizing: border-box;
	top:-100px;

	-webkit-transition:top 0.3s;
	transition:top 0.3s;
}

.header-fixed .header-limiter {
	max-width: 1200px;
	text-align: center;
	margin: 0 auto;
}

.header-fixed-placeholder{
	height: 80px;
	display: none;
}

/* Logo */

.header-fixed .header-limiter h1 {
	float: left;
	font: normal 28px Cookie, Arial, Helvetica, sans-serif;
	line-height: 40px;
	margin: 0;
}

.header-fixed .header-limiter h1 span {
	color: #2c3e50;
}

/* The navigation links */

.header-fixed .header-limiter a {
	color: #ffffff;
	text-decoration: none;
}

.header-fixed .header-limiter nav {
	font:16px Arial, Helvetica, sans-serif;
	line-height: 40px;
	float: right;
}

.header-fixed .header-limiter nav a{
	display: inline-block;
	padding: 0 5px;
	text-decoration:none;
	color: #ffffff;
	opacity: 0.9;
}

/* Fixed version of the header */

body.fixed .header-fixed {
	padding: 10px 40px;
	height: 50px;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
}



</style>

