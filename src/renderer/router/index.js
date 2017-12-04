import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log({to, from})
  next()
})

export default router
