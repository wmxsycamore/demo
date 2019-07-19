import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
/*   一
import Users from './components/Users'
*/
Vue.config.productionTip = false
//use router
Vue.use(VueRouter)
Vue.use(VueResource)


//配置路由,router为路由名称，path为路由地址，/根路径
const router = new VueRouter({
  routes: [
    {path:"/",component:Home},
    {path:"/helloWorld",component:HelloWorld},

  ],
  mode : 'history'
})
/*   一
// 全局注册
Vue.component("users",Users)
*/
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
