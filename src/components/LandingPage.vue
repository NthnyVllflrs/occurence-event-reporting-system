<template>
  <div>
    <div class="hero is-fullheight is-primary banner-img" id="banner-head">
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
          <i class="icons8-adventures"></i>
        </span>
          <p class="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laboriosam placeat voluptatem! Deleniti eaque eos et excepturi nemo, saepe sint voluptatibus! Asperiores doloribus dolorum fugit?</p>
        </div>
        <div class="column">
        <span class="icon is-large">
          <i class="icons8-iphone"></i>
        </span>
          <p class="is-size-6 has-text-centered">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti earum eius esse, harum impedit neque nesciunt porro possimus quaerat quo ratione recusandae tempore ut!</p>
        </div>
        <div class="column">
        <span class="icon is-large">
          <i class="icons8-group"></i>
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
            <strong>Occurence</strong> by <a href="https://eyedeceiver03.github.io/" target="_blank">Joshua Bienes</a>, Anthony Villaflores, Lix Billones and Renier Antonio.
          </p>
          <p>
            <a class="icon" href="https://github.com/eyedeceiver03/occurence-event-reporting-system" target="_blank">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .column{
    display: inline-block;
    text-align: center;
  }

  .column .icon{
    border: 2px solid #00d1b2;
    border-radius: 50%;
    padding: 40px;
    margin-bottom: 10px;
  }

  .column .icon i{
    color: #00d1b2;
    font-size: 36px;
  }
</style>