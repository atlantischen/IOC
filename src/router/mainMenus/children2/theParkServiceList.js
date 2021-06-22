export default [{
    path: 'homePage',
    name: 'theParkService01',
    component: () => import('@/views/mainMenu/theParkService/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '',
      title: '',
      isShow: true
    }
  },
  {
    path: 'visitorBDA',
    name: 'visitorBDA1',
    component: () => import('@/views/mainMenu/theParkService/visitorBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '访客大数据分析',
      title: '访客大数据分析',
      isShow: true
    }
  },
  {
    path: 'enterpriseBDA',
    name: 'enterpriseBDA1',
    component: () => import('@/views/mainMenu/theParkService/enterpriseBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '企业大数据分析',
      title: '企业大数据分析',
      isShow: true
    }
  },
  {
    path: 'propertyBDA',
    name: 'propertyBDA1',
    component: () => import('@/views/mainMenu/theParkService/propertyBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '物业大数据分析',
      title: '物业大数据分析',
      isShow: true
    }
  },
  {
    path: 'securityBDA',
    name: 'securityBDA1',
    component: () => import('@/views/mainMenu/theParkService/securityBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '安保大数据分析',
      title: '安保大数据分析',
      isShow: true
    }
  }
]