<template>
  <div style="padding-top: 72px">
    <div class="container container-width">

        <div class="level">
          <div class="level-left">
          </div>
          <div class="level-right">
            <a class="button is-small is-primary" href="/home/AddOccurrence">
              <span class="icon is-small">
                <i class="fa fa-plus"></i>
              </span>
              <span>Add Occurrence</span>
            </a>
          </div>
        </div>

      <div class="box">
        <!-- Box Header -->
        <div class="columns">
          <div class="column">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://pickaface.net/gallery/avatar/katsukidjess52b86e6c514c7.png" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">Nthny Vllflrs</p>
                <p class="subtitle is-7">2 mins</p>
              </div>
              <div class="media-right">
                <button class="delete is-small"></button>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Box Header -->

        <!-- Box Image -->
        <div class="columns">
          <div class="column">
            <div class="image is-2by1">
              <img src="http://www.yearbooklove.com/wp-content/uploads/2015/05/1st_academics_3817991-640x320.jpg">
            </div>
          </div>
        </div>
        <!-- End of Box Image -->
      
      <div class="columns">
        <div class="column">
          <span class="icon is-small">
            <i class="fa fa-info"></i>
          </span>
          <span>WMSU Palaro Rave Party 2k17</span>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <span class="icon is-small">
            <i class="fa fa-map-marker"></i>
          </span>
          <span>WMSU Open Field</span>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <span class="icon is-small">
            <i class="fa fa-th-list"></i>
          </span>
          <span>Party</span>
        </div>
      </div>

      <div class="columns">
        <div class="column">
        <!--
          <a class="button is-primary is-inverted">
            <span class="icon">
              <i class="fa fa-check"></i>
            </span>
          </a>
          <a class="button is-primary is-inverted">
            <span class="icon">
              <i class="fa fa-users"></i>
            </span>
          </a>
          <a class="button is-primary is-inverted">
            <span class="icon">
              <i class="fa fa-bookmark"></i>
            </span>
          </a>
          -->
          <p class="field">
            <a class="button is-primary is-inverted">
              <span class="icon">
                <i class="fa fa-check"></i>
              </span>
            </a>
            <a class="button is-primary is-inverted">
              <span class="icon">
                <i class="fa fa-users"></i>
              </span>
            </a>
            <a class="button is-primary is-inverted">
              <span class="icon">
                <i class="fa fa-bookmark"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
        
      </div>
    </div>
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

    }
  }
</script>

<style>

</style>