import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import * as firebase from 'firebase'

Vue.use(VueRouter)

import {store} from "./config/store"
import {router} from "./config/routes"

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyDrBu60WVv5FNwLcsCTbuB2Pb2FQuIK5eM",
      authDomain: "occurence-df954.firebaseapp.com",
      databaseURL: "https://occurence-df954.firebaseio.com",
      projectId: "occurence-df954",
      storageBucket: "",
      messagingSenderId: "779704581019"
    })
  }
  // beforeCreate: () => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user)
  //   })
  // }
})
