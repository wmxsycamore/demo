<template>
    <div class="users">
        <ul>
            <li v-for = "user in users">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.name">{{user.email}}</h3>
            </li>
        </ul>
        <button @click="deleteUser">删除</button>
    </div>
</template>

<script>
    export default {
        name:"users",
        // props:["users"],
        props:{
            users:{
                type:Array,
                    require:true
            }
        },
        data() {
            return {

            }
        },
        methods:{
            deleteUser:function () {
                this.users.pop()
            }
        }
    }
</script>

<style scoped>
.users {
    width: 100%;
    margin: 40px auto;

}
    ul {
        display: flex;
        list-style: none;
    }
    li {
        flex-grow: 1;
        flex-basis: 200px;
    }
</style>