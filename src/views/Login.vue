<template>
    <div>
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
        </section>
        <section class="hero is-large">
            <div class="hero-body">
                <div class="main-container">
                    <div v-if="loading" class="has-text-centered">
                        <span class="icon field"><i class="fas fa-circle-notch fa-spin"></i></span>
                        <div class="field">
                            <p class="label">Getting everything ready for you</p>
                        </div>
                    </div>
                    <div v-else>
                        <div class="field">
                            <input class="input" type="text" placeholder="username" v-model="username">
                        </div>
                        <div class="field">
                            <input class="input" type="password" placeholder="password" v-model="password">
                        </div>
                        <div v-if="isInvalid" class="field">
                            <p class="label" style="color: red">Invalid username or password!</p>
                        </div>
                        <div class="field has-text-centered">
                            <button class="button" @click="login">login</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import app from '../App.vue'

export default {
    data () {
        return {
            username: null,
            password: null,
            isInvalid: false,
            loading: true
        }
    },
    created: async function () {
        await app.methods.createdLogin()
        this.loading=false
    },
    methods: {
        login: async function () {
            var validLogin = await app.methods.login(this.username, this.password);
            if (validLogin) {
                this.$router.replace('dashboard')
                this.isInvalid = false
            }
            else {
                this.isInvalid = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        max-width: 19rem;
    }

    .input {
        border-radius: 0px;
        border: transparent;
        background-color: rgba(0,0,0,.042);
    }
</style>
