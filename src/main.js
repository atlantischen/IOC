import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/min.less'
import 'animate.css'//引入动画
const vm=createApp()
// vm.use(animated) 
import echarts from 'echarts'
// import less from 'less'
// Vue.use(less)
// vm.prototype.$echarts = echarts;
createApp(App).mount('#app')
