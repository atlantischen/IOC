import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import VueWechatTitle from 'vue-wechat-title'
import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/min.less'
import 'animate.css' //引入动画
const vm = createApp()
const app = createApp(App)
// vm.use(animated) 
import echarts from 'echarts'
// import less from 'less'
// Vue.use(less)
// vm.prototype.$echarts = echarts;
app.use(VueWechatTitle)
app.use(router)
app.mount('#app')