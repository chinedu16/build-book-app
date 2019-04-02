<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>

    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p>{{msg}}</p>
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
                    <h1>{{title}}</h1>
                    <span>{{author}}</span>
                    <span> / <i class="fas fa-star" style="color: rgba(38, 132, 240, 0.8);"> </i> 4.68</span><p>2,346 reviews</p>
                </div>

                <div class="card-content-main">
                    <p>{{description}}</p>
                    <a href="/#">Full Synopsis</a>
                </div>
                <br>
                <hr>
                <div class="card-content-rating" style="text-align: center; font-size: 15px; font-weight: 600; display: flow-root;">
                    <p>{{rating}}</p>
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
  data:  function() {
    return {
      msg: 'Add Books Review',
      title: 'Remote: Office Not Required',
      author: 'Stephen king',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus nulla. Pellentesque at imperdiet leo.',
      rating: 'TAP TO ADD RATING'
    }
  },
  components: {
    'sidebar': Sidebar,
    'header-tab': Header
  }
}
</script>

