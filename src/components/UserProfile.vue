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
            <span class="title is-bold">Anthony Villaflores</span>
            <span class="button is-primary is-inverted is-small" @click="editDisplay = true">
              <span class="icon is-small"><i class="fa fa-edit"></i></span>
            </span>
          </p>
          <p class="">TS201402078@gmail.com</p>
        </div>
        <div class="column is-6">
          <div class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Posts</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Verified</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Bookmarks</p>
                <p class="title">456K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-options">
      <div class="tabs is-fullwidth">
        <ul>
          <li class="link is-active"><a><span class="icon"><i class="fa fa-user"></i></span> <span>My Post</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-check"></i></span> <span>Verified Posts</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-bookmark"></i></span> <span>My Bookmarks</span></a></li>
        </ul>
      </div>
    </div>

    <br />
    
    <div class="columns">
      <div class="column is-6">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://www.engineering.com/Portals/0/BlogFiles/DesignerEdge/0215/Tsunami1.jpg" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column">
                  <div class="is-success is-small">
                    <span class="icon is-small">
                      <i class="fa fa-info"></i>
                    </span>&nbsp;
                    <span>Tsunami Alert</span>
                  </div>
                  <div class="is-success is-small">
                    <span class="icon is-small">
                      <i class="fa fa-map-marker"></i>
                    </span>&nbsp;
                    <span>Zamboanga City</span>
                  </div>
                  <div class="is-success is-small">
                    <span class="icon is-small">
                      <i class="fa fa-list"></i>
                    </span>&nbsp;
                    <span>Tsunami</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="http://i.dailymail.co.uk/i/pix/2016/07/11/16/362A581700000578-3684200-image-a-9_1468251683384.jpg" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column">
                  <div class="is-success is-small">
                    <span class="icon is-small">
                      <i class="fa fa-info"></i>
                    </span>&nbsp;
                    <span>Magnitude 10 Earthquake</span>
                  </div>
                  <div class="is-success is-small">
                    <span class="icon is-small">
                      <i class="fa fa-map-marker"></i>
                    </span>&nbsp;
                    <span>Zamboanga City</span>
                  </div>
                  <div class="is-success is-small">
                    <span class="icon is-small">
                      <i class="fa fa-list"></i>
                    </span>&nbsp;
                    <span>Earthquake</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>

    <div :class="{'is-active': editDisplay}" class="modal">
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
                    <input class="file-input" type="file" id="file" accept=".jpg, .jpeg, .png" @change="getFileName">
                    <span class="file-cta">
                      <span class="file-label">
                        Choose Image
                      </span>
                    </span>
                    <span class="file-name">
                    
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
          <a class="button" @click="editDisplay = false">Cancel</a>
          <a class="button is-primary">Save</a>
        </footer>
      </div>
    </div>
</div>
</div>
</template>

<script>
  import {db} from '../config/firebase'
  import moment from 'moment'
  import firebase from 'firebase'
  import toastr from 'toastr'
  export default {
    data(){
      return {
        editDisplay: false,
      }
    },
    computed: {
      events(){
        return this.$store.getters.loadedOccurence
      }
    }
  }
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import "../assets/css/profile.css";
</style>