export default [{
    path: 'homePage',
    name: 'convenientParking0',
    component: () => import('@/views/mainMenu/convenientParking/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '',
      title: '',
      isShow: true
    }
  },
  {
    path: 'parkingBDA',
    name: 'parkingBDA',
    component: () => import('@/views/mainMenu/convenientParking/parkingBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '停车大数据分析',
      title: '停车大数据分析',
      isShow: true
    }
  },
  {
    path: 'ParkingGuidance',
    name: 'ParkingGuidance',
    component: () => import('@/views/mainMenu/convenientParking/ParkingGuidance/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '车位引导',
      title: '车位引导',
      isShow: true
    }
  },
  {
    path: 'FindCarTrack',
    name: 'FindCarTrack',
    component: () => import('@/views/mainMenu/convenientParking/FindCarTrack/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '寻车轨迹',
      title: '寻车轨迹',
      isShow: true
    }
  },
  {
    path: 'VehicleMonitor',
    name: 'VehicleMonitor',
    component: () => import('@/views/mainMenu/convenientParking/VehicleMonitor/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '车辆布控',
      title: '车辆布控',
      isShow: true
    }
  },
]