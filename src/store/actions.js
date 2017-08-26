import firebase from 'firebase'
import toastr from 'toastr'

//Import router
import { router } from '../router'

export default {
  SIGN_UP_A_USER: ({commit}, payload) => {
    payload.progress.start()
    //Firebase function to create a new user in firebase auth
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
      user.updateProfile({
        displayName: `${payload.firstName} ${payload.lastName}`
      }).then(() => {
        //Store user details in an object
        let newUser = {
          id: user.uid,
          email: user.email,
          firstName: payload.firstName,
          lastName: payload.lastName
        }

        //Store 'newUser' to firebase
        firebase.database().ref(`users/${newUser.id}`).set(newUser)
        payload.progress.finish()
        toastr.success('You are now logged in!')
        //Mutate the current state within mutation.js
        commit('SET_USER', newUser)
        //Redirect to /home page
        router.push('/home')
      })
    }).catch(err => {
      payload.progress.fail()
      toastr.error(err.message)
    })
  },
  LOG_IN_A_USER: ({commit}, payload) => {
    payload.progress.start()
    //Firebase function to log in a user
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
      payload.progress.finish()
      //Find the user id from direbase and store it to our vuex store
      firebase.database().ref(`users/${user.uid}`).once('value').then(snapshot => {
        //Setting the user to our vuex store in mutations.js
        // bringing the returned value from firebase
        commit('SET_USER', snapshot.val())
        router.push('/home')
      })
    }).catch(err => {
      payload.progress.fail()
      toastr.error(err.message)
    })
  },
  LOG_OUT_A_USER: ({commit}, {progress}) => {
    progress.start()
    firebase.auth().signOut().then(() => {
      //When the user is logged out, user state is emptied.
      commit('SET_USER', null)
      progress.finish()
      router.push('/')
    })
  },
  LOAD_EVENTS: ({commit}, {progress}) => {
    progress.start()
    firebase.database().ref('events').on('value', snap => {
      let events = []
      let promises = []
      let obj = snap.val()
      //Iterate through an object
      for(let key in obj){
        //Make a reference to the firebase storage
        let storageRef = firebase.storage().ref(`images/${key}`)
        //Create a promise to push to the promises array later on
        let promise = storageRef.getDownloadURL().then(url => {
          //Push to the events array
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
            imgUrl: url
          })
        })
        promises.push(promise)
      }
      //Execute all the promises that was stored
      Promise.all(promises).then(() => {
        commit('SET_EVENT', events)
        progress.finish()
      }).catch(err => {
        console.log(err)
      })
    })
  }
}