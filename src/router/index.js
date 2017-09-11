import VueRouter from 'vue-router'

//Import components for rendering
import LandingPage from '../components/LandingPage.vue'
import Home from '../components/Home.vue'
import AddOccurrence from '../components/AddOccurrence.vue'
import UserProfile from '../components/UserProfile.vue'
import EditOccurrence from '../components/EditOccurrence.vue'
import OccurrenceMap from '../components/OccurrenceMap.vue'

//Import vuex store
import { store } from '../store'

//Import Authentication Guard
import AuthGuard from './authGuard'


import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvKkNZM33_TfZjC3xWfYimSpjWY9z6Cug',
    v: '3.26',
  }
})

const routes = [
  //  Register routes
  {
    path: '/',
    component: LandingPage ,
    beforeEnter: (to, from, next) => {
      if(store.getters.getUserData)
        next('/home')
      else
        next()
    }
  },
  { path: '/home',  component: Home, beforeEnter: AuthGuard },
  { path: '/home/add',  component: AddOccurrence, beforeEnter: AuthGuard },
  { path: '/profile',  component: UserProfile, beforeEnter: AuthGuard },
  { path: '/occurrence-map',  component: OccurrenceMap, beforeEnter: AuthGuard },
  {
    path: '/edit/:id',
    component: EditOccurrence,
    beforeEnter: AuthGuard
  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})