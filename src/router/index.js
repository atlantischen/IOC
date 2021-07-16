import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router"
import MainMenus from './mainMenus/index.js'
// import MainMenus2 from './mainMenus/index2.js'
import store from '../store'

const routes = [{
    path: "",
    name: "mainMenu",
    redirect: "/comprehensiveSituational/homePage",
    component: () => import('@/views/mainMenu/index.vue'),
    children: [...MainMenus]
  },
  // {
  //   path: "/empty",
  //   name: 'empty',
  //   // redirect: "/debug/comprehensiveSituational/homePage",
  //   component: () => import('@/views/mainMenu/empty.vue'),
  // },
  {
    // path: "",
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
        component: () => import('@/views/mainMenu/theParkBusiness/homePage/index.vue'),
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
// console.log(routes)
const router = createRouter({
  // hash
  // history: createWebHashHistory(),
  // history
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.path != from.path) {
    store.dispatch("SET_CENTERDATAS", [false, null]);
  }
  next()
})

export default router