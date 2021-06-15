export default [{
    path: 'visitorBDA',
    name: 'visitorBDA',
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
    name: 'enterpriseBDA',
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
    name: 'propertyBDA',
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
    name: 'securityBDA',
    component: () => import('@/views/mainMenu/theParkService/securityBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '安保大数据分析',
      title: '安保大数据分析',
      isShow: true
    }
  }
]