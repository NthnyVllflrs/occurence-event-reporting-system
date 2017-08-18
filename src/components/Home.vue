<template>
  <div style="padding-top: 72px">
    <div class="wrapper">
      <div class="post-box" v-for="event in events" :id="event['.key']">
        <div class="post-head">
          <img src="https://trackback.net/wp-content/uploads/2015/02/Dummy-profile-picture.png" alt="">
          <div class="post-user">
            <p class="is-size-4 has-text-primary">{{ event.createdByName }}</p>
            <p class="is-size-7">{{ event.createdOn }}</p>
          </div>
        </div>
        <div class="post-body">
          <img :src="event.imgUrl" alt="">
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
              <span class="icon">
                <i class="fa fa-check btn-is-active"></i>&nbsp;
                <span>{{ Object.keys(event.verify).length }}</span>
              </span>
              <span class="icon">
                <i class="fa fa-calendar-check-o"></i>
              </span>
              <span class="icon">
                <i class="fa fa-bookmark-o"></i>
              </span>
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
  import firebase from 'firebase'
  import toastr from 'toastr'
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
          let storage = firebase.storage()
          if(this.events){
            this.events.forEach(item => {
              let gsRef = storage.ref(`images/${item['.key']}`)
              gsRef.getDownloadURL().then(url => {
                item.createdOn = moment(item.createdOn).fromNow()
                item.imgUrl = url
              }).catch(err => {
                console.log(err)
              })
            })
          }
        }
      }
    }
  }
</script>

<style scoped>
@import "../assets/css/timeline.css";
</style>