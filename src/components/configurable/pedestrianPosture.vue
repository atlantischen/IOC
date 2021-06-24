<template>
  <div class="pedestrianPostureAll">
    <div class="tittle">{{ title }}</div>
    <div class="pedestrianPosture">
      <ul class="pp_top">
        <li class="y_c" v-for="(item, i) in datas.datas2" :key="i">
          <span>{{ item.value }}</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div :id="'pedestrianPostureEchart_' + ids"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { redomEchart, uuid } from "@/utils/methods";
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
      ids: uuid()
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
      var names = val.names, xData = val.xData, datas = val.datas, smooth = val.smooth
      var option = {
        tooltip: {
          // show: false,
          // trigger: 'item',
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
        },
        color: ["#fff", "#ffb400"],
        grid: {
          x: 10,
          y: 30,
          x2: 30,
          y2: 10,
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
          name: "时间",
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
            name: "人",
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
      var color = ["#97c8ff", "#ffdd8d"],
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
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                ...Linear[j],
              ]),
            },
          },
          itemStyle: {
            normal: {
              lineStyle: {
                width: 0.5,
              },
            },
          },
          symbolSize: 6,
          data: j == 0 ? _data : _data2,
        };
      }
      option.xAxis.data.push("时间");
      redomEchart('pedestrianPostureEchart_' + this.ids, option);
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
