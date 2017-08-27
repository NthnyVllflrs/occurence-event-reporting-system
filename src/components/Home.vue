<template>
  <div style="padding-top: 72px">
    <div class="wrapper">
      <div class="post-box" v-for="event in loadEvents" :key="event.key">
        <div class="post-head">
          <img src="https://trackback.net/wp-content/uploads/2015/02/Dummy-profile-picture.png" alt="">
          <div class="post-user">
            <p class="is-size-4 has-text-primary">{{ event.createdByName }}</p>
            <p class="is-size-7">{{ event.createdOn | date }}</p>
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
                <span>Mercedes</span>
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
              <span class="icon" @click="verifyPost(event.key)">
                <i class="fa fa-check btn-is-active"></i>&nbsp;
                <span>{{ (typeof event.verify !== 'undefined' && Object.keys(event.verify).length > 0) ? Object.keys(event.verify).length : 0 }}</span>
              </span>
              <span class="icon">
                <i class="fa fa-calendar-check-o"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods: {
      verifyPost(eventKey){
        //Verify event passing the event key
        this.$store.dispatch('VERIFY_EVENT', {eventKey})
      }
    },
    computed: {
      loadEvents(){
        //Load all events for usage
        return this.$store.getters.getAllEvents
      }
    },
    created(){
      //Dispatching for firebase to be realtime
      this.$store.dispatch('LOAD_EVENTS', {progress: this.$Progress})
      this.$store.dispatch('LOAD_CURRENT_USER', {uid: this.$store.getters.getUserData.id})
    }
  }
</script>

<style scoped>
@import "../assets/css/timeline.css";
</style>