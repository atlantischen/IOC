<template>
  <div class="investmentSituationAll">
    <div class="tittle">{{ title }}</div>
    <div :id="'pedestrianPostureEchart_' + ids"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "investmentSituationAll",
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
    this.pedestrianPostureFun(this.datas)
  },
  methods: {
    // 人行态势
    pedestrianPostureFun (val) {
      const { names, xData, datas, smooth, unit } = val
      var option = {
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
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          textStyle: {
            color: "#fff",
          },
          formatter: params => {
            let dataStr = `<p style="font-weight:bold;text-align:center;">${params[0].name}</p>`
            params.forEach(item => {
              dataStr += `<div>
                  <span style=" vertical-align: middle;margin-right:0.0625rem;width:0.15rem;height:0.025rem;background-color:${item.color};"></span>
                  <span> ${item.seriesName} :  ${item.data.value}</span>
                </div>`
            })
            return dataStr
          }
        },
        color: ["#fff", "#ffb400"],
        grid: {
          x: 10,
          y: 30,
          x2: 30,
          y2: -10,
          containLabel: true,
        },
        legend: {
          right: 20,
          top: 0,
          orient: "horizontal",
          data: names,
          icon: "rect", // circle, rect , roundRect, triangle, diamond, pin, arrow, none
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 15,
          itemHeight: 2,
          itemGap: 20,
        },
        xAxis: {
          type: "category",
          name: unit[0],
          nameTextStyle: {
            // lineHeight: 56,
            // verticalAlign: "bottom"
          },
          data: xData,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgb(255,255,255,0)",
            },
          },
          axisLabel: {
            fontSize: 12,
            padding: [20, 0, 0, -20],
            rotate: -20,
            interval: 0,
            margin: 10,
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: [
          {
            name: unit[1],
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            // min: 800,
            // max: 2000,
            splitNumber: 6,
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgb(255,255,255,.5)",
                width: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                type: "dashed",
              },
            },
          },
        ],
        series: [],
      };
      var color = ["#fff", "#ffdd8d"],
        _data = [],
        _data2 = [],
        Linear = {
          0: [
            { offset: 0, color: "rgb(255, 255, 255, 0.2)" },
            { offset: 1, color: "rgb(255, 255, 255, 0)" },
          ],
          1: [
            { offset: 0, color: "rgb(255, 180, 0, 0.2)" },
            { offset: 1, color: "rgb(255, 221, 141, 0)" },
          ],
        };
      for (var i = 0; i < xData.length; i++) {
        var b = {
          symbol: i != xData.length - 1 ? "none" : "",
        };
        _data[i] = {
          value: datas[0][i],
          ...b,
          itemStyle: {
            color: color[0],
          },
        };
        _data2[i] = {
          value: datas[1][i],
          ...b,
          itemStyle: {
            color: color[1],
          },
        };
      }
      for (var j = 0; j < names.length; j++) {
        option.series[j] = {
          name: names[j],
          type: "line",
          smooth: smooth,
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //       ...Linear[j],
          //     ]),
          //   },
          // },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 0.8,
              },
            },
          },
          symbolSize: 6,
          data: j == 0 ? _data : _data2,
        };
      }
      this.$redomEchart('pedestrianPostureEchart_' + this.ids, option);
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 人行态势
.investmentSituationAll {
  #pedestrianPostureEchart_,
  [id^="pedestrianPostureEchart_"] {
    width: 100%;
    height: 2.75rem /* 220/80 */;
  }
  .pedestrianPosture {
    .pp_top {
      width: 100%;
      display: flex;
      padding: 0.0625rem /* 5/80 */ 0.3125rem /* 25/80 */ 0.1875rem /* 15/80 */;
      li {
        flex: 1;
        span:nth-child(1) {
          .datas_s();
        }
        span:nth-child(2) {
          .text_s();
        }
      }
    }
  }
}
</style>
