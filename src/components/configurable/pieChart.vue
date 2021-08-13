<template>
  <!-- 饼图 -->
  <div class="pieChartAll">
    <div class="tittle">{{ title }}</div>
    <div class="pieChart">
      <div :id="'pieChartEchart_' + ids" :ref="'pieChartEchart_' + ids"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "pieChart",
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
    this.pieChartFun(this.datas);
  },
  methods: {
    pieChartFun (val) {
      var dom = this.$refs["pieChartEchart_" + this.ids]
      var myChart = echarts.init(dom)
      let { optionName, datas, data, nums } = val;
      var option = {
        baseOption: {
          timeline: {
            show: false,
            axisType: 'category',
            // orient: 'vertical',
            loop: false,
            autoPlay: true,
            inverse: true,
            playInterval: this.$retutnZero(data.value) / data.value,
            // left: null,
            // right: 0,
            // top: 20,
            // bottom: 20,
            // width: 0,
            // height: 0,
            // symbol: 'none',
            // checkpointStyle: {
            //   borderWidth: 0
            // },
            // controlStyle: {
            //   showNextBtn: false,
            //   showPrevBtn: false
            // },
            data: []
          },
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
              return v.name + ':' + v.value + '%'
            }
          },
          title: [
          ],
          legend: {
            selectedMode: false,
            show: true,
            orient: "vertical", // 'horizontal'
            left: "50%",
            top: "40%",
            data: optionName,
            formatter: function (name) {
              var index = 0;
              optionName.forEach(function (value, i) {
                if (value == name) index = i;
              });
              return (
                "{a|" +
                name +
                "}{b|" +
                datas[index] +
                "%" +
                "}{b|" +
                nums[index] +
                "}"
              );
            },
            textStyle: {
              color: "#fff",
              fontSize: 12,
              padding: [0, 15, 0, 2],
              rich: {
                a: {
                  width: 50,
                  color: "rgb(255,255,255,.7)",
                  padding: [0, 10, 0, 0],
                },
                b: {
                  width: 30,
                  padding: [0, 10, 0, 0],
                },
              },
            },
            icon: "circle",
            itemWidth: 6,
            itemHeight: 6,
            itemGap: 12,
          },
          color: ["#4396f3", "#cda857", "#0ff"],
          series: [
            {
              name: "",
              type: "pie",
              animation: false,
              hoverAnimation: false,
              dispatchAction: {
                type: 'highlight',
                // seriesIndex: 1,
                // dataIndex: 0
              },
              radius: ["0", "9%"],
              center: ["25%", "50%"],
              itemStyle: {
                normal: {
                  color: "rgb(255,255,255,.95)",
                },
              },
              avoidLabelOverlap: false,
              label: {
                show: false,
              },
              emphasis: {
                itemStyle: {
                  color: '#fff'
                }
              },
              labelLine: {
                show: false,
              },
              data: [100],
            },
            {
              name: "",
              type: "pie",
              animation: false,
              hoverAnimation: false,
              radius: ["8", "18%"],
              center: ["25%", "50%"],
              itemStyle: {
                normal: {
                  color: "rgb(255,255,255,1)",
                },
              },
              avoidLabelOverlap: false,
              label: {
                show: false,
              },
              emphasis: {
                itemStyle: {
                  color: '#fff'
                }
              },
              labelLine: {
                show: false,
              },
              data: [100],
            },
            {
              name: "",
              type: "pie",
              radius: ["18%", "65%"],
              center: ["25%", "50%"],
              // roseType: 'area', //radius
              startAngle: -50,
              itemStyle: {
                normal: {
                  // borderWidth: 2,
                  borderColor: 'rgba(0, 0, 0, 0)',
                  // opacity: 0.75,
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowOffsetY: 1,
                  shadowColor: "rgba(0, 0, 0, 0.1)",
                },
              },
              animationType: "scale",
              avoidLabelOverlap: false,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              data: [],
            },
          ],
        },
        options: []
      };
      for (var i = 0; i < optionName.length; i++) {
        option.baseOption.series[2].data[i] = {
          value: datas[i],
          name: optionName[i],
        };
      }
      for (var n = Math.ceil(9 * data.value / 10); n <= data.value; n++) {
        if (n <= data.value) {
          option.baseOption.timeline.data.push(n);
          option.options.push({
            title: {
              show: true,
              text: "{b|" + data.name + "}{a|" + n + "}",
              link: "",
              target: null,
              subtext: "",
              sublink: "",
              subtarget: null,
              left: "75%",
              top: "15%",
              textAlign: "center",
              textStyle: {
                rich: {
                  a: {
                    fontFamily: "BYfont",
                    fontSize: 24,
                    padding: [2, 0],
                    fontWeight: 550,
                    color: "#fff",
                  },
                  b: {
                    fontSize: 12,
                    padding: [0, 10, 0, 0],
                    color: "rgb(255,255,255,.7)",
                  },
                },
              },
              subtextStyle: {
                fontSize: 12,
                color: "rgb(255,255,255,.7)",
              },
            },
          });
        }
      }
      this.$redomEchart(dom, option);
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 2,
        dataIndex: 0
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
//
.pieChartAll {
  .pieChart {
    width: 100%;
  }
  #pieChartEchart_,
  [id^="pieChartEchart_"] {
    width: 100%;
    height: 2.5rem /* 200/80 */;
  }
}
</style>
