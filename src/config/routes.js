import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import Home from '../components/Home.vue'

const routes = [
  {path: '/', component: LandingPage},
  {path: '/home', component: Home}
]

export const router = new VueRouter({
  mode: 'history',
  routes
})