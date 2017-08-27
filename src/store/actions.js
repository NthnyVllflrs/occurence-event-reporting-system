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
      //Iterate through the firebase snapshot
      snap.forEach(childSnap => {
        var item = childSnap.val()
        item.key = childSnap.key
        //push each item to the array with its key
        events.push(item)
      })

      commit('SET_EVENT', events)
      progress.finish()
    })
  },
  ADD_EVENTS: ({getters}, payload) => {
    const event = {
      createdById: getters.getUserData.id,
      createdByName: `${getters.getUserData.firstName} ${getters.getUserData.lastName}`,
      description: payload.description,
      eventType: payload.eventType,
      createdOn: payload.createdOn
    }

    //Make a nested object to save to the database.
    event.verify = {}
    event.verify[getters.getUserData.id] = true

    //Push event to the database
    firebase.database().ref('/events').push().then(post => {
      //Get the posted key
      let postKey = post.key
      firebase.database().ref(`/users/${getters.getUserData.id}/posts`).child(postKey).set(true).then(() => {
        let storageRef = firebase.storage().ref(`images/${postKey}`)
        storageRef.put(payload.img).then(() => {
          storageRef.getDownloadURL().then(url => {
            event.imgUrl = url
            firebase.database().ref(`/events`).child(postKey).set(event)
          }).catch(err => {
            toastr.error(err.message)
          })
        }).catch(err => {
          toastr.error(err.message)
        })
      }).catch(err => {
        toastr.error(err.message)
      })
    }).catch(err => {
      toastr.error(err.message)
    })
  }
}