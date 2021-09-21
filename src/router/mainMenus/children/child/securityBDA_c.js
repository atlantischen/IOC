export default [{
    path: 'dataMode',
    name: 'dataMode',
    component: () => import('@/views/mainMenu/theParkService/securityBDA/components/dataMode.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '物业大数据分析',
      title: '物业大数据分析',
      isShow: true
    }
  },
  {
    path: 'videoMode',
    name: 'videoMode',
    component: () => import('@/views/mainMenu/theParkService/securityBDA/components/videoMode.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '物业大数据分析',
      title: '物业大数据分析',
      isShow: true
    }
  }
]