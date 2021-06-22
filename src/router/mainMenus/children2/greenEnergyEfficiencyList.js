export default [{
    path: 'homePage',
    name: 'homePage1',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '',
      title: '',
      isShow: true
    }
  },
  {
    path: 'energyEfficiencyBDA',
    name: 'energyEfficiencyBDA1',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/energyEfficiencyBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '能效大数据分析',
      title: '能效大数据分析',
      isShow: true
    }
  },
  {
    path: 'chargingPile',
    name: 'chargingPile1',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/chargingPile/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '充电桩',
      title: '充电桩',
      isShow: true
    }
  }
]