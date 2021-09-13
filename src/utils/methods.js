import dataM from './dataMethods' // 处理数据方法综合
import dateTimeM from './dateTimeMethods' // 处理日期时间方法综合
const moment = require('moment')

import {
  EleResize
} from '@/assets/js/echarts'
import * as echarts from 'echarts';
import screenfull from "screenfull";

/**
 * @author
 * @description echart共用方法
 * @param {val  bool}
 * @returns {handle}
 */
var redomEchart = function redomEchart(dom, option) {
  // let that = this
  // let resizeDiv = that.refs[dom] // document.getElementById(dom)
  if(dom && dom !== undefined){
   let resizeDiv = dom
   let myChart = null
   myChart = echarts.init(resizeDiv)
   myChart.clear()
   myChart.setOption(option, true)
  //  console.log(myChart.getOption() ,'myChart.getOption()  ');
   let listener = function () {
     myChart.resize()
   }
   EleResize.on(resizeDiv, listener)
 }
 
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
    _time = time * 1000,
    timer = null,
    timer2 = null,
    _d = null,
    box = that.$refs[dom] // document.getElementById(dom)
    scrol()
  function scrol() {
    var _s = box.children[1].offsetTop - box.children[0].offsetTop
    box.style.transition = `all 0.5s ease`
    box.style.transform = `translateY(-${_s}px)`;
    _d = box.cloneNode(true)
    if (box.children[0]) {
      box.children[0].parentNode.appendChild(_d.children[0])
    }
    setTimeout(() => {
      clearInterval(timer)
      timer = null
      box.style.transition = `none`
      box.style.transform = `translateY(0px)`;
      if (box.children[0]) {
        box.children[0].parentNode.removeChild(box.children[0])
      }
      timer = setInterval(scrol, _time)
    }, _time / 2);
  }
  window.onbeforeunload = function (e) {
    clearInterval(timer)
    timer = null
  };
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
  window.onbeforeunload = function (e) {
    clearInterval(timer)
    timer = null
  };
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


const fun = {
  ...dataM,
  ...dateTimeM,
  redomEchart,
  Fullscreen,
  ScrolAnimationTop,
  ScrolLeftARight,
  handleFullScreen,
  afterIframeOnload
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