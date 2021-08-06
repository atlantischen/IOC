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
 * @description 随机数
 * @param number
 * @returns {num}
 */
var randomNumer = function randomNumer(minNum, maxNum, val) {
  if (!val) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum)
  } else {
    // 小数
    return (Math.random() * (maxNum - minNum) + minNum).toFixed(val)
  }
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
 * 数组求和
 * @returns
 */
var arrAdd = function arrAdd(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum
}

/**
 * 数字递增
 * @returns
 */
var numAdd = function numAdd(aa) {
  var that = this
  const numD = document.getElementById(aa)
  // const numD = that.$refs[aa]
  console.log(aa)
  console.log(numD)
  var num = numD.getAttribute("data-to")
  var time = numD.getAttribute("data-speed")
  var numTime = num / time
  var i = 1
  var timer = setInterval(function () {
    if (i == num) {
      clearInterval(timer)
    }
    // numD.innerHTML = i++;
    return filterNum(i++)
  }, numTime)
}
const fun = {
  uuid,
  paddingFun,
  eHeightFun,
  randomNumer,
  filterNum,
  arrAdd,
  numAdd
}
export default fun