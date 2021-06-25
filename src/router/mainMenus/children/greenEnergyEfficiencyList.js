export default [{
    path: 'homePage',
    name: 'homePage',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '绿色能效',
      title: '绿色能效',
      isShow: true
    }
  },
  {
    path: 'energyEfficiencyBDA',
    name: 'energyEfficiencyBDA',
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
    name: 'chargingPile',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/chargingPile/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '充电桩',
      title: '充电桩',
      isShow: true
    }
  }
]