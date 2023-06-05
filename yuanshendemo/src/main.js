import Vue from 'vue'
import App from './App.vue'

//1.引入vue——router
import VueRouter from 'vue-router'
//2.引入路由配置
import router from './router'
//3.应用VueRoter
Vue.use(VueRouter)
//引入axios
import axios from 'axios'
//使用axios
//全局注册 使用方法 this.$axios
Vue.prototype.$axios = axios

//引入element组件库
import ElementUI from 'element-ui'
//引入element UI 全部样式
import'element-ui/lib/theme-chalk/index.css'
//应用element UI
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
