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
              <p>{{book.author}}<star-rating v-bind:star-size="25" :rating="book.rating" :increment="0.5"></star-rating></p> <router-link to='/review'><button>Add Book Review</button> </router-link>
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
          title: 'Catching Fire',
          author: 'Suzanne Collins',
          rating: 4,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales dictum diam venenatis dapibus. '
        },
        {
          id: 2,
          url: 'https://prodimage.images-bn.com/pimages/9781603762977_p0_v1_s550x406.jpg',
          title: 'Front Page',
          author: 'New York Times',
          rating: 3,
          description: 'Praesent at faucibus sapien. Duis magna sem, tincidunt vel eleifend eu, laoreet vitae elit. Vivamus rhoncus ligula tellus, a ultricies felis iaculis et.'
        },
        {
          id: 3,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1f5SDryi8ySTT5Pn8bKxTw-RWB-1skdv_lqfqcLWnno1nul1',
          title: 'Chemistry',
          author: 'Easy genius',
          rating: 5 ,
          description: 'Morbi sed iaculis purus. Cras quis ante sit amet justo hendrerit interdum quis eget dolor. '
        },
        {
          id: 4,
          url: 'https://images.gr-assets.com/books/1441227765l/355697.jpg',
          title: 'All Quiet on the west front',
          author: 'Erich Maria',
          rating: 3,
          description: 'Nam in diam facilisis lorem tempus posuere eget eget nisi.'
        },
        {
          id: 5,
          url: 'http://nickpage.co.uk/wp-content/uploads/2016/05/DarkNightOfTheShedcover-229x330.jpg',
          title: 'The Dark night of the Shed',
          author: 'Jason Fried ',
          rating: 4,
          description: 'Sed ligula velit, sagittis nec porta rhoncus, tempor eu diam. Nunc efficitur luctus sagittis. Donec et est vel purus pulvinar commodo'
        },
        {
          id: 6,
          url: 'http://nickpage.co.uk/wp-content/uploads/2014/07/KoF2-248x330.jpg',
          title: 'Kingdom of Fools',
          author: 'Nick Cage ',
          rating: 2,
          description: 'Duis lacinia varius leo, a bibendum velit maximus nec. Aliquam mollis porttitor sem sed convallis.'
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

