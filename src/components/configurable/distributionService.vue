<template>
  <div class="distributionServiceAll">
    <div class="tittle">{{ title }}</div>
    <div
      :style="[$paddingFun(datas.padding), $eHeightFun(datas.eHeight)]"
      :id="'distributionServicesEchart_' + ids"
      :ref="'distributionServicesEchart_' + ids"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "theParkIsAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
    }
  },
  created () {
  },
  mounted () {
    this.distributionServicesFun(this.datas)
  },
  methods: {
    distributionServicesFun (val) {
      var dom = this.$refs["distributionServicesEchart_" + this.ids]
      var myChart = echarts.init(dom), oneIndex = null
      const { optionName, datas } = val
      var j = 0, colors = [
        "#00ffff",
        "#cd9a57",
        "#97c8ff",
        "#456af3",
        "#1e3957",
        "#c7d392",
        "#9a866a",
        "#c9a555",
        "#fff",
      ]
      var option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          textStyle: {
            color: "#fff",
          },
          formatter: (v) => {
            if (v.dataIndex % 2 == 0 && v.seriesIndex == 0) {
              return v.name + ':' + v.value + '%'
            }
          }
        },
        grid: {
          containLabel: true,
        },
        legend: {
          selectedMode: false,
          show: false,
          orient: "vertical", // 'horizontal'
          left: "50%",
          y: "center",
          data: optionName,
          formatter: function (name) {
            return "{a|" + name + "}" + datas[j++] + "%";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {
                width: 40,
                color: "rgb(255,255,255,.7)",
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 18,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "50%"],
            // avoidLabelOverlap: true,
            startAngle: 160,
            label: {
              // padding: [0, -55, 0, -55],
              //   // formatter: "{a|{c}%}\n{b|{b}}\n{hr|}",
              //   formatter: "{a|{c}%}\n{b|{b}}",
              //   rich: {
              //     hr: {
              //       // backgroundColor: 'auto',
              //       // borderRadius: 100,
              //       // width: 6,
              //       // height: 6,
              //       // // margin: [200, 3, 0, -16],
              //       // shadowColor: '#1c1b3a',
              //       // shadowBlur: 1,
              //       // shadowOffsetX: '0',
              //       // shadowOffsetY: '2',
              //     },
              //     a: {
              //       width: 100,
              //       fontSize: 12,
              //       padding: [5, 0],
              //       color: "rgb(255,255,255,.7)",
              //     },
              //     b: {
              //       width: 100,
              //       fontSize: 12,
              //       padding: [2, 0],
              //       color: "rgb(255,255,255,.7)",
              //     },
              // },
              position: 'outer',
              width: 0,
              height: 0,
              lineHeight: 0,
              backgroundColor: 'auto',
              padding: [4, -4, 4, -4],
              borderRadius: 4,
              distanceToLabelLine: 0,
              formatter: '{top|{d}%}\n{bottom|{b}}',
              align: 'center',
              rich: {
                top: {
                  verticalAlign: 'bottom',
                  padding: [10, 10, 0, 10],
                  align: 'center'
                },
                bottom: {
                  padding: [0, 10, 10, 10],
                  verticalAlign: 'top',
                  align: 'center'
                }
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 50
              }
            },
            data: [],
          },
          {
            type: "pie",
            animation: false,
            radius: ["0", "40%"],
            data: [100],
            label: { show: false },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: "#0e1c36",
            }
          },
        ],
      };
      option.series[0].data = []
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data.push(
          {
            value: datas[i],
            name: optionName[i],
            // selected: i == optionName.length - 1,
            itemStyle: {
              color: colors[i],
            }
          }, {
          value: 2,
          itemStyle: {
            color: "#ffffff00",
          },
          label: { show: false }
        }
        )
      }
      this.$redomEchart(dom, option);
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 6
      });
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";

#distributionServicesEchart_,
[id^="distributionServicesEchart_"] {
  width: 100%;
  height: 240px;
}
.distributionServiceAll {
  .distributionService_time {
    display: flex;
    justify-content: flex-end;
    padding-right: 0.1rem /* 8/80 */;
    .dropDown {
      margin-left: 0.375rem /* 30/80 */;
    }
  }
}
</style>
