<template>
  <div class="FocusIndustryAll">
    <div class="tittle">{{ title }}</div>
    <div class="focusIndustry" :style="$paddingFun(datas.padding)">
      <div
        :id="'focusIndustryEchart_' + ids"
        :ref="'focusIndustryEchart_' + ids"
        :style="$eHeightFun(datas.eHeight)"
      ></div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  mounted () {
    this.FocusIndustryFun(this.datas);
  },
  methods: {
    FocusIndustryFun (val) {
      var j = 0;
      const { optionName, datas, keyD } = val;
      var option = {
        baseOption: {
          timeline: {
            show: false,
            axisType: 'category',
            // orient: 'vertical',
            loop: false,
            autoPlay: true,
            inverse: true,
            playInterval: 1000 / keyD.value,
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
              return v.name + ':' + datas[v.dataIndex] + '%'
            }
          },
          title: {
            show: keyD,
            text: keyD ? keyD.value : "",
            link: "",
            target: null,
            subtext: keyD ? keyD.name : "",
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
              avoidLabelOverlap: false,
              maxAngle: 145,
              alignTo: "edge",
              data: [],
            },
            {
              name: "",
              type: "pie",
              radius: ["50%", "65%"],
              center: ["50%", "50%"],
              avoidLabelOverlap: false,
              hoverAnimation: false,
              maxAngle: 145,
              alignTo: "edge",
              data: [],
            },
          ],
        },
        options: []
      };
      for (var i = 0; i < optionName.length; i++) {
        if (this._data.title == "聚焦产业") {
          option.baseOption.series[0].data[i] = {
            value: optionName.length / 100,
            name: optionName[i],
            label: {
              formatter: `{a|${datas[i]}%}\n{b|{b}}`,
              padding: [0, -45, 0, -45],
              minMargin: 5,
              lineHeight: 15,
              rich: {
                a: {
                  width: 100,
                  fontSize: 12,
                  padding: [3, 0, 0, 0],
                  color: "rgb(255,255,255,.7)",
                },
                b: {
                  width: 100,
                  fontSize: 12,
                  padding: [0, 0, 6, 0],
                  color: "rgb(255,255,255,.7)",
                },
              },
            },
            labelLine: {
              length: 20,
              length2: 50,
              // maxSurfaceAngle: 80
            },
          };
        } else {
          option.baseOption.series[1].data[i] = {
            value: datas[i],
            name: optionName[i],
            label: {
              // minMargin: 10,
              // alignTo: "edge",
              // edgeDistance: 10,
              lineHeight: 18,
              formatter: "{a|{c}%}\n{b|{b}}",
              padding: [0, -45, 0, -45],
              rich: {
                a: {
                  width: 100,
                  fontSize: 12,
                  padding: [0, 0, 3, 0],
                  color: "rgb(255,255,255,.7)",
                },
                b: {
                  width: 100,
                  fontSize: 12,
                  color: "rgb(255,255,255,.7)",
                },
              },
            },
            labelLine: {
              length: 20,
              length2: 45,
              maxSurfaceAngle: 80,
            },
          };
        }
      }
      for (var n = Math.ceil(9 * keyD.value / 10); n < keyD.value; n++) {
        if (n <= keyD.value) {
          option.baseOption.timeline.data.push(n);
          option.options.push({
            title: {
              show: true,
              'text': n + ''
            },
          });
        }
      }
      this.$redomEchart(this.$refs["focusIndustryEchart_" + this.ids], option);
    },
  },
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
