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
  modules: {}
})