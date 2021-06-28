<template>
  <div class="scatterDiagramAll">
    <div class="tittle">{{ title }}</div>
    <ul class="sd_top">
      <li class="y_c" v-for="(item, i) in datas.datas" :key="i">
        <span
          >{{ item.value }} <i>{{ item.unit }}</i>
        </span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div :id="'scatterDiagramEchart_' + ids"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "scatterDiagram",
  props: {
    _data: {
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  created() {},
  mounted() {
    this.scatterDiagramFun(this.datas);
  },
  methods: {
    scatterDiagramFun(val) {
      let { xAxisD, names, title } = val;
      var data = [
        [
          [120, 1200, 123, "新能源", "2021"],
          [150, 2500, 354, "Canada", "2021"],
          [250, 4200, 23, "China", "2021"],
          [350, 3200, 423, "Cuba", "2021"],
          [350, 4100, 234, "Finland", "2021"],
          [550, 4900, 234, "France", "2021"],
          [650, 6500, 754, "Germany", "2021"],
          [680, 78.1, 32, "Iceland", "2021"],
        ],
        [
          [150, 1500, 213, "新能源", "2020"],
          [220, 2000, 234, "Canada", "2020"],
          [230, 4800, 652, "China", "2020"],
          [400, 3000, 23, "Cuba", "2020"],
          [400, 4500, 324, "Finland", "2020"],
          [450, 4200, 23, "France", "2020"],
          [490, 5000, 23, "Germany", "2020"],
          [550, 6800, 345, "Iceland", "2020"],
          [680, 6000, 345, "Iceland", "2020"],
        ],
      ];
      var option = {
        title: {
          text: title,
          right: "5%",
          bottom: "0",
          textStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "400",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              type: "dashed",
              width: 0.5,
              color: "rgba(255,255,255,0.8)",
            },
          },
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          textStyle: {
            color: "#fff",
          },
          formatter: (params) => {
            console.log(params);
            let dataStr = `<p style="font-weight:bold;text-align:center;">${params[0].data[3]}</p>`;
            params.forEach((item) => {
              dataStr += `<div style="text-align:left;">
                  <p>${item.seriesName}:</p>
                  <span>企业数量：${item.data[2]}</span>
                  <div>产业占比：${item.data[2]}</div>
                </div>`;
            });
            return dataStr;
          },
        },
        legend: {
          left: "10%",
          bottom: "0",
          data: names,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 20,
        },
        grid: {
          left: "10",
          top: "30",
          right: "20",
          bottom: "25",
          containLabel: true,
        },
        xAxis: {
          name: "万元",
          min: 100,
          data: xAxisD,
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
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
        yAxis: {
          name: "万元",
          min: 1000,
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
          scale: true,
        },
        series: [
          {
            name: names[0],
            data: data[0],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]);
            },
            emphasis: {
              focus: "series",
              // label: {
              //   show: true,
              //   formatter: function(param) {
              //     return param.data[3];
              //   },
              //   position: "top",
              // },
            },
            itemStyle: {
              // shadowBlur: 10,
              // shadowColor: "rgba(25, 100, 150, 0.5)",
              // shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.5, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(255,255,255,1)",
                },
                {
                  offset: 0.5,
                  color: "#4394f1",
                },
                {
                  offset: 1,
                  color: "#4394f1",
                },
              ]),
            },
          },
          {
            name: names[1],
            data: data[1],
            type: "scatter",
            symbolSize: function(data) {
              // return Math.sqrt(data[2]) / 5e2;
              return Math.sqrt(data[2]);
            },
            emphasis: {
              focus: "series",
              // label: {
              //   show: true,
              //   formatter: function(param) {
              //     return param.data[3];
              //   },
              //   position: "top",
              // },
            },
            itemStyle: {
              // shadowBlur: 10,
              // shadowColor: "rgba(120, 36, 50, 0.5)",
              // shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.5, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(255,255,255,1)",
                },
                {
                  offset: 0.5,
                  color: "#cda857",
                },
                {
                  offset: 1,
                  color: "#cda857",
                },
              ]),
            },
          },
        ],
      };
      this.$redomEchart("scatterDiagramEchart_" + this.ids, option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 散点
.scatterDiagramAll {
  .sd_top {
    width: 100%;
    display: flex;
    padding: 0.0625rem /* 5/80 */ 0.3125rem /* 25/80 */ 0.1875rem /* 15/80 */;
    li {
      flex: 1;
      span:nth-child(1) {
        .datas_s();
        i {
          .text_s();
        }
      }
      span:nth-child(2) {
        .text_s();
      }
    }
  }
  #scatterDiagramEchart_,
  [id^="scatterDiagramEchart_"] {
    width: 100%;
    height: 3.75rem /* 300/80 */;
  }
}
</style>
