export default [{
    path: 'homePage',
    name: 'thePublicSpace01',
    component: () => import('@/views/mainMenu/thePublicSpace/homePage/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '',
      title: '',
      isShow: true
    }
  },
  {
    path: 'meetingBDA',
    name: 'meetingBDA1',
    component: () => import('@/views/mainMenu/thePublicSpace/meetingBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '会议大数据分析',
      title: '会议大数据分析',
      isShow: true
    }
  },
  {
    path: 'assetsBDA',
    name: 'assetsBDA1',
    component: () => import('@/views/mainMenu/thePublicSpace/assetsBDA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '资产大数据分析',
      title: '资产大数据分析',
      isShow: true
    }
  },
  {
    path: 'SpatialEnvironmentA',
    name: 'SpatialEnvironmentA1',
    component: () => import('@/views/mainMenu/thePublicSpace/SpatialEnvironmentA/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '空间环境分析',
      title: '空间环境分析',
      isShow: true
    }
  }
]