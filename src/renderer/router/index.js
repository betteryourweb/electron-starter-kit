import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main'
import Video from '@/pages/video/Index'
import Music from '@/pages/music/Index'
import MusicChildren from './music'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
      children: MusicChildren
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
