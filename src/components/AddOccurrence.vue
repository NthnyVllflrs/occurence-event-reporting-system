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
                  <input class="input" type="text" placeholder="Description">
                </p>
              </div>

              <div class="field">
                <div class="level">
                  <div class="level-left">
                    <div class="level-item">
                      <div class="field">
                        <p class="control ">
                          <input class="input" type="text" placeholder="Location">
                        </p>
                      </div>
                    </div>
                    <p class="level-item">
                      <a class="button is-primary">
                        <span class="icon"><i class="fa fa-globe"></i></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="field">
                <div class="select">
                  <select>
                    <option>Type</option>
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
              
              <hr>
              <div class="level">
                <div class="level-left"></div>
                <div class="level-right">
                  <p class="level-item">
                    <a class="button">
                      <span>Cancel</span>
                    </a>
                  </p>
                  <p class="level-item">
                    <a class="button is-primary">
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