
import {
  createStore
} from 'vuex'
import comState from './modules/comState.js'
export default createStore({
  state: {
    userInfo: {
    },
    aa:''
  },
  mutations: {
    SET_RightMenu (state, value) {
      state.aa = value
    }
  },
  actions: {},
  getters: {
  },
  modules: {
    comState: comState,
  }
})
