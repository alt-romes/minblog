<template>
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
        <div class="main-container">
            <section class="section">
                <div class="level is-mobile">
                    <div class="level-item"><a href="#"><span class="icon is-large"><i class="fas fa-2x fa-plus-circle"></i></span></a></div>
                    <div class="level-item"><a href="#"><span class="icon is-large"><i class="fas fa-2x fa-cog"></i></span></a></div>
                </div>
            </section>
            <section class="section">
                <!-- <p class="label"></p> -->
                <table class="table is-fullwidth is-hoverable">
                    <tbody>
                        <tr v-for="post in posts" :key="post.id">
                            <th>{{post.title}}</th>
                            <td>{{post.date}}</td>
                            <td><span class="icon"><i class="fas fa-edit"></i></span></td>
                            <td><span class="icon"><i class="fas fa-trash-alt"></i></span></td>
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

export default {
    data () {
        return {
            posts: null
        }
    },
    created: function () {
        firebase.database().ref('posts/').on('value', (s)=>{
            this.posts = [];
            var values = s.val()
            for(var key in values) {
                this.posts.push(values[key]);
            }
            //sort array, latest first, and then display the first child
            if(this.posts.length<=0) {
                console.log("Handle error for no match of posts here");
            }
            this.loading=false;
            this.posts = [
              {
                id:1,
                content: "this is a test dummy content lorem impsum i don't know enough latin to write that",
                date: "19 May 2019",
                title: "Gern geschehen"
              },
              {
                id:2,
                content: "this is a test dummy content lorem impsum i don't know enough latin to write that",
                date: "19 May 2019",
                title: "Wasser bitte"
              }
            ]
        });
    }
}
</script>
