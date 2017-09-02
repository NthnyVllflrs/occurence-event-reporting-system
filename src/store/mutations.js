export default {
  SET_USER: (state, payload) => {
    state.user = payload
  },
  SET_EVENT: (state, payload) => {
    state.events = payload
  },
  AUTH_CHANGE: (state, payload) => {
    state.isSignedIn = payload
  },
  SET_USER_POST: (state, payload) => {
    state.userPosts = payload
  },
  SET_ATTENDED_EVENTS: (state, payload) => {
    state.attendEvents = payload
  }
}