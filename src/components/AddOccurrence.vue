<template>
<div style="padding-top: 72px">
    <section class="hero is-bold">

    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Add an Occurrence
            </h1>
            
            <div class="box">
              <div class="field">
                <div class="file is-small has-name is-fullwidth">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                      <span class="file-label">
                        Choose Image
                      </span>
                    </span>
                    <span class="file-name">
                      Screen Shot 2017-07-29 at 15.54.25.png
                    </span>
                  </label>
                </div>
              </div>

              <div class="field">
                <p class="control">
                  <input class="input" type="text" placeholder="Description" v-model="description">
                </p>
              </div>

              <div class="field has-addons">
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Location">
                  <span class="icon is-small is-left">
                    <i class="fa fa-map-marker"></i>
                  </span>
                </p>
                <p class="control">
                  <button class="button is-primary is-inverted">
                    <span class="icon is-left">
                      <i class="fa fa-globe"></i>
                    </span>
                  </button>
                </p>
              </div>
              
              <div class="field">
                <div class="select">
                  <select v-model="selectedEventType">
                    <option v-for="option in eventTypeOptions" :value="option.text">
                      {{option.text}}
                    </option>
                  </select>
                </div>
              </div>
              
              <hr>
              <div class="level">
                <div class="level-left"></div>
                <div class="level-right">
                  <p class="level-item">
                    <a class="button is-primary" @click="postEvent">
                      <span>Post</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</div>
</template>

<script>
  import firebase from 'firebase'
  import toastr from 'toastr'
  import moment from 'moment'
  export default {
    data(){
      return {
        description: '',
        selectedEventType: 'Convention',
        eventTypeOptions: [
          {text: 'Convention'},
          {text: 'Party'},
          {text: 'Seminar'},
          {text: 'Earthquake'},
          {text: 'Fire'},
          {text: 'Tsunami'},
          {text: 'Typhoon'}
        ]
      }
    },
    methods: {
      postEvent(){
        let user = this.$store.getters.currentUser
        let date = new Date()
        let iso = date.toISOString()
        firebase.database().ref('/events').push({
          createdBy: user.id,
          description: this.description,
          eventType: this.selectedEventType,
          createdOn: iso,
          verify: {
            uid: user.id
          }
        }).then(() => {
          toastr.success('Success!', 'Occurence created.')
          this.description = ''
          this.selectedEventType = 'Convention'
          this.$router.push('/home')
        }).catch(err => {
          toastr.error(err)
        })
      }
    }
  }
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>