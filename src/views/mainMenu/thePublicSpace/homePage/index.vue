<template>
  <!-- 公共空间home -->
  <div class="homePage">
    <LeftRight>
      <template #left>
        <div class="industrySpaceAll">
          <div class="tittle">产业空间</div>
          <div class="SpaceRadioGroup">
            <el-radio-group class="radioGroup" v-model="spaceRadio">
              <el-radio :label="0" @click.stop="selectSpaceRadio(0)"
                >空间占比</el-radio
              >
              <el-radio :label="1" @click.stop="selectSpaceRadio(1)"
                >空间租售</el-radio
              >
            </el-radio-group>
          </div>
          <div id="industrySpaceEchart" ref="industrySpaceEchart"></div>
        </div>
        <div class="spatialDistributionAll">
          <div class="tittle">产业空间分布</div>
          <div
            id="spatialDistributionEchart"
            ref="spatialDistributionEchart"
          ></div>
        </div>
        <div class="siteUsageTop5">
          <div class="tittle">场地使用TOP5</div>
          <div id="siteUsageTop5Echart" ref="siteUsageTop5Echart"></div>
        </div>
      </template>
      <template #center>
        <CenterDatas :list="centerDatasList" />
      </template>
      <template #right>
        <div class="floorSpace">
          <div class="tittle">场地空间</div>
          <div id="floorSpaceEchart" ref="floorSpaceEchart"></div>
        </div>
        <div class="environmentalSpace">
          <div class="tittle">环境空间</div>
          <div class="weather">
            <div class="weather_l x_c">
              <svg class="icon tianqi" aria-hidden="true">
                <use xlink:href="#icon-duoyun"></use>
              </svg>
              <span class="y_c">
                <i><b>31</b> ℃</i>
                <i>多云</i>
              </span>
            </div>
            <ul class="weather_r x_sa_rap">
              <li class="y_c">
                <span>60%</span>
                <i class="iconfont icon-icon-humidity"></i>
              </li>
              <li class="y_c">
                <span>西南风（1级）</span>
                <i class="iconfont icon-fengxiang"></i>
              </li>
              <li class="y_c">
                <span>23</span>
                <i>PM2.5</i>
              </li>
              <li class="y_c">
                <span>0.9ppm</span>
                <i>CO</i>
              </li>
              <li class="y_c">
                <span>993</span>
                <i>Pa</i>
              </li>
              <li class="y_c">
                <span>0.06%</span>
                <i>CO²</i>
              </li>
            </ul>
          </div>
          <div class="environment_tip">
            空气质量指数AQI <i class="iconfont icon-wenti"></i>
          </div>
          <div id="airQualityEchart" ref="airQualityEchart"></div>
          <span class="environment_tip">
            <span>温馨提示: </span>
            <p>空气质量很好，可以外出活动，呼吸新鲜空气，拥抱大自然。</p>
          </span>
        </div>
        <div class="tittle">今日气温趋势<i></i></div>
        <div id="temperatureTrendEchart" ref="temperatureTrendEchart"></div>
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
      spaceRadio: 0,
      weatherDatas: {},
    };
  },
  components: {},
  created () {
    getWeather({ city: "深圳" }).then((r) => {
      this.weatherDatas = r.data.data;
      console.log(r);
    });
  },
  mounted () {
    this.industrySpaceFun([76.16, 9.62, 5.93, 8.29]);
    this.SpatialDistributionFun();
    this.siteUsageTop5Fun();
    this.floorSpaceFun();
    this.airQualityFun();
    this.temperatureTrendFun();
  },
  methods: {
    //
    selectSpaceRadio (val) {
      this.spaceRadio = val;
      if (val == 0) {
        this.industrySpaceFun([76.16, 9.62, 5.93, 8.29]);
      } else {
        this.industrySpaceFun([5.93, 8.29, 76.16, 9.62]);
      }
    },
    // 产业空间
    industrySpaceFun (d) {
      var optionName = ["200平以下", "200~500平", "500~1000平", "1000平以上"],
        datas = d;
      var option = {
        tooltip: {
          show: false,
          // trigger: 'item',
        },
        title: {
          show: true,
          text: "",
          link: "",
          target: null,
          subtext: "空间占比",
          sublink: "",
          subtarget: null,
          left: "18%",
          bottom: "42%",
          textAlign: "center",
          // backgroundColor:
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
          itemGap: 6,
          textStyle: {
            show: false,
            fontFamily: "BYfont",
            fontSize: 24,
            color: "#fff",
            fontWeight: 550,
          },
          subtextStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
        legend: {
          selectedMode: true,
          show: true,
          orient: "vertical", // 'horizontal'
          left: "45%",
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
                color: "rgb(255,255,255,.7)",
                padding: [0, 10, 0, 0],
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 15,
        },
        color: ["#cda857", "#4396f3", "#0ff", "#236390"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "65%"],
            center: ["20%", "50%"],
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
        option.series[0].data[i] = {
          value: datas[i],
          name: optionName[i],
        };
      }
      this.$redomEchart(this.$refs["industrySpaceEchart"], option);
    },
    // 产业空间分布
    SpatialDistributionFun () {
      var ii = -1;
      var optionName = [
        "新能源、新材料",
        "智能制造",
        "信息技术",
        "生物医药",
        "文化创意",
        "现代服务",
        "节能环保",
      ],
        datas = [23.46, 24.29, 32.26, 1.2, 12.8, 3.25, 2.74];
      var option = {
        title: {
          show: true,
          text: "",
          link: "",
          target: null,
          subtext: "",
          sublink: "",
          subtarget: null,
          left: "22%",
          bottom: "42%",
          textAlign: "center",
          itemGap: 6,
          textStyle: {
            show: false,
            fontFamily: "BYfont",
            fontSize: 24,
            color: "#fff",
            fontWeight: 550,
          },
          subtextStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
        legend: {
          selectedMode: true,
          show: true,
          orient: "vertical", // 'horizontal'
          left: "45%",
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
        color: [
          "#4396f3",
          "#0ff",
          "#236390",
          "#9a866a",
          "#cda857",
          "#c7d392",
          "#fff",
        ],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0", "65%"],
            center: ["20%", "50%"],
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
        option.series[0].data[i] = {
          value: datas[i],
          name: optionName[i],
        };
      }
      this.$redomEchart(this.$refs["spatialDistributionEchart"], option);
    },
    // 场地使用top5
    siteUsageTop5Fun () {
      var names = [],
        xAxisNams = [
          "14F会议室",
          "14F演播室",
          "16F小会议室",
          "16F大会议室",
          "天平台广场",
        ];
      var option = {
        tooltip: {},
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
              padding: [20, 0, 0, -20],
              rotate: -20,
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
            data: [78, 60, 55, 38, 27],
          },
        ],
      };
      this.$redomEchart(this.$refs["siteUsageTop5Echart"], option);
    },
    // 环境空间
    airQualityFun () {
      var datas = [53, 300],
        colors = ["#00ffff", "yellow", "orange", "red", "#990056", "#7b0128"],
        selectedColor = ''
      switch (true) {
        case datas[0] < (datas[1] / 6) * 1:
          selectedColor = colors[0]
          break;
        case datas[0] < (datas[1] / 6) * 2:
          selectedColor = colors[1]
          break;
        case datas[0] < (datas[1] / 6) * 3:
          selectedColor = colors[2]
          break;
        case datas[0] < (datas[1] / 6) * 4:
          selectedColor = colors[3]
          break;
        case datas[0] < (datas[1] / 6) * 5:
          selectedColor = colors[4]
          break;
        default:
          selectedColor = colors[5]
          break;
      }
      var option = {
        grid: {
          left: "0",
          top: "30",
          right: "0",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          max: datas[1],
          min: 0,
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "category",
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: "条",
            type: "bar",
            barWidth: 10,
            barGap: "-100%",
            // barCategoryGap: "100%",
            data: [datas[0]],
            itemStyle: {
              normal: {
                color: "#ffffff00",
                // color: "pink",
              },
            },
            label: {
              show: true,
              position: "right",
              fontSize: 14,
              offset: [-25, -25],
              formatter: "{a| {c}}\n{b| }",
              rich: {
                a: {
                  width: 20,
                  height: 15,
                  padding: [3, 10, 5],
                  color: "#000",
                  borderRadius: 5,
                  backgroundColor: selectedColor
                },
                b: {
                  width: 1,
                  height: 2,
                  padding: [0.5, 0],
                  // borderWidth: 1,
                  // borderColor: selectedColor,
                  align: 'center',
                  backgroundColor: selectedColor
                },
              },
            },
            z: 1,
          },
          {
            name: "背景",
            stack: '背景',
            type: "bar",
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                barBorderRadius: [10, 0, 0, 10],
                color: '#00ffff'
              },
            },
            z: 0,
          },
          {
            name: "",
            stack: '背景',
            type: "bar",
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: 'yellow'
              },
            },
            z: 0,
          },
          {
            name: "",
            stack: '背景',
            type: "bar",
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: 'orange'
              },
            },
            z: 0,
          },
          {
            name: "",
            stack: '背景',
            type: "bar",
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: 'red'
              },
            },
            z: 0,
          },
          {
            name: "",
            stack: '背景',
            type: "bar",
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: '#990056'
              },
            },
            z: 0,
          },
          {
            name: "",
            stack: '背景',
            type: "bar",
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: '#7b0128'
              },
            },
            z: 0,
          },
          // {
          //   name: "背景",
          //   stack: '广告',
          //   type: "bar",
          //   stack: "one",
          //   // barGap: "-100%",
          //   barWidth: 10,
          //   data: [datas[1]],
          //   itemStyle: {
          //     normal: {
          //       barBorderRadius: 10,
          //       color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          //         { offset: 0, color: "#00ffff" },
          //         { offset: 0.2, color: "yellow" },
          //         { offset: 0.4, color: "orange" },
          //         { offset: 0.6, color: "red" },
          //         { offset: 0.8, color: "#990056" },
          //         { offset: 1, color: "#7b0128" },
          //       ]),
          //     },
          //   },
          // },
        ],
      };
      this.$redomEchart(this.$refs["airQualityEchart"], option);
    },
    // 场地空间
    floorSpaceFun () {
      var optionName = ["多功能演播厅", "云平台广场", "会议室", "运动中心"],
        datas = [59.6, 21.43, 10.37, 8.6];
      var option = {
        title: [
          {
            show: true,
            text: "12",
            link: "",
            target: null,
            subtext: "今日预定次数",
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
            show: true,
            text: "284",
            link: "",
            target: null,
            subtext: "累计预定次数",
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
        // color: ["#cda857", "#4396f3", "#0ff", "#236390"],
        color: ["rgba(30, 57, 87, 0.5)", "#cda857", "#4396f3", "#0ff"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0", "45%"],
            center: ["20%", "50%"],
            startAngle: -45,
            color: "rgba(30, 57, 87, 0.3)",
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
          {
            name: "",
            type: "pie",
            radius: ["0", "65%"],
            center: ["20%", "50%"],
            // roseType: 'area', //radius
            startAngle: -45,
            itemStyle: {
              normal: {
                // borderWidth: 2,
                // borderColor: 'rgba(0, 0, 0, 0)',
                // opacity: 0.75,
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 7,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            animationType: "scale",
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
          value: datas[i],
          name: optionName[i],
        };
      }
      this.$redomEchart(this.$refs["floorSpaceEchart"], option);
    },
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
#industrySpaceEchart {
  width: 100%;
  height: 160px;
}
#siteUsageTop5Echart {
  width: 100%;
  height: 180px;
}
#spatialDistributionEchart,
#floorSpaceEchart,
#temperatureTrendEchart {
  width: 100%;
  height: 170px;
}
.SpaceRadioGroup {
  position: absolute;
  right: 0;
  z-index: 1;
}
.environmentalSpace {
  padding: 0 10px;
  .weather {
    display: flex;
    padding: 0 0 10px 0;
    .weather_l {
      width: 30%;
      display: flex;
      align-items: flex-start;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      .tianqi {
        width: 40px;
        height: 40px;
      }
      span {
        padding: 5px 0 0 5px;
        align-items: flex-start;
        i {
          &:first-child {
            b {
              .datas_s();
              font-weight: 500;
              font-size: 14px;
            }
          }
          .text_s();
          font-size: 10px;
        }
      }
    }
    .weather_r {
      width: 70%;
      li {
        width: 33%;
        font-size: 14px;
        span:first-child {
          white-space: nowrap;
          padding: 0 0 5px 0;
          .text_s();
        }
        &:nth-child(0),
        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 15px;
        }
      }
      .iconfont {
        font-size: 18px;
      }
      li:nth-child(2) .iconfont {
        font-size: 24px;
      }
    }
  }
  #airQualityEchart {
    width: 100%;
    height: 50px;
    margin: 10px 0;
  }
  .environment_tip {
    display: flex;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    .icon-wenti {
      font-size: 16px;
      color: #ffb400;
    }
    span {
      white-space: nowrap;
      .text_s();
      font-size: 12px;
      padding-right: 5px;
    }
    p {
      line-height: 1.4;
    }
  }
}
</style>
