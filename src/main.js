import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './config/firebase'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueRouter)
Vue.use(VueFire)

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
  // beforeCreate: () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user)
  //   })
  // }
})
