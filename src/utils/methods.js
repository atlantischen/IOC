import {
  EleResize
} from '@/assets/js/echarts'
import * as echarts from 'echarts';
import screenfull from "screenfull";
const moment = require('moment')

var currentDate = function currentDate() {
  let _d
  switch (moment(new Date()).format('d')) {
    case '0':
      _d = '日'
      break;
    case '1':
      _d = '一'
      break;
    case '2':
      _d = '二'
      break;
    case '3':
      _d = '三'
      break;
    case '4':
      _d = '四'
      break;
    case '5':
      _d = '五'
      break;
    default:
      _d = '六'
      break;
  }
  return moment(new Date()).format('YYYY年MM月DD日 星期' + _d + ' HH:mm:ss')
}

/**
 * @author
 * @description echart共用方法
 * @param {val  bool}
 * @returns {handle}
 */
var redomEchart = function redomEchart(dom, option) {
  // let that = this
  // let resizeDiv = that.refs[dom] // document.getElementById(dom)
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


/**
 * @author
 * @description 向上滚动动画（一列多行,y轴运动）
 * @param {DOMError }
 * @param {time}
 * @returns {Function}
 */
var ScrolAnimationTop = function ScrolAnimationTop(dom, time) {
  var that = this,
    _time = time * 1000
  var box = that.$refs[dom] // document.getElementById(dom)
  let timer = setInterval(scrol, _time);

  function scrol() {
    var _s = box.children[1].offsetTop - box.children[0].offsetTop
    box.style.transition = `all 0.5s ease`
    box.style.transform = `translateY(-${_s}px)`;
    let _d = box.cloneNode(true)
    if (box.children[0]) {
      box.children[0].parentNode.appendChild(_d.children[0])
    }
    setTimeout(() => {
      clearInterval(timer)
      box.style.transition = `none`
      box.style.transform = `translateY(0px)`;
      if (box.children[0]) {
        box.children[0].parentNode.removeChild(box.children[0])
      }
      timer = setInterval(scrol, _time)
    }, _time / 2);
  }
}
/**
 * @author
 * @description 动画（多行多列,x轴运动）
 * @param {DOMError }
 * @param {time}
 * @returns {Function}
 */
var ScrolLeftARight = function ScrolLeftARight(dom, time) {
  var that = this,
    _time = time * 1000
  var box = that.$refs[dom] // document.getElementById(dom)
  let timer = setInterval(scrol, _time);

  function scrol() {
    let _d = box.cloneNode(true)
    if (box.children[0]) {
      box.children[0].parentNode.appendChild(_d.children[0])
    }
    var _s = box.children[1].offsetLeft - box.children[0].offsetLeft
    for (var i = 0; i < box.children.length; i++) {
      box.children[i].style.transition = `all 0.5s ease`
      box.children[i].style.transform = `translateX(-${_s}px)`;
    }
    setTimeout(() => {
      clearInterval(timer)
      for (var i = 0; i < box.children.length; i++) {
        box.children[i].style.transition = `none`
        box.children[i].style.transform = `translateX(0px)`;
      }
      if (box.children[0]) {
        box.children[0].parentNode.removeChild(box.children[0])
      }
      timer = setInterval(scrol, _time)
    }, _time / 2);
  }
}
/**
 * @author
 * @description 随机数
 * @param number
 * @returns {num}
 */
var randomNumer = function randomNumer(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum)
}
/**
 * @author
 * @description 数据格式(,分隔)
 * @param number
 * @returns {num}
 */
var filterNum = function filterNum(val) {
  return Number(val).toLocaleString()
}
/**
 *
 * 获取00:00到现在的时整点
 * @param {any} start 开始时间  (00:00)
 * @param {any} end   结束(获取现在 例 15:00)
 * @returns
 */
var timeRangeArr = function timeRangeArr(_range) {
  function noRepeat(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  function getNewArr(arr, _range2) {
    var n = [],
      _l = arr.length
    for (var z = 0; z <= _l; z += Math.ceil(_l / (_range2 - 1))) {
      let _d = arr.slice(z, z + 1)[0]
      if (_d) {
        n.push(_d)
      }
    }
    n.push(arr[_l - 1])
    return noRepeat(n)
  }
  var _start = '00:00',
    range = _range - 1,
    _end = moment(new Date()).format('HH:mm').split(':')[0] + ':00'
  var timeline = [],
    startHour = _start.split(':')[0] * 1,
    endHour = _end.split(':')[0] * 1
  for (var i = startHour; i <= endHour; i++) {
    timeline.push(((i < 10) ? '0' + i : i) + ":00");
  }
  if (timeline.length > 5) {
    if (range) {
      return getNewArr(timeline, range)
    } else {
      return noRepeat(timeline, 5)
    }
  } else {
    return timeline;
  }
}

/**
 *
 * 获取1月到现在的月份数组
 * @param {any} start 开始时间  (1月)
 * @param {any} end   结束(8月)
 * @returns
 */
var monthRangeArr = function monthRangeArr(_range) {
  var _m = Number(moment(new Date()).format('MM')), arr = []
  for (var i = 1; i < _m; i++) {
    arr.push(i + '月')
  }
  return arr
}
/**
 * 全屏
 * @returns
 */
var handleFullScreen = function handleFullScreen() {
  if (!screenfull.isEnabled) {
    this.$message.info("您的浏览器版本过低，不支持全屏浏览");
    return false;
  }
  screenfull.toggle();
}
/**
 * iframe加载完之后
 * @returns
 */
var afterIframeOnload = function afterIframeOnload(dom, fun) {
  let _ref = this.$refs[dom]
  _ref.onload = _ref.onreadystatechange = function () {
    if (this.readyState && this.readyState != 'complete') return;
    else {
      fun()
    }
  }
}
/**
 * 获取今年开始 本年第几天（y） 本月第几天（m）
 * @returns
 */
var getDayNums = function getDayNums(val) {
  switch (val) {
    case 'y':
      let currentYear = new Date().getFullYear().toString();
      let hasTimestamp = new Date() - new Date(currentYear);
      let hasDays = Math.ceil(hasTimestamp / 86400000) + 1;
      // console.log('今天是%s年中的第%s天', currentYear, hasDays);
      return hasDays
    case 'm':
      return Number(moment(new Date()).format('DD'))
    default:
      return 0
  }
}
const fun = {
  currentDate,
  redomEchart,
  uuid,
  paddingFun,
  eHeightFun,
  Fullscreen,
  ScrolAnimationTop,
  ScrolLeftARight,
  randomNumer,
  filterNum,
  timeRangeArr,
  monthRangeArr,
  handleFullScreen,
  afterIframeOnload,
  getDayNums
}
export default fun



// 10:57
export function formatHm(val) {
  if (val) return moment(val).format('HH:mm')
}
//  2020-11-26 10:57:00
export function formatYMDHms(val) {
  if (val) return moment(val).format('YYYY-MM-DD HH:mm:ss')
}