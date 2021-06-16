import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import VueWechatTitle from 'vue-wechat-title'

import IOCLeft from './components/IOCLeft.vue'
import IOCRight from './components/IOCRight.vue'

import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/reset.css' //公共样式重置
import './style/index.css' //公共样式文件
import 'animate.css' //引入动画
const app = createApp(App)
app.component('IOCLeft', IOCLeft)
app.component('IOCRight', IOCRight)
app.use(ElementPlus, { locale })
app.use(VueWechatTitle)
app.use(router)
app.mount('#app')