import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import StarRating from 'vue-star-rating'
import VueSweetalert2 from 'vue-sweetalert2';
import VueCarousel from 'vue-carousel';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

Vue.use(VueSweetalert2, options)
Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.component('star-rating', StarRating);

new Vue({
  router,
  store,
  StarRating,
  render: h => h(App)
}).$mount('#app')
