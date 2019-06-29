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
      jsonData: null,
      gitUrl: "https://github.com/alt-romes/minblog"
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
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

        if(!readdir.length) {
          console.log("nothing here... cloning repo")
          await git.clone({
            dir: dir,
            corsProxy: 'https://cors.isomorphic-git.org',
            url: this.gitUrl,
            ref: 'master',
            depth: 1,
            singleBranch: true,
            tags: false
          })
          console.log("cloned")
        } else {
          await git.pull({
            dir: dir,
            ref: 'master',
            singleBranch: true
          })
        }
        this.jsonData = JSON.parse(new TextDecoder("utf-8").decode(await pfs.readFile("/src/data.json")))
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
      await pfs.writeFile("/src/data.json", JSON.stringify(this.jsonData))
      let pushResponse = await git.push({
        dir: "/src/data.json",
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


