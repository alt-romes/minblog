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
 * CONFIGURATION:
 *
 * Change the links below to your own according to the guide.
 */
//This is your github repository's url. Don't end the link with ".git" or "/" in the end
var gitUrl = "https://github.com/alt-romes/minblogdemo"
//This is the email the commits will be assigned to, this will be shown only in this github repository.
const email = "alt.romes@gmail.com"







export default {
  data () {
    return {
    }
  },
  created: function () {
    if(gitUrl.endsWith(".git")) gitUrl=gitUrl.substring(0, gitUrl.length - 4)
    window.fs = new LightningFS('fs', { wipe: true })
    git.plugins.set('fs', window.fs)
    window.pfs = window.fs.promises
    window.dir = '/site'
  },
  methods: {
    createdLogin: async function () {
      if(!this.jsonData) this.getData()
      var readdir = await pfs.readdir(dir).catch(async (err) => {
        await pfs.mkdir(dir);
      })
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
      if(!this.jsonData) {
        var urlAux = gitUrl.split("github.com/")[1]
        this.jsonData = await fetch('https://raw.githubusercontent.com/' + urlAux + '/master/data.json').then(function (response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          var data = response.json().then(function (data) {
            return data
          });
          return data
        })
      }
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
      if(this.jsonData.posts.length==0)
        post.id = 0;
      else
        post.id = this.jsonData.posts[(this.jsonData.posts.length-1).toString()].id+1
      this.jsonData.posts[post.id] = post
      this.writeToGithub()
    },
    changeSettings: async function(settings) {
      this.jsonData.settings = settings
      this.writeToGithub()
    },
    writeToGithub: async function() {
      var parsedobj = JSON.parse(JSON.stringify(this.jsonData))
      var toWrite = new TextEncoder().encode(JSON.stringify(parsedobj))
      await pfs.writeFile(dir + '/data.json', toWrite, async (e) => {if(e) console.log(e)})
      await git.add({dir: dir, filepath: 'data.json'}).catch((err) => {console.log("add: " + err)})
      var commit = await git.commit({
        dir: dir,
        author: {
          name: this.username,
          email: email
        },
        message: 'updated content'
      }).catch((err) => {console.log("commit: "+ err)})
      // console.log(commit + "hey")
      let pushResponse = await git.push({
        dir: dir,
        force: true,
        remote: 'origin',
        branch: 'master',
        username: this.username,
        password: this.password
      }).catch((err) => {console.log("push" + err)})
      //console.log(pushResponse)
      //console.log(await git.status({dir: dir + "/public/", filepath: 'data.json'}, (err) => {if(err) console.log(err)})) 
      this.getData()
    }
  }
}
</script>


