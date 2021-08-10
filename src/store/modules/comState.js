import i18n from '@/lang/index'
import {
  getLanguage
} from '@/lang/index'
export default {
  state: {
    isShowLR: false, // 展示左右信息框
    showWarnTip: false, // 警告框
    showCenterDatas: false, // 中心数据显示
    centerDatas: null, // 中心数据
    lang: getLanguage(), // 切换语言 zh/en
  },
  mutations: {
    SET_ISSHOWLR(state, value) {
      state.isShowLR = value
    },
    SET_SHOWWARNTIP(state, value) {
      state.showWarnTip = value
    },
    SET_CENTERDATAS(state, value) {
      localStorage.setItem('ENTERDATATAS', JSON.stringify(value))
      let _d = JSON.parse(localStorage.getItem('ENTERDATATAS'))
      if (_d[0]) {
        state.centerDatas = _d[1]
      }
      state.showCenterDatas = _d[0]
  
    },
    SET_LANG(state, val) {
      state.lang = val
      // location.reload()
      localStorage.setItem("language", val);
      
      i18n.locale = val
    }
  },
  actions: {
    SET_LANG({
      commit
    }, val) {
      commit('SET_LANG', val)
    },

    SET_SHOWWARNTIP({
      commit
    }, value) {
      commit('SET_SHOWWARNTIP', value)
    },
    SET_CENTERDATAS({
      commit
    }, value) {
      commit('SET_CENTERDATAS', value)
    },
  },
  getters: {
    getLanguage: state => state.lang
  }
}