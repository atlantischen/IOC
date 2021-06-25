<template>
  <div class="FocusIndustryAll">
    <div class="tittle">{{ title }}</div>
    <div :id="'focusIndustryEchart_' + ids"></div>
  </div>
</template>

<script>
import { redomEchart, uuid } from "@/utils/methods";
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
      ids: uuid()
    }
  },
  mounted () {
    this.FocusIndustryFun(this.datas)
  },
  methods: {
    FocusIndustryFun (val) {
      var j = 0;
      const { optionName, datas, subtext, total } = val
      var option = {
        title: {
          show: true,
          text: total,
          link: "",
          target: null,
          subtext: subtext,
          sublink: "",
          subtarget: null,
          left: "48%",
          bottom: "38%",
          textAlign: "center",
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
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
            radius: ["50%", "65%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: true,
            maxAngle: 145,
            label: {
              // minMargin: 10,
              // alignTo: 'edge',
              // edgeDistance: 10,
              // lineHeight: 10,
              formatter: "{a|{c}%}\n{b|{b}}",
              padding: [0, -45, 0, -45],
              rich: {
                a: {
                  width: 100,
                  fontSize: 12,
                  padding: [2, 0],
                  color: "rgb(255,255,255,.7)",
                },
                b: {
                  width: 100,
                  fontSize: 12,
                  lineHeight: 14,
                  // padding: [1, 0],
                  color: "rgb(255,255,255,.7)",
                },
              },
            },
            labelLine: {
              length: 20,
              length2: 45,
              // maxSurfaceAngle: 80
            },
            data: [],
          },
        ],
      };
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data[i] = {
          value: datas[i],
          name: optionName[i],
        };
      }
      redomEchart("focusIndustryEchart_" + this.ids, option);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 聚焦产业
#focusIndustryEchart_,
[id^="focusIndustryEchart_"] {
  width: 100%;
  height: 2.375rem /* 190/80 */;
}
</style>
