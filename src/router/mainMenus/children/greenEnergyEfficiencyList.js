export default [{
    path: 'homePage',
    name: 'homePage',
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
  },
  {
    path: 'building',
    name: 'building',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '整栋',
      title: '整栋',
      isShow: true
    },
    children:[
      {
        path: 'codesource',
        name: 'codesource',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/codesource.vue'),
      },
      {
        path: 'airConditioner',
        name: 'airConditioner',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/airConditioner.vue'),
      },
      {
        path: 'elevator',
        name: 'elevator',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/elevator.vue'),
      },
      {
        path: 'lighting',
        name: 'lighting',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/lighting.vue'),
      },
      {
        path: 'primaryAirSystem',
        name: 'primaryAirSystem',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/primaryAirSystem.vue'),
      },
      {
        path: 'watersupply',
        name: 'watersupply',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/watersupply.vue'),
      },

    ]
  }
]