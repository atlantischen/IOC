import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import {
  SendMessageToUnity
} from './utils/unity'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import locale_en from 'element-plus/lib/locale/lang/en'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import VueWechatTitle from 'vue-wechat-title'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
const app = createApp(App)
app.config.globalProperties.$SendMessageToUnity = SendMessageToUnity;
import i18n from './lang/index' // 中英文切换
let lang = localStorage.getItem('language') || i18n.locale
app.use(ElementPlus, {
  locale
})
// if (!lang) {
//   localStorage.setItem('language', 'zh')
// } else if (lang == 'en') {
//   app.use(ElementPlus, {
//     locale_en
//   })
// } else if (lang == 'zh') {
//   app.use(ElementPlus, {
//     locale
//   })
// }
app.use(VueWechatTitle)
import 'element-plus/lib/theme-chalk/index.css'
import globalComponents from './utils/globalComponents.js' // 所有global组件
import globalMethods from '@/utils/methods.js' // 所有global方法
import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/reset.css' //公共样式重置
import './style/animation.less'
import './style/index.less' //公共样式文件
import 'animate.css' //引入动画
import './utils/moveIt.js' // 待修改

for (var key in globalComponents) {
  app.component(key, globalComponents[key])
}
for (var key in globalMethods) {
  app.config.globalProperties[`$${key}`] = globalMethods[key]
}
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')