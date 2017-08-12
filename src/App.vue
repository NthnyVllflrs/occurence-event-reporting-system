<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import scripts from './assets/js/scripts' //for main page to work
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      'Navbar': Navbar
    },
    data(){
      return {

      }
    }
  }
</script>

<style>
  @import "./../node_modules/toastr/build/toastr.css";
  @import "./../node_modules/bulma/css/bulma.css";
  @import "./assets/css/styles.css";
</style>



