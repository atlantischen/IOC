<template>
  <!-- 园区服务home -->
  <div class="homePage">
    <ServiceSystem />
    <LeftRight>
      <template #left>
        <div class="serviceOverviewAll">
          <div class="tittle">服务办理概况</div>
          <div class="serviceOverviewList">
            <table class="table_style" border="0">
              <tr>
                <th></th>
                <th>预定</th>
                <th>受理</th>
                <th>完成</th>
              </tr>
              <tr>
                <td class="tb_bg">本月</td>
                <td>390</td>
                <td>478</td>
                <td>300</td>
              </tr>
              <tr>
                <td class="tb_bg">上月</td>
                <td>268</td>
                <td>478</td>
                <td>568</td>
              </tr>
              <tr>
                <td></td>
                <td><i class="tb_arrows arrows_up"></i>40.22%</td>
                <td><i class="tb_arrows arrows_up"></i>44.53%</td>
                <td><i class="tb_arrows arrows_down"></i>38.08%</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="popularServicesAll">
          <div class="tittle">热门服务TOP5</div>
          <div class="popularServices_time">
            <DropDown :list="yearsList" name="label" @_cg="changePSYears" />
            <DropDown :list="momthsList" name="label" @_cg="changePSMonths" />
          </div>
          <div id="popularServiceEchart" ref="popularServiceEchart"></div>
        </div>
      </template>
      <template #center> </template>
      <template #right>
        <div class="totalServicesAll">
          <div class="tittle">服务办理总数</div>
          <div class="totalServices_time x_right">
            <DropDown :list="yearsList" name="label" @_cg="changePSYears2" />
          </div>
          <div id="totalServicesEchart" ref="totalServicesEchart"></div>
        </div>
        <div class="distributionServicesAll">
          <div class="tittle">各服务办理分布</div>
          <div
            id="distributionServicesEchart"
            ref="distributionServicesEchart"
          ></div>
        </div>
      </template>
    </LeftRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "homePage",
  data () {
    return {
      yearsList: [
        {
          label: "2021",
          value: 2021,
        },
        {
          label: "2020",
          value: 2020,
        },
        {
          label: "2019",
          value: 2019,
        },
      ],
      momthsList: [
        {
          label: "6月",
          value: 6,
        },
        {
          label: "5月",
          value: 5,
        },
        {
          label: "4月",
          value: 4,
        },
        {
          label: "3月",
          value: 3,
        },
        {
          label: "2月",
          value: 2,
        },
        {
          label: "1月",
          value: 1,
        },
      ],
    };
  },
  components: {},
  mounted () {
    this.popularServiceFun();
    this.totalServicesFun();
    this.distributionServicesFun();
  },
  methods: {
    changePSMonths (val) {
      console.log(val);
      this.popularServiceFun();
    },
    changePSYears (val) {
      console.log(val);
      this.popularServiceFun();
    },
    changePSYears2 (val) {
      console.log(val);
      this.totalServicesFun();
    },
    popularServiceFun () {
      var names = [],
        xAxisNams = [
          "车位申请",
          "会议室预定",
          "报事报修",
          "园区导航",
          "意见反馈",
        ];
      var option = {
        tooltip: {},
        title: {
          show: true,
          text: "{c|服务单合计：}{a|436}{b|单}",
          link: "",
          target: null,
          subtext: "",
          sublink: "",
          subtarget: null,
          left: "1%",
          top: "0%",
          textAlign: "left",
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
          itemGap: 6,
          textStyle: {
            rich: {
              c: {
                fontSize: 14,
                color: "rgb(255,255,255,.7)",
              },
              a: {
                color: "#fff",
                fontFamily: "BYfont",
                fontSize: 20,
              },
              b: {
                color: "#fff",
                fontSize: 12,
              },
            },
          },
        },
        grid: {
          x: 10,
          y: 60,
          x2: 10,
          y2: 0,
          containLabel: true,
        },
        legend: {
          show: names.length > 0,
          right: 20,
          top: 10,
          data: names,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 20,
        },
        xAxis: [
          {
            type: "category",
            data: xAxisNams,
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgb(255,255,255,0)",
              },
            },
            axisLabel: {
              fontSize: 12,
              padding: [25, 0, 0, -25],
              rotate: -25,
              textStyle: {
                color: "#fff",
              },
            },
            axisline: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "个",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgb(255,255,255,.5)",
                width: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: names[0],
            type: "bar",
            barWidth: 14,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#4396f3" },
                { offset: 1, color: "rgb(67, 150, 243, .1)" },
              ]),
            },
            data: [353, 220, 160, 100, 60],
          },
        ],
      };
      this.$redomEchart(this.$refs["popularServiceEchart"], option);
    },
    totalServicesFun () {
      var names = [],
        xData = [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        datas = [119, 120, 130, 140, 143, 154, 160, 162, 169, 170, 190, 200];
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
        },
        title: {
          show: true,
          text: "{c|服务单合计：}{a|436}{b|单}",
          link: "",
          target: null,
          subtext: "",
          sublink: "",
          subtarget: null,
          left: "1%",
          top: "0%",
          textAlign: "left",
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
          itemGap: 6,
          textStyle: {
            rich: {
              c: {
                fontSize: 14,
                color: "rgb(255,255,255,.7)",
              },
              a: {
                color: "#fff",
                fontFamily: "BYfont",
                fontSize: 20,
              },
              b: {
                color: "#fff",
                fontSize: 12,
              },
            },
          },
        },
        color: ["#fff", "#ffb400"],
        grid: {
          x: 10,
          y: 60,
          x2: 10,
          y2: 0,
          containLabel: true,
        },
        legend: {
          show: names.length > 0,
          right: 20,
          top: 0,
          orient: "horizontal",
          data: names,
          icon: "rect", // circle, rect , roundRect, triangle, diamond, pin, arrow, none
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 15,
          itemHeight: 2,
          itemGap: 20,
        },
        xAxis: {
          type: "category",
          name: "时间",
          data: xData,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgb(255,255,255,0)",
            },
          },
          axisLabel: {
            fontSize: 12,
            padding: [20, 0, 0, -20],
            rotate: -20,
            interval: 0,
            margin: 10,
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: [
          {
            name: "单",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            // min: 8,
            // max: 2000,
            splitNumber: 6,
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgb(255,255,255,.5)",
                width: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: names[0],
            type: "line",
            smooth: true,
            color: "#ffdd8d",
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgb(255, 179, 0, 0.5)" },
                  { offset: 1, color: "rgb(255, 255, 255, 0)" },
                ]),
              },
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 0.5,
                },
              },
            },
            symbolSize: 6,
            data: [],
          },
        ],
      };
      for (var i = 0; i < datas.length; i++) {
        option.series[0].data[i] = {
          value: datas[i],
          symbol: i != datas.length - 1 ? "none" : "",
          itemStyle: {
            color: "#ffdd8d",
          },
        };
      }
      this.$redomEchart(this.$refs["totalServicesEchart"], option);
    },
    // 各服务办理分布
    distributionServicesFun () {
      var dom = this.$refs["distributionServicesEchart"]
      var myChart = echarts.init(dom)
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
      var optionName = ["个人服务", "基础服务", "企业服务", "新材料"],
        datas = [26.86, 47.55, 21.45, 5.41];
      var option = {
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
      this.$redomEchart(this.$refs["distributionServicesEchart"], option);
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 6
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
@import "~@/style/animation.less";
#popularServiceEchart {
  width: 100%;
  height: 240px;
}
#totalServicesEchart {
  width: 100%;
  height: 240px;
}
#distributionServicesEchart {
  width: 100%;
  height: 240px;
}
.serviceOverviewAll {
  .serviceOverviewList {
    .table_style {
      width: 100%;
      text-align: center;
      tr {
        td {
          margin-bottom: 20px;
        }
        &:nth-last-child(2) {
          td {
            margin: 0;
          }
        }
        &:nth-last-child(1) {
          td {
            padding-bottom: 10px;
          }
        }
      }
      th {
        .text_s(14px);
        padding-bottom: 20px;
      }
      td {
        .datas_s(20px);
        font-size: 18px;
      }
      .tb_arrows {
        display: inline-block;
        width: 17px;
        height: 27px;
        &.arrows_up {
          background: url("~@/assets/img/arrows_up.png");
          background-size: contain;
        }
        &.arrows_down {
          background: url("~@/assets/img/arrows_down.png");
          background-size: contain;
        }
      }
      .tb_bg {
        .x_left();
        padding: 0 15px;
        width: 94px;
        height: 80px;
        font-size: 24px;
        font-weight: 600;
        font-family: "Microsoft YaHei";
        .gradient(right, #4396f3, #ffffff00);
        border-radius: 3px 0 0 3px;
      }
    }
  }
}
.popularServicesAll {
  .popularServices_time {
    display: flex;
    justify-content: flex-end;
    padding-right: 0.1rem /* 8/80 */;
    .dropDown {
      margin-left: 0.375rem /* 30/80 */;
    }
  }
}
.totalServicesAll {
  .totalServices_time {
    width: 100%;
    padding-right: 0.1rem /* 8/80 */;
  }
}
</style>
