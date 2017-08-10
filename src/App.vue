<template>
  <div>
    <div class="hero is-fullheight is-primary banner-img" id="banner-head">
      <div id = "nav-scroll" class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <p class="is-size-3 has-text-primary banner-logo">Occurrence.</p>
            </div>
            <span :class="{'is-active': navBarToggle}" @click="navBarToggle = !navBarToggle" class="nav-toggle" id="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div :class="{'is-active': navBarToggle}" class="nav-right nav-menu" id="nav-menu">
              <a class="nav-item links" @click="loginDisplay = true">LOGIN</a>
              <div class="nav-item">
                <a id="signup" :class="{'is-inverted': navBarToggle}" class="button is-primary" @click="signupDisplay = true">SIGN UP</a>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div id="banner-text-container">
            <h1 class="is-size-1 title">Occurence.</h1>
            <h2 class="is-size-5 subtitle">A simple web application to report incidents around you.</h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Start of content -->
    <section class="colorSection addPadding">
      <div class="columns">
        <div class="column is-one-third">
        <span class="icon is-large">
          <i class="fa fa-location-arrow"></i>
        </span>
          <p class="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laboriosam placeat voluptatem! Deleniti eaque eos et excepturi nemo, saepe sint voluptatibus! Asperiores doloribus dolorum fugit?</p>
        </div>
        <div class="column">
        <span class="icon is-large">
          <i class="fa fa-phone"></i>
        </span>
          <p class="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti earum eius esse, harum impedit neque nesciunt porro possimus quaerat quo ratione recusandae tempore ut!</p>
        </div>
        <div class="column">
        <span class="icon is-large">
          <i class="fa fa-rss"></i>
        </span>
          <p class="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cumque et eveniet explicabo facilis non nostrum ratione, reiciendis, rem suscipit tempore velit veritatis vitae. Necessitatibus.</p>
        </div>
      </div>
    </section>
    <div style="height: 500px;"></div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Occurence</strong> by <a href="https://eyedeceiver03.github.io/" target="_blank">Joshua Bienes</a>, Renier Antonio and Anthony Villaflores.
          </p>
          <p>
            <a class="icon" href="https://github.com/eyedeceiver03/occurence-event-reporting-system" target="_blank">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>

    <!-- Sign Up Modal -->
    <div :class="{'is-active': signupDisplay}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">SIGNUP</p>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <article class="message " id="message-type">
            <div class="message-body" id="message-content"></div>
          </article>
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
            </div>
          </div>
          <!--Div for password input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
            </div>
          </div>
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Re-enter Password">
              <span class="icon is-small is-left">
            <i class="fa fa-refresh"></i>
          </span>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot" style="justify-content:flex-end;">
          <a class="button" @click="signupDisplay = false">Cancel</a>
          <a class="button is-primary">Sign Up</a>
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
              <input class="input" type="email" placeholder="Email">
              <span class="icon is-small is-left">
            <i class="fa fa-envelope"></i>
          </span>
            </div>
          </div>
          <!--Div for password input field-->
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="password" placeholder="Password">
              <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
          </span>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot" style="justify-content:flex-end;">
          <!-- Added an id(loginClose) -->
          <a class="button" @click="loginDisplay = false">Cancel</a>
          <a class="button is-primary">Login</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import scripts from './assets/js/scripts' //for main page to work
  export default {
    data () {
      return {
        loginDisplay: false,
        signupDisplay: false,
        navBarToggle: false
      }
    }
  }
</script>

<style lang="css">
  @import "../node_modules/bulma/css/bulma.css";
  @import "./assets/css/styles.css";
</style>

