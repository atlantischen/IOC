<template>
  <!-- 单条柱状图 -->
  <div class="singleBarChartAll">
    <div class="tittle">{{ title }}</div>
    <div class="singleBarChart">
      <ul class="pp_top" v-show="datas.datas2">
        <li class="y_c" v-for="(item, i) in datas.datas2" :key="i">
          <span><NumCounter :value="item.value"></NumCounter></span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div
        :id="'singleBarChartEchart_' + ids"
        :ref="'singleBarChartEchart_' + ids"
        :style="'height:' + datas.eHeight / 80 + 'rem;'"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "singleBarChart",
  props: {
    _data: {
      type: Object,
    },
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  created () { },
  mounted () {
    this.singleBarChartFun(this.datas);
  },
  methods: {
    singleBarChartFun (val) {
      let { xAxisD, datas, units, names } = val;
      var allD = [],
        showLb = {
          width: '50',
          padding: [15, 0, 0, -30],
          rotate: -35,
          interval: 0,
          margin: 20,
        },
        colorRange = [
          [
            { offset: 0, color: "#4396f3" },
            { offset: 1, color: "rgb(67, 150, 243, .1)" },
          ],
          [
            { offset: 0, color: "#0ff" },
            { offset: 1, color: "rgb(0, 255, 255, 0.1)" },
          ],
          [
            { offset: 0, color: "rgba(205, 168, 87, 1)" },
            { offset: 1, color: "rgba(205, 168, 87, 0.1)" },
          ],
          [
            { offset: 0, color: "rgba(226, 28, 28, 1)" },
            { offset: 1, color: "rgba(226, 28, 28, .1)" },
          ],
        ]
      if (names && names.indexOf('次要') != -1) {
        colorRange.splice(0, 1)
      }
      for (let i = 0; i < datas.length; i++) {
        allD[i] = {
          name: names ? names[i] : '',
          barWidth: 14 / (datas.length > 1 ? datas.length * 2 / 3 : datas.length),
          barGap: "0",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, colorRange[i]),
          },
          data: datas[i]
        }
      }

      var option = {
        tooltip: {},
        grid: {
          x: 10,
          y: 40,
          x2: 30,
          y2: -10,
          containLabel: true,
        },
        legend: {
          show: names,
          right: 20,
          top: 0,
          data: names,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 20,
        },
        xAxis: [
          {
            type: "category",
            name: '{a|' + units[0] ? units[0] : "" + '}',
            nameGap: 20,
            nameTextStyle: {
              rich: {
                a: {
                  padding: [0, 0, 0, -80],
                  color: '#fff'
                }
              }
            },
            boundaryGap: true,
            data: xAxisD,
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
              padding: [40, 0, 0, -10],
              rotate: -40,
              textStyle: {
                color: "#fff",
              },
            },
            axisline: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: units[1] ? units[1] : "",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
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
            type: "bar",
            ...e
          }
        })
      };
      if (units && units[0]) {
        for (let key in showLb) {
          option.xAxis[0].axisLabel[key] = showLb[key]
        }
      }
      this.$redomEchart(this.$refs["singleBarChartEchart_" + this.ids], option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
//
.singleBarChartAll {
  .singleBarChart {
    width: 100%;
  }
  #singleBarChartEchart_,
  [id^="singleBarChartEchart_"] {
    width: 100%;
    height: 2.5rem /* 200/80 */;
  }

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
</style>
