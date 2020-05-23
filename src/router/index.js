import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

import nestedRouter from './modules/nested'

const routes = [
  {
    path: '/Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    redirect: '/Home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home')
      },
      // {
      //   path: 'test',
      //   component: () => import('@/views/Test')
      // },
    ]
  },
  nestedRouter
]

const router = new VueRouter({
  routes
})

export default router
