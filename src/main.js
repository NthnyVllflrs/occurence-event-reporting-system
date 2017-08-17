import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './config/firebase'
import VueFire from 'vuefire'

Vue.use(VueRouter)
Vue.use(VueFire)

import {store} from "./config/store"
import {router} from "./config/routes"

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
  // beforeCreate: () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user)
  //   })
  // }
})
