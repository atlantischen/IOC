<template>
  <div class="waterPoloAll">
    <div class="tittle">{{ title }}</div>
    <div class="waterPolo">
      <div
        v-for="(item, i) in datas.info.length"
        :key="i"
        :id="'waterPoloEchart_' + i + ids"
        :ref="'waterPoloEchart_' + i + ids"
      ></div>
    </div>
  </div>
</template>

<script>
import "echarts-liquidfill";
export default {
  name: "waterPoloAll",
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
    this.waterPoloFun(this.datas);
  },
  methods: {
    // 水球
    waterPoloFun (val) {
      const { info } = val;
      for (var i = 0; i < info.length; i++) {
        var value = parseInt(info[i].value.split("%")[0]) / 100;
        var colors = [
          [
            {
              offset: 1,
              color: "rgba(69, 146, 234, 0.1)",
            },
            {
              offset: 0.5,
              color: "rgba(69, 146, 234, 0.8)",
            },
            {
              offset: 0,
              color: "rgba(69, 146, 234, 1)",
            },
          ],
          [
            {
              offset: 1,
              color: "rgba(230, 183, 93, 0.1)",
            },
            {
              offset: 0.5,
              color: "rgba(230, 183, 93, 0.8)",
            },
            {
              offset: 0,
              color: "rgba(230, 183, 93, 1)",
            },
          ],
          [
            {
              offset: 1,
              color: "rgba(17, 226, 255, 0.1)",
            },
            {
              offset: 0.5,
              color: "rgba(17, 226, 255, 0.8)",
            },
            {
              offset: 0,
              color: "rgba(17, 226, 255, 1)",
            },
          ],
          [
            {
              offset: 1,
              color: "rgba(253, 116, 57, 0.1)",
            },
            {
              offset: 0.5,
              color: "rgba(253, 116, 57, 0.8)",
            },
            {
              offset: 0,
              color: "rgba(253, 116, 57, 1)",
            },
          ],
        ];
        var option = {
          baseOption: {
            timeline: {
              show: false,
              axisType: 'category',
              // orient: 'vertical',
              loop: false,
              autoPlay: true,
              inverse: true,
              playInterval: this.$retutnZero(value * 100) / (value * 100),
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
            title: {
              text: (value * 100).toFixed(0) + "{a|%}",
              textStyle: {
                fontSize: 22,
                fontFamily: "BYfont",
                fontWeight: "normal",
                color: "#fff",
                rich: {},
              },
              x: "center",
              y: "30%",
            },
            graphic: [
              {
                type: "group",
                left: "center",
                bottom: "10%",
                children: [
                  {
                    type: "text",
                    z: 100,
                    left: "10",
                    top: "middle",
                    style: {
                      fill: "#fff",
                      text: info[i].name,
                      font: "14px BYfont",
                    },
                  },
                ],
              },
            ],
            series: [
              {
                type: "liquidFill",
                radius: "75%",
                center: ["50%", "40%"],
                data: [value, value, value],
                backgroundStyle: {
                  color: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [
                      {
                        offset: 1,
                        color: "rgba(34, 54, 75, 1)",
                      },
                      {
                        offset: 0,
                        color: "rgba(26, 45, 65, 1)",
                      },
                    ],
                    globalCoord: false,
                  },
                  globalCoord: false,
                  shadowBlur: 5,
                  shadowColor: "rgba(0, 0, 0, 0.1)",
                },
                label: {
                  normal: {
                    show: false,
                    textStyle: {
                      fontSize: 24,
                      color: "#fff",
                      fontFamily: "BYfont",
                    },
                  },
                },
                outline: {
                  show: false,
                  borderDistance: 0,
                  itemStyle: {
                    borderWidth: 0,
                  },
                },
                itemStyle: {
                  opacity: 0.5,
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: colors[i],
                    globalCoord: false,
                  },
                },
                emphasis: {
                  itemStyle: {
                    opacity: 1,
                  },
                },
              },
            ],
          },
          options: []
        };
        for (var n = Math.floor(8 * (value * 100) / 10); n <= (value * 100); n++) {
          if (n <= (value * 100)) {
            option.baseOption.timeline.data.push(n);
            option.options.push({
              title: {
                text: n + "{a|%}",
                textStyle: {
                  fontSize: 22,
                  fontFamily: "BYfont",
                  fontWeight: "normal",
                  color: "#fff",
                  rich: {},
                },
                x: "center",
                y: "30%",
              }
            });
          }
        }
        this.$redomEchart(
          this.$refs["waterPoloEchart_" + i + this.ids],
          option
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 人行态势
.waterPoloAll {
  .waterPolo {
    display: flex;
    width: 100%;
  }
  #waterPoloEchart_,
  [id^="waterPoloEchart_"] {
    width: 25%;
    height: 1.875rem /* 150/80 */;
  }
}
</style>
