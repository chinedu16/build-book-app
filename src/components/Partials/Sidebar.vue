<template>
    <div class="sidebar">
        <nav>
            <router-link to="/timeline"><a href="">Timeline</a></router-link>
            <router-link to="/home"> <a href="" class="active">My Books</a></router-link>
            <router-link to="/review"><a href=""> Add Review</a></router-link>
            <router-link to="/notification"><a href="">Notification</a></router-link>
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
  color: rgba(38, 132, 240, 0.8);
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
