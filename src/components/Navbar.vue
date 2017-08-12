<template>
  <div>
    <div class="navbar is-fixed" id="nav-scroll">
      <div class="navbar-brand">
        <p class="is-size-3 has-text-primary banner-logo">Occurrence.</p>
        <div class="navbar-burger" :class="{'is-active': navBarToggle}" @click="navBarToggle = !navBarToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div :class="{'is-active': navBarToggle}" class="navbar-end navbar-menu">
        <a class="navbar-item" @click="loginDisplay = true">LOGIN</a>
        <a class="has-text-primary navbar-item" @click="signupDisplay = true">SIGN UP</a>
      </div>
    </div>


    <!-- Sign Up Modal -->
    <div :class="{'is-active': signupDisplay}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">SIGNUP</p>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <!--<article class="message " id="message-type">-->
          <!--<div class="message-body" id="message-content"></div>-->
          <!--</article>-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email" v-model="signup.email">
              <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
            </div>
          </div>
          <!--Div for password input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" v-model="signup.password">
              <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Re-enter Password" v-model="signup.password2">
              <span class="icon is-small is-left">
            <i class="fa fa-refresh"></i>
          </span>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot" style="justify-content:flex-end;">
          <a class="button" @click="signupDisplay = false">Cancel</a>
          <a class="button is-primary" @click="signUpUser">Sign Up</a>
        </footer>
      </div>
    </div>

    <!-- Log In Modal -->
    <div :class="{'is-active': loginDisplay}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">LOGIN</p>
        </header>
        <section class="modal-card-body">
          <!--Div for username input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email" v-model="login.email">
              <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
            </div>
          </div>
          <!--Div for password input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" v-model="login.password">
              <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot" style="justify-content:flex-end;">
          <!-- Added an id(loginClose) -->
          <a class="button" @click="loginDisplay = false">Cancel</a>
          <a class="button is-primary" @click="logInUser">Login</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import toastr from 'toastr'
  export default {
    data(){
      return {
        loginDisplay: false,
        signupDisplay: false,
        navBarToggle: false,
        signup: {
          email: '',
          password: '',
          password2: ''
        },
        login: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signUpUser(){
        if(this.verifyPassword) {
          this.$store.dispatch('signUpUser', {email: this.signup.email, password: this.signup.password})
        } else {
          toastr.error('Passwords do not match.')
        }
      },
      logInUser(){
        this.$store.dispatch('logInUser', {email: this.login.email, password: this.login.password})
      }
    },
    computed: {
      verifyPassword(){
        return this.signup.password === this.signup.password2
      }
    }
  }
</script>