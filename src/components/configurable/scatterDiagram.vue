<template>
  <div class="scatterDiagramAll">
    <div class="tittle">{{ title }}</div>
    <ul class="sd_top">
      <li class="y_c" v-for="(item, i) in datas.datas" :key="i">
        <span
          >{{ filterNumFun(item.value) }}<i>{{ item.unit }}</i>
        </span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div
      :id="'scatterDiagramEchart_' + ids"
      :ref="'scatterDiagramEchart_' + ids"
    ></div>
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
    filterNumFun(val) {
      return this.$filterNum(val);
    },
    scatterDiagramFun(val) {
      let { xAxisD, names, title, units, datas } = val;
      var data = [
        [
          [120, 1200, 123, 2, "零售商家", "2021"],
          [150, 1800, 32, 4, "信息技术", "2021"],
          [250, 2560, 23, 7, "新能源", "2021"],
          [350, 2803, 32, 13, "新材料", "2021"],
          [350, 3452, 234, 25, "生物医药", "2021"],
          [550, 3920, 234, 32, "智能制造", "2021"],
          [650, 4237, 532, 46, "文化创意", "2021"],
          [670, 5326, 23, 54, "现代服务", "2021"],
          [680, 6520, 342, 61, "节能环保", "2021"],
        ],
        [
          [150, 1500, 213, 3, "零售商家", "2020"],
          [220, 2000, 256, 6, "信息技术", "2020"],
          [230, 4800, 432, 10, "新能源", "2020"],
          [400, 3000, 23, 23, "新材料", "2020"],
          [400, 4500, 324, 29, "生物医药", "2020"],
          [450, 4200, 23, 35, "智能制造", "2020"],
          [490, 5000, 23, 48, "文化创意", "2020"],
          [520, 5500, 34, 58, "现代服务", "2020"],
          [550, 6000, 345, 69, "节能环保", "2020"],
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
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [10, 15],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          textStyle: {
            color: "#fff",
          },
          formatter: (params) => {
            console.log(params);
            let dataStr = `<p style="font-weight:bold;font-size:.2rem;text-align:center;padding-bottom:.0625rem;">${params.data[4]}</p>`;
            dataStr += `<div>
                  <span>企业数量：${params.data[2]}</span><br>
                  <span>产业占比：${params.data[3]}%</span>
                </div>`;
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
          name: "{a|" + units[0] + "}",
          nameTextStyle: {
            rich: {
              a: {
                padding: [-60, 0, 0, -40],
                color: "#fff",
              },
            },
          },
          boundaryGap: false,
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
          name: units[1],
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
            symbolSize: function(data) {
              return Math.sqrt(data[2]);
            },
            emphasis: {
              focus: "series",
              label: {
                show: false,
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
            symbolSize: function(data) {
              // return Math.sqrt(data[2]) / 5e2;
              return Math.sqrt(data[2]);
            },
            emphasis: {
              focus: "series",
              label: {
                show: false,
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
      this.$redomEchart(this.$refs["scatterDiagramEchart_" + this.ids], option);
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
    padding: 0.125rem /* 10/80 */ 0.3125rem /* 25/80 */ 0.375rem /* 30/80 */;
    li {
      flex: 1;
      span {
        white-space: nowrap;
      }
      span:nth-child(1) {
        // letter-spacing: .025rem /* 2/80 */;
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
