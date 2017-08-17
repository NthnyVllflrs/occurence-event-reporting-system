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
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Description">
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
                <p class="control">
                  <button class="button is-primary is-inverted">
                    <span class="icon is-left">
                      <i class="fa fa-globe"></i>
                    </span>
                  </button>
                </p>
              </div>
              
              <div class="field">
                <p class="control has-icons-left">
                  <span class="select">
                    <select>
                      <option>Convention</option>
                      <option>Party</option>
                      <option>Seminar</option>
                      
                      <option>Earthquake</option>
                      <option>Fire</option>
                      <option>Tsunami</option>
                      <option>Typhoon</option>
                    </select>
                  </span>
                  <span class="icon is-small is-left">
                    <i class="fa fa-list"></i>
                  </span>
                </p>
              </div>
              
              <hr />
              
              <div class="is-clearfix">
                <div class="is-pulled-right">
                  <a class="button">
                      <span>Cancel</span>
                    </a>
                    &nbsp
                    <a class="button is-primary">
                      <span>Post</span>
                    </a>
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
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>