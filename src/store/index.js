import { createStore } from 'vuex'

export default createStore({
  state: {
      unitySendData:'wewewe'
      
  },
  mutations: {
      setData(state,payload){
          state.unitySendData=payload
      }
  },
  actions: {
  },
  modules: {
  }
})