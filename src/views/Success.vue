<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>

    <div class="content">
      <div class="content-header" style="display: block; text-align: center;">
        <img src="https://img.icons8.com/color/350/000000/ok.png">
        <p>Thanks You!</p>
        <p>You have submitted your first book review. Now its time to make some friends</p>
        <div class="btn" style="text-align: center; ">
            <router-link to='/home'><button>Add Friends</button></router-link>
        </div>
      </div>
      <div class="content-body">
          <p style="text-align: center;font-weight: bold;">YOU MAY ALSO BE INTERESED IN</p>
        <div class="grid-container">
          
          <div class="card-success">
            <div class="bg-img-success">
            </div>
            <div class="card-content-success">
              <h4>Remote: Office Not Required</h4>
              <p>Jason Fried </p> 
            </div> 
          </div>
           <div class="card-success">
            <div class="bg-img-success">
            </div>
            <div class="card-content-success">
              <h4>Remote: Office Not Required</h4>
              <p>Jason Fried </p> 
            </div>  
          </div>
           <div class="card-success">
            <div class="bg-img-success">
            </div>
            <div class="card-content-success">
              <h4>Remote: Office Not Required</h4>
              <p>Jason Fried </p> 
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
.card-success {
  border: 1px solid #d3d3d3;
  border-radius: .25rem;
}

.bg-img-success {
  background-size: cover;
  background-image:url('https://jlongroadmedia.files.wordpress.com/2013/12/catchingfire.jpg');
  min-height: 150px;
  background-position: center;
  background-color: #ccc;
}

.card-content-success {
  padding: 15px;
}




</style>

