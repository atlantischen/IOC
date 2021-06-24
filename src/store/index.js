import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    unitySendData: {},
    debugData: {}
  },
  mutations: {
    setData(state, payload) {
      state.unitySendData = payload
    }
  },
  actions: {},
  modules: {}
})