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
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  created () { },
  mounted () {
    this.scatterDiagramFun(this.datas);
  },
  methods: {
    scatterDiagramFun (val) {
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
          show: false,
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
          name: '{a|万元}',
          nameTextStyle: {
            rich: {
              a: {
                padding: [-60, 0, 0, -40],
                color: '#fff'
              }
            }
          },
          boundaryGap: true,
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
            padding: [15, 0, 0, -15],
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
          nameTextStyle: {
            padding: [5, 0, 0, -40],
          },
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
            symbolSize: function (data) {
              return Math.sqrt(data[2]);
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
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
                borderRadius: [5, 5],
                borderColor: "#4396f3",
                padding: [5, 10],
                extraCssText:
                  "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
                textStyle: {
                  color: "#fff",
                },
                formatter: (params) => {
                  return (
                    "{a|" +
                    params.data[3] +
                    "}\n" +
                    "{b|企业数量：" +
                    params.data[2] +
                    "}\n{b|" +
                    "产业占比：" +
                    params.data[2] +
                    "}"
                  );
                },
                rich: {
                  a: {
                    textAlign: "center",
                  },
                  b: {
                    padding: [0, 0, 10, 0],
                  },
                },
              },
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
            symbolSize: function (data) {
              // return Math.sqrt(data[2]) / 5e2;
              return Math.sqrt(data[2]);
            },
            emphasis: {
              focus: "series",
              label: {
                show: true,
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
                borderRadius: [5, 5],
                borderColor: "#4396f3",
                padding: [5, 10],
                extraCssText:
                  "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
                textStyle: {
                  color: "#fff",
                },
                formatter: (params) => {
                  return (
                    "{a|" +
                    params.data[3] +
                    "}\n" +
                    "{b|企业数量：" +
                    params.data[2] +
                    "}\n{b|" +
                    "产业占比：" +
                    params.data[2] +
                    "}"
                  );
                },
                rich: {
                  a: {
                    textAlign: "center",
                  },
                  b: {
                    padding: [0, 0, 10, 0],
                  },
                },
              },
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
    padding: 0.0625rem /* 5/80 */ 0.3125rem /* 25/80 */ 0.25rem /* 20/80 */;
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
