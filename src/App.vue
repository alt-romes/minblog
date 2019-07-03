<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>

import LightningFS from '@isomorphic-git/lightning-fs'
import * as git from 'isomorphic-git'
import { parse } from 'path';
import { stringify } from 'querystring';

/**
 * Change the links below to your own according to the guide.
 */
const gitUrl = "https://github.com/alt-romes/minblog"




export default {
  data () {
    return {
    }
  },
  created: function () {
    window.fs = new LightningFS('fs', { wipe: true })
    git.plugins.set('fs', window.fs)
    window.pfs = window.fs.promises
    window.dir = '/teste'
  },
  methods: {
    createdLogin: async function () {
      var readdir = await pfs.readdir(dir).catch(async (err) => {
        console.log(err)
        await pfs.mkdir(dir);
      })
      if (readdir) console.log(readdir)
      await git.clone({
        dir: dir,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: gitUrl,
        ref: 'master',
        depth: 1,
        singleBranch: true,
        tags: false
      })
    },
    login: async function (usr, pass) {
      this.username = usr;
      this.password = pass;
      return await git.push({
        dir: dir,
        remote: 'origin',
        ref: 'master',
        username: usr,
        password: pass
      }).catch((err) => {
        if(err.toString().substring(0, 9)=="HTTPError") return false
        return true
      })
    },
    signOut: function () {
      this.username = null
      this.password = null
    },
    isLoggedIn: function () {
      if (this.username && this.password) return true
      return false
    },
    getData: async function () {
      var urlAux = gitUrl.split("github.com/")[1]
      this.jsonData = await fetch('https://raw.githubusercontent.com/' + urlAux + '/master/public/data.json').then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        var data = response.json().then(function (data) {
          return data
        });
        return data
      })
      return this.jsonData
    },
    deletePost: function (id) {
      delete this.jsonData.posts[id]
      this.writeToGithub()
    },
    editPost: async function (id, post) {
      this.jsonData.posts[id] = post
      this.writeToGithub()
    },
    newPost: async function (post) {
      post.id = this.jsonData.posts[this.jsonData.posts.length-1]+1
      this.jsonData.posts[post.id] = post
      this.writeToGithub()
    },
    changeSettings: async function(settings) {
      this.jsonData.settings = settings
      this.writeToGithub()
    },
    writeToGithub: async function() {
      await fs.writeFile(dir + '/public/data.json', JSON.stringify(this.jsonData), 'utf8')
      await git.add({dir: dir + "/public/", filepath: 'data.json'})
      var commit = await git.commit({
        dir: dir,
        author: {
          name: this.username,
          email: 'alt.romes@gmail.com'
        },
        message: 'updated content'
      })
      console.log(commit)
      let pushResponse = await git.push({
        dir: dir,
        remote: 'origin',
        branch: 'master',
        username: this.username,
        password: this.password
      })
      console.log(pushResponse)
    }
  }
}
</script>


