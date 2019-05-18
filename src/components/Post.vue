<template>
    <div class="main-post">
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item has-text-centered">
                    <p class="heading"></p>
                    <p class="title is-size-5">{{post.title}}</p>
                </div>
                <div v-if="!showPost && !showContent">
                    <p class="title is-size-5" @click="showPost=!showPost"><span class="icon"><i class="fas fa-caret-down"></i></span></p> 
                </div>
                <div v-if="showPost && !showContent">
                   <p class="title is-size-5" @click="showPost=!showPost"><span class="icon"><i class="fas fa-caret-up"></i></span></p>
                </div>
            </div>
            <div class="level-right">
                <p class="title is-size-6">{{post.date}}</p>
            </div>
        </div>
        <div v-if="showContent || showPost" class="post-content">
            <div class="content" v-html="content"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .icon {
        cursor: pointer;
    }

    .main-post {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .post-content {
        margin-top: -0.75rem;
        border-top: 1px solid black;
        padding: 1rem;
    }

</style>

<script>
import marked from 'marked'

export default {
    data() {
        return {
            showPost: false
        }
    },
    computed: {
        content: function () {
            return marked(this.post.content, {breaks: true})
        }
    },
    props: {
        post: Object,
        showContent: Boolean
    }

}
</script>