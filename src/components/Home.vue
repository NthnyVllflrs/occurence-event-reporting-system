<template>
  <div style="padding-top: 80px">
    <!-- <div class="box"> -->
      <div class="field">
        <div class = "column is-1 is-offset-5">
        <a class="button is-success is-info is-outlined is-medium">
          <span class="icon is-small">
            <i class="fa fa-sort"></i>
          </span>
          <span>Trending</span>
        </a>
        </div>
        <div class = "column is-2">
        <div class="button2">
        <a class="button is-success is-info is-outlined is-medium">
          <span class="icon is-small">
            <i class="fa fa-plus"></i>
          </span>
          <span>Add Occurence</span>
        </a>
        </div>
      </div>
      </div>

    <!-- first box -->
    <div class="color">
    <div class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-96x96">
            <img src="https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
              <strong>Random Guy / </strong><small>31m ago</small>
          </div>
          <div class="subbox">
            <div class="box">
              <div class="image">
                <img src="https://adobochroniclesdotcom.files.wordpress.com/2016/08/image4.png?w=474" style="height:400px">
              </div>
            <p>
              <div class="field">
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-info"></i>
                  </span>
                  <span>Constitutional Convention</span>
                </div>
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-map-marker"></i>
                  </span>
                  <span>Malacanang Palace</span>
                </div>
                <div class="is-success is-large">
                  <span class="icon is-small">
                    <i class="fa fa-th-list"></i>
                  </span>
                  <span>Convention</span>
                </div>
              </div>
            </p>
          </div>
        </div>
          <nav class="level is-mobile">
            <div class="level-left">
                <div class="verify">
                <a class="button is-success is-info is-outlined is-medium">
                  <span class="icon is-medium">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Verify</span>
                  </a>
                  </div>
                <div class="attend">
                <a class="button is-success is-info is-outlined is-medium">
                  <span class="icon is-medium">
                    <i class="fa fa-users"></i>
                  </span>
                  <span>Attend</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
    </div>
    <!-- end of first box -->
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