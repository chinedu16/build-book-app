<template>

  <div class="main">

    <header-tab></header-tab>
    <sidebar></sidebar>

    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p>Notification</p>
        </div>
        <div class="search">
          <input type="text" id="fname" name="password" placeholder="Search..">
        </div>
      </div>
      <div class="content-body">
        <p style="text-align: center; font-size: 24px; font-weight: bolder;">Coming Soon</p>  
      </div>

    </div>
  </div>
    

    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Partials/Header.vue'
import Sidebar from '@/components/Partials/Sidebar.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    'sidebar': Sidebar,
    'header-tab': Header
  }
}
</script>

<style scoped>
/* Start card component */
.card {
  border: 1px solid #d3d3d3;
  border-radius: .25rem;
}

.bg-img {
  background-size: cover;
  background-image:url('https://jlongroadmedia.files.wordpress.com/2013/12/catchingfire.jpg');
  min-height: 150px;
  background-position: center;
  background-color: #ccc;
}

.card-content {
  padding: 15px;
}

button {
  background: rgb(0,179,0);
  background: linear-gradient(90deg, rgba(0,179,0,1) 0%, rgba(0,153,0,1) 100%);
  border: 1px solid rgb(225,255,128);
  padding: .5rem 1rem;
  cursor: pointer;
  border-radius: .25rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
/* end card components */

.main {
  background: aliceblue;
  margin-left: -7px;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.content {
    min-height: 783px;
}
.content .content-body {
  margin-top: 60px;
  height: auto;
  padding: 10px;
  background-color: #ffffff;
  margin-left: 250px;
  margin-right: 250px;
  border-style: ridge;
  border-radius: 5px;
  border-color: aliceblue;
}
.content .content-header {
  margin-left: 250px;
  margin-right: 250px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}

.content .content-header p {
  font-size: 23px;
    font-weight: bold;
}
.content .content-header .search {
  width: 300px;
}



</style>

