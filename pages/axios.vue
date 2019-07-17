<template>
    <section class="container">
        <h1>{{ title}}</h1>
        <p>{{ message}}</p>

        <div>
            <input type="text" v-model="msg" />
            <button @click="doClick">くりっく</button>
        </div>

        <table>
            <tr>
                <td>User ID</td>
                <td>{{ json_data.userId}}</td>
            </tr>
            <tr>
                <td>ID</td>
                <td>{{ json_data.id}}</td>
            </tr>
            <tr>
                <td>title</td>
                <td>{{ json_data.title}}</td>
            </tr>
            <tr>
                <td>Body</td>
                <td>{{ json_data.body}}</td>
            </tr>
        </table>

    </section>
</template>

<script>
    const axios = require('axios');
    let url = "http://jsonplaceholder.typicode.com/posts/";

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
            let result = await axios.get(url + id);
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
