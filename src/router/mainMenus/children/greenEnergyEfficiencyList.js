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
  },
  {
    path: 'building',
    name: 'building',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/index.vue'),
    redirect: "/greenEnergyEfficiency/building/codesource",
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
        meta: {
          id:0
        
        }
      },
      {
        path: 'airConditioner',
        name: 'airConditioner',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/airConditioner.vue'),
        meta: {
          id:1
        
        }
      },
      {
        path: 'elevator',
        name: 'elevator',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/elevator.vue'),
        meta: {
          id:2
        
        }
      },
      {
        path: 'lighting',
        name: 'lighting',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/lighting.vue'),
        meta: {
          id:3
        
        }
      },
      {
        path: 'primaryAirSystem',
        name: 'primaryAirSystem',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/primaryAirSystem.vue'),
        meta: {
          id:4
        
        }
      },
      {
        path: 'watersupply',
        name: 'watersupply',
        component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/watersupply.vue'),
        meta: {
          id:5
        
        }
      },
     

    ]
  },
  {
    path: 'watersupplyDetail',
    name: 'watersupplyDetail',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/building/watersupplyDetail.vue'),
    meta: {
      id:6
    
    }
  },
]