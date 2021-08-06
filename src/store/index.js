import comState from './modules/comState'
import {
  createStore
} from 'vuex'


export default createStore({
  state: {
    unitySendData: {},
    activeIndex:0
  },
  mutations: {
    setData(state, payload) {
      state.unitySendData = payload
    },
    setActiveIndex(state, payload) {
      state.activeIndex = payload
    }
  },
  actions: {},
  getters: {},
  modules: {
    comState: comState
  }

})