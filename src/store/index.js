import comState from './modules/comState'
import {
  createStore
} from 'vuex'


export default createStore({
  state: {
    unitySendData: {},
    activeIndex:0,
    cancelTokenArr: []
  },
  mutations: {
    setData(state, payload) {
      state.unitySendData = payload
    },
    setActiveIndex(state, payload) {
      state.activeIndex = payload
    },
    clearToken ({ cancelTokenArr }) {
      cancelTokenArr.forEach(item => {
        item('路由跳转取消请求')
      })
      cancelTokenArr = []
    }
  },
  actions: {},
  getters: {},
  modules: {
    comState: comState
  }

})