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
      <div class="navbar-end navbar-menu" :class="{'is-active': navBarToggle}">
        <a class="navbar-item" @click="modal.logInModal=true" v-if="!isUserSignedIn">LOGIN</a>
        <a class="has-text-primary navbar-item" @click="modal.signUpModal=true" v-if="!isUserSignedIn">SIGN UP</a>
        <router-link class="navbar-item tooltip" to="/home" v-if="isUserSignedIn">
            <i class="icons8-home"></i>
            <span class="tooltip-text">Home</span>
        </router-link>
        <router-link class="navbar-item tooltip" to="/occurrence-map" v-if="isUserSignedIn">
          <i class="icons8-gps-device"></i>
          <span class="tooltip-text">Map</span>
        </router-link>
        <router-link class="navbar-item tooltip" to="/home/add" v-if="isUserSignedIn">
          <i class="icons8-plus"></i>
          <span class="tooltip-text">Add</span>
        </router-link>
        <div class="navbar-item has-dropdown" :class="{'is-active': dropDownProfile}" @click="dropDownProfile = !dropDownProfile" v-if="isUserSignedIn">
          <a class="navbar-link"></a>
          <div class="navbar-dropdown is-right">
            <!--
            <div class="navbar-item">
              {{ userFullName }}
            </div>
            -->
            <router-link class="navbar-item" to="/profile" v-if="userDetails">{{ `${userDetails.firstName} ${userDetails.lastName}` }}</router-link>
            <hr class="navbar-divider">
            <a class="has-text-danger navbar-item" @click="logOutUser">LOG OUT</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Sign Up Modal -->
    <div class="modal" :class="{'is-active': modal.signUpModal}">
      <div class="modal-background"></div>
      <div class="modal-card card-wrapper">
        <header class="modal-card-head">
          <p class="modal-card-title">SIGNUP</p>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="columns">
              <div class="column">
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" placeholder="Firstname" v-model="signUp.firstName">
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" placeholder="Lastname" v-model="signUp.lastName">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email" v-model="signUp.email">
              <!--<span class="icon is-small is-left">-->
                <!--<i class="fa fa-envelope"></i>-->
              <!--</span>-->
            </div>
          </div>

          <!--Div for password input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" v-model="signUp.password">
              <span class="icon is-small is-left">
                <i class="icons8-lock"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Re-enter Password" v-model="signUp.password2">
              <span class="icon is-small is-left">
                <i class="icons8-key"></i>
              </span>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot" style="justify-content:flex-end;">
          <a class="button" @click="modal.signUpModal=false">Cancel</a>
          <a class="button is-primary" :disabled="validatePassword" @click="signUpUser">Sign Up</a>
        </footer>
      </div>
    </div>

    <!-- Log In Modal -->
    <div class="modal" :class="{'is-active': modal.logInModal}">
      <div class="modal-background"></div>
      <div class="modal-card card-wrapper">
        <header class="modal-card-head">
          <p class="modal-card-title">LOGIN</p>
        </header>
        <section class="modal-card-body">
          <!--Div for username input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email" v-model="logIn.email">
              <!--<span class="icon is-small is-left">-->
                <!--<i class="fa fa-envelope"></i>-->
              <!--</span>-->
            </div>
          </div>
          <!--Div for password input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" v-model="logIn.password">
              <span class="icon is-small is-left">
            <i class="icons8-lock"></i>
          </span>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot" style="justify-content:flex-end;">
          <a class="button" @click="modal.logInModal=false">Cancel</a>
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
        modal: {
          logInModal: false,
          signUpModal: false
        },
        dropDownProfile: false,
        navBarToggle: false,
        logIn: {
          email: '',
          password: ''
        },
        signUp: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          password2: ''
        }
      }
    },
    methods: {
      //When sign up button is clicked.
      signUpUser(){
        if(this.signUp.firstName && this.signUp.lastName && this.signUp.email && this.signUp.password && this.signUp.password2){
          //Dispatch an action from actions.js bringing the data
          this.$store.dispatch('SIGN_UP_A_USER', {
            firstName: this.signUp.firstName,
            lastName: this.signUp.lastName,
            email: this.signUp.email,
            password: this.signUp.password,
            progress: this.$Progress
          })
          this.clearSignUpField()
        } else {
          toastr.error('Please fill up all the fields.')
        }
      },
      //When log in button is clicked.
      logInUser(){
        if(this.logIn.email && this.logIn.password){
          this.$store.dispatch('LOG_IN_A_USER', {
            email: this.logIn.email,
            password: this.logIn.password,
            //To pass the progress bar instance to vuex action as a payload
            progress: this.$Progress
          })
          this.clearLogInField()
        } else {
          toastr.error('Please fill up all the fields.')
        }
      },
      //When logout button is clicked
      logOutUser(){
        this.$store.dispatch('LOG_OUT_A_USER', {
          progress: this.$Progress
        })
      },
      clearSignUpField(){
        this.signUp.firstName = ''
        this.signUp.lastName = ''
        this.signUp.email = ''
        this.signUp.password = ''
        this.signUp.password2 = ''
        this.modal.signUpModal = false
      },
      clearLogInField(){
        this.logIn.email = ''
        this.logIn.password = ''
        this.modal.logInModal = false
      }
    },
    computed: {
      //Check if password and re-enter password is equal for the button to be enabled
      validatePassword(){
        return this.signUp.password !== this.signUp.password2
      },
      isUserSignedIn(){
        return this.$store.getters.checkIfSignedIn
      },
      //Get user details from vuex getters
      userDetails(){
        return this.$store.getters.getUserData
      }
    }
  }
</script>

<style>
  @import "../assets/css/tooltip.css";

  .navbar-menu a.navbar-item i{
    color: #00d1b2;
  }

  .card-wrapper{
    width:30%;
  }

  @media (max-width: 768px){
    .card-wrapper{
      width: 100%;
    }
  }
</style>