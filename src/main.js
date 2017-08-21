import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './config/firebase'
import VueFire from 'vuefire'
import * as VueGoogleMaps from 'vue2-google-maps'
import firebase from 'firebase'
import DateFilter from './filters/date'

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAwG2FvuLOl_rGjp4LHR6XSeLIG_ZjjJ0M',
    libraries: 'places'
  }
})

Vue.filter('date', DateFilter)

import {store} from "./config/store"
import {router} from "./config/routes"

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('setFullName', user.displayName)
      } else {
        this.$store.dispatch('setFullName', null)
      }
    })
  }
})
