export default [{
    path: 'homePage',
    name: 'comprehensiveSituational01',
    component: () => import('@/views/mainMenu/comprehensiveSituational/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '',
      title: '',
      isShow: true
    }
  },
  {
    path: 'theParkSearch',
    name: 'theParkSearch1',
    component: () => import('@/views/mainMenu/comprehensiveSituational/theParkSearch/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '园区搜索',
      title: '园区搜索',
      isShow: true
    }
  },
  {
    path: 'researchersTrack',
    name: 'researchersTrack1',
    component: () => import('@/views/mainMenu/comprehensiveSituational/researchersTrack/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '人员轨迹',
      title: '人员轨迹',
      isShow: true
    }
  },
  {
    path: 'personnelToMonitor',
    name: 'personnelToMonitor1',
    component: () => import('@/views/mainMenu/comprehensiveSituational/personnelToMonitor/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '人员布控',
      title: '人员布控',
      isShow: true
    }
  },
  {
    path: 'theParkRoaming',
    name: 'theParkRoaming1',
    component: () => import('@/views/mainMenu/comprehensiveSituational/theParkRoaming/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '园区漫游',
      title: '园区漫游',
      isShow: true
    }
  },
]