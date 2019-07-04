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
        <div class="container">
            <div v-if="loading" class="has-text-centered">
                <span class="icon"><i class="fas fa-circle-notch fa-spin"></i></span>
            </div>
            <div v-else>
                <label class="label has-text-warning">it's recommended to write elsewhere and paste it here. if you leave, the progress will not be saved</label> 
                <label class="label has-text-warning">it's recommended to write elsewhere and paste it here. if you leave, the progress will not be saved</label>
                <label class="label has-text-success">you are always able to edit a post.</label>
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
                    <div class="control">
                        <button class="button is-success" @click="submitPost">save</button>
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
import app from '../App.vue'

export default {
    data() {
        return {
            months: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
            post: {},
            loading: true
        }
    },
    created: async function () {
        if(this.$route.params.id) {
            var data = await app.methods.getData()
            this.post = data.posts[this.$route.params.id]
        }
        this.loading = false
    },
    methods: {
        submitPost: async function () {
            if(this.post.title.trim()!="" && this.post.content.trim()!="") {
                if(this.$route.params.id) {
                    await app.methods.editPost(this.$route.params.id, this.post)
                    this.$router.replace("/dashboard");
                } else {
                    var dt = new Date();
                    this.post.date = dt.getDate() + " " + this.months[dt.getMonth()] + " " + dt.getFullYear();
                    await app.methods.newPost(this.post)
                    this.$router.replace("/dashboard");
                }
            } else console.log("no content")
        }
    }
}
</script>