import {
  EleResize
} from '@/assets/js/echarts'
import * as echarts from 'echarts';
/**
 * @author
 * @description echart共用方法
 * @param {val  bool}
 * @returns {handle}
 */
var redomEchart = function redomEchart(dom, option, e) {
  // let resizeDiv = document.getElementById(dom)
  // let resizeDiv = this.refs[dom]
  // let resizeDiv = e[dom]
  let resizeDiv = dom
  let myChart = null
  myChart = echarts.init(resizeDiv)
  myChart.clear()
  myChart.setOption(option, true)
  let listener = function () {
    myChart.resize()
  }
  EleResize.on(resizeDiv, listener)
}


/**
 * @author
 * @description 随机id
 * @param {val  null}
 * @returns {handle}
 */
var uuid = function uuid() {
  var uuid = []
  var hexDigits = '0123456789abcdefghijklmnopqrstuvwxyz'
  // var hexDigits = 'adc'
  for (var i = 0; i < 36; i++) {
    uuid[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  uuid[14] = '4'
  uuid[19] = hexDigits.substr((uuid[19] & 0x3) | 0x8, 1)
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = ''
  // return 'u' + uuid.join('').replace('-', '')
  return 'u' + uuid.join('')
}
/**
 * @author
 * @description 统一padding
 * @param {val  array}
 * @returns {string}
 */
var paddingFun = function paddingFun(val) {
  if (!val) {
    return
  }
  let _s = ''
  switch (true) {
    case typeof val == 'array':
      for (let i = 0; i < val.length; i++) {
        _s += val[i] == 0 ? '0 ' : val[i] / 80 + 'rem '
      }
      return 'padding:' + _s + ';'
    case typeof val == 'number':
      return 'padding:' + val / 80 + 'rem;'
    default:
      break;
  }
}
/**
 * @author
 * @description 统一height
 * @param {val  number}
 * @returns {string}
 */
var eHeightFun = function eHeightFun(val) {
  if (!val) {
    return
  }
  return val ? 'height:' + val / 80 + 'rem;' : ''
}
const fun = {
  redomEchart,
  uuid,
  paddingFun,
  eHeightFun
}
export default fun