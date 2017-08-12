<template>
  <div style="padding-top: 50px">
    <h1>Hello</h1>
    <button @click="logoutUser">Log Out</button>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data(){
      return {

      }
    },
    methods: {
      logoutUser(){
        firebase.auth().signOut().then(() => {
          console.log('successful')
          this.$router.push('/')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style>

</style>