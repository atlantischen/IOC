import comState from './modules/comState'
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    unitySendData: {},
  },
  mutations: {
    setData(state, payload) {
      state.unitySendData = payload
    }
  },
  actions: {},
  modules: {
    comState: comState
  }

})