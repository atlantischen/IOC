import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import VueWechatTitle from 'vue-wechat-title'

import LeftRight from './components/leftRightPart.vue'
import DropDown from './components/widget/dropDown.vue'
import CenterDatas from './components/widget/centerDatas.vue'
import SearchBox from './components/widget/searchBox.vue'
import TipBox from './components/widget/tipBox.vue'

import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/reset.css' //公共样式重置
import './style/animation.less' 
import './style/index.less' //公共样式文件
import './assets/font/iconfont/iconfont.css'
import './assets/font/iconfont/iconfont.js'
import 'animate.css' //引入动画
const app = createApp(App)
app.component('LeftRight', LeftRight)
app.component('DropDown', DropDown)
app.component('CenterDatas', CenterDatas)
app.component('SearchBox', SearchBox)
app.component('TipBox', TipBox)
app.use(ElementPlus, {
  locale
})
app.use(VueWechatTitle)
app.use(router)
app.mount('#app')