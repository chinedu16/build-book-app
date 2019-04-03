<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>

    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p><i class="fas fa-star"></i>{{msg}}</p>
        </div>
        <div class="search">
          <input type="text" id="fname" name="password" placeholder="Search Books..">
        </div>
      </div>
      <div class="content-body">

          <div class="card-1">
            <div id="left">
                <img class="bg-img-1" :src="url" alt="" srcset="">
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
                    <p style="margin-left:130px"><star-rating v-bind:star-size="35" :rating="rating_score" :increment="0.5"></star-rating></p>
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
      id: '',
      title: '',
      author: '',
      description: '',
      url: '',
      rating_score: '',
      rating: 'TAP TO ADD RATING'
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.title = this.$route.params.title;
    this.author = this.$route.params.author;
    this.description = this.$route.params.description;
    this.url = this.$route.params.url;
    this.rating_score = this.$route.params.rating;

    if (!this.$route.params.id) {
      this.$router.push('home')
    }
  },
  components: {
    'sidebar': Sidebar,
    'header-tab': Header
  }
}
</script>

