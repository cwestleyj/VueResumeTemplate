/* eslint-disable */

// get vue
import Vue from 'vue'
// import the router
import Router from 'vue-router'
// import helloworld example component
import HelloWorld from '@/components/HelloWorld'
// import about component
import about from '@/components/about'
import tweenMaxDemo from '@/components/tweenMaxDemo'

// tell vue to use router view
Vue.use(Router)

// call new instance of vue with export default
export default new Router({
  // pass properties to router method
  routes: [
    {
      // declare relative path here
      path: '/',
      // declare name
      name: 'HelloWorld',
      // find the component
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/tweenMaxDemo',
      name: 'tweebMaxDemo',
      component: tweenMaxDemo
    }
  ]
})
