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
                    <input class="file-input" type="file" id="file" accept=".jpg, .jpeg, .png" @change="getFileName">
                    <span class="file-cta">
                      <span class="file-label">
                        Choose Image
                      </span>
                    </span>
                    <span class="file-name">
                      {{ fileName }}
                    </span>
                  </label>
                </div>
              </div>

              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Description" v-model="description">
                  <span class="icon is-small is-left">
                    <i class="fa fa-info"></i>
                  </span>
                </p>
              </div>

              <div class="field has-addons">
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Location" v-model="place" disabled>
                  <span class="icon is-small is-left">
                    <i class="fa fa-map-marker"></i>
                  </span>
                </p>
                <p class="control">
                  <button class="button is-primary is-inverted" @click="toggleMaps = true">
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
      <!--Google maps-->
    <div class="modal" :class="{'is-active': toggleMaps}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <gmap-autocomplete class="input" @place_changed="setPlace"></gmap-autocomplete>
        <Gmap-map
          :center="center"
          :zoom="10"
          map-type-id="terrain"
          style="width: 100%; height: 500px;"
        >
          <gmap-marker
            :position="center"
            :clickable="true"
          >
            <!--Will change later, draggable with coords-->
          </gmap-marker>
        </Gmap-map>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleMaps = false"></button>
    </div>
  </section>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        fileName: '',
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
        ],
        toggleMaps: false,
        center: {
          lat: 10,
          lng: 10
        },
        place: ''
      }
    },
    methods: {
      postEvent(){
        let date = new Date()
        let iso = date.toISOString()
        let file = document.getElementById('file')
        let description = this.description
        let selectedEventType = this.selectedEventType
        let place = this.place
        let lat = this.center.lat
        let lng = this.center.lng

        this.$store.dispatch('addOccurence', {
          description,
          eventType: selectedEventType,
          createdOn: iso,
          file: file.files[0],
          place,
          lat,
          lng
        })
        this.description = ''
        this.selectedEventType = 'Convention'
      },
      getFileName(){
        let file = document.getElementById('file')
        this.fileName = file.files[0].name
      },
      setPlace(place){
        let geolocation = {}
        geolocation.lat = place.geometry.location.lat()
        geolocation.lng = place.geometry.location.lng()
        this.center = geolocation
//        console.log(place.geometry.location.lat())
        this.place = place.formatted_address
      }
    },
    mounted(){
      axios.get('http://ip-api.com/json').then(res => {
        let geolocation = {}
        geolocation.lat = res.data.lat
        geolocation.lng = res.data.lon
        this.center = geolocation
      })
    }
  }
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>