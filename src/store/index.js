import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
//The index.js files inside these folders
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

//Initialize VueX Store
export const store = new Vuex.Store({
  //Current state of the app
  state: {
    user: null,
    events: [],
    userPosts: [],
    attendEvents: [],
    isSignedIn: false
  },
  actions,
  mutations,
  getters,
  plugins: [createPersistedState()]
})