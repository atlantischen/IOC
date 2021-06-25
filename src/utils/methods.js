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
export function redomEchart(dom, option) {
  let resizeDiv = document.getElementById(dom)
  let myChart = null
  myChart = echarts.init(resizeDiv)
  myChart.clear()
  myChart.setOption(option, true)
  console.log(EleResize)
  let listener = function () {
    console.log('resize')
    myChart.resize()
  }
  EleResize.on(resizeDiv, listener)
}


/**
 * @author
 * @description 随机id
 * @param {val  bool}
 * @returns {handle}
 */
export function uuid() {
  var uuid = []
  var hexDigits = '0123456789abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < 36; i++) {
    uuid[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  uuid[14] = '4'
  uuid[19] = hexDigits.substr((uuid[19] & 0x3) | 0x8, 1)
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
  // return 'u' + uuid.join('').replace('-', '')
  return 'u' + uuid.join('')
}