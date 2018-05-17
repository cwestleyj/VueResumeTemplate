/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  import the vue instance
import Vue from 'vue'
// bring in vue instance from app
import App from './App'
// declare router from routing app
import router from './router'
//  instatinate the vue instance
new Vue({
//  define the selector for the root component
  el: '#app',
  // pass the router method from above to vue object
  router,
  //  pass the template to the root component
  template: '<App/>',
  //  declare components that the root component can access
  components: { App }
  //  pass in the router to the Vue instance
});
