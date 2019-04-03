<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>

    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p><i class="fas fa-bell"></i>{{msg}}</p>
        </div>
        <div class="search">
          <input type="text" id="fname" name="password" placeholder="Search..">
        </div>
      </div>
      <div class="content-body-notification">
        <p style="text-align: center; font-size: 24px; font-weight: bolder;">Coming Soon</p>  
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Partials/Header.vue'
import Sidebar from '@/components/Partials/Sidebar.vue'

export default {
  name: 'home',
  data:  function () {
    return {
      msg: 'Notification'
    }
  },
  components: {
    'sidebar': Sidebar,
    'header-tab': Header
  }
}
</script>

