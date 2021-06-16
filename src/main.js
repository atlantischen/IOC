import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible'
import './plugins/rem.js'
import './assets/css/reset.css'
import './assets/css/public.css'
import 'animate.css'//引入动画
import IOCLeft from './components/IOCLeft.vue'
import IOCRight from './components/IOCRight.vue'


const app = createApp(App); // 创建实例
app.component('IOCLeft', IOCLeft)
app.component('IOCRight', IOCRight)
app.use(router).mount('#app');
