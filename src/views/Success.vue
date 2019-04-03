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
          <div class="card-success" v-for="book in recentBooks" :key="book.id">
            <img class="bg-img-success" :src="book.url" >
            <div class="card-content-success">
              <h4>{{book.title}}</h4>
              <p>{{book.author}}</p> 
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
  data: function() {
    return {
      recentBooks: [
        {
          id: 1,
          title: 'Bible Science',
          url: 'http://kidsbiblescience.com/lark2011ableWPwind/wp-content/uploads/2011/03/EBS-Youth-front-cover.jpg',
          author: 'Berret Derr '
        },
        {
          id: 2,
          title: 'Love Story',
          url: 'https://upload.wikimedia.org/wikipedia/en/d/d1/I_Too_Had_a_Love_Story_front_cover.jpg',
          author: 'National Screte'
        },
        {
          id: 3,
          title: 'History of War',
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0EOYy46zFTxu8rogx-HMdJDLlZBP8px9I1jIuenT4TjotftSmQ',
          author: 'The Post'
        }
      ]

    }
  },
  components: {
    'sidebar': Sidebar,
    'header-tab': Header
  }
}
</script>

