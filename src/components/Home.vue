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
                <span class="icon tooltip">
                  <i class="icons8-info"></i>
                  <span class="tooltip-text">Description</span>
                </span>
                <span>{{ event.description }}</span>
              </div>
              
              <div class="is-success is-small">
                <span class="icon tooltip">
                  <i class="icons8-adventures"></i>
                  <span class="tooltip-text">Location</span>
                </span>
                <span>Mercedes</span>
              </div>

              <div class="is-success is-small">
                <span class="icon tooltip">
                  <i class="icons8-bookmark"></i>
                  <span class="tooltip-text">Type</span>
                </span>
                <span>{{ event.eventType }}</span>
              </div>
            </div>

            <hr>

            <div class="control">
              <span class="icon tooltip" @click="verifyPost(event.key)">
                <i class="icons8-checkmark ops" :class="{'btn-is-active': event.verify && event.verify.hasOwnProperty(`${ getUserId }`)}"></i>&nbsp;
                <span>{{ (typeof event.verify !== 'undefined' && Object.keys(event.verify).length > 0) ? Object.keys(event.verify).length : 0 }}</span>
                <span class="tooltip-text">Verify</span>
              </span>
              
              <span class="icon tooltip" @click="attendEvent(event.key)">
                <i class="icons8-group ops" :class="{'btn-is-active': getUserEvents && getUserEvents.hasOwnProperty(`${event.key}`)}"></i>
                <span class="tooltip-text">Attend</span>
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
        toggleVerify: false
      }
    },
    methods: {
      verifyPost(eventKey){
        //Verify event passing the event key
        this.$store.dispatch('VERIFY_EVENT', {eventKey})
      },
      attendEvent(eventKey){
        this.$store.dispatch('ATTEND_EVENT', {eventKey})
      }
    },
    computed: {
      loadEvents(){
        //Load all events for usage
        return this.$store.getters.getAllEvents
      },
      getUserId(){
        return this.$store.getters.getUserData.id
      },
      getUserEvents(){
        return this.$store.getters.getUserData.attend
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
@import "../assets/css/tooltip.css";
</style>