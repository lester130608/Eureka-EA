import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import Philosophy from '../views/Philosophy.vue'
import Theraphy from '../views/Theraphy.vue'
import Scholarships from '../views/Scholarships.vue'
import Procurement from '../views/Procurement.vue'
import Tuition from '../views/Tuition.vue'
import Admissions from '../views/Admissions.vue'
import FAQ from '../views/FAQ.vue'

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

  },
    {
      path:'/admissions',
      name: 'Admissions',
      component: Admissions
    },
    {
      path:'/scholarships',
      name: 'Scholarships',
      component: Scholarships
    },
    {
      path:'/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path:'/procurement',
      name: 'Procurement',
      component: Procurement
    },
    {
      path:'/tuition',
      name: 'Tuition',
      component: Tuition
    },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
