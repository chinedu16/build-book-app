<template>
    <div class="sidebar">
        <nav>
            <router-link to="/timeline"><i class="fas fa-stream"></i><a href="">Timeline</a></router-link>
            <router-link to="/home"><i class="fas fa-book"></i><a href="" class="active">My Books</a></router-link>
            <router-link to="/review"><i class="fas fa-star"></i><a href=""> Add Review</a></router-link>
            <router-link to="/notification"><i class="fas fa-bell"></i><a href="">Notification</a></router-link>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* Start Sidebar component */
.sidebar nav {
  margin-left: 200px;
}
.sidebar nav a {
  margin-right: 20px;
  text-decoration: none;
  color: #2c3e50;

}
.sidebar nav a:hover {
  color: rgba(0,179,0,1);
}

.sidebar nav a:active {
  color: rgba(38, 132, 240, 0.8);
}


.sidebar {
  padding: 10px;
  font-weight: bold;
  border-bottom-style: inset;
  border-bottom-color: #2c3e50;
  border-width: thin;
}

/* End sidebar component */
</style>
