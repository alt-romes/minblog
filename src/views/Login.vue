<template>
    <div>
        <section class="section">
            <div class="container">
                <router-link to="/"><span class="icon" style="padding: 2rem"><i class="fas fa-arrow-left"></i></span></router-link>
            </div>
        </section>
        <section class="hero is-large">
            <div class="hero-body">
                <div class="main-container">
                    <div class="field">
                        <input class="input" type="text" placeholder="email" v-model="username">
                    </div>
                    <div class="field">
                        <input class="input" type="password" placeholder="password" v-model="password">                
                    </div>
                    <div class="field has-text-centered">
                        <button class="button" @click="login">login</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data () {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        login: function () {
            firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
                (user) => {
                    this.$router.replace('dashboard')
                    // console.log(user);
                    // this.username="";
                    // this.password="";
                },
                function(err) {
                    console.log(err);
                },
            );
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
