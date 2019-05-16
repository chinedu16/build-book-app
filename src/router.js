import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timeline from './views/Timeline.vue'
import Review from './views/Review.vue'
import Notification from './views/Notification.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Success from './views/Success.vue'
// import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    // {
    //   path: '*',
    //   name: 'NotFound',
    //   component: NotFound
    // },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/review',
      name: 'review',
      component: Review,
      props: true
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
