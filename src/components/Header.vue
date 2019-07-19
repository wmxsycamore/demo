<template>
    <header v-on:click="changeTitle">
        <h1>{{header}}</h1>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name:"app-header",
        props:{
            title:{
                type:String,
                require:true
            }
        },
        data() {
            return {
                header: "Vue.js Demo ",
            }
        },
        methods :{
            changeTitle:function () {
                this.$emit('titleChanged','子组件向父组件传值')
            }
        }
    }
</script>

<style scoped>
    header {
        background-color: green;
    }
    h1 {
        color: #000;
    }
</style>