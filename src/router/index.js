/* eslint-disable */

// get vue
import Vue from 'vue'
// import the router
import Router from 'vue-router'
// import helloworld example component
import resume from '@/components/resume'
// import about component
import about from '@/components/about'
// import projects from '@/components/projects'


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
      name: 'resume',
      // find the component
      component: resume
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: projects
    // }
  ]
})
