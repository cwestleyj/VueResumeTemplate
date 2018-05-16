<template>
  <div id="app">
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  background: #222;
  color: white;
}

a, a:visited {
  color: #3edada;
  text-decoration: none;
}

.page-enter-active {
  animation: acrossIn .45s ease-out both;
}

.page-leave-active {
  animation: acrossOut .65s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

html, body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  background: #222;
  color: white;
  width: 100vw;
  height: 100vh;
}

a, a:visited {
  color: #3edada;
  text-decoration: none;
}

/* .container {
  padding: 60px;
  width: 100vw;
  height: 100vh;
  background: red;
} */

</style>
