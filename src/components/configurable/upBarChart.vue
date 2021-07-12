<template>
  <!-- 柱状图 -->
  <div class="upBarChartAll">
    <div class="tittle">{{ title }}</div>
    <!-- <div class="upBarChart"> -->
    <div
      v-show="datas"
      :id="'upBarChartEchart_' + ids"
      :ref="'upBarChartEchart_' + ids"
    ></div>
    <!-- </div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "upBarChart",
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
    this.upBarChartFun(this.datas);
  },
  methods: {
    upBarChartFun (val) {
      const { names, xAxisData, yAxisData, units } = val;
      var comStyle = {
        itemStyle: {
          shadowBlur: 12,
          shadowColor: "rgba(0,0,0,0.3)",
        },
      };
      var option = {
        tooltip: {
          show: true,
          trigger: 'item',
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
          padding: [10, 15],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          textStyle: {
            color: "#fff",
          },
          formatter: params => {
            let dataStr = `<p style="font-weight:bold;font-size:.2rem;text-align:center;padding-bottom:.0625rem;">${params.name}</p>`
            dataStr += `<div>
                  <span style=" vertical-align: middle;margin-right:0.0625rem;width:0.15rem;height:0.12rem;border-radius:0.02rem;background:linear-gradient(to bottom, ${params.color.colorStops[0].color},${params.color.colorStops[1].color}"></span>
                  <span> ${params.seriesName ? params.seriesName + ":" : params.seriesName} ${params.value}</span>
                </div>`
            return dataStr
          }
        },
        legend: {
          data: names,
          right: 0,
          top: 0,
          itemWidth: 10,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemGap: 15,
        },
        xAxis: {
          data: xAxisData,
          name: units ? units[0] : "",
          axisTick: {
            show: false,
          },
          axisLine: {
            onZero: true,
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
        yAxis: {
          name: units ? units[1] : "",
          nameTextStyle: {
            align: "right",
            padding: [0, 8, 0, 0],
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
        grid: {
          top: 50,
          left: 0,
          right: 10,
          bottom: -10,
          containLabel: true,
        },
        series: [
          {
            name: names[1],
            type: "bar",
            stack: "one",
            barGap: "0",
            emphasis: comStyle,
            data: yAxisData[1],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(0, 255, 255, 1)" },
                { offset: 1, color: "rgba(0, 255, 255, 0.5)" },
              ]),
            },
          },
          {
            name: names[0],
            type: "bar",
            stack: "one",
            emphasis: comStyle,
            data: yAxisData[0],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(67, 149, 243, 1)" },
                { offset: 1, color: "rgba(67, 149, 243, 0.5)" },
              ]),
            },
          },
          {
            name: names[2],
            type: "bar",
            stack: "two",
            emphasis: comStyle,
            data: yAxisData[2],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(255, 179, 0, 1)" },
                { offset: 1, color: "rgba(255, 179, 0, 0.5)" },
              ]),
            },
          },
          {
            name: names[3],
            type: "bar",
            stack: "two",
            emphasis: comStyle,
            data: yAxisData[3].map((t) => {
              return -t;
            }),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(226, 28, 28, 1)" },
                { offset: 1, color: "rgba(226, 28, 28, 0.5)" },
              ]),
            },
          },
        ],
      };
      this.$redomEchart(this.$refs["upBarChartEchart_" + this.ids], option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
//
.upBarChartAll {
  #upBarChartEchart_,
  [id^="upBarChartEchart_"] {
    width: 100%;
    height: 3.75rem /* 300/80 */;
  }
}
</style>
