<template>
    <section class="container">
        <h1>{{ title}}</h1>
        <p>{{ message}}</p>

        <ul v-for="(data, key) in json_data">
            <li>{{ data.name}} ({{ data.age}} {{ key }})</li>

        </ul>

    </section>
</template>

<script>
    const axios = require('axios');
    let url = "https://arlly-vue.firebaseio.com/person.json";

    export default {
        name: "axios",

        data: function () {
            return {
                title: 'AXIOS',
                msg: '',
                message: 'axios sample.',
            };
        },
        async asyncData() {
            let id = 1;
            let result = await axios.get(url);
            return { json_data: result.data}
        },
        methods: {
            doClick: function (event) {
                axios.get(url + this.msg).then((res) => {
                    this.message = 'get ID=' + this.msg;
                    this.json_data = res.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
