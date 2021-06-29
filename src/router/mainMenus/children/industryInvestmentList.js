export default [{
    path: 'homePage',
    name: 'industryInvestment0',
    component: () => import('@/views/mainMenu/industryInvestment/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '产业招商',
      title: '产业招商',
      isShow: true
    }
  },
  {
    path: 'attractInvestmentBDA',
    name: 'attractInvestmentBDA',
    component: () => import('@/views/mainMenu/industryInvestment/attractInvestmentBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '招商大数据分析',
      title: '招商大数据分析',
      isShow: true
    }
  },
  {
    path: 'rentBDA',
    name: 'rentBDA',
    component: () => import('@/views/mainMenu/industryInvestment/rentBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '租赁大数据分析',
      title: '租赁大数据分析',
      isShow: true
    }
  }
]