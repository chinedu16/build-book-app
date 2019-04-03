<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>

    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p><i class="fas fa-stream"></i>{{msg}}</p>
        </div>
        <div class="search">
          <input type="text" id="fname" name="password" placeholder="Search..">
        </div>
      </div>
      <div class="content-body-timeline">
        <ul class="timeline" v-for="time in timeline" :key="time.id">
            <li>
                <a class="header" target="_blank" href="#">{{time.title}}</a>
                <a href="#" class="float-right">{{time.date}}</a>
                <p>{{time.content}}</p>
            </li>
        </ul>
    </div>

    </div>
  </div>
    

    
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Partials/Header.vue'
import Sidebar from '@/components/Partials/Sidebar.vue'

export default {
  name: 'home',
  data: function() {
    return {
      msg: 'Timeline',
      timeline: [
        {
          id: 1,
          title: 'Reviewed Book',
          date: '21 March, 2014',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....'
        },
        {
          id: 2,
          title: 'Added Book to List',
          date: '21 March, 2014',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....'
        },
        {
          id: 3,
          title: 'Reviewed Book',
          date: '21 March, 2014',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....'
        },
        {
          id: 4,
          title: 'Reviewed Book',
          date: '21 March, 2014',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....'
        },
        {
          id: 5,
          title: 'Reviewed Book',
          date: '21 March, 2014',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....'
        },
        {
          id: 6,
          title: 'Reviewed Book',
          date: '21 March, 2014',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....'
        },
      ]
    }
  },
  components: {
    'sidebar': Sidebar,
    'header-tab': Header
  }
}
</script>

<style scoped>


</style>

