import {
  EleResize
} from '@/assets/js/echarts'
import * as echarts from 'echarts';
const moment = require('moment')

var currentDate = function currentDate(dom) {
  let _d, _a
  switch (moment(new Date()).format('d')) {
    case '4':
      _d = '四'
    default:
      _d = '-'
      break;
  }
  setInterval(() => {
    console.log(moment(new Date()).format(`YYYY年MM月DD日 星期${_d} HH:mm:ss`))
    _a = moment(new Date()).format('YYYY年MM月DD日 星期' + _d + ' HH:mm:ss')
  }, 1000);
  dom.innerHTML = _a
  return _a
}

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
    case typeof val == 'array' || typeof val == 'object':
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


/**
 * @author
 * @description 全屏/取消全屏
 * @param {val  bool}
 * @returns {handle}
 */
var Fullscreen = function Fullscreen(val, bool) {
  const element = val
  // console.log(element);
  if (bool) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen()
    }
  }
}


const fun = {
  currentDate,
  redomEchart,
  uuid,
  paddingFun,
  eHeightFun,
  Fullscreen
}
export default fun