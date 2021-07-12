<template>
  <!-- 公共空间home -->
  <div class="homePage">
    <LeftRight>
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center>
        <CenterDatas :list="centerDatasList" />
      </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { getWeather } from "@/api/com";
export default {
  name: "homePage",
  data () {
    return {
      leftInfo: [
        {
          title: "产业空间",
          type: "IndustrySpace",
          datas: {
          },
        },
        {
          title: "产业空间分布",
          type: "IndustrySpace2",
          datas: {
          },
        },
        {
          title: "场地使用TOP5",
          type: "singleBarChart",
          datas: {
            eHeight: 220,
            xAxisD: [
              "14F会议室",
              "14F演播室",
              "16F小会议室",
              "16F大会议室",
              "天平台广场",
            ],
            names: null,
            units: ["", "个"],
            datas: [
              [78, 60, 55, 38, 27]
            ],
          },
        },
      ],
      rightInfo: [
        {
          title: "场地空间",
          type: "FloorSpace",
          datas: {
          },
        },
        {
          title: "环境空间",
          type: "EnvironmentalSpace",
          datas: {
          },
        },
        {
          title: "今日气温趋势",
          type: "PedestrianPosture",
          datas: {
            smooth: true,
            unit: ["", "℃"],
            rightTip: {
              name: '体感温度：',
              value: '26℃'
            },
            xData: [
              "0h",
              "2h",
              "4h",
              "6h",
              "8h",
              "10h",
              "12h",
              "14h",
              "16h",
              "18h",
              "20h",
              "22h",
              "24h",],
            datas: [
              [15, 17, 16, 17, 19, 20, 22, 25, 23, 22, 21, 17, 14]
            ],
          },
        },
      ],
      centerDatasList: [
        {
          name: "多功能演播厅",
          val: 15,
        },
        {
          name: "云平台广场",
          val: 8,
        },
        {
          name: "会议室",
          val: 45,
        },
      ],
    };
  },
  components: {},
  mounted () {
    this.temperatureTrendFun();
  },
  methods: {
    // 今日气温趋势
    temperatureTrendFun () {
      var names = [],
        xData = [
          "0h",
          "2h",
          "4h",
          "6h",
          "8h",
          "10h",
          "12h",
          "14h",
          "16h",
          "18h",
          "20h",
          "22h",
          "24h",
        ],
        datas = [15, 17, 16, 17, 19, 20, 22, 25, 23, 22, 21, 17, 14];
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
        },
        color: ["#fff", "#ffb400"],
        grid: {
          x: 10,
          y: 30,
          x2: 30,
          y2: 10,
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
            name: "℃",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            min: 8,
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
          {
            name: "体感温度：" + 26 + "℃",
            nameTextStyle: {
              padding: [5, 90, 0, 0],
            },
            min: 8,
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
                  { offset: 0, color: "rgb(255, 255, 255, 0.25)" },
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
      this.$redomEchart(this.$refs["temperatureTrendEchart"], option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
#temperatureTrendEchart {
  width: 100%;
  height: 170px;
}
</style>
