import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'userInfo',
    component: () => import('../views/userInfo.vue')
  },
  {
    path:'/users',
    name:'users',
    component: () => import('../views/users.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
