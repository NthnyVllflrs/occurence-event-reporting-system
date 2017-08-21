import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import Home from '../components/Home.vue'
import AddOccurrence from '../components/AddOccurrence.vue'
import Profile from '../components/Profile.vue'
import toastr from 'toastr'

import {store} from "./store"

const routes = [
  {
    path: '/',
    component: LandingPage,
    beforeEnter: (to, from, next) => {
      if(!store.getters.currentUser){
        next()
      } else {
        next('/home')
      }
    }
  },
  {
    path: '/home/add',
    component: AddOccurrence,
    beforeEnter: (to, from, next) => {
      if(!store.getters.currentUser){
        toastr.error('You are not yet logged in')
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if(!store.getters.currentUser){
        toastr.error('You are not yet logged in')
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if(!store.getters.currentUser){
        toastr.error('You are not yet logged in')
        next('/')
      } else {
        next()
      }
    }
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})