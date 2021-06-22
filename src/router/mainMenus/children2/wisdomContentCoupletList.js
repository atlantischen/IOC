export default [{
    path: 'homePage',
    name: 'wisdomContentCouplet01',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '',
      title: '',
      isShow: true
    }
  },
  {
    path: 'deviceControl',
    name: 'deviceControl1',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/deviceControl/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '设备控制',
      title: '设备控制',
      isShow: true
    }
  },
  {
    path: 'infoPublish',
    name: 'infoPublish1',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/infoPublish/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '信息发布',
      title: '信息发布',
      isShow: true
    }
  },
  {
    path: 'publicBroadcast',
    name: 'publicBroadcast1',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/publicBroadcast/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '公共广播',
      title: '公共广播',
      isShow: true
    }
  }
]