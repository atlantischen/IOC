<template>
  <!-- 场所类型占比 -->
  <div class="proportionOfSiteTypeAll">
    <div class="tittle">{{ title }}</div>
    <div class="proportionOfSiteType">
      <div
        v-show="datas.hys"
        :id="'proportionOfSiteTypeEchart_' + ids"
        :ref="'proportionOfSiteTypeEchart_' + ids"
      ></div>
      <div
        v-show="datas.cd"
        :id="'proportionOfSiteType2Echart_' + ids"
        :ref="'proportionOfSiteType2Echart_' + ids"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "proportionOfSiteType",
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
    this.proportionOfSiteTypeFun(this.datas);
    this.proportionOfSiteType2Fun(this.datas);
  },
  methods: {
    // 会议室占比
    proportionOfSiteTypeFun (val) {
      var dom = this.$refs["proportionOfSiteTypeEchart_" + this.ids];
      var myChart = echarts.init(dom);
      let { optionName, datas, name } = val.hys;
      var j = 0,
        colors = [
          "#00ffff",
          "#cd9a57",
          "#97c8ff",
          "#456af3",
          "#fff",
          "#1e3957",
          "#c7d392",
          "#9a866a",
          "#c9a555",
          "#fff",
        ];
      var option = {
        tooltip: {
          show: true,
          trigger: "item",
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
          padding: [10, 15],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          textStyle: {
            color: "#fff",
          },
          formatter: v => {
            return v.name + ':' + v.value + '%'
          }
        },
        title: [
          {
            show: true,
            text: name,
            link: "",
            target: null,
            subtext: "",
            sublink: "",
            subtarget: null,
            left: "28%",
            top: "43%",
            textAlign: "center",
            textStyle: {
              // fontFamily: "BYfont",
              fontSize: 20,
              fontWeight: 500,
              color: "#fff",
            },
            subtextStyle: {},
          },
        ],
        grid: {
          containLabel: true,
        },
        legend: {
          selectedMode: true,
          show: true,
          orient: "vertical", // 'horizontal'
          left: "62%",
          y: "center",
          data: optionName,
          formatter: function (name) {
            var index = 0;
            optionName.forEach(function (value, i) {
              if (value == name) index = i;
            });
            return "{a|" + name + "}" + datas[index] + "%";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {
                // width: 40,
                padding: [0, 5, 0, 0],
                color: "rgb(255,255,255,.7)",
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 15,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["60%", "80%"],
            center: ["30%", "50%"],
            // avoidLabelOverlap: true,
            startAngle: 180,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
              normal: {
                length: 20,
                length2: 70,
              },
            },
            data: [],
          },
          {
            tooltip: {
              show: false,
            },
            type: "pie",
            animation: false,
            radius: ["0", "60%"],
            center: ["30%", "50%"],
            data: [100],
            label: { show: false },
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: "#0e1c36",
            },
          },
        ],
      };
      option.series[0].data = [];
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data.push(
          {
            value: datas[i],
            name: optionName[i],
            // selected: i == optionName.length - 1,
            itemStyle: {
              color: colors[i],
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#ffffff00",
            },
            tooltip: {
              show: false,
            },
            label: { show: false },
          }
        );
      }
      this.$redomEchart(dom, option);
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 7,
      });
    },
    // 场地占比
    proportionOfSiteType2Fun (val) {
      let { optionName, datas, name } = val.cd;
      var option = {
        tooltip: {
          show: true,
          trigger: "item",
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
          padding: [10, 15],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          textStyle: {
            color: "#fff",
          },
          formatter: v => {
            return v.name + ':' + v.value + '%'
          }
        },
        title: [
          {
            show: true,
            text: name,
            link: "",
            target: null,
            subtext: "",
            sublink: "",
            subtarget: null,
            left: "28%",
            top: "43%",
            textAlign: "center",
            textStyle: {
              // fontFamily: "BYfont",
              fontSize: 20,
              fontWeight: 500,
              color: "#fff",
            },
            subtextStyle: {},
          },
        ],
        grid: {
          containLabel: true,
        },
        legend: {
          selectedMode: true,
          show: true,
          orient: "vertical", // 'horizontal'
          left: "62%",
          y: "center",
          data: optionName,
          formatter: function (name) {
            var index = 0;
            optionName.forEach(function (value, i) {
              if (value == name) index = i;
            });
            return "{a|" + name + "}" + datas[index] + "%";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {
                padding: [0, 5, 0, 0],
                color: "rgb(255,255,255,.7)",
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 15,
        },
        color: [
          "#456af3",
          "#97c8ff",
          "#00ffff",
          "#216691",
          "#c9d993",
          "#9b8a6a",
          "#cd9a57",
          "#fff",
        ],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["62%", "80%"],
            center: ["30%", "50%"],
            // avoidLabelOverlap: true,
            // startAngle: 180,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
              normal: {
                length: 20,
                length2: 70,
              },
            },
            data: [],
          },
          {
            type: "pie",
            tooltip: {
              show: false,
            },
            animation: false,
            radius: ["0", "55%"],
            center: ["30%", "50%"],
            data: [100],
            label: { show: false },
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: "rgb(30, 57, 87,.5)",
            },
          },
        ],
      };
      option.series[0].data = [];
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data.push({
          value: datas[i],
          name: optionName[i],
        });
      }
      this.$redomEchart(
        this.$refs["proportionOfSiteType2Echart_" + this.ids],
        option
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 人行态势
.proportionOfSiteTypeAll {
  .proportionOfSiteType {
    width: 100%;
  }
  #proportionOfSiteTypeEchart_,
  [id^="proportionOfSiteTypeEchart_"],
  #proportionOfSiteType2Echart_,
  [id^="proportionOfSiteType2Echart_"] {
    width: 100%;
    height: 2.3125rem /* 185/80 */;
  }
}
</style>
