<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>

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
import Header from '@/components/Partials/Header.vue'
import Sidebar from '@/components/Partials/Sidebar.vue'

export default {
  name: 'home',
  components: {
    'sidebar': Sidebar,
    'header-tab': Header
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


</style>

