<template>
<div>
    <section class="section">
        <div class="container">
            <div class="level is-mobile">
                <div class="level-left">
                    <div class="level-item">
                        <router-link to="/dashboard"><span class="icon"><i class="fas fa-arrow-left"></i></span></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="main-container">
            <div>
                <label class="label has-text-danger">it's recommended to write elsewhere and paste it here. if you leave, the progress will not be saved</label>
                <label class="label has-text-success">after sent, you are able to edit it</label>
                <div class="field">
                    <label class="label">title</label>
                    <div class="control">
                        <input type="text" class="input" placeholder="interesting title" v-model="post.title">
                    </div>
                </div>
                <div class="field">
                    <label class="label">content <span class="has-text-info">(markdown supported)</span></label>
                    <div class="control">
                        <textarea v-model="post.content" class="textarea" rows="10" placeholder="write away..."></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">confirm submission</label>
                    <div class="control">
                        <button class="button is-success" @click="submitPost">finish</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
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
    data() {
        return {
            months: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
            post: {}
        }
    },
    created: function () {
        if(this.$route.params.id) {
            firebase.database().ref("posts/"+this.$route.params.id).once('value', (s) => {
                this.post = s.val()
            })
        }
    },
    methods: {
        submitPost: function () {
            if(this.$route.params.id) {
                if(this.post.title.trim()!="" && this.post.content.trim()!="") {
                    firebase.database().ref("posts/" + this.$route.params.id).set(this.post).then(() => {
                        this.$router.replace("/dashboard");
                    })
                } else {
                    console.log("empty")
                }
            } else {
                if(this.post.title.trim()!="" && this.post.content.trim()!="") {
                    var dt = new Date();
                    this.post.date = dt.getDate() + " " + this.months[dt.getMonth()] + " " + dt.getFullYear();
                    var uidRef = firebase.database().ref("posts/").push();
                    var uid = uidRef.key;
                    this.post.id=uid;
                    uidRef.set(this.post).then(() => {
                        this.$router.replace("/dashboard");
                    })
                } else {
                    console.log("empty")
                }
            }
        }
    }
}
</script>