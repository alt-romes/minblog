<template>
    <section class="section">
        <div class="container">
            <div class="level is-mobile">
                <div class="level-left">
                    <div class="level-item">
                        <router-link to="/"><span class="icon"><i class="fas fa-arrow-left"></i></span></router-link>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a @click="logout()"><span class="icon"><i class="fas fa-door-open"></i></span></a>
                    </div>
                </div>
            </div> 
        </div>
        <div class="main-container">
            <section class="section">
                <div class="level is-mobile">
                    <div class="level-item">
                        <div class="field has-text-centered">
                            <router-link to="/edit"><span class="icon is-large"><i class="fas fa-2x fa-plus-circle"></i></span></router-link>
                            <label for="" class="label has-text-centered">new post</label>
                        </div>
                        
                    </div>
                    <div class="level-item">
                        <div class="field has-text-centered">
                            <router-link to="/settings"><span class="icon is-large"><i class="fas fa-2x fa-cog"></i></span></router-link>
                            <label for="" class="label has-text-centered">settings</label>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section">
                <!-- <p class="label"></p> -->
                <div v-if="loading" class="has-text-centered">
                    <span class="icon"><i class="fas fa-circle-notch fa-spin"></i></span>
                </div>
                <table v-else class="table is-fullwidth is-hoverable">
                    <tbody>
                        <tr v-for="post in posts" :key="post.id">
                            <th>{{post.title}}</th>
                            <td>{{post.date}}</td>
                            <td><router-link :to="'/edit/' + post.id"><span class="icon"><i class="fas fa-edit"></i></span></router-link></td>
                            <td><a><span class="icon" @click="confirmDelete(post.id)"><i class="fas fa-trash-alt"></i></span></a></td>
                        </tr>
                    </tbody>
                </table>
            </section>
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
import firebase from 'firebase/app'
import 'firebase/database'
import app from '../App.vue'
export default {
    data () {
        return {
            posts: null,
            showAddNew: false,
            showSettings: false,
            loading: true
        }
    },
    methods: {
        confirmDelete: function (id) {
            var confirm = window.confirm("Do you really want to delete this post?");
            if(confirm) {
                app.methods.deletePost(id)
            }
        }
        // logout: function () {
        //     firebase.auth().signOut()
        // }
    },
    created: async function () {
        var data = await app.methods.getData()
        this.posts = [];
        for(var key in data.posts) {
            this.posts.push(data.posts[key]);
        }
        this.posts.reverse();
        //sort array, latest first, and then display the first child
        if(this.posts.length<=0) {
            console.log("Handle error for no match of posts here");
        }
        this.loading=false;
    }
}
</script>
