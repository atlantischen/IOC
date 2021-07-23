<template>
  <div class="pieChart3All">
    <div class="tittle">{{ title }}</div>
    <div class="pieChart3" :style="$paddingFun(datas.padding)">
      <div
        :id="'pieChart3Echart_' + ids"
        :ref="'pieChart3Echart_' + ids"
        :style="$eHeightFun(datas.eHeight)"
      ></div>
    </div>
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
      ids: this.$uuid()
    }
  },
  mounted () {
    this.pieChart3Fun(this.datas)
  },
  methods: {
    pieChart3Fun (val) {
      var dom = this.$refs["pieChart3Echart_" + this.ids]
      var myChart = echarts.init(dom)
      var j = 0;
      const { optionName, datas, keyD } = val
      var option = {
        title: {
          show: keyD,
          text: keyD ? keyD.value : '',
          link: "",
          target: null,
          subtext: keyD ? keyD.name : '',
          sublink: "",
          subtarget: null,
          left: "48%",
          bottom: "38%",
          textAlign: "center",
          itemGap: 6,
          textStyle: {
            fontFamily: "BYfont",
            fontSize: 24,
            color: "#fff",
            fontWeight: 550,
          },
          subtextStyle: {
            fontSize: 12,
            color: "rgb(255,255,255,.7)",
          },
        },
        legend: {
          selectedMode: true,
          show: optionName,
          orient: "horizontal", // 'vertical'
          left: "0",
          y: "bottom",
          data: optionName,
          formatter: function (name) {
            return "{a|" + name + "}";
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
          itemGap: 8,
        },
        color: [
          "#4396f3",
          "#97c8ff",
          "#456af3",
          "#00ffff",
          "#1e3957",
          "#c7d392",
          "#9a866a",
          "#c9a555",
          "#fff",
        ],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0", "60%"],
            center: ["50%", "40%"],
            avoidLabelOverlap: true,
            roseType: 'radius',
            clockWise: false,
            // maxAngle: 145,
            startAngle: 120,
            alignTo: "edge",
            label: {
              // minMargin: 10,
              // alignTo: 'edge',
              // edgeDistance: 10,
              // lineHeight: 10,
              formatter: "{a|{c}%}",
              rich: {
                a: {
                  width: 100,
                  fontSize: 12,
                  padding: [2, 0],
                  color: "rgb(255,255,255,.7)",
                },
              },
            },
            labelLine: {
              // length: 20,
              length2: 20,
              // maxSurfaceAngle: 80
            },
            data: [],
          },
        ],
      };
      if (optionName) {
        for (var i = 0; i < optionName.length; i++) {
          option.series[0].data[i] = {
            value: datas[i],
            name: optionName[i],
          };
        }
      }
      this.$redomEchart(dom, option);
      // myChart.dispatchAction({
      //   type: 'highlight',
      //   seriesIndex: 0,
      //   dataIndex: 0
      // });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
#pieChart3Echart_,
[id^="pieChart3Echart_"] {
  width: 100%;
  height: 3.5rem /* 280/80 */;
}
</style>
