import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import firebase from 'firebase'

import {db} from './firebase'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(Vuex)

import {router} from "./config/routes"

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  // beforeCreate: () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user)
  //   })
  // }
})
