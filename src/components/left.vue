<template>
  <div id="IocLeftPart" class="IocLeftPart">
    <!-- 未解决告警 -->
    <div class="qx_title">未解决告警<a href="javascript:;;" @click="addMore('UI_EVENT_IOC_LeftUnresolvedWarning_More')">more <i class="iconfont icon-youjiantou"></i></a></div>
    <div class="v-h-sb part_line part_content">
      <div id="alarms_datas" ref="alarms_datas_ref"></div>
      <div id="alarms_datas2" ref="alarms_datas_ref2"></div>
    </div>
    <div>
      <!-- 风险级别 -->
      <div class="alarm_sort level_risk part_content">
        <div class="lit_sort">
          <span class="active">全部 (54)</span>
          <span class="_red ">严重 (50)</span>
          <span class="_yl">重要 (4)</span>
          <span>次要 (0)</span>
        </div>
      </div>
      <!-- 报警类型 -->
      <div class="alarm_sort alarm_type part_content">
        <div class="lit_sort">
          <span class="active">全部 (53)</span>
          <span >用电 (50)</span>
          <span>安防 (3)</span>
          <span>消防 (0)</span>
          <span>电梯 (0)</span>
          <span>环境 (0)</span>
          <span>停车场 (0)</span>
        </div>
      </div>
    </div>
    <div class="alarm_info scorllBar part_content">
      <div class="alarm_list v-h-sb">
        <div class="list_title">
          <i class="iconfont icon-jinggao "></i>
          <span class="LineBeyond">1F-供配电房_供配电-供电高压侧_过电压 </span>
        </div>
        <span>待处理</span><br>
        <span>11/25 14:34</span>
      </div>
      <div class="alarm_list v-h-sb" >
        <div class="list_title">
          <i class="iconfont icon-jinggao "></i>
          <span class="LineBeyond">1F-供配电房_供配电-供电高压侧_过电压 </span>
        </div>
        <span>待处理</span><br>
        <span>11/25 14:34</span>
      </div>
      <div class="alarm_list v-h-sb" >
        <div class="list_title">
          <i class="iconfont icon-jinggao "></i>
          <span class="LineBeyond">1F-供配电房_供配电-供电高压侧_过电压 </span>
        </div>
        <span>待处理</span><br>
        <span>11/25 14:34</span>
      </div>
      <div class="alarm_list v-h-sb" >
        <div class="list_title">
          <i class="iconfont icon-jinggao "></i>
          <span class="LineBeyond">1F-供配电房_供配电-供电高压侧_过电压 </span>
        </div>
        <span>待处理</span><br>
        <span>11/25 14:34</span>
      </div>
    </div>
    <div class="line_block_datas ">
      <div class="line_block energy_mgt">
        <!-- 能耗管理 -->
        <div class="qx_title">能耗管理<a href="javascript:;;" @click="addMore('UI_EVENT_IOC_LeftEnergyConsumptionManagement_More')">more <i class="iconfont icon-youjiantou"></i></a></div>
        <div class="energy_num v-h-sa">
          <div class="_num_box shui_num">
            <i class="iconfont icon-leidian"></i>
            <!-- <img src="./img/energy_dian.png" alt="" /> -->
            <div class="_num_text">
              <span ><i ref="value1">0</i><i>kw/h</i></span>
              <span>今日用电量</span>
            </div>
          </div>
          <div class="_num_box dian_num">
            <i class="iconfont icon-shui"></i>
            <!-- <img src="./img/energy_shui.png" alt="" /> -->
            <div class="_num_text">
              <span><i ref="value2">0</i><i>m³</i></span>
              <span>今日用水量</span>
            </div>
          </div>
        </div>
        <div id="energyMgtEchart" ref="energyMgtEchart_ref"></div>
      </div>
    </div>
    <!-- 系统监控 -->
    <div class="systemMonitor">
      <div class="qx_title">系统监测<a href="javascript:;;"  @click="addMore('UI_EVENT_IOC_LeftSystemCheckout_More')">more <i class="iconfont icon-youjiantou"></i></a></div>
      <div id="Monitor_datas" ref="Monitor_datas_ref"></div>
    </div>
    <!-- <img src="./img/echart1_bg.png" id="bg_img" style="display:none" /> -->
  </div>
