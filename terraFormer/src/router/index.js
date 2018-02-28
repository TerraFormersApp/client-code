import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'LandingPage',
    //   component: LandingPage
    // },
    {
      path: '/',
      name: 'Editor',
      component: Editor
    }
  ]
})
