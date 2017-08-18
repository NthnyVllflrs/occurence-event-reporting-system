<template>
  <div style="padding-top: 72px">
    <div class="wrapper">
      <div class="post-box" v-for="event in events" :id="event['.key']">
        <div class="post-head">
          <img src="https://trackback.net/wp-content/uploads/2015/02/Dummy-profile-picture.png" alt="">
          <div class="post-user">
            <p class="is-size-4 has-text-primary">John Doe</p>
            <p class="is-size-7">{{ event.createdOn }}</p>
          </div>
        </div>
        <div class="post-body">
          <img src="http://www.windman.co.il/wp-content/uploads/2013/08/windman-corporate-events-student-rave-2013-08-800x450.jpg" alt="">
        </div>
        <div class="post-foot">
          <div class="details">
            <div class="field">
              <div class="is-success is-small">
                <span class="icon is-small">
                  <i class="fa fa-info"></i>
                </span>&nbsp;
                <span>{{ event.description }}</span>
              </div>
              <div class="is-success is-small">
                <span class="icon is-small">
                  <i class="fa fa-map-marker"></i>
                </span>&nbsp;
                <span>WMSU Open Grounds</span>
              </div>
              <div class="is-success is-small">
                <span class="icon is-small">
                  <i class="fa fa-th-list"></i>
                </span>&nbsp;
                <span>{{ event.eventType }}</span>
              </div>
            </div>
            <hr>
            <div class="control">
              <div class="buttons">
                <i class="fa fa-check btn-is-active"></i>&nbsp;
                <span>{{ Object.keys(event.verify).length }}</span>
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
  </div>
</template>

<script>
  import {db} from '../config/firebase'
  import moment from 'moment'
  export default {
    data(){
      return {
        events: {}
      }
    },
    firebase: {
      events: {
        source: db.ref('events'),
        readyCallback: function () {
          if(this.events){
            this.events.forEach(item => {
              item.createdOn = moment(item.createdOn).fromNow()
            })
          }
        }
      }
    },
    methods: {

    },
    computed: {
//      changeTime(){
//        return this.events.forEach(item => {
//          item.createdOn = moment(item.createdOn).fromNow()
//          console.log(item.createdOn)
//        })
//      }
    }
  }
</script>

<style scoped>
@import "../assets/css/timeline.css";
</style>