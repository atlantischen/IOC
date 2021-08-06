<template>
  <div class="scatterDiagramAll">
    <div class="tittle">{{ title }}</div>
    <ul class="sd_top">
      <li class="y_c" v-for="(item, i) in datas.datas" :key="i">
        <!-- <span
          >{{ item.value }} <i>{{ item.unit }}</i>
        </span> -->
        <span v-if="item.name == '今日会议预约数'"
          >{{ thisDay || item.value }} <i>{{ item.unit }}</i>
        </span>
        <span v-else
          >{{ thisDay * $getDayNums("m") || item.value }}
          <i>{{ item.unit }}</i>
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
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
      thisDay: 0,
    };
  },
  created () { },
  mounted () {
    this.scatterDiagramFun(this.datas);
  },
  methods: {
    scatterDiagramFun (val) {
      let { xAxisD, yAxisD, units, title, data, names, yRange } = val;
      this.thisDay = 0
      for (var i = 0; i < data.length; i++) {
        this.thisDay = this.thisDay + data[i][2]
      }
      var option = {
        title: {
          text: title,
          x: "center",
          bottom: "0",
          textStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "400",
          },
        },
        tooltip: {
          position: "top",
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
          borderRadius: 5,
          borderColor: "#4396f3",
          padding: [5, 15],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          textStyle: {
            color: "#fff",
          },
          formatter: (params) => {
            let dataStr = `<p style="font-weight:bold;text-align:center;color:#4396f3;">${xAxisD[params.value[0]]
              }</p>`;
            dataStr += `<div>
              <span>${yRange[params.value[1]]}</span><br/>
              <span>预约会议数：${params.value[2]}</span>
                </div>`;
            return dataStr;
          },
        },
        legend: {
          show: names ? true : false,
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
          top: "20",
          right: "20",
          bottom: "25",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: xAxisD,
          name: "{a|" + units ? units[0] : "" + "}",
          nameTextStyle: {
            rich: {
              a: {
                padding: [-60, 0, 0, -40],
                color: "#fff",
              },
            },
          },
          boundaryGap: true,
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgb(255,255,255,0.5)",
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
        yAxis: [
          {
            type: "category",
            data: yAxisD,
            name: units ? units[1] : "",
            nameTextStyle: {
              padding: [5, 0, 0, -40],
            },
            splitNumber: 6,
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "rgb(255,255,255,.5)",
                width: 0.5,
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              show: false,
            },
            scale: true,
          },
          {
            type: "category",
            data: yAxisD,
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "rgb(255,255,255,.5)",
                width: 0.5,
              },
            },
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            scale: true,
          },
        ],
        series: [
          {
            name: names ? names[0] : "",
            type: "scatter",
            symbolSize: function (val) {
              return val[2] * 3;
            },
            data: data,
            animationDelay: function (idx) {
              return idx * 5;
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
