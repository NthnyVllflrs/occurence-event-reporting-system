<template>
<div>
  <div style="padding-top: 72px">
    <div class="container profile">
      <div class="section profile-heading">
        <div class="columns is-vcentered">
          <div class="column">
            <div class="image is-128x128">
              <img src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/77508/Robot_Head_Even.png">
            </div>
          </div>
          <div class="column is-5">
            <p>
              <span class="title is-bold">{{ `${this.$store.getters.getUserData.firstName} ${this.$store.getters.getUserData.lastName}` }}</span>
              <span class="button is-primary is-inverted is-small" @click="editProfileModal = true">
                <span class="icon is-small"><i class="icons8-create-new"></i></span>
              </span>
            </p>
            <p class="">{{ this.$store.getters.getUserData.email }}</p>
          </div>
          <div class="column is-6">
            <div class="level is-mobile">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Posts</p>
                  <p class="title">{{ checkNumberOfPosts }}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Verified</p>
                  <p class="title">{{ checkNumberOfVerify }}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Attend</p>
                  <p class="title">{{ checkNumberOfAttend }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-options">
        <div class="tabs is-fullwidth">
          <ul>
            <li class="link" :class="{'is-active': myPost}" @click="myPostIsActive">
              <a>
                <span class="icon"><i class="icons8-gender-neutral-user"></i></span>
                <span>My Post</span>
              </a>
            </li>
            <li class="link" :class="{'is-active': attending}" @click="attendingIsActive">
              <a>
                <span class="icon"><i class="icons8-group"></i></span>
                <span>Attending</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <br />

      <!--My Posts-->
      <div class="wrapper" v-if="myPost">
        <div class="post-box" v-for="event in loadUserPosts" :key="event.key">
          <div class="post-head upper-box">
            <img src="https://trackback.net/wp-content/uploads/2015/02/Dummy-profile-picture.png" alt="">
            <div class="post-user">
              <p class="is-size-4 has-text-primary is-size-6-mobile">{{ event.createdByName }}</p>
              <p class="is-size-7">{{ event.createdOn | date }}</p>
            </div>
            <a class="delete" @click="deletePostModal=true"></a>
          </div>
          <div class="post-body">
            <img :src="event.imgUrl" alt="">
          </div>
          <div class="post-foot">
            <div class="details">
              <div class="field">
                <div class="is-success is-small">
                <span class="icon">
                  <i class="icons8-info"></i>
                </span>
                  <span>{{ event.description }}</span>
                </div>
                <div class="is-success is-small">
                <span class="icon">
                  <i class="icons8-adventures"></i>
                </span>
                  <span>Mercedes</span>
                </div>
                <div class="is-success is-small">
                <span class="icon">
                  <i class="icons8-bookmark"></i>
                </span>
                  <span>{{ event.eventType }}</span>
                </div>
              </div>
              <hr>
              <div class="control">
                <a class="button is-primary is-outlined" @click="editPost(event.key)"><i class="icons8-pencil"></i><span>Edit</span></a>
              </div>
            </div>
          </div>

          <div class="modal" :class="{'is-active': deletePostModal}">
            <div class="modal-background"></div>
            <div class="modal-card card-wrapper">
              <header class="modal-card-head">
                <p class="modal-card-title">Deleting Post...</p>
              </header>
              <section class="modal-card-body">
                <p class="is-size-6">Are you sure? You won't find it anywhere anymore.</p>
              </section>
              <footer class="modal-card-foot" style="justify-content:flex-end;">
                <a class="button" @click="deletePostModal=false">Cancel</a>
                <a class="button is-danger" @click="deletePost(event.key)">Delete</a>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <!--Attending Posts-->
      <div class="wrapper" v-if="attending">
        <div class="post-box" v-for="event in loadAttendEvents" :key="event.key">
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
                <span class="icon">
                  <i class="icons8-info"></i>
                </span>
                  <span>{{ event.description }}</span>
                </div>
                <div class="is-success is-small">
                <span class="icon">
                  <i class="icons8-adventures"></i>
                </span>
                  <span>Mercedes</span>
                </div>
                <div class="is-success is-small">
                <span class="icon">
                  <i class="icons8-bookmark"></i>
                </span>
                  <span>{{ event.eventType }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div :class="{'is-active': editProfileModal}" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card card-wrapper">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Profile</p>
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="field">
              <div class="image is-square">
                <img src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/77508/Robot_Head_Even.png" class="editProfile">
              </div>
            </div>
            <div class="field">
              <div class="file is-small has-name is-fullwidth">
                <label class="file-label">
                  <input class="file-input" type="file" id="file" accept=".jpg, .jpeg, .png">
                  <span class="file-cta">
                    <span class="file-label">
                      Choose Image
                    </span>
                  </span>
                  <span class="file-name">
                    <!--File name here-->
                  </span>
                </label>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Firstname">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Lastname">
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot" style="justify-content:flex-end;">
        <a class="button" @click="editProfileModal = false">Cancel</a>
        <a class="button is-primary">Save</a>
      </footer>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        editProfileModal: false,
        deletePostModal: false,
        myPost: true,
        attending: false
      }
    },
    methods: {
      //When myPost data is active
      myPostIsActive(){
        this.myPost = true
        this.attending = false
      },
      attendingIsActive(){
        this.myPost = false
        this.attending = true
      },
      editPost(eventKey){
        this.$router.push(`/edit/${eventKey}`)
      },
      deletePost(eventKey){
        this.$store.dispatch('DELETE_POST', {eventKey})
      }
    },
    computed: {
      loadUserPosts(){
        //Load all posts by the user
        return this.$store.getters.getUserPosts
      },
      loadAttendEvents(){
        return this.$store.getters.getAttendEvents
      },
      checkNumberOfPosts(){
        //Count number of posted events to render inside UserProfile.vue
        //Logic is a little complicated though, but it works
        return (typeof this.$store.getters.getUserData.posts !== 'undefined' && Object.keys(this.$store.getters.getUserData.posts).length > 0) ? Object.keys(this.$store.getters.getUserData.posts).length : 0
      },
      checkNumberOfVerify(){
        return (typeof this.$store.getters.getUserData.verify !== 'undefined' && Object.keys(this.$store.getters.getUserData.verify).length > 0) ? Object.keys(this.$store.getters.getUserData.verify).length : 0
      },
      checkNumberOfAttend(){
        return (typeof this.$store.getters.getUserData.attend !== 'undefined' && Object.keys(this.$store.getters.getUserData.attend).length > 0) ? Object.keys(this.$store.getters.getUserData.attend).length : 0
      }
    },
    created(){
      this.$store.dispatch('LOAD_USER_POST')
      this.$store.dispatch('LOAD_ATTEND_EVENTS')
    }
  }
</script>

<style scoped>
  @import "../assets/css/timeline.css";
  @import "../assets/css/profile.css";

  .wrapper .post-box .post-head.upper-box{
    display: flex;
  }
  .wrapper .post-box .post-head.upper-box .post-user{
    flex: 1;
  }
  .wrapper .post-box .post-head.upper-box a.delete{
    flex: 4;
  }

  .control a.button:hover i{
    color: white;
  }
</style>