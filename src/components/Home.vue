<template>
    <div id="home">
        <app-header v-bind:title="title" v-on:titleChanged="updateTitle($event)"></app-header>
        <users :users="users"></users>
        <users :users="users"></users>
        <app-footer></app-footer>
    </div>
</template>

<script>
    // 局部注册
    import Header from "./Header"
    import Users from "./Users"
    import Footer from "./Footer"
    export default {
        name: 'home',
        // 局部注册
        components: {
            "app-header":Header,
            "users":Users,//组件名不能用已有的标签名
            "app-footer":Footer,
        },
        data(){
            return {
                title: '这是我的第一个vue项目',
                users : [

                ]
            }
        },
        methods:{
            updateTitle:function (title) {
                this.title = title
            }
        },
        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/users')
                .then((data)=>{
                    this.users = data.body
                })
        }
    }
</script>

<style>
    #home {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
