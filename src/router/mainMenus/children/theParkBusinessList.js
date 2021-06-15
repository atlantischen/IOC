export default [{
    path: 'cateringBDA',
    name: 'cateringBDA',
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
    name: 'entertainmentBDA',
    component: () => import('@/views/mainMenu/theParkBusiness/entertainmentBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '文娱大数据分析',
      title: '文娱大数据分析',
      isShow: true
    }
  }
]