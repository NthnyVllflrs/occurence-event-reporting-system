export default {
  getUserData: (state) => {
    return state.user
  },
  getAllEvents: (state) => {
    return state.events.sort((eventA, eventB) => {
      return eventA.createdOn < eventB.createdOn
    })
  },
  checkIfSignedIn: (state) => {
    return state.isSignedIn
  },

  //For UserProfile.vue
  getUserPosts: (state) => {
    return state.userPosts
  },
  getAttendEvents: (state) => {
    return state.attendEvents
  }
}