import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import toastr from 'toastr'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    signUpUser({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        if(user){
          let newUser = {
            id: user.uid
          }
          toastr.success('Success!', 'You can now login.')
          commit('setUser', newUser)
        }
      }).catch(err => {
        toastr.error(err.message)
      })
    },
    logInUser({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
        let newUser = {
          id: user.uid
        }
        toastr.success('Success!', 'You are now logged in.')
        commit('setUser', newUser)
      }).catch(err => {
        toastr.error(err.message)
      })
    }
  },
  getters: {
    currentUser(state){
      return state.user
    }
  }
})