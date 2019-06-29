<template>
  <section class="section">
    <div class="main-container">
      <div v-if="loading" class="has-text-centered">
        <span class="icon"><i class="fas fa-circle-notch fa-spin"></i></span>
      </div>
      <div v-else>
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <p @click="showContent=!showContent" class="title is-size-5"><a href="#"><span class="icon"><i class="fas fa-exchange-alt"></i></span></a></p> 
            </div>
            <div class="level-item">
              <router-link to="/about"><p class="title is-size-5"><span class="icon"><i class="far fa-address-card"></i></span></p></router-link>
            </div>
            <div class="level-item">
              <label class="label">{{blogTitle}}</label>
            </div>
            <!-- <div class="level-item">
              <p class="title is-size-5"><span class="icon"><i class="far fa-envelope"></i></span></p>
            </div> -->
          </div>
          <div class="level-right">
            <div class="level-item">
            <router-link to="/dashboard"><p class="title is-size-5"><span class="icon"><i class="fas fa-keyboard"></i></span></p></router-link>
            </div>
          </div>
        </div>
        <Post v-for="post in posts" :key="post.id" :post="post" :showContent="showContent"></Post>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  a {
      text-decoration: none;
      color: inherit;
  }
</style>


<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import app from '../App.vue'

export default {
  name: 'home',
  components: {
    Post
  },
  data () {
      return {
          posts: [],
          loading: true,
          showContent: true,
          blogTitle: 'loading...'
      }
    },
    created: async function () {

      var data = await app.methods.getData();

      console.log(data)

      this.blogTitle = data.settings.blogTitle

      this.posts = []
      var jsonPosts = data.posts
      for (var post in jsonPosts) {
        this.posts.push(jsonPosts[post])
      }
      this.posts.reverse();

      if(this.posts.length<=0) {
        //handle error for no posts
      }

      this.loading=false

    }
}
</script>
