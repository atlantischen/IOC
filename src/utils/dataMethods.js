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
  Fullscreen,
  ScrolAnimationTop,
  ScrolLeftARight,
  randomNumer,
  filterNum,
  arrAdd,
  numAdd
}
export default fun