</template>

<script>
import '@/assets/css/iocPage.less'
import * as echarts from 'echarts';
export default {
    data(){
        return{

        }
    },
    methods:{
        addMore(name){
          sendMessageToUnity(name);
        },
        echartInit(echartInitData) {
      var myChart = echarts.init(document.getElementById('alarms_datas'))
      var echartInitData = echartInitData
      console.log(echartInitData);
      let angle = 0// 角度，用来做简单的动画效果的
      var option = {
        backgroundColor: 'transparent',
        title: {
          text: '{a|' + echartInitData + '} {b|%}\n {c|风险指数}',
          x: 'center',
          y: 'center',
          textStyle: {
            rich: {
              a: {
                fontSize: 22,
                fontWeight: 'bold',
                textAlgin: 'center',
                color: '#00ffff'
              },
              b: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#00ffff'
              },
              c: {
                fontSize: 12,
                color: '#00ffff'
                // padding: [5,0]
              }
            }
          }
        },
        legend: {
          type: 'plain',
          orient: 'vertical',
          right: 0,
          top: '10%',
          align: 'auto',
          data: [{
            name: '1',
            icon: 'circle'
          }, {
            name: '2',
            icon: 'circle'
          }, {
            name: '3',
            icon: 'circle'
          }, {
            name: '4',
            icon: 'circle'
          }],
          textStyle: {
            color: 'white',
            fontSize: 16,
            padding: [10, 1, 10, 0]
          },
          selectedMode: false
        },
        series: [{
          name: 'ring5',
          type: 'custom',
          coordinateSystem: 'none',
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.9,
                startAngle: (0 + angle) * Math.PI / 180,
                endAngle: (90 + angle) * Math.PI / 180
              },
              style: {
                stroke: '#164283',
                fill: 'transparent',
                lineWidth: 1.5
              },
              silent: true
            }
          },
          data: [0]
        }, {
          name: 'ring5',
          type: 'custom',
          coordinateSystem: 'none',
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.8,
                startAngle: (180 + angle) * Math.PI / 180,
                endAngle: (270 + angle) * Math.PI / 180
              },
              style: {
                stroke: '#164283',
                fill: 'transparent',
                lineWidth: 1.5
              },
              silent: true
            }
          },
          data: [0]
        }, {
          name: 'ring5',
          type: 'custom',
          coordinateSystem: 'none',
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                startAngle: (270 + -angle) * Math.PI / 180,
                endAngle: (40 + -angle) * Math.PI / 180
              },
              style: {
                stroke: '#48749b',
                fill: 'transparent',
                lineWidth: 1.5
              },
              silent: true
            }
          },
          data: [0]
        },
        {
          name: 'ring5',
          type: 'custom',
          coordinateSystem: 'none',
          renderItem: function (params, api) {
            return {
              type: 'arc',
              shape: {
                cx: api.getWidth() / 2,
                cy: api.getHeight() / 2,
                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.85,
                startAngle: (90 + -angle) * Math.PI / 180,
                endAngle: (220 + -angle) * Math.PI / 180
              },
              style: {
                stroke: '#48749b',
                fill: 'transparent',
                lineWidth: 1.5
              },
              silent: true
            }
          },
          data: [0]
        },
   
        {
          name: '频率',
          type: 'pie',
          radius: ['60%', '75%'],
          silent: true,
          clockwise: true,
          startAngle: 90,
          z: 0,
          zlevel: 0,
          label: {
            normal: {
              position: 'center'
            }
          },
          data: [{
            value: echartInitData,
            name: '',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#00ffff' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#0090ff' // 100% 处的颜色
                  }]
                }
              }
            }
          },
          {
            value: 100 - echartInitData,
            name: '',
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#093a5c'
              }
            }
          }
          ]
        }

        

        ]
      };

      //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
      function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
        let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
        return {
          x: x1,
          y: y1
        }
      }

      function draw () {
        angle = angle + 3
        myChart.setOption(option, true)
        // window.requestAnimationFrame(draw);
      }

      setInterval(function () {
        // 用setInterval做动画感觉有问题
        draw()
      }, 100)

      // window.onresize = myChart.resize
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      // window.removeEventListener("resize",function () {
      //   myChart.resize()
      // });
     myChart.setOption(option)
    },
        echartInit2() {
          var echartInitData = Math.round(Math.random() * (80 - 50 + 1) + 50)
          var data2 = [3, 50, echartInitData]
          var myChart = echarts.init(document.getElementById('alarms_datas2'))
          var option = {
            grid: {
              left: '10',
              top: '20',
              right: '30',
              bottom: '30',
              containLabel: true
            },
            xAxis: {
              type: 'value', // 'value'-数值轴；'category'-类目轴;//'time'-时间轴;'log'-对数轴
              splitLine: { show: false }, // 坐标轴在 grid 区域中的分隔线
              axisLabel: { show: false }, // 坐标轴刻度标签
              axisTick: { show: false }, // 坐标轴刻度
              axisLine: { show: false }// 坐标轴轴线
            },
            yAxis: [
              {
                type: 'category',
                show: false,
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: { show: false }
              },
              {
                type: 'category',
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                  show: true,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: '500',
                  padding: [0, 0, 0, 10],
                  // fontFamily: 'fashionFont',
                  formatter: function name(name, i) {
                    if (i == 2) {
                      return '{b|'+name + '}{a|'+ data2[i] + '%}'
                    } else {
                      return '{b|'+ name + '}{a|'+  data2[i] + '}'
                    }
                  },
                  rich:{
                    a:{
                      fontSize: 17,
                      color: '#00ffff'
                    },
                    b:{
                      width:65,
                    }
                  }
                },
                data: ['处理中：', '处理：', '处理进度：']
              }
            ],
            series: [// 系列列表。每个系列通过 type 决定自己的图表类型
              {
                name: '进度', // 系列名称
                type: 'bar', // 柱状、条形图
                barWidth: 8,
                data: data2, // 系列中数据内容数组
                label: { // 图形上的文本标签
                  show: false,
                  offset: [0, 0],
                  formatter: '{b}{c}', // 标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
                  color: '#fff', // 标签字体颜色
                  fontSize: 12 // 标签字号
                },
                itemStyle: { // 图形样式
                  normal: {
                    barBorderRadius: [5, 5, 5, 5],　　// 各个棱角的弧度
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [{
                        offset: 0,
                        color: '#00FFFF'
                      }]
                    )
                  }
                },
                zlevel: 1
              },
              {
                name: '背景',
                type: 'bar',
                barGap: '-100%',
                barWidth: 8,
                data: [100, 100, 100],
                label: { // 图形上的文本标签
                  show: false,
                  position: 'right', // 标签的位置
                  offset: [0, 0],
                  formatter: '{b}{c}', // 标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
                  color: '#00edff', // 标签字体颜色
                  fontSize: 12 // 标签字号
                },
                color: '#2C566C', // 柱条颜色
                itemStyle: {
                  normal: {
                    barBorderRadius: [5, 5, 5, 5], // 各个棱角的弧度
                    color: '#2c566c'
                  }
                }
              }
            ]
          }
          myChart.setOption(option)
        },
        energyMgtEchart() {
          var myChart = echarts.init(document.getElementById('energyMgtEchart'))
          var option = {
            tooltip: {
              // show: false,
              // trigger: 'item',  
              trigger: 'axis',
              axisPointer:{
                lineStyle:{
                color:'transparent'
              }
              }

        },
       
            color: ['#ffea00', '#0df8fc', '#fff'],
            grid: {
              x: 50,
              y: 20,
              x2: 90,
              y2: 20,
              backgroundColor: 'rgba(0,0,0,0)',
              borderWidth: 1,
              borderColor: '#ccc'
            },
            legend: {
              right: 20,
              top: 20,
              orient: 'vertical', // 'horizontal'
              data: ['照明', '空调', '其他'],
              itemWidth: 10, // 图例的宽度
              itemHeight: 10, // 图例的高度
              icon: 'circle',
              textStyle: {
                color: '#fff',
                fontSize: 13
              },
              icon: 'circle',
              itemWidth: 6, // 设置宽度
              itemHeight: 6, // 设置高度
              itemGap: 15 // 设置间距
            },
            xAxis: {
              type: 'category',
              data: [0, 4, 8, 12, 16, 20],
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgb(255,255,255,0)',
                  type: 'dashed'
                },
              },
              axisLabel: {
                fontSize: 13,
                interval: 0,
                margin: 10,
                textStyle: {
                  color: '#fff'
                }
              },
            },
            yAxis: [
              {
                min: 800,
                max: 2000,
                splitNumber: 3,
                interval:400,
                // minInterval: 1,
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: '#fff',
                    type: 'dashed'
                  }
                },
                splitLine:{
                  lineStyle: {
                    type: 'dashed',
                    color: 'rgb(255,255,255,.5)',//左边线的颜色
                    width:'1'//坐标线的宽度
                  }
                },
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#fff',
                    width: 0
                  }
                }
              },
              {
                show: false,
                name: '照明',
                interval: 10,
                splitLine: {
                  show: false,
                  lineStyle: {
                    type: 'dashed'
                  }
                },
                axisLabel: {
                  show: false,
                  formatter: '{value} %'
                },
                axisLine: {
                  lineStyle: {
                    color: '#fff', // 纵坐标轴和字体颜色
                    width: 2
                  }
                }
              }
            ],
            series: [{
              name: '照明',
              type: 'line',
              smooth: true,
              color: '#f1f100',
              symbolSize: 0,
              data: [1244, 1244, 1234, 1700, 1200, 1000]
            }, {
              name: '空调',
              type: 'line',
              smooth: true,
              color: '#17f8fc',
              symbolSize: 0,
              data: [1300, 1200, 1600, 1000, 1324, 1300]
            }, {
              name: '其他',
              type: 'line',
              smooth: true,
              color: '#fff',
              symbolSize: 0,
              data: [1400, 1420, 1624, 1273, 1523, 1600]
            }]
          }
          myChart.setOption(option)
        },
        MonitorDatas() {
          var myChart = echarts.init(document.getElementById('Monitor_datas'))
          var option = {
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              show: true,
              top: 20,
              right: 10,
              orient: 'vertical',
              data: ['开启数', '关闭数', '故障数'],
              textStyle: {
                color: '#fff',
                fontSize: 13
              },
              icon: 'circle',
              itemWidth: 6, // 设置宽度
              itemHeight: 6, // 设置高度
              itemGap: 15 // 设置间距
            },
            grid: {
              left: 20,
              right: 90,
              bottom: '0',
              top: 0,
              containLabel: true
            },
            xAxis: {
              type: 'value',
              name: '',
              splitLine: { show: false }, // 坐标轴在 grid 区域中的分隔线
              axisLabel: { show: false }, // 坐标轴刻度标签
              axisTick: { show: false }, // 坐标轴刻度
              axisLine: { show: false }// 坐标轴轴线
            },
            yAxis: [
              {
                type: 'category',
                axisTick: { show: false },
                axisLine: { show: false },
                data: ['供配电', '给排水', '消   防', '暖   通'],
                axisLabel: {
                  formatter: function (value, index) {
                    if (index == 0) {
                      return '{d|      ' + value + '}'
                    } else if (index == 1) {
                      return '{c|      ' + value + '}'
                    } else if (index == 2) {
                      return '{b|     ' + value + '}'
                    } else {
                      return '{a|      ' + value + '}'
                    }
                  },
                  color: '#fff',
                  padding: [0, 60, 0, 0],
                  rich: {
                    a: {
                      width: 18,
                      height: 20,
                      fontSize: 14,
                      align: 'left',
                      backgroundColor: {
                        image: require('@/assets/img/ioc_gpd.png')
                      }
                    },
                    b: {
                      width: 14,
                      height: 20,
                      fontSize: 14,
                      align: 'left',
                      backgroundColor: {
                        image: require('@/assets/img/ioc_xf.png')
                      }
                    },
                    c: {
                      width: 18,
                      height: 18,
                      fontSize: 14,
                      align: 'left',
                      backgroundColor: {
                        image: require('@/assets/img/ioc_gps.png')
                      }
                    },
                    d: {
                      width: 18,
                      height: 18,
                      fontSize: 14,
                      align: 'left',
                      backgroundColor: {
                        image: require('@/assets/img/ioc_gpd.png')
                      }
                    }
                  }
                }
              },
              {
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                  show: true,
                  color: '#fff'
                },
                data: [157, 69, 96, 119]
              }
            ],
            series: [
              {
                name: '开启数', // 系列名称
                type: 'bar', // 柱状、条形图
                barWidth: 15,
                stack: 'total',
                showBackground: true,
                backgroundStyle: {
                  color: '#2c566c'
                },
                emphasis: {
                  focus: 'series'
                },
                data: [34, 23, 23, 43], // 系列中数据内容数组
                label: { // 图形上的文本标签
                  show: true,
                  position: 'center', // 标签的位置
                  offset: [5, 3],
                  // formatter: '{c}{a}',//标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
                  formatter: '{c}',
                  color: '#000', // 标签字体颜色
                  fontSize: 13
                },
                itemStyle: { // 图形样式
                  normal: {
                    barBorderRadius: 0,
                    color: '#00ffff'
                  }
                }
              },
              {
                name: '关闭数', // 系列名称
                type: 'bar', // 柱状、条形图
                stack: 'total',
                barWidth: 15,
                data: [45, 23, 30, 22], // 系列中数据内容数组
                label: { // 图形上的文本标签
                  show: true,
                  position: 'center', // 标签的位置
                  offset: [5, 3],
                  // formatter: '{c}{a}',//标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
                  formatter: '{c}',
                  color: '#fff', // 标签字体颜色
                  fontSize: 13
                },
                itemStyle: { // 图形样式
                  normal: {
                    barBorderRadius: 0,
                    color: '#0090ff'
                  }
                }
              },
              {
                name: '故障数', // 系列名称
                stack: 'total',
                type: 'bar', // 柱状、条形图
                barWidth: 15,
                data: [78, 23, 43, 54], // 系列中数据内容数组
                label: { // 图形上的文本标签
                  show: true,
                  position: 'center', // 标签的位置
                  offset: [5, 3],
                  // formatter: '{c}{a}',//标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
                  formatter: '{c}',
                  color: '#fff', // 标签字体颜色
                  fontSize: 13
                },
                itemStyle: { // 图形样式
                  normal: {
                    barBorderRadius: 0,
                    color: '#ff4901'
                  }
                }
              }
            ]
          }
          myChart.setOption(option)
        },
        
        
    
    },
    created(){

    },
    mounted(){
        //  animateValue(this.$refs.value1, 0, 8120, 1500);
        // animateValue(this.$refs.value2, 0, 7563, 1500);
            this.echartInit(30)// 未解决报警
        //
        this.echartInit2()
        this.energyMgtEchart()
        // 系统监控
        this.MonitorDatas()
        

    }
}
</script>

<style lang='less' scoped>

</style>