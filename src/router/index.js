import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router"
import MainMenus from './mainMenus/index.js'

const routes = [{
    path: "/index",
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: "/",
    redirect: "/comprehensiveSituational",
    component: () => import('@/views/mainMenu/index.vue'),
    children: [...MainMenus]
  },
  {
    path: "",
    component: () => import('@/views/index.vue'),
    children: [
      {
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
];

const router = createRouter({
  // hash
  // history: createWebHashHistory(),
  // history
  history: createWebHistory(),
  routes,
});

export default router