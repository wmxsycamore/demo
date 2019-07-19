<template>
    <footer>
        <h1>{{copyright}}</h1>
    </footer>
</template>

<script>
    export default {
        name:"app-footer",
        data(){
            return {
                copyright:"Copyright 2019 Vue Demo",
            }
        }
    }
</script>

<style scoped>
    footer {
        background: #222;
        padding: 6px;
    }
    h1 {
        color: #fff;
    }
</style>