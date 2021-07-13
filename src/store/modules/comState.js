export default {
  state: {
    isShowLR: false, // 展示左右信息框
    showWarnTip: false, // 警告框
    showCenterDatas: false, // 中心数据显示
    centerDatas: null, // 中心数据
  },
  mutations: {
    SET_ISSHOWLR(state, value) {
      state.isShowLR = value
    },
    SET_SHOWWARNTIP(state, value) {
      state.showWarnTip = value
    },
    SET_CENTERDATAS(state, value) {
      if (value[0]) {
        state.centerDatas = JSON.parse(value[1])
      }
      state.showCenterDatas = value[0]
    }
  },
  actions: {}
}