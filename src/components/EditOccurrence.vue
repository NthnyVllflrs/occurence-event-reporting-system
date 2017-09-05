<template>
  <div style="padding-top: 72px">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
              <h1 class="title">
                Edit an Occurrence
              </h1>

              <div class="box">
                <img v-if="getEditEventData" :src="getEditEventData.imgUrl" alt="">
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Description" v-model="eventDescription = getEditEventData.description">
                    <span class="icon is-small is-left">
                      <i class="fa fa-info"></i>
                    </span>
                  </p>
                </div>

                <div class="field has-addons">
                  <p class="control has-icons-left">
                    <input class="input" type="text" placeholder="Location" disabled>
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
                    <select v-model="selectedEventType = getEditEventData.eventType">
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
                      <a class="button is-primary" @click="updateEvent">
                        <span>Update</span>
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
    </section>
  </div>
</template>

<script>
  export default {
    data(){
      return {
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
        console.log(file.files[0])
        //To display the file name
        this.fileName = file.files[0].name
      },
      updateEvent(){
        let description = this.eventDescription
        let eventType = this.selectedEventType
        if(description && eventType){
          this.$store.dispatch('UPDATE_POST', {
            eventKey: this.$route.params.id,
            description,
            eventType
          })
        }
      }
    },
    computed: {
      getEditEventData(){
        //Getting the event data
        return this.$store.getters.getEditEventData
      }
    },
    created(){
      //Get the current event to edit
      this.$store.dispatch('GET_EDIT_POST_DATA', {
        eventKey: this.$route.params.id
      })
    },
    beforeDestroy(){
      //When leaving this page delete the current event data
      this.$store.commit('DELETE_CURRENT_EDIT_EVENT_DATA')
    }
  }
</script>
