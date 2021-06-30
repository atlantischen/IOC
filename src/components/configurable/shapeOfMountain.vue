<template>
  <div class="shapeOfMountainAll">
    <div class="tittle">{{ title }}</div>
    <div
      :id="'shapeOfMountainEchart_' + ids"
      :ref="'shapeOfMountainEchart_' + ids"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "shapeOfMountainAll",
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
  created () {
  },
  mounted () {
    this.shapeOfMountainFun(this.datas)
  },
  methods: {
    // 人行态势
    shapeOfMountainFun (val) {
      const { names, xData, datas, smooth, unit } = val
      var option = {
        grid: {
          left: "10",
          top: "-10",
          right: "10",
          bottom: "-10",
          containLabel: true,
        },
        legend: {
          show: false,
          data: xData,
          top: "92%",
          icon: "circle",
          textStyle: {
            color: "#0DCAD2"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: 'line',
            lineStyle: {
              type: 'dashed',
              width: 0.5,
              color: 'rgba(255,255,255,0.8)'
            }
          },
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 15],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          textStyle: {
            color: "#fff",
          },
          formatter: params => {
            let dataStr = `<p style="font-weight:bold;text-align:center;">${params[0].name}</p>`
            params.forEach(item => {
              dataStr += `<div>
                <span> 数量 :  ${item.data}</span><br/>
                <span> 占比 :  0% </span>
                </div>`
            })
            return dataStr
          }
        },
        xAxis: {
          type: "category",
          data: xData,
          axisLabel: {
            fontSize: 12,
            padding: [30, 0, 0, -20],
            rotate: -30,
            interval: 0,
            margin: 10,
            textStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgb(255,255,255,.5)"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            type: "pictorialBar",
            name: "提示框值",
            label: {
              show: false,
              position: "top",
              formatter: function (params) {
                var index = params.dataIndex;
                var str = "{a|" + params.value + "}\n{c|" + params.value + "}";
                return str;
              },
              rich: {
                a: {
                  fontSize: 18,
                  color: "#534EE1",
                  align: "center",
                  height: 40
                },
                c: {
                  fontSize: 18,
                  color: "#fff",
                  padding: [
                    -2,
                    0,
                    2,
                    0
                  ],
                  // backgroundColor: {
                  //   image: labelimg
                  // },
                  align: "center",
                  verticalAlign: "bottom",
                  height: 50,
                  lineHeight: 40,
                  width: 100
                }
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: "rgba(67, 149, 243, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(67, 149, 243, 0.2)"
                  }
                  ],
                  global: false
                }
              }
            },
            data: datas,
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C5,5 4.5,10 0,10 z',
            barCategoryGap: '-50%',
          }
        ]
      }
      this.$redomEchart(this.$refs['shapeOfMountainEchart_' + this.ids], option);
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 人行态势
.shapeOfMountainAll {
  #shapeOfMountainEchart_,
  [id^="shapeOfMountainEchart_"] {
    width: 100%;
    height: 3.625rem /* 290/80 */;
  }
}
</style>
