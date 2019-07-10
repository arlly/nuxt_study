<template>
    <div class="container">
        <div>
            <logo/>
            <h1 class="title">
                nuxt_app by arlly {{now}}
            </h1>
            <h2 class="subtitle">
                My majestic Nuxt.js project
            </h2>
            <div class="links">
                <a
                        href="https://nuxtjs.org/"
                        target="_blank"
                        class="button--green"
                >
                    Documentation
                </a>
                <a
                        href="https://github.com/nuxt/nuxt.js"
                        target="_blank"
                        class="button--grey">
                    GitHub
                </a>
            </div>
            <router-link to="/other">Go to Other</router-link>
        </div>

    </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'

    export default {
        data: function () {
            return {
                title: 'Hello',
                message: 'this is message',
                now: 'wait・・',
            }
        },
        components: {
            Logo
        },
        created: function () {
            setInterval(() => {
                var d = new Date();
                this.now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            })
        }
    }
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
