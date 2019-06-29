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
            <div v-if="loading" class="has-text-centered">
                <span class="icon"><i class="fas fa-circle-notch fa-spin"></i></span>
            </div>
            <div v-else>
                <div class="field">
                    <label class="label">blog title (appears on the top of the homepage)</label>
                    <div class="control">
                        <input type="text" v-model="settings.blogTitle" class="input" placeholder="something captivating">
                    </div>
                </div>
                <div class="field">
                    <label class="label">header description (on the about page, the smaller text)</label>
                    <div class="control">
                        <input class="input" v-model="settings.aboutDescription" type="text" placeholder="i'm 18, i live in lisbon"/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">header title (on the about page, the bigger text)</label>
                    <div class="control">
                        <input class="input" v-model="settings.aboutTitle" type="text" placeholder="my name is Lucas"/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">the image link (a link for the image for the about page)</label>
                    <div class="control">
                        <input type="text" v-model="settings.aboutImageSrc" class="input" placeholder="something captivating">
                    </div>
                </div>
                <div class="field">
                    <label class="label">anything else you might want to add, markdown ready (on the about page)</label>
                    <div class="control">
                        <textarea class="textarea" v-model="settings.markdown" rows="10" placeholder="write away..."></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">save changes</label>
                    <div class="control">
                        <button class="button is-success" @click="saveSettings">save</button>
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
import app from '../App.vue'

export default {
    data() {
        return {
            settings: {

            },
            loading: true
        }
    },
    created: async function () {
        var data = await app.methods.getData()
        this.settings = data.settings
        console.log(this.settings)
        this.loading=false;
    },
    methods: {
        saveSettings: async function () {
            if(!this.isLoading) {
                await app.methods.changeSettings(this.settings)
                alert("saved.")
            }
        }
    }
}
</script>