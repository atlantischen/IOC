import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import * as echarts from "echarts";

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
// import {EleResize} from 'assets/js/echarts'
import {redomEchart} from '@/utils/methods.js'

import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import VueWechatTitle from 'vue-wechat-title'
import IOCLeft from './components/IOCLeft.vue'
import IOCRight from './components/IOCRight.vue'
import Tips from './components/tips.vue'  //提示组件
import NumCounter from './components/numCounter.vue'  //数字累加组件

import LeftRight from './components/leftRightPart.vue'
import DropDown from './components/widget/dropDown.vue'
import CenterDatas from './components/widget/centerDatas.vue'
import SearchBox from './components/widget/searchBox.vue'
import TipBox from './components/widget/tipBox.vue'

import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/reset.css' //公共样式重置
// import './style/base.less' //公共样式重置
import './style/animation.less' 
import './style/index.less' //公共样式文件
import 'animate.css' //引入动画
const app = createApp(App)

app.config.globalProperties.$redomEchart = redomEchart;
app.config.globalProperties.echarts = echarts;
app.component('IOCLeft', IOCLeft)
app.component('IOCRight', IOCRight)
app.component('Tips', Tips)
app.component('NumCounter', NumCounter)
app.use(ElementPlus, { locale })
app.use(VueWechatTitle)
import './assets/font/iconfont/iconfont.css'
import './assets/font/iconfont/iconfont.js'
import 'animate.css' //引入动画
app.component('LeftRight', LeftRight)
app.component('DropDown', DropDown)
app.component('CenterDatas', CenterDatas)
app.component('SearchBox', SearchBox)
app.component('TipBox', TipBox)
app.use(ElementPlus, {
  locale
})
app.use(router)
app.use(store)
app.mount('#app')