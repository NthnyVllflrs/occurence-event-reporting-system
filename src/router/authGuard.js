import { store } from '../store'

export default (from, to, next) => {
  if(!store.getters.getUserData) {
    next('/')
  } else {
    next()
  }
}