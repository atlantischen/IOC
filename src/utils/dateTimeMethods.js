const moment = require('moment')

/**
 * @author
 * @description 获取时间日期 YYYY年MM月DD日 星期d HH:mm:ss
 * @param {val  bool}
 * @returns {handle}
 */
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
 *
 * 获取00:00到现在的时整点  开始时间  (00:00) 结束(获取现在 例 15:00) 
 * @param {Array} _rangeT // 初始化开始结束时间 
 * @param {Number} _range // 显示个数（存在1~2误差） 
 * @param {Array} delItem // 删除数组中指定项
 * @returns
 */
var timeRangeArr = function timeRangeArr(_rangeT, delItem, _range,) {
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
  var _start = '00:00'
  var _end = moment(new Date()).format('HH:mm').split(':')[0] + ':00'
  if (_rangeT) {
    _start = _rangeT[0]
    if (_rangeT[1].split(':')[0] * 1 <= _end.split(':')[0] * 1) {
      _end = _rangeT[1]
    }
  }
  var timeline = [], returnArr = [],
    startHour = _start.split(':')[0] * 1,
    endHour = _end.split(':')[0] * 1
  for (var i = startHour; i <= endHour; i++) {
    timeline.push(((i < 10) ? '0' + i : i) + ":00");
  }

  if (timeline.length > 5) {
    if (_range) {
      returnArr = getNewArr(timeline, _range - 1)
    } else {
      returnArr = noRepeat(timeline, 5)
    }
  } else {
    returnArr = timeline;
  }
  if (delItem) {
    for (var i = 0; i < returnArr.length; i++) {
      for (var j = 0; j < delItem.length; j++) {
        if (returnArr[i] == delItem[j]) {
          returnArr.splice(i, 1);
        }
      }
    }
  }
  return returnArr
}

/**
 *
 * 获取1月到现在的月份数组
 * @param {any} start 开始时间  (1月)
 * @param {any} end   结束(8月)
 * @returns
 */
var monthRangeArr = function monthRangeArr(inclued) {
  var _m = Number(moment(new Date()).format('MM')),
    arr = []
  if (inclued) {
    for (var i = 1; i <= _m; i++) {
      arr.push(i + '月')
    }
  } else {
    for (var i = 1; i < _m; i++) {
      arr.push(i + '月')
    }
  }
  return arr
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
  timeRangeArr,
  monthRangeArr,
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