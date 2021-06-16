import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

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
app.use(ElementPlus, { locale })
app.use(VueWechatTitle)
app.use(router)
app.mount('#app')