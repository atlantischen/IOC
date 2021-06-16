import comprehensiveSituationalList from './children/comprehensiveSituationalList'
import industryInvestmentList from './children/industryInvestmentList'
import thePublicSpaceList from './children/thePublicSpaceList'
import theParkServiceList from './children/theParkServiceList'
import theParkBusinessList from './children/theParkBusinessList'
import convenientParkingList from './children/convenientParkingList'
import greenEnergyEfficiencyList from './children/greenEnergyEfficiencyList'
import wisdomContentCoupletList from './children/wisdomContentCoupletList'
export default [
  {
    path: 'comprehensiveSituational',
    redirect: "/comprehensiveSituational/homePage",
    name: 'comprehensiveSituational',
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
    name: 'industryInvestment',
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
    name: 'thePublicSpace',
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
    name: 'theParkService',
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
    name: 'theParkBusiness',
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
    name: 'convenientParking',
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
    name: 'greenEnergyEfficiency',
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
    name: 'wisdomContentCouplet',
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