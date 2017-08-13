<template>
  <div style="padding-top: 72px">
    <div class="box">
      <div class="field">
        <a class="button is-success is-small">
          <span class="icon is-small">
            <i class="fa fa-sort"></i>
          </span>
          <span>Trending</span>
        </a>
        <a class="button is-success is-small">
          <span class="icon is-small">
            <i class="fa fa-plus"></i>
          </span>
          <span>Add Occurence</span>
        </a>
      </div>
    </div>

    <div class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Random Guy</strong>
              <br>
              <small>31m ago</small>
              <div class="image">
                <img src="https://adobochroniclesdotcom.files.wordpress.com/2016/08/image4.png?w=474" style="height:400px;">
              </div>
            </p>
            <p>
              <div class="field">
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-info"></i>
                  </span>
                  <span>Constitutional Convention</span>
                </div>
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-map-marker"></i>
                  </span>
                  <span>Malacanang Palace</span>
                </div>
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-th-list"></i>
                  </span>
                  <span>Convention</span>
                </div>
              </div>
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <div class="field">
                <a class="button is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Verify</span>
                </a>
                <a class="button is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-users"></i>
                  </span>
                  <span>Attend</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
    </div>

    <div class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Random Guy</strong>
              <br>
              <small>41m ago</small>
              <div class="image">
                <img src="http://cbsminnesota.files.wordpress.com/2012/10/ortonville-hotel-fire-newspaper-photo-1.jpg" style="height:400px;">
              </div>
            </p>
            <p>
              <div class="field">
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-info"></i>
                  </span>
                  <span>My Freakin' House Is On Fire!</span>
                </div>
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-map-marker"></i>
                  </span>
                  <span>Vitali, Zamboanga City</span>
                </div>
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-th-list"></i>
                  </span>
                  <span>Fire</span>
                </div>
              </div>
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <div class="field">
                <a class="button is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Verify</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
    </div>

    <div class="box">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://pbs.twimg.com/profile_images/1634021833/50258_211053130451_5559002_n_400x400.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Random Guy</strong>
              <br>
              <small>51m ago</small>
              <div class="image">
                <img src="http://static.nautil.us/4130_c929f2210333206f417e3862f431776d.jpg" style="height:400px;">
              </div>
            </p>
            <p>
              <div class="field">
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-info"></i>
                  </span>
                  <span>Goodbye Cruel World!</span>
                </div>
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-map-marker"></i>
                  </span>
                  <span>Earth, Solar System, Milky Way</span>
                </div>
                <div class="is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-th-list"></i>
                  </span>
                  <span>Apocalypse</span>
                </div>
              </div>
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <div class="field">
                <a class="button is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-check"></i>
                  </span>
                  <span>Verify</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
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

<style>

</style>