<template>
  <div>
    <vue-progress-bar></vue-progress-bar>
    <Navbar></Navbar>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import scripts from './assets/js/scripts' //for main page to work
import Navbar from './components/Navbar.vue'
export default {
  //Registering a Navbar component to be used in this component
  components: {
    'Navbar': Navbar
  }
}
</script>

<style>
  @import "./../node_modules/toastr/build/toastr.css";
  @import "./../node_modules/bulma/css/bulma.css";
  @import "./assets/css/styles.css";
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
