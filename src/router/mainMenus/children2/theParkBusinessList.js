export default [{
    path: 'homePage',
    name: 'theParkBusiness01',
    component: () => import('@/views/mainMenu/theParkBusiness/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '',
      title: '',
      isShow: true
    }
  },
  {
    path: 'cateringBDA',
    name: 'cateringBDA1',
    component: () => import('@/views/mainMenu/theParkBusiness/cateringBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '餐饮大数据分析',
      title: '餐饮大数据分析',
      isShow: true
    }
  },
  {
    path: 'entertainmentBDA',
    name: 'entertainmentBDA1',
    component: () => import('@/views/mainMenu/theParkBusiness/entertainmentBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '文娱大数据分析',
      title: '文娱大数据分析',
      isShow: true
    }
  }
]