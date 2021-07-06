<template>
  <div class="pyramidChartAll">
    <div class="tittle">{{ title }}</div>
    <div class="pyramidChart" :style="$paddingFun(datas.padding)">
      <div
        :id="'pyramidChartEchart_' + ids"
        :ref="'pyramidChartEchart_' + ids"
        :style="$eHeightFun(datas.eHeight)"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "theParkIsAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid()
    }
  },
  mounted () {
    this.pyramidChartFun(this.datas)
  },
  methods: {
    pyramidChartFun (val) {
      var j = 0;
      // const CubeLeft = echarts.graphic.extendShape({
      //   shape: {
      //     x: 0,
      //     y: 0
      //   },
      //   buildPath: function (ctx, shape) {
      //     const xAxisPoint = shape.xAxisPoint
      //     const c0 = [shape.x + 7, shape.y]
      //     const c1 = [shape.x - 23, shape.y - 6]
      //     const c2 = [xAxisPoint[0] - 23, xAxisPoint[1] - 13]
      //     const c3 = [xAxisPoint[0] + 7, xAxisPoint[1]]
      //     ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
      //   }
      // })
      // echarts.graphic.registerShape('CubeLeft', CubeLeft)
      // const { optionName, datas, keyD } = val
      var allD = [], datas = [
        { value: 128, name: '入驻服务' },
        { value: 217, name: '政务服务' },
        { value: 314, name: '办公采购' },
        { value: 439, name: '物业服务' },
      ]
      // for (let i = 0; i < datas.length; i++) {
      //   allD[0].data[i] = {
      //     value: i + 1
      //   }
      // }
      // allD[i]
      // datas.reverse()
      var option = {
        tooltip: {
          show: false,
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
          show: false
        },
        color: ['#0ff', '#34a6c0', '#4297f5', '#4269f5'],
        series: [
          // {
          //   type: 'custom', 
          //   renderItem: (params, api) => {
          //     return {
          //       type: 'group',
          //       children: [{
          //         type: 'CubeLeft',
          //         shape: {
          //           api,
          //           xValue: api.value(0),
          //           yValue: api.value(1),
          //           // x: location[0],
          //           // y: location[1],
          //           x: 4,
          //           y: 5,
          //           xAxisPoint: api.coord([api.value(0), 0])
          //         },
          //         style: {
          //           fill: cubeLeftStyle
          //         }
          //       }
          //       ]
          //     }
          //   }
          // },
          {
            name: '',
            type: 'funnel',
            sort: 'ascending',
            funnelAlign: 'right',
            left: '20%',
            top: 20,
            bottom: 0,
            width: '30%',
            gap: 0,
            labelLine: {
              length: 70,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },

            itemStyle: {
              borderColor: '#fff',
              borderWidth: 0
            },
            data: datas.map((e, i) => {
              return {
                ...e,
                value: i + 1,
                labelLine: {
                  show: i % 2 == 0,
                  length: 70,
                  lineStyle: {
                    width: 1,
                    type: 'solid'
                  }
                },
                label: {
                  show: i % 2 == 0,
                  position: 'left',
                  padding: [0, -50, 0, 0],
                  formatter: "{a|" + e.value + "}\n{b|{b}}",
                  rich: {
                    a: {
                      width: 100,
                      fontSize: 12,
                      padding: [5, 5],
                      color: "rgb(255,255,255,.7)",
                    },
                    b: {
                      width: 100,
                      fontSize: 12,
                      lineHeight: 14,
                      color: "rgb(255,255,255,.7)",
                    },
                  },
                },
              }
            })
          },
          {
            name: '',
            type: 'funnel',
            sort: 'ascending',
            funnelAlign: 'left',
            left: '50%',
            top: 20,
            bottom: 0,
            width: '30%',
            sort: 'ascending',
            itemStyle: {
              normal: {
                opacity: 0.9,
                borderWidth: 0,
              }
            },
            gap: 0,
            data: datas.map((e, i) => {
              return {
                ...e,
                value: i + 1,
                labelLine: {
                  show: i % 2 != 0,
                  length: 70,
                  lineStyle: {
                    width: 1,
                    type: 'solid'
                  }
                },
                label: {
                  show: i % 2 != 0,
                  padding: [0, 0, 0, -50],
                  formatter: "{a|" + e.value + "}\n{b|{b}}",
                  rich: {
                    a: {
                      width: 100,
                      fontSize: 12,
                      padding: [5, 5],
                      color: "rgb(255,255,255,.7)",
                    },
                    b: {
                      width: 100,
                      fontSize: 12,
                      lineHeight: 14,
                      color: "rgb(255,255,255,.7)",
                    },
                  },
                },
              }
            })
          },
        ]
      }
      this.$redomEchart(this.$refs["pyramidChartEchart_" + this.ids], option);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 聚焦产业
#pyramidChartEchart_,
[id^="pyramidChartEchart_"] {
  width: 100%;
  height: 2.25rem /* 180/80 */;
}
</style>
