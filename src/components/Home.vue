<template>
  <div style="padding-top: 72px">
    <div class="wrapper">
      <div class="post-box">
        <div class="post-head">
          <img src="https://trackback.net/wp-content/uploads/2015/02/Dummy-profile-picture.png" alt="">
          <div class="post-user">
            <p class="is-size-4 has-text-primary">John Doe</p>
            <p class="is-size-7">14 minutes ago</p>
          </div>
        </div>
        <div class="post-body">
          <img src="http://www.windman.co.il/wp-content/uploads/2013/08/windman-corporate-events-student-rave-2013-08-800x450.jpg" alt="">
        </div>
        <div class="post-foot">
          <div class="details">
            <div>
              <i class="fa fa-info"></i>&nbsp;
              <span>WMSU Palaro Rave Party 2k17</span>
            </div>
            <div>
              <i class="fa fa-map-marker"></i>&nbsp;
              <span>WMSU Open Field</span>
            </div>
            <div>
              <i class="fa fa-th-list"></i>&nbsp;
              <span>Party</span>
            </div>
          </div>
          <hr>
          <div class="control">
            <div class="buttons">
              <i class="fa fa-check btn-is-active"></i>&nbsp;
              <span>100</span>
            </div>
            <div class="buttons">
              <i class="fa fa-users"></i>
            </div>
            <div class="buttons">
              <i class="fa fa-bookmark"></i>
            </div>
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

<style scoped>
@import "../assets/css/timeline.css";
</style>