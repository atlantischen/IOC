// import {createRouter,createWebHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     name: 'index',
//     component: ()=>import('@/views/index.vue')
//   },
 
// ]

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
//   })
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router"
import MainMenus from './mainMenus/index.js'

const routes = [{
    path: "/",
    // redirect: "/comprehensiveSituational",
    component: () => import('@/views/mainMenu/index.vue'),
    children: [...MainMenus]
  },
  {
    // path: "/index",
    component: () => import('@/views/index.vue'),
    children: [{
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
          icon: 'icon-zonghe',
          name: '登录',
          title: '登录',
          isShow: true
        }
      },
      {
        path: "/index",
        component: () => import('../views/home.vue'),
      },
      {
        path: '/url',
        name: 'url',
        component: () => import('@/views/url.vue'),
        meta: {
          icon: 'icon-zonghe',
          name: 'url',
          title: 'url',
          isShow: true
        }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    meta: {
      name: '404',
      title: '404'
    },
    component: () => import('@/views/404.vue')
  }
];

const router = createRouter({
  // hash
  // history: createWebHashHistory(),
  // history
  history: createWebHistory(),
  routes,
});



export default router