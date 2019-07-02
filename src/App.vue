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

import * as BrowserFS from 'browserfs'
import * as git from 'isomorphic-git'
import { parse } from 'path';
import { stringify } from 'querystring';
import FS from 'browserfs/dist/node/core/FS';

export default {
  data () {
    return {
      username: null,
      password: null,
      jsonData: null,
      gitUrl: "https://github.com/alt-romes/minblog",
      jsonFilePath: '/public/data.json',
    }
  },
  created: function () {
    window.dir = '/teste'
  },
  methods: {
    login: async function (usr, pass) {
      this.username = usr;
      this.password = pass;
      return await BrowserFS.configure({ fs: "IndexedDB", options: {} }, async (err) => {
        if (err) return console.log(err);
        const fs = BrowserFS.BFSRequire("fs");
        git.plugins.set('fs', fs)
        console.log(await fs.readdir(dir))
        await git.clone({
          dir: dir,
          corsProxy: 'https://cors.isomorphic-git.org',
          url: "https://github.com/alt-romes/minblog",
          ref: 'master',
          depth: 1,
          singleBranch: true,
          tags: false
        })
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
      });
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

      this.jsonData = await fetch('https://raw.githubusercontent.com/alt-romes/minblog/master/public/data.json')
        .then(
          function (response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            // Examine the text in the response
            var data = response.json().then(function (data) {
              // console.log(data);
              return data
            });

            return data

          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
      });
      // if(this.jsonData == null) {
      //   //Initialize isomorphic-git with a file system
      //   window.fs = new LightningFS('fs')
      //   git.plugins.set('fs', window.fs)
      //   // I prefer using the Promisified version honestly
      //   window.pfs = window.fs.promises
          
      //   window.dir = '/teste3'
      //   var readdir = await pfs.readdir(dir).catch(async (err) => {
      //     console.log(err)
      //     await pfs.mkdir(dir);
      //   })

      //   if(!readdir.length) {
      //     await git.clone({
      //       dir: dir,
      //       corsProxy: 'https://cors.isomorphic-git.org',
      //       url: this.gitUrl,
      //       ref: 'master',
      //       depth: 1,
      //       singleBranch: true,
      //       tags: false
      //     })
      //     console.log("cloned")
      //   }

      //   console.log(await pfs.readdir("/teste2"))

      //   var status = await git.status({dir: dir+"/public/", filepath: 'data.json'})
      //   console.log(status)
      //   if(status!="unmodified") {
      //     await git.pull({
      //       dir: dir,
      //       ref: 'master',
      //       singleBranch: true
      //     })
      //   } 

      //this.jsonData = JSON.parse(new TextDecoder("utf-8").decode(await fs.readFile(dir + "/public/data.json")))

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
      BrowserFS.configure({ fs: "IndexedDB", options: {} }, async (err) => {
        if (err) return console.log(err);
        const fs = BrowserFS.BFSRequire("fs");
        git.plugins.set('fs', fs)
        console.log(await fs.readdir(dir))
        await fs.writeFile('/public/data.json', JSON.stringify(this.jsonData), 'utf8')
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
      });
    }
  }
}
</script>


