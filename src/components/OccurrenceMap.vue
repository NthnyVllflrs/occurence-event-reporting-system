<template>
<div>
  <div style="padding-top: 72px">
    <div class="container">

      <p>{{ lat }}</p>
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <gmap-map
            :center="center"
            :zoom="13"
            style="width: 100%; 
                   height: 80vh; 
                   border: 2px solid #00d1b2;"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              :title="m.title"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        center: {lat: 6.9214, lng: 122.0790},
        markers: [  
                    {
                      position: {lat: 6.9214, lng: 122.0790}, 
                      title: 'Fire!',
                    },
                    {
                      position: {lat: 6.9500, lng: 122.0850}, 
                      title: 'Earthquake!',
                    },
                 ]
      }
    }
  }
</script>
