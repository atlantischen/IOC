<template>
  <div class="pedestrianPostureAll">
    <div class="tittle">{{ title }}</div>
    <div class="pedestrianPosture" :style="$paddingFun(datas.padding)">
      <ul class="pp_top" v-show="datas.datas2">
        <li class="y_c" v-for="(item, i) in datas.datas2" :key="i">
          <span> <NumCounter :value="item.value"></NumCounter></span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div
        :id="'pedestrianPostureEchart_' + ids"
        :ref="'pedestrianPostureEchart_' + ids"
        :style="$eHeightFun(datas.eHeight)"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "pedestrianPostureAll",
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
      const { names, xData, datas, smooth, unit, rightTip } = val
      var allD = [], color = ["#97c8ff", "#ffdd8d"], color2 = ["#fff", "#ffdd8d"],
        Linear = [
          [
            { offset: 0, color: "rgb(255, 255, 255, 0.2)" },
            { offset: 1, color: "rgb(255, 255, 255, 0)" },
          ],
          [
            { offset: 0, color: "rgb(255, 180, 0, 0.2)" },
            { offset: 1, color: "rgb(255, 221, 141, 0)" },
          ],
        ]
      if (!names) {
        color = color.reverse()
        color2 = color2.reverse()
        Linear = Linear.reverse()
      }
      for (var i = 0; i < datas.length; i++) {
        allD[i] = {
          name: names ? names[i] : '',
          smooth: smooth,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, Linear[i]),
            },
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 0.8,
              },
            },
          },
          data: datas[i].map((e, j) => {
            return {
              value: e,
              symbol: j != datas[i].length - 1 ? "none" : "",
              itemStyle: {
                normal: {
                  color: color[i]
                },
              },
            }
          })
        }
      }
      var option = {
        title: {
          show: rightTip,
          text: '',
          link: "",
          target: null,
          subtext: `${rightTip ? rightTip.name : ''}${rightTip ? rightTip.value : ''}`,
          sublink: "",
          subtarget: null,
          right: "-10",
          top: "-10",
          textAlign: "center",
          textStyle: {
            fontFamily: "BYfont",
            fontSize: 24,
            padding: [2, 0],
            fontWeight: 550,
            color: "#fff",
          },
          subtextStyle: {
            fontSize: 12,
            color: "#fff",
          },
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
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          textStyle: {
            color: "#fff",
          },
          formatter: params => {
            console.log(params)
            let dataStr = `<p style="font-weight:bold;text-align:center;">${params[0].name}</p>`
            params.forEach(item => {
              dataStr += `<div>
                  <span style=" vertical-align: middle;margin-right:0.0625rem;width:0.15rem;height:0.025rem;background-color:${item.color};"></span>
                  <span> ${item.seriesName ? item.seriesName + ':' : item.seriesName}${item.data.value}</span>
                </div>`
            })
            return dataStr
          }
        },
        grid: {
          x: 10,
          y: 30,
          x2: 30,
          y2: -10,
          containLabel: true,
        },
        color: color2,
        legend: {
          show: names,
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
          name: '{a|' + unit[0] + '}',
          nameGap: 20,
          nameTextStyle: {
            rich: {
              a: {
                padding: [-30, 0, 0, -40],
                color: '#fff'
              }
            }
          },
          boundaryGap: true,
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
            width: '50',
            fontSize: 12,
            padding: [15, 0, 0, (unit[0] ? -30 : 0)],
            rotate: -35,
            interval: 0,
            margin: xData[0].length <= 3 ? 10 : 20,
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
        series: allD.map(e => {
          return {
            type: "line",
            symbolSize: 6,
            ...e,
          }
        })
      };
      this.$redomEchart(this.$refs['pedestrianPostureEchart_' + this.ids], option);
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 人行态势
.pedestrianPostureAll {
  #pedestrianPostureEchart_,
  [id^="pedestrianPostureEchart_"] {
    width: 100%;
    height: 2.125rem /* 170/80 */;
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
