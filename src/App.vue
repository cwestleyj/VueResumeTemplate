<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/tweenMaxDemo">Tween</b-nav-item>
    </b-nav>
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
html, body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
background: url("https://www.toptal.com/designers/subtlepatterns/patterns/slash_it.png");
  color: #3edada;

}

a, a:visited {
  color: #3edada;
  text-decoration: none;
}

#app {
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

</style>
