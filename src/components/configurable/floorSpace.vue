<template>
  <div class="floorSpaceAll">
    <div class="tittle">{{ title }}</div>
    <div class="floorSpace" :style="$paddingFun(datas.padding)">
      <div
        :id="'floorSpaceEchart_' + ids"
        :ref="'floorSpaceEchart_' + ids"
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
      type: Object,
    },
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
      spaceRadio: 0,
    };
  },
  mounted () {
    this.floorSpaceFun(this.datas);
  },
  methods: {
    floorSpaceFun (val) {
      const { optionName, datas, data2 } = val;
      var colors = ["rgba(30, 57, 87, 0.5)", "#cda857", "#4396f3", "#0ff"];
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
            return optionName[v.dataIndex] + ':' + v.value + '%'
          }
        },
        title: [
          {
            show: data2 && data2[0],
            text: data2[0].value,
            link: "",
            target: null,
            subtext: data2[0].name,
            sublink: "",
            subtarget: null,
            right: "18%",
            top: "0",
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
            show: data2 && data2[1],
            text: data2[1].value,
            link: "",
            target: null,
            subtext: data2[1].name,
            sublink: "",
            subtarget: null,
            right: "-7%",
            top: "0",
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
        ],
        legend: {
          selectedMode: true,
          show: true,
          orient: "vertical", // 'horizontal'
          left: "50%",
          top: "35%",
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
                color: "rgb(255,255,255,.7)",
                padding: [0, 10, 0, 0],
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 12,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0", 90 - (optionName.length + 1) * 8 + "%"],
            center: ["20%", "50%"],
            color: "rgba(0, 0, 0, 0.4)",
            avoidLabelOverlap: false,
            animationType: "scale",
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [100],
          },
        ],
      };
      for (var i = 0; i < optionName.length; i++) {
        option.series[i + 1] = {
          // z: optionName.length - i,
          name: "",
          type: "pie",
          radius: [
            "0",
            (i == 0 ? 90 - optionName.length * 5 : 90 - i * 5) + "%",
          ],
          center: ["20%", "50%"],
          // roseType: 'radius', //area
          startAngle: -45,
          // itemStyle: {
          //   normal: {
          //     // borderWidth: 2,
          //     // borderColor: 'rgba(0, 0, 0, 0)',
          //     // opacity: 0.75,
          //     shadowBlur: 20,
          //     shadowOffsetX: 0,
          //     shadowOffsetY: 7,
          //     shadowColor: "rgba(0, 0, 0, 0.5)",
          //   },
          // },
          animationType: "scale",
          avoidLabelOverlap: false,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          data: datas.map((e, j) => {
            return {
              value: e,
              itemStyle: {
                normal: {
                  color: j == i ? colors[j] : "rgb(0,0,0,0)",
                  shadowBlur: 30,
                  shadowOffsetX: 2,
                  shadowOffsetY: 5,
                  shadowColor: "rgba(0, 0, 0, 0.2)",
                },
              },
              name: i == j ? optionName[i] : "",
            };
          }),
        };
      }
      this.$redomEchart(this.$refs["floorSpaceEchart_" + this.ids], option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 产业空间
#floorSpaceEchart_,
[id^="floorSpaceEchart_"] {
  width: 100%;
  height: 2.125rem /* 170/80 */;
}
</style>
