import { EleResize } from '@/assets/js/echarts'
import * as echarts from 'echarts';
/**
 * @author
 * @description echart共用方法
 * @param {val  bool}
 * @returns {handle}
 */
export function redomEchart(dom, option) {
  let resizeDiv = document.getElementById(dom)
  let myChart = echarts.init(resizeDiv)
  myChart.setOption(option)
  console.log(EleResize)
  let listener = function () {
    console.log('resize')
    myChart.resize()
  }
  EleResize.on(resizeDiv, listener)
}