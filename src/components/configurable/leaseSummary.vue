<template>
  <div class="LeaseSummaryAll">
    <div class="tittle">{{ title }}</div>
    <div
      :id="'leaseSummaryEchart_' + ids"
      :ref="'leaseSummaryEchart_' + ids"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "leaseSummary",
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
  mounted () {
    this.leaseSummaryFun(this.datas)
  },
  methods: {
    leaseSummaryFun (val) {
      var dom = this.$refs["leaseSummaryEchart_" + this.ids]
      var myChart = echarts.init(dom)
      var optionName = ["空置产业空间", "已租产业空间"],
        xAxiasD = [9.935, 89.565],
        datas = {
          name: '园区总面积',
          value: 99.55
        }
      var option = {
        title: [
          {
            show: true,
            text: "",
            link: "",
            target: null,
            subtext: datas.name,
            sublink: "",
            subtarget: null,
            left: "55%",
            top: "30%",
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
              color: "rgb(255,255,255,.7)",
            },
          },
          {
            show: true,
            text: datas.value + '{a|万平}',
            link: "",
            target: null,
            subtext: "",
            sublink: "",
            subtarget: null,
            left: "82%",
            top: "30%",
            textAlign: "center",
            textStyle: {
              fontFamily: "BYfont",
              fontSize: 24,
              fontWeight: 550,
              color: "#fff",
              rich: {
                a: {
                  padding: [-5, 0, 0, 5],
                  fontSize: 14
                }
              }
            }
          },
        ],
        legend: {
          selectedMode: false,
          show: true,
          orient: "horizontal", // 'vertical'
          left: "0",
          bottom: "-10%",
          data: optionName,
          formatter: function (name) {
            var index = 0;
            optionName.forEach(function (value, i) {
              if (value == name) index = i
            })
            return "{a|" + xAxiasD[index] + "}{c|万平}" + "\n{b|" + name + "}";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            // padding: [0, 40, 0, 2],
            rich: {
              a: {
                fontSize: 22,
                fontFamily: 'BYfont',
                padding: [15, 0, 0, -12],
              },
              b: {
                color: "rgb(255,255,255,.7)",
                padding: [35, 0, 0, 0],
              },
              c: {
                padding: [7, 0, 0, 0],
                fontSize: 14
              }
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 70,
        },
        // color: ["#cda857", "#4396f3", "#0ff", "#236390"],
        color: ["#cda857", "rgba(30, 57, 87, 0.7)", "#4396f3", "#0ff"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0", "35%"],
            center: ["25%", "35%"],
            // startAngle: -45,
            color: 'rgba(30, 57, 87, 1)',
            avoidLabelOverlap: false,
            animation: false,
            // animationHover: false,
            animationType: 'scale',
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [100],
          },
          {
            name: "",
            type: "pie",
            radius: ["0", "55%"],
            center: ["25%", "35%"],
            // roseType: 'area', //radius
            // startAngle: -45,
            // animation: false,
            itemStyle: {
              normal: {
                // borderWidth: 2,
                // borderColor: 'rgba(0, 0, 0, 0)',
                // opacity: 0.75,
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 7,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            animationType: 'scale',
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
      };
      for (var i = 0; i < optionName.length; i++) {
        option.series[1].data[i] = {
          value: xAxiasD[i],
          name: optionName[i],
          // selected: i == 0
        };
      }
      this.$redomEchart(dom, option);
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: 0
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 聚焦产业
#leaseSummaryEchart_,
[id^="leaseSummaryEchart_"] {
  width: 100%;
  height: 3.125rem /* 250/80 */;
}
</style>
