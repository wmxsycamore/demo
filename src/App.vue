<template>
  <div id="app">
    <ul>
      <!--<li><a href="/">home</a></li>-->
      <!--<li><a href="/helloWorld">helloworld</a></li>-->
      <!--router-link不重新加载页面，性能好-->
      <li><router-link to="/">home</router-link></li>
      <li><router-link to='/helloWorld'>hello</router-link></li>
    </ul>
      <router-view></router-view>
  </div>
</template>

<script>
  // 局部注册

export default {
  name: 'app',
  // 局部注册
  components: {

  },
  data(){
    return {


    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
