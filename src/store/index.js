import comState from './modules/comState'
import {
  createStore
} from 'vuex'


export default createStore({
  state: {
    unitySendData: {},
    activeIndex:0,
    videoShow:false,
    dialogShow:false,
 
  
  },
  mutations: {
    setData(state, payload) {
      state.unitySendData = payload
    },
    setActiveIndex(state, payload) {
      state.activeIndex = payload
    },
    setVideoShow(state, payload) {
      state.videoShow = payload
    },
    setDialogShow(state, payload) {
      state.dialogShow = payload
    },

  
  },
  actions: {},
  getters: {},
  modules: {
    comState: comState
  }

})