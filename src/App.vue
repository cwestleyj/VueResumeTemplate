<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/tweenMaxDemo">Tween</router-link>
    </nav>
    <transition name="router-anim" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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
  color: green;
  margin-top: 60px;
}

html, body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  background: yellow;
  color: white;
}

a, a:visited {
  color: #3edada;
  text-decoration: none;
}

.router-anim-enter-active {
  animation: coming 1s;
}
.router-anim-leave-active {
  animation: going 1s;
}
@keyframes coming {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);

  }
}
@keyframes going {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
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

</style>
