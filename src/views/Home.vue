<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>

    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p><i class="fas fa-book"></i>{{header.main}}<span style="font-size: 10px; font-weight: lighter;">  {{header.sub}}</span></p>
        </div>
        <div class="search">
          <input type="text" id="fname" name="password" placeholder="Search Book..">
        </div>
      </div>
      <div class="content-body">
        <div class="grid-container" >          
          <div class="card" v-for="book in books" :key="book.id">
            <img class="bg-img" :src="book.url" alt="" srcset="">
            <div class="card-content">
              <h4>{{book.title}}</h4>
              <p>{{book.author}}<star-rating v-bind:star-size="25" :increment="0.5"></star-rating></p> <router-link to='/review'><button>Add Book Review</button> </router-link>
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
  data: function () {
    return {
      header: {
        main: 'My Books List',
        sub: '(BOOKS REVIEWED BY YOU)'
      },
      books : [
        {
          id: 1,
          url: 'https://jlongroadmedia.files.wordpress.com/2013/12/catchingfire.jpg',
          title: 'Remote: Office Not Required',
          author: 'Jason Fried ' 
        },
        {
          id: 2,
          url: 'https://prodimage.images-bn.com/pimages/9781603762977_p0_v1_s550x406.jpg',
          title: 'Remote: Office Not Required',
          author: 'Jason Fried ' 
        },
        {
          id: 3,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1f5SDryi8ySTT5Pn8bKxTw-RWB-1skdv_lqfqcLWnno1nul1',
          title: 'Remote: Office Not Required',
          author: 'Jason Fried ' 
        },
        {
          id: 4,
          url: 'https://images.gr-assets.com/books/1441227765l/355697.jpg',
          title: 'Remote: Office Not Required',
          author: 'Jason Fried ' 
        },
        {
          id: 5,
          url: 'http://nickpage.co.uk/wp-content/uploads/2016/05/DarkNightOfTheShedcover-229x330.jpg',
          title: 'Remote: Office Not Required',
          author: 'Jason Fried ' 
        },
        {
          id: 6,
          url: 'http://nickpage.co.uk/wp-content/uploads/2014/07/KoF2-248x330.jpg',
          title: 'Remote: Office Not Required',
          author: 'Jason Fried ' 
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

