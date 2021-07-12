<template>
  <div class="theParkIsAll">
    <div class="tittle">{{ title }}</div>
    <div class="parkCase">
      <div class="parkCaseEchartAll">
        <div
          v-for="(t, i) in 2"
          :key="i"
          :id="`parkCaseEchart_${i}` + ids"
          :ref="`parkCaseEchart_${i}` + ids"
        ></div>
        <!-- <div
          v-for="(t, i) in 2"
          :key="i"
          :id="`parkCaseEchart_${i}`"
          :ref="`parkCaseEchart_${i}`"
        ></div> -->
      </div>
      <div class="parkCaseEchartAll2">
        <div
          v-for="(t, i) in 3"
          :key="i"
          :id="`minEchart_${i}` + ids"
          :ref="`minEchart_${i}` + ids"
        ></div>
      </div>
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
    };
  },
  mounted () {
    this.parkCaseFun(this.datas.datas1);
    this.parkCaseFun2(this.datas.datas2);
  },
  methods: {
    // 园区情况
    parkCaseFun (datas) {
      var datas = datas;
      for (var i = 0; i < datas.length; i++) {
        var option = {
          grid: {
            x: -20,
            y: 10,
            x2: 60,
            y2: 10,
          },
          xAxis: {
            show: false,
            type: "category",
          },
          yAxis: {
            show: false,
            type: "value",
          },
          series: [
            {
              name: "",
              data: "",
              type: "bar",
              stack: "total",
              barWidth: 16,
              color: "#1e3957",
              showBackground: true,
              itemStyle: {
                barBorderRadius: [0, 0, 5, 5],
              },
              backgroundStyle: {
                color: "#4396f3",
                barBorderRadius: 5,
              },
              label: {
                show: true,
                position: "bottom",
                distance: -70,
                textBorderColor: "#ffffff00",
                textBorderWidth: 0,
                align: "left",
                rotate: 0,
                formatter: "{a| {c}} \n{b|}\n {name|{a}}",
                fontSize: 16,
                rich: {
                  a: {
                    padding: [3, 10],
                    color: "#fff",
                    fontFamily: "BYfont",
                    fontSize: 20,
                  },
                  b: {
                    width: 100,
                    height: 1,
                    padding: [0, 0, 0, -10],
                    backgroundColor: {
                      image: require("@/assets/img/echart/e_line.png"),
                      repeat: "no-repeat",
                    },
                  },
                  name: {
                    padding: [5, 10],
                    color: "rgb(255,255,255,.7)",
                  },
                },
              },
              hoverAnimation: false,
              // emphasis: {
              //   itemStyle: {
              //     show: false,
              //     color: 'tran'
              //   }
              // },
              labelLine: {
                show: false,
              },
            },
            {
              name: "",
              data: "",
              type: "bar",
              stack: "total",
              barWidth: 16,
              color: "#4396f3",
              itemStyle: {
                barBorderRadius: [5, 5, 0, 0],
              },
              backgroundStyle: {
                color: "#4396f3",
                barBorderRadius: 5,
              },
              label: {
                show: true,
                position: "top",
                distance: -70,
                textBorderColor: "#ffffff00",
                textBorderWidth: 0,
                align: "left",
                rotate: 0,
                formatter: "{a| {c}} \n{b|}\n {name|{a}}",
                fontSize: 16,
                rich: {
                  a: {
                    padding: [3, 10],
                    color: "#fff",
                    fontFamily: "BYfont",
                    fontSize: 20,
                  },
                  b: {
                    width: 100,
                    height: 1,
                    padding: [0, 0, 0, -10],
                    backgroundColor: {
                      image: require("@/assets/img/echart/e_line.png"),
                      repeat: "no-repeat",
                    },
                  },
                  name: {
                    padding: [5, 10],
                    color: "rgb(255,255,255,.7)",
                  },
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        };
        for (var j = 0; j < datas[i].length; j++) {
          option.series[j] = {
            ...option.series[j],
            ...datas[i][j],
          };
          // option.series[0].label.distance = -datas[i][j].data[0]
        }
        // let myChart = echarts.init(this.$refs["parkCaseEchart_" + i + this.ids])
        // myChart.setOption(option, true)
        // console.log(this.$refs["parkCaseEchart_" + i + this.ids])
        this.$redomEchart(this.$refs["parkCaseEchart_" + i + this.ids], option);
        // this.$redomEchart("parkCaseEchart_" + i + this.ids, option, this.$refs);
      }
    },
    parkCaseFun2 (val) {
      var datas = val.datas,
        names = val.names,
        imgs = [
          require("@/assets/img/echart/e_mj.png"),
          require("@/assets/img/echart/e_yz.png"),
          require("@/assets/img/echart/e_qz.png"),
        ];
      for (var i = 0; i < datas.length; i++) {
        var option = {
          title: [
            {
              text: "{a|" + datas[i] + "%}\n {b|" + names[i] + "}",
              x: "left",
              left: 60,
              y: "center",
              textStyle: {
                fontSize: 12,
                textAlign: "left",
                rich: {
                  a: {
                    color: "#fff",
                    fontSize: 24,
                    fontFamily: "BYfont",
                    fontWeight: "500",
                    padding: [2, 5],
                  },
                  b: {
                    color: "rgb(225,225,225,0.7)",
                    fontSize: 12,
                  },
                },
              },
            },
          ],
          graphic: [
            {
              type: "image",
              id: "logo",
              left: '2%',
              top: "12%",
              z: 10,
              bounding: "raw",
              style: {
                image: imgs[i],
                width: "50",
              },
            },
          ],
          // 极坐标系
          polar: {
            radius: ["54%", "60%"],
            center: ["20%", "50%"],
          },
          // 极坐标系：角度轴
          angleAxis: {
            // max: 100 * 360 / 270,
            show: false,
            type: "value",
            startAngle: 90,
          },
          // 极坐标系：径向轴
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            // 第二层：数据以进度条的形式展示
            {
              type: "bar",
              data: [
                {
                  value: datas[i],
                },
              ],
              itemStyle: {
                color: function () {
                  let obj = {
                    type: "linear",
                    x: 0, //右
                    y: 0.5, //下
                    x2: 1, //左
                    y2: 0, //上
                    colorStops: [
                      {
                        offset: 0,
                        color: "#4396f3",
                      },
                      {
                        offset: 1,
                        color: "rgb(255,255,255,0)",
                      },
                    ],
                  };
                  // if (data >= 0 && data < 20) {
                  //   obj.colorStops[1].color = '#8ac4d4';
                  // } else if (data >= 20 && data < 40) {
                  //   obj.y = 0.3;
                  //   obj.x2 = 2;
                  // } else if (data >= 40 && data < 60) {
                  //   obj.y = 0.3;
                  //   obj.x2 = 1.5;
                  // } else if (data >= 60 && data < 80) {
                  //   obj.y = 0.4;
                  //   obj.x2 = 1.1;
                  // }
                  return obj;
                },
              },
              barGap: "-100%",
              coordinateSystem: "polar",
              roundCap: true,
              cursor: "auto",
              z: 2,
            },
            // 第二层：进度条背景
            {
              type: "bar",
              hoverAnimation: false,
              data: [
                {
                  value: 100,
                },
              ],
              itemStyle: {
                color: "rgb(225,225,225,.5)",
              },
              barGap: "-100%",
              coordinateSystem: "polar",
              roundCap: true,
              cursor: "auto",
              z: 1,
            },
            // 第四层；背景圆：带阴影
            {
              type: "pie",
              radius: ["0%", "58%"],
              hoverAnimation: false,
              animation: false,
              center: ["20%", "50%"],
              cursor: "auto",
              itemStyle: {
                color: "rgb(14, 17, 39, .3)",
              },
              data: [
                {
                  value: 100,
                },
              ],
              labelLine: {
                show: false,
              },
              z: -1,
            },
            // 第五层：视觉上类似于边框，带阴影
            {
              type: "pie",
              radius: ["60%", "62%"],
              hoverAnimation: false,
              center: ["20%", "50%"],
              cursor: "auto",
              animation: false,
              itemStyle: {
                color: "rgb(255,255,255,.1)",
                shadowBlur: 100,
                shadowColor: "rgb(255,255,255,.1)",
              },
              data: [
                {
                  value: 100,
                },
              ],
              labelLine: {
                show: false,
              },
              emphasis: {
                itemStyle: {
                  color: "#fff",
                },
              },
              z: -2,
            },
            // 第五层：视觉上类似于边框，带阴影
            {
              type: "pie",
              radius: ["66%", "68%"],
              hoverAnimation: false,
              center: ["20%", "50%"],
              cursor: "auto",
              itemStyle: {
                color: "rgb(255,255,255,.05)",
                shadowBlur: 100,
                shadowColor: "rgb(255,255,255,.1)",
              },
              data: [
                {
                  value: 100,
                },
              ],
              labelLine: {
                show: false,
              },
              emphasis: {
                itemStyle: {
                  color: "#fff",
                },
              },
              z: -2,
            },
          ],
        };
        this.$redomEchart(this.$refs["minEchart_" + i + this.ids], option);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 园区情况
.theParkIsAll {
  .parkCase {
    width: 100%;
    height: 2.375rem /* 190/80 */;
    display: flex;
  }
  #parkCaseEchart,
  [id^="parkCaseEchart_"] {
    width: 50%;
    height: 2.375rem /* 190/80 */;
  }
  .parkCaseEchartAll {
    display: flex;
    width: 60%;
    height: 2.375rem /* 190/80 */;
  }
  .parkCaseEchartAll2 {
    width: 40%;
    height: 2.375rem /* 190/80 */;
  }
  #minEchart,
  [id^="minEchart_"] {
    width: 100%;
    height: 33%;
  }
}
</style>
