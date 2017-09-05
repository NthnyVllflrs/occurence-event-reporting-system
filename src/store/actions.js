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
        toastr.success('You are now logged in!', {timeout: 1000})
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
      toastr.success('You are now logged in!', {timeout: 1000})
      //Find the user id from direbase and store it to our vuex store
      firebase.database().ref(`users/${user.uid}`).once('value', snapshot => {
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
      commit('SET_EVENT', [])
      commit('SET_USER_POST', [])
      commit('SET_ATTENDED_EVENTS', [])
      progress.finish()
      router.push('/')
    })
  },
  LOAD_CURRENT_USER: ({commit}, {uid}) => {
    firebase.database().ref(`users/${uid}`).on('value', snapshot => {
      commit('SET_USER', snapshot.val())
    })
  },
  //User's timeline
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
  //Collective posts by the user.
  LOAD_USER_POST: ({getters, commit}) => {
    firebase.database().ref('events').on('value', snap => {
      let events = []
      let snapshot = snap.val()
      for(let key in snapshot){
        let item = snapshot[key]
        if(snapshot[key].createdById === getters.getUserData.id){
          item.key = key
          events.push(item)
        }
      }
      commit('SET_USER_POST', events)
    })
  },
  LOAD_ATTEND_EVENTS: ({getters, commit}) => {
    let eventKey = Object.keys(getters.getUserData.attend)
    //Collection of event keys for firebase to fire
    let promises = eventKey.map(key => {
      return firebase.database().ref(`events`).child(key).once('value').then(snap => snap.val())
    })
    //Fire the collection at once
    Promise.all(promises).then(snapshot => {
      //Returns the attended events
      let sortedArr = snapshot.sort((eventA, eventB) => {
        //Sort the events by date
        return eventA.createdOn < eventB.createdOn
      })
      commit('SET_ATTENDED_EVENTS', sortedArr)
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
            toastr.success('Occurence posted!', {timeout: 1000})
            router.push('/home')
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
  },
  VERIFY_EVENT: ({getters}, {eventKey}) => {
    //Create the reference
    let eventVerifyRef = firebase.database().ref(`events/${eventKey}/verify`)
    eventVerifyRef.once('value', snap => {
      if(snap.hasChild(getters.getUserData.id)){
        //If the user verified this post then delete
        eventVerifyRef.child(getters.getUserData.id).remove().then(() => {
          //Also delete to the users node
          firebase.database().ref(`users/${getters.getUserData.id}/verify`).child(eventKey).remove()
        })
      } else {
        //If the user not yet verified this post
        //Add user id to verify node inside firebase and the counter will update in real time
        eventVerifyRef.child(getters.getUserData.id).set(true).then(() => {
          //Also add to the users node
          firebase.database().ref(`users/${getters.getUserData.id}/verify`).child(eventKey).set(true)
        })
      }
    })
  },
  ATTEND_EVENT: ({getters}, {eventKey}) => {
    //Create the reference
    let userRef = firebase.database().ref(`users/${getters.getUserData.id}/attend`)
    userRef.once('value', snap => {
      if(snap.hasChild(eventKey)){
        //If the user already attended the event delete it
        userRef.child(eventKey).remove()
      } else {
        //If the user is not yet attending then add to firebase
        userRef.child(eventKey).set(true)
        toastr.success('You are now attending!', {timeout: 1000})
      }
    })
  },
  UPDATE_POST: ({getters}, {eventKey, description, eventType}) => {
    //Update an event
    firebase.database().ref(`events/${eventKey}`).update({
      description: description,
      eventType: eventType
    }).then(() => {
      toastr.success('Successfully updated!')
      router.push('/profile')
    }).catch(err => {
      toastr.error('Seems like there\'s an error')
    })
  },
  DELETE_POST: ({getters}, {eventKey}) => {
    //Delete a post to both database and storage
    firebase.database().ref(`events/${eventKey}`).remove().then(() => {
      firebase.database().ref(`users/${getters.getUserData.id}/posts`).child(eventKey).remove().then(() => {
        firebase.storage().ref(`images/${eventKey}`).delete().then(() => {
          toastr.success('Post deleted successfully!')
        })
      })
    }).catch(err => {
      toastr.error('Seems like there\'s an error.')
    })
  },
  //Current edit post data
  GET_EDIT_POST_DATA: ({commit}, {eventKey}) => {
    firebase.database().ref(`events/${eventKey}`).once('value').then(snap => {
      commit('SET_CURRENT_EDIT_EVENT_DATA', snap.val())
    })
  }
}