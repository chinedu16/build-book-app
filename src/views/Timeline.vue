<template>

  <div class="main">
    <header-tab></header-tab>
    <sidebar></sidebar>


    <div class="content">
      <div class="content-header">
        <div class="content-header-name">
          <p>Timeline</p>
        </div>
        <div class="search">
          <input type="text" id="fname" name="password" placeholder="Search..">
        </div>
      </div>
      <div class="content-body">
        <ul class="timeline">
            <li>
                <a class="header" target="_blank" href="#">Reviewed Book</a>
                <a href="#" class="float-right">21 March, 2014</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
            </li>
            <li>
                <a class="header" href="#">Added Book to List</a>
                <a href="#" class="float-right">4 March, 2014</a>
                <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
            </li>
            <li>
                <a  class="header" href="#">Added Book to list</a>
                <a href="#" class="float-right">1 April, 2014</a>
                <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
                <a  class="header" href="#">Reviewed Book</a>
                <a href="#" class="float-right">1 April, 2014</a>
                <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
                <a class="header" href="#">Awesome Ratings !!!</a>
                <a href="#" class="float-right">1 April, 2014</a>
                <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
            </li>
            <li>
                <a class="header" href="#">Comment on book</a>
                <a href="#" class="float-right">1 April, 2014</a>
                <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
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
  components: {
    'sidebar': Sidebar,
    'header-tab': Header
  }
}
</script>

<style scoped>

/* start Timeline */
ul.timeline {
    list-style-type: none;
    position: relative;
    
}
ul.timeline li .header {
    text-decoration: none;
    font-size: x-large;
    font-weight: bold;
    color: rgba(38, 132, 240, 0.8)
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li .float-right {
    float: right;
    text-decoration: none;
    color: rgba(38, 132, 240, 0.8)
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid rgba(38, 132, 240, 0.8);
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
/* End Timeline */

.main {
  background: aliceblue;
  margin-left: -7px;
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

