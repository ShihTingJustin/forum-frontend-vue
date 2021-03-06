<template>
  <div id="forum">
    <NavBar />
    <main class="mt-5 bg-white"> 
      <router-view />
    </main>   
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar,
  }
};
</script>

<style>
#forum {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
