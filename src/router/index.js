import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Films',
    name: 'Films',
    component: () => import(/* webpackChunkName: "Films" */ '../views/FilmsList.vue')
  },     
  {
    path: '/Films/:filmId',
    name: 'FilmsDetails',
    component: () => import(/* webpackChunkName: "FilmsDetails" */ '../views/FilmDetails.vue')
  },
  {
    path: '/Contact',
    name: 'Contac',
    component: () => import(/* webpackChunkName: "AdminUpdate" */ '../views/ContactView.vue')
  },
  {
    path: '/Destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "AdminDelete" */ '../views/DestinationView.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import(/* webpackChunkName: "AdminNew" */'../views/AboutView.vue')
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import(/* webpackChunkName: "AdminNew" */'../views/ShoppingView.vue')
  },
  {
    path: '/Sign',
    name: 'Sign',
    component: () => import(/* webpackChunkName: "AdminNew" */'../views/SignView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
