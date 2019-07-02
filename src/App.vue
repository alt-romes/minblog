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

export default {
  data () {
    return {
      username: null,
      password: null,
      jsonData: null,
      gitUrl: "https://github.com/alt-romes/minblog",
      jsonFilePath: '/src/data.json'
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    login: async function (usr, pass) {
      this.username = usr;
      this.password = pass;
      var pushJson = {
        dir: dir,
        remote: 'origin',
        branch: 'master',
        username: this.username,
        password: this.password
      }
      var valid = await git.push(pushJson).catch((err) => {
        if(err.toString().substring(0, 9) == "HTTPError")
          return false
        return true
      })
      return valid
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
      if(this.jsonData == null) {
        //Initialize isomorphic-git with a file system
        window.fs = new LightningFS('fs')
        git.plugins.set('fs', window.fs)
        // I prefer using the Promisified version honestly
        window.pfs = window.fs.promises
        
        window.dir = '/teste'
        
        var readdir = await pfs.readdir(dir).catch(async (err) => {
          console.log(err)
          await pfs.mkdir(dir);
        })

        console.log(await pfs.readdir("/teste/public"))

        if(!readdir.length) {
          await git.fetch({
            dir: dir,
            corsProxy: 'https://cors.isomorphic-git.org',
            url: this.gitUrl,
            ref: 'master',
            depth: 1,
            singleBranch: true,
            tags: false
          })
          console.log("cloned")
        }
        this.jsonData = JSON.parse(new TextDecoder("utf-8").decode(await pfs.readFile('/public/data.json')))
      } else {
        var status = await git.status({dir: dir, filepath: '/public/data.json'})
        console.log(status)
        if(status!="unmodified") {
          await git.pull({
            dir: dir,
            ref: 'master',
            singleBranch: true
          })
        } 
        this.jsonData = JSON.parse(new TextDecoder("utf-8").decode(await pfs.readFile('/public/data.json')))
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
      post.id = this.jsonData.posts[this.jsonData.posts.length-1]+1
      this.jsonData.posts[post.id] = post
      this.writeToGithub()
    },
    changeSettings: async function(settings) {
      this.jsonData.settings = settings
      this.writeToGithub()
    },
    writeToGithub: async function() {
      await pfs.writeFile('/public/data.json', JSON.stringify(this.jsonData), 'utf8')
      await git.add({dir: dir, filepath: '/public/data.json'})
      var commit = await git.commit({
        dir: dir,
        author: {
          name: this.username
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


