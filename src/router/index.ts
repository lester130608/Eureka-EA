import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import Philosophy from '../views/Philosophy.vue'
import Theraphy from '../views/Theraphy.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs

  },
    {
    path: '/philosophy',
    name: 'Philosophy',
    component: Philosophy

  },
    {
    path: '/theraphy',
    name: 'Theraphy',
    component: Theraphy

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
