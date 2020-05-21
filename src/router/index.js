import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    redirect: '/Home',
    component: Layout,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: () => import('@/views/Home')
      },
      {
        path: '/Test',
        name: 'Test',
        component: () => import('@/views/Test')
      },
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
