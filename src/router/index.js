import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',

    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterUser.vue')
  },
  {
    path: '/login',
    name: 'register',
    component: () => import('../views/LoginUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router