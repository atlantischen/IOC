import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
const app = createApp(App)
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import {
  EleResize
} from 'assets/js/echarts'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import VueWechatTitle from 'vue-wechat-title'
import globalComponents from './utils/globalComponents.js' // 所有global组件
import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/reset.css' //公共样式重置
import './style/animation.less'
import './style/index.less' //公共样式文件
import 'animate.css' //引入动画
app.config.globalProperties.$EleResize = EleResize;
import './assets/font/iconfont/iconfont.css'
import './assets/font/iconfont/iconfont.js'
import 'animate.css' //引入动画
for (var key in globalComponents) {
  app.component(key, globalComponents[key])
}
app.use(VueWechatTitle)
app.use(ElementPlus, {
  locale
})
app.use(VueWechatTitle)
app.use(router)
app.use(store)
app.mount('#app')