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
                    <input class="input" type="text" placeholder="Description" v-model="eventDescription">
                    <span class="icon is-small is-left">
                      <i class="fa fa-info"></i>
                    </span>
                  </p>
                </div>

                <div class="field has-addons">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Location">
                    <span class="icon is-small is-left">
                      <i class="fa fa-map-marker"></i>
                    </span>
                  </p>
                  <p class="control" @click="toggleMaps=true">
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
                      <a class="button is-primary" @click="submitEvent">
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
    <!--<div class="modal" :class="{'is-active': toggleMaps}">-->
      <!--<div class="modal-background"></div>-->
      <!--<div class="modal-content">-->
        <!--<gmap-autocomplete class="input" @place_changed="setPlace"></gmap-autocomplete>-->
        <!--<Gmap-map-->
          <!--:center="center"-->
          <!--:zoom="10"-->
          <!--map-type-id="terrain"-->
          <!--style="width: 100%; height: 500px;"-->
        <!--&gt;-->
          <!--<gmap-marker-->
            <!--:position="center"-->
            <!--:clickable="true"-->
          <!--&gt;-->
            <!--&lt;!&ndash;Will change later, draggable with coords&ndash;&gt;-->
          <!--</gmap-marker>-->
        <!--</Gmap-map>-->
      <!--</div>-->
      <!--<button class="modal-close is-large" aria-label="close" @click="toggleMaps = false"></button>-->
    <!--</div>-->

    <div class="modal" :class="{'is-active': toggleMaps}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <gmap-map
          :center="center"
          :zoom="13"
          style="width: 500px; height: 300px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleMaps=false"></button>
    </div>

    </section>
  </div>
</template>

<script>
//  import axios from 'axios'
  import toastr from 'toastr'
  export default {
    data(){
      return {
        center: {lat: 6.9093, lng: 122.088},
        markers: [
          {position: {lat: 6.9100, lng: 122.1047}},
          {position: {lat: 6.9093, lng: 122.088}},
        ],
        toggleMaps: false,
        fileName: '',
        eventDescription: '',
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
      getFileName(){
        let file = document.getElementById('file')
        //To display the file name
        this.fileName = file.files[0].name
      },
      submitEvent(){
        let file = document.getElementById('file')
        let description = this.eventDescription
        let eventType = this.selectedEventType
        //If all the fields are filled up.
        if(file.files && description && eventType){
          //Call ADD_EVENTS action from actions.js with payload
          this.$store.dispatch('ADD_EVENTS', {
            img: file.files[0],
            createdOn: new Date().toISOString(),
            description,
            eventType
          })
        } else {
          toastr.error('Please fill up all the fields.')
        }
        //Clear all the fields after clicking submit
        this.clearAddFields()
      },
      clearAddFields(){
        this.fileName = ''
        this.eventDescription = ''
      }
    }
//    mounted(){
//      axios.get('http://ip-api.com/json').then(res => {
//        let geolocation = {}
//        geolocation.lat = res.data.lat
//        geolocation.lng = res.data.lon
//        this.center = geolocation
//      })
//    }
  }
</script>
