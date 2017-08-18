import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import firebase from 'firebase'
import toastr from 'toastr'

import {router} from "./routes"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setFullName(state, payload){
      state.fullName = payload
    }
  },
  actions: {
    signUpUser({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        if(user){
          let newUser = {
            id: user.uid
          }
          user.updateProfile({
            displayName: payload.fullName
          }).then(() => {
            toastr.success('Success!', 'You are now logged in.')
            firebase.database().ref(`users/${user.uid}`).set({
              email: user.email
            })
          })

          commit('setUser', newUser)
          router.push('/home')
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
        router.push('/home')
      }).catch(err => {
        toastr.error(err.message)
      })
    },
    logoutUser({commit}){
      firebase.auth().signOut().then(() => {
        toastr.success('Success!', 'You are now logged out.')
        commit('setUser', null)
        router.push('/')
      }).catch(err => {
        toastr.error(err.message)
      })
    },
    setFullName({commit}, payload){
      commit('setFullName', payload)
    }
  },
  getters: {
    currentUser(state){
      return state.user
    },
    userFullName(state){
      return state.fullName
    }
  },
  plugins: [createPersistedState()]
})