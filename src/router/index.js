import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/register/:patientId',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Register.vue')
  },
  {
      path: '/first_ablation/:patientId',
    name: 'FirstAblation',
    component: () => import('../views/FirstAblation.vue')
  },
  {
      path: '/medication/:medicationId',
    name: 'AblationMedication',
    component: () => import( /* webpackChunkName: "ablationMedication" */ '@/views/AblationMedication.vue' )
  },
  {
      path: '/following_ablation/:followAblationId',
    name: 'FollowingAblation',
    component: () => import( /* webpackChunkName: "followingAblation" */ '@/views/FollowingAblation.vue' )
  },
    {
        path: '/followup/:patientId',
        name: 'FollowUp',
        component: () => import(/* webpackChunkName: "followUp" */ '@/views/FollowUp.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "logIn" */ '@/components/login.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
    scrollBehavior (){
        return { x: 0, y: 0 }
    }
})

//import store from '@/store/index.js'
//import app from '@/main.js'

//router.beforeEach(( to, from, next ) => {
//    const test = to.matched[0].instances["default"];
//    console.log( test );
//    console.log( to );
//    store.commit('UPDATE_PAGE_CONTENTS', to.name);
//    next();
//})

//router.afterEach(() => {
//    console.log( 'hogegege' );
//    store.dispatch( 'updatePatientIdAction' );
//})

export default router
