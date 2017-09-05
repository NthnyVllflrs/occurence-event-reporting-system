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
  },
  //Set editEventData when entering the edit page
  SET_CURRENT_EDIT_EVENT_DATA: (state, payload) => {
    state.editEventData = payload
  },
  //Delete editEventData when you leave the edit page
  DELETE_CURRENT_EDIT_EVENT_DATA: (state) => {
    state.editEventData = null
  }
}