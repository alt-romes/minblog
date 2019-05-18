<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <router-link to="/"><span class="icon"><i class="fas fa-arrow-left"></i></span></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-body">
        <div class="main-container">
          <section class="section">
            <div class="level">
              <div class="level-item">
                <div>
                  <p class="headline">{{settings.aboutDescription}}</p>
                  <p class="title">{{settings.aboutTitle}}</p>
                </div>
              </div>
              <div class="level-item">
                <div>
                  <figure class="image is-128x128">
                    <img :src="settings.aboutImageSrc">
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <div class="content" v-html="sMD"></div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import marked from 'marked'

export default {
  data() {
    return {
      settings: {}
    }
  },
  computed: {
    sMD: function () {
      if(this.settings.markdown) {
        return marked(this.settings.markdown, {breaks: true});
      } else {
        return ''
      }
    }
  },
  created: function () {
    firebase.database().ref("settings").on('value', (s) => {
      this.settings=s.val()
    })
  }
}
</script>
