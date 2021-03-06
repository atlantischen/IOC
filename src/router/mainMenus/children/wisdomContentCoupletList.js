export default [{
    path: 'homePage',
    name: 'wisdomContentCouplet0',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '智慧物联',
      title: '智慧物联',
      isShow: true
    }
  },
  {
    path: 'deviceControl',
    name: 'deviceControl',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/deviceControl/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '设备控制',
      title: '设备控制',
      isShow: true
    }
  },
  // {
  //   path: 'infoPublish',
  //   name: 'infoPublish',
  //   component: () => import('@/views/mainMenu/wisdomContentCouplet/infoPublish/index.vue'),
  //   meta: {
  //     icon: 'icon-zonghe',
  //     name: '信息发布',
  //     title: '信息发布',
  //     isShow: true
  //   }
  // },
  {
    path: 'publicBroadcast',
    name: 'publicBroadcast',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/publicBroadcast/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '公共广播',
      title: '公共广播',
      isShow: true
    }
  }
]