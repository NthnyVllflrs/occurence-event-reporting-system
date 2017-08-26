import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import firebase from 'firebase'
import DateFilter from './filters/date'

//Import Vuex store for initialization
import { store } from "./store";

//Import router for initialization
Vue.use(VueRouter)
import { router } from "./router";

//Configure the progress bar
import { options } from './config/progress'
Vue.use(VueProgressBar, options)

//Add a date filter
Vue.filter('date', DateFilter)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created(){
    //Setting up our firebase project
    firebase.initializeApp({
      apiKey: "AIzaSyDrBu60WVv5FNwLcsCTbuB2Pb2FQuIK5eM",
      authDomain: "occurence-df954.firebaseapp.com",
      databaseURL: "https://occurence-df954.firebaseio.com",
      projectId: "occurence-df954",
      storageBucket: "occurence-df954.appspot.com"
    })

    //If the auth state is changed, change the value of isSignedIn from our store's state
    firebase.auth().onAuthStateChanged(user => {
      if(user)
        store.commit('AUTH_CHANGE', true)
      else
        store.commit('AUTH_CHANGE', false)
    })
  }
})
