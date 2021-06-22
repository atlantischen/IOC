import comprehensiveSituationalList from './children2/comprehensiveSituationalList'
import industryInvestmentList from './children2/industryInvestmentList'
import thePublicSpaceList from './children2/thePublicSpaceList'
import theParkServiceList from './children2/theParkServiceList'
import theParkBusinessList from './children2/theParkBusinessList'
import convenientParkingList from './children2/convenientParkingList'
import greenEnergyEfficiencyList from './children2/greenEnergyEfficiencyList'
import wisdomContentCoupletList from './children2/wisdomContentCoupletList'
export default [
  {
    path: 'comprehensiveSituational',
    redirect: "/comprehensiveSituational/homePage",
    name: 'comprehensiveSituational1',
    component: () => import('@/views/mainMenu/comprehensiveSituational/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '综合态势',
      title: '综合态势',
      isShow: true
    },
    children: [...comprehensiveSituationalList]
  },
  {
    path: 'industryInvestment',
    redirect: "/industryInvestment/homePage",
    name: 'industryInvestment1',
    component: () => import('@/views/mainMenu/industryInvestment/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '产业招商',
      title: '产业招商',
      isShow: true
    },
    children: [...industryInvestmentList]
  },
  {
    path: 'thePublicSpace',
    redirect: "/thePublicSpace/homePage",
    name: 'thePublicSpace1',
    component: () => import('@/views/mainMenu/thePublicSpace/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '公共空间',
      title: '公共空间',
      isShow: true
    },
    children: [...thePublicSpaceList]
  },
  {
    path: 'theParkService',
    redirect: "/theParkService/homePage",
    name: 'theParkService1',
    component: () => import('@/views/mainMenu/theParkService/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '园区服务',
      title: '园区服务',
      isShow: true
    },
    children: [...theParkServiceList]
  },
  {
    path: 'theParkBusiness',
    redirect: "/theParkBusiness/homePage",
    name: 'theParkBusiness1',
    component: () => import('@/views/mainMenu/theParkBusiness/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '园区商业',
      title: '园区商业',
      isShow: true
    },
    children: [...theParkBusinessList]
  },
  {
    path: 'convenientParking',
    redirect: "/convenientParking/homePage",
    name: 'convenientParking1',
    component: () => import('@/views/mainMenu/convenientParking/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '便捷停车',
      title: '便捷停车',
      isShow: true
    },
    children: [...convenientParkingList]
  },
  {
    path: 'greenEnergyEfficiency',
    redirect: "/greenEnergyEfficiency/homePage",
    name: 'greenEnergyEfficiency1',
    component: () => import('@/views/mainMenu/greenEnergyEfficiency/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '绿色能效',
      title: '绿色能效',
      isShow: true
    },
    children: [...greenEnergyEfficiencyList]
  },
  {
    path: 'wisdomContentCouplet',
    redirect: "/wisdomContentCouplet/homePage",
    name: 'wisdomContentCouplet1',
    component: () => import('@/views/mainMenu/wisdomContentCouplet/index.vue'),
    meta: {
      icon: 'icon-zonghe',
      name: '智慧物联',
      title: '智慧物联',
      isShow: true
    },
    children: [...wisdomContentCoupletList]
  }
]