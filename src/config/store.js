import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import firebase from 'firebase'
import toastr from 'toastr'
import moment from 'moment'

import {router} from "./routes"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    fullName: '',
    events: []
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setFullName(state, payload){
      state.fullName = payload
    },
    createOccurence(state, payload){
      state.events.push(payload)
    },
    setLoadedOccurence(state, payload){
      state.events = payload
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
    },
    addOccurence({dispatch, commit, getters}, payload){
      const event = {
        createdById: getters.currentUser.id,
        createdByName: getters.userFullName,
        description: payload.description,
        eventType: payload.eventType,
        createdOn: payload.createdOn,
        verify: {
          uid: getters.currentUser.id
        },
        place: payload.place,
        lat: payload.lat,
        lng: payload.lng
      }

      firebase.database().ref('/events').push(event).then(post => {
        let postKey = post.key
        let storageRef = firebase.storage().ref(`images/${postKey}`)
        storageRef.put(payload.file).then(() => {
          commit('createOccurence', {
            ...event,
            id: postKey
          })
          dispatch('loadEvents')
          toastr.success('Success!', 'Occurence created.')
          router.push('/home')
        })

        //Add file to event object here

      }).catch(err => {
        toastr.error(err.message)
      })
    },
    loadEvents({commit}){
      firebase.database().ref('/events').once('value').then(event => {
        const events = []
        const promises = []
        const obj = event.val()

        for(let key in obj){
          let storageRef = firebase.storage().ref(`images/${key}`)
          let promise = storageRef.getDownloadURL().then(url => {
            events.push({
              id: key,
              createdById: obj[key].createdById,
              createdByName: obj[key].createdByName,
              description: obj[key].description,
              eventType: obj[key].eventType,
              createdOn: obj[key].createdOn,
              verify: {
                uid: obj[key].verify.uid
              },
              imgUrl: url,
              place: obj[key].place
            })
          })
          promises.push(promise)
        }
        Promise.all(promises).then(() => {
          commit('setLoadedOccurence', events)
        }).catch(err => {
          console.log(err)
          toastr.error('Seems like there\'s an error1')
        })
      }).catch(err => {
        toastr.error('Seems like there\'s an error2')
      })
    }
  },
  getters: {
    currentUser(state){
      return state.user
    },
    userFullName(state){
      return state.fullName
    },
    loadedOccurence(state){
      return state.events.sort((eventA, eventB) => {
        return eventA.createdOn < eventB.createdOn
      })
    }
  },
  plugins: [createPersistedState()]
})