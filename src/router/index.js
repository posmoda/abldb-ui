import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Register.vue')
  },
  {
    path: '/first_ablation',
    name: 'FirstAblation',
    component: () => import('../views/FirstAblation.vue')
  },
  {
    path: '/medication',
    name: 'Medication',
    component: () => import(/* webpackChunkName: "medication" */ '@/views/FirstAblationMedication.vue')
  },
  {
    path: '/following_ablation',
    name: 'FollowingAblation',
    component: () => import( /* webpackChunkName: "followingAblation" */ '@/views/FollowingAblation.vue' )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
