import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import * as echarts from "echarts";

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
<<<<<<< HEAD

import redomEchart from './utils/methods'
import {SendMessageToUnity} from './utils/unity'
import IOCLeft from './components/IOCLeft.vue';
import IOCRight from './components/IOCRight.vue';
import Tips from './components/tips.vue';
import NumCounter from './components/numCounter.vue';
=======
import {
  SendMessageToUnity
} from './utils/unity'
>>>>>>> da362ede28b920561e62895f650fd396085c53d8

import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import VueWechatTitle from 'vue-wechat-title'
  
import './assets/iconfont/iconfont.css'


const app = createApp(App)
<<<<<<< HEAD
app.config.globalProperties.$redomEchart = redomEchart;
app.config.globalProperties.$SendMessageToUnity = SendMessageToUnity;
app.component('IOCLeft', IOCLeft)
app.component('IOCRight', IOCRight)
app.component('Tips', Tips)
app.component('NumCounter', NumCounter)
app.use(ElementPlus, { locale })
=======
app.config.globalProperties.$SendMessageToUnity = SendMessageToUnity;
app.use(ElementPlus, {
  locale
})
>>>>>>> da362ede28b920561e62895f650fd396085c53d8
app.use(VueWechatTitle)

import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import globalComponents from './utils/globalComponents.js' // 所有global组件
import globalMethods from '@/utils/methods.js' // 所有global方法
import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/reset.css' //公共样式重置
import './style/animation.less'
import './style/index.less' //公共样式文件
import 'animate.css' //引入动画
// import './assets/font/iconfont/iconfont.css'
// import './assets/font/iconfont/iconfont.js'
import 'animate.css' //引入动画
for (var key in globalComponents) {
  app.component(key, globalComponents[key])
}
for (var key in globalMethods) {
  app.config.globalProperties[`$${key}`] = globalMethods[key]
}
app.use(router)
app.use(store)
app.mount('#app')