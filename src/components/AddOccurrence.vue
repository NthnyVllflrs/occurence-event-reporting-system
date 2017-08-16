<template>
<div style="padding-top: 72px">
    <div class="container container-width">

      <div class="field">
        <label class="label">Image</label>
        <div class="file has-name is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="resume">
            <span class="file-cta">
              <span class="file-label">
                Choose an image
              </span>
            </span>
            <span class="file-name">
            </span>
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input type="text" class="input">
        </div>
      </div>

      <div class="field">
        <label class="label">Location</label>
        <div class="control">
          <input class="input" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Type</label>
        <div class="control">
          <div class="select">
            <select>
              <option>Convention</option>
              <option>Party</option>
              <option>Seminar</option>
              
              <option>Earthquake</option>
              <option>Fire</option>
              <option>Tsunami</option>
              <option>Typhoon</option>
            </select>
          </div>
        </div>
      </div>

      <div class="control">
        <button class="button is-primary">Submit</button>
      </div>

    </div>
</div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data(){
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .container-width{
    width: 40%;
  }
</style>