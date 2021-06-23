<template>
  <!-- 综合态势home -->
  <div>
    <LeftRight>
      <template #left>
        <div class="tittle">园区情况</div>
        <div class="parkCase">
          <div class="parkCaseEchartAll">
            <div v-for="(t, i) in 2" :key="i" :id="`parkCaseEchart${i}`"></div>
          </div>
          <div class="parkCaseEchartAll2">
            <div v-for="(t, i) in 3" :key="i" :id="`minEchart${i}`"></div>
          </div>
        </div>
        <div class="tittle">人行态势</div>
        <div class="pedestrianPosture">
          <ul class="pp_top">
            <li class="y_c">
              <span>28264</span>
              <span>今日总人流量</span>
            </li>
            <li class="y_c">
              <span>289</span>
              <span>今日总访客</span>
            </li>
          </ul>
          <div id="pedestrianPostureEchart"></div>
        </div>
        <div class="tittle">园区产值</div>
        <div id="outputValueEchart"></div>
      </template>
      <template #center>
        <CenterDatas :list="centerDatasList" v-show="false" />
        <SearchBox
          v-show="false"
          class="SearchBoxClass"
          :text="'搜园区建筑、搜企业、搜商家'"
        />
        <TipBox v-show="false" />
      </template>
      <template #right>
        <div class="tittle">能耗态势</div>
        <div class="energyTrend" v-for="(item, i) in energyTrendData" :key="i">
          <div class="energyTrend_l y_c">
            <span
              ><i class="LineBeyond">{{ item.todayPower }}</i
              >{{ item.unit }}</span
            >
            <span>今日{{ item.text }}</span>
          </div>
          <div class="energyTrend_r">
            <div :id="`energyTrendEchart${i}`"></div>
          </div>
        </div>
        <div class="tittle">车行态势</div>
        <div class="carSituation">
          <ul class="carSituation_datas">
            <li class="y_c" v-for="(item, i) in carSituation.datas" :key="i">
              <span>{{ item.d }}</span>
              <span>{{ item.name }}</span>
            </li>
          </ul>
          <div id="carSituationEchart"></div>
        </div>
        <div class="tittle">设备态势</div>
        <div class="equipmentSituation">
          <ul class="equipmentSituation_datas">
            <li class="y_c" v-for="(item, i) in equipmentSDatas.datas" :key="i">
              <span class="LineBeyond">{{ item.d }}</span>
              <span>{{ item.name }}</span>
            </li>
          </ul>
          <div id="equipmentSituationEchart"></div>
        </div>
      </template>
    </LeftRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { redomEchart } from "@/utils/methods";
import { aaa } from "@/api/mockApi";
import axios from "axios";
export default {
  name: "zhts",
  data () {
    return {
      centerDatasList: [
        {
          name: "园区总人数",
          val: 328556,
        },
        {
          name: "剩余车位数",
          val: 1241,
        },
        {
          name: "未处理告警数",
          val: 39,
        },
        {
          name: "设备异常数",
          val: 16,
        },
      ],
      energyTrendData: [
        {
          unit: "kW.h",
          text: "电耗",
          todayPower: 632,
          monthPower: 15752,
          yearPower: 200163,
        },
        {
          unit: "m³",
          text: "水耗",
          todayPower: 205,
          monthPower: 5380,
          yearPower: 62583,
        },
      ],
      carSituation: {
        datas: [
          {
            d: 3200,
            name: "总车位",
          },
          {
            d: 218,
            name: "剩余车位",
          },
          {
            d: 2954,
            name: "在场车辆",
          },
        ],
      },
      equipmentSDatas: {
        datas: [
          {
            d: 1168,
            name: "安防",
          },
          {
            d: 936,
            name: "能耗",
          },
          {
            d: 1009,
            name: "网络",
          },
          {
            d: 1027,
            name: "消防",
          },
        ],
      },
    };
  },
  components: {},
  mounted () {
    // aaa().then(r=>{
    //   console.log(r)
    // })
    // axios('/meun').then(req => {
    //   console.log('xxxxxxxxx', req)
    // })
    this.pedestrianPostureFun();
    this.outputValueFun();
    this.parkCaseFun();
    this.parkCaseFun2();
    this.energyTrendFun();
    this.carSituationFun();
    this.equipmentSituationFun();
  },
  methods: {
    // 园区情况
    parkCaseFun () {
      var datas = [
        [
          {
            data: [158],
            name: '待入驻企业'
          },
          {
            data: [28],
            name: '已入驻企业'
          },
        ],
        [
          {
            data: [36],
            name: '装修中企业'
          },
          {
            data: [132],
            name: '已办公企业'
          },
        ]
      ]
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
              name: '',
              data: '',
              type: "bar",
              stack: 'total',
              barWidth: 16,
              color: "#1e3957",
              showBackground: true,
              itemStyle: {
                barBorderRadius: [0, 0, 5, 5]
              },
              backgroundStyle: {
                color: "#4396f3",
                barBorderRadius: 5,
              },
              label: {
                show: true,
                position: 'bottom',
                distance: -70,
                textBorderColor: '#ffffff00',
                textBorderWidth: 0,
                align: 'left',
                rotate: 0,
                formatter: '{a| {c}} \n{b|}\n {name|{a}}',
                fontSize: 16,
                rich: {
                  a: {
                    padding: [3, 10],
                    color: '#fff',
                    fontFamily: 'BYfont',
                    fontSize: 20,
                  },
                  b: {
                    width: 100,
                    height: 1,
                    padding: [0, 0, 0, -10],
                    backgroundColor: {
                      image: require('@/assets/img/echart/e_line.png'),
                      repeat: 'no-repeat'
                    },
                  },
                  name: {
                    padding: [5, 10],
                    color: 'rgb(255,255,255,.7)'
                  }
                }
              },
              labelLine: {
                show: false
              },
            },
            {
              name: '',
              data: '',
              type: "bar",
              stack: 'total',
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
                position: 'top',
                distance: -70,
                textBorderColor: '#ffffff00',
                textBorderWidth: 0,
                align: 'left',
                rotate: 0,
                formatter: '{a| {c}} \n{b|}\n {name|{a}}',
                fontSize: 16,
                rich: {
                  a: {
                    padding: [3, 10],
                    color: '#fff',
                    fontFamily: 'BYfont',
                    fontSize: 20,
                  },
                  b: {
                    width: 100,
                    height: 1,
                    padding: [0, 0, 0, -10],
                    backgroundColor: {
                      image: require('@/assets/img/echart/e_line.png'),
                      repeat: 'no-repeat'
                    },
                  },
                  name: {
                    padding: [5, 10],
                    color: 'rgb(255,255,255,.7)'
                  }
                }
              },
              labelLine: {
                show: false
              },
            },
          ],
        };
        for (var j = 0; j < datas[i].length; j++) {
          option.series[j] = {
            ...option.series[j],
            ...datas[i][j],
          }
          // option.series[0].label.distance = -datas[i][j].data[0]
        }
        redomEchart("parkCaseEchart" + i, option);
      }
    },
    parkCaseFun2 () {
      var datas = [23, 34, 45],
        imgs = [
          require("@/assets/img/echart/e_mj.png"),
          require("@/assets/img/echart/e_yz.png"),
          require("@/assets/img/echart/e_qz.png"),
        ];
      var names = ["占地面积", "绿化率", "入驻率"];
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
                    padding: [0, 5],
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
              left: 5,
              top: "15%",
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
        redomEchart("minEchart" + i, option);
      }
    },
    // 人行态势
    pedestrianPostureFun () {
      var names = ["办公人员", "访客"],
        xData = ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00"],
        datas = [
          [23, 12, 43, 32, 21, 43],
          [34, 2, 32, 32, 32, 23],
        ];
      var option = {
        tooltip: {
          // show: false,
          // trigger: 'item',
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
            name: "人",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            // min: 800,
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
        series: [],
      };
      var color = ["#97c8ff", "#ffdd8d"],
        _data = [],
        _data2 = [],
        Linear = {
          0: [
            { offset: 0, color: "rgb(255, 255, 255, 0.2)" },
            { offset: 1, color: "rgb(255, 255, 255, 0)" },
          ],
          1: [
            { offset: 0, color: "rgb(255, 180, 0, 0.2)" },
            { offset: 1, color: "rgb(255, 221, 141, 0)" },
          ],
        };
      for (var i = 0; i < xData.length; i++) {
        var b = {
          symbol: i != xData.length - 1 ? "none" : "",
        };
        _data[i] = {
          value: datas[0][i],
          ...b,
          itemStyle: {
            color: color[0],
          },
        };
        _data2[i] = {
          value: datas[1][i],
          ...b,
          itemStyle: {
            color: color[1],
          },
        };
      }
      for (var j = 0; j < names.length; j++) {
        option.series[j] = {
          name: names[j],
          type: "line",
          smooth: false,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                ...Linear[j],
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
          data: j == 0 ? _data : _data2,
        };
      }
      option.xAxis.data.push("时间");
      redomEchart("pedestrianPostureEchart", option);
    },
    // 园区产值
    outputValueFun () {
      var optionName = [
        "新能源",
        "新材料",
        "生物医药",
        "智能制造",
        "信息技术",
        "文化创意",
        "现代服务",
        "节能环保",
        "商家",
      ],
        datas = [43, 34, 32, 34, 35, 32, 20, 20, 8];
      var option = {
        title: {
          show: true, // 显示策略，默认值true,可选为：true（显示） | false（隐藏）
          text: 164, // 主标题文本，'\n'指定换行
          link: "", // 主标题文本超链接,默认值true
          target: null, // 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
          subtext: "税收总数\n(亿元)", // 副标题文本，'\n'指定换行
          sublink: "", // 副标题文本超链接
          subtarget: null, // 指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
          left: "22%",
          bottom: "32%",
          textAlign: "center", // 水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
          // backgroundColor: 'rgba(0,0,0,0)', //标题背景颜色，默认'rgba(0,0,0,0)'透明
          // borderColor: '#ccc', //标题边框颜色,默认'#ccc'
          // borderWidth: 0, //标题边框线宽，单位px，默认为0（无边框）
          // padding: 5, //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
          itemGap: 6, // 主副标题纵向间隔，单位px，默认为10
          textStyle: {
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
          selectedMode: false,
          show: true,
          orient: "vertical", // 'horizontal'
          right: 8,
          y: "center",
          data: optionName,
          formatter: function (name) {
            return "{a|" + name + "}";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {},
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 18,
        },
        color: [
          "#4396f3",
          "#95c7ff",
          "#456af3",
          "#0ff",
          "#236390",
          "#ffdd8d",
          "#9a866a",
          "#c9a555",
          "#fff",
        ],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["62%", "80%"],
            center: ["23%", "50%"],
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
      redomEchart("outputValueEchart", option);
    },
    // 能耗态势
    energyTrendFun () {
      for (var i = 0; i < this.energyTrendData.length; i++) {
        var option = {
          xAxis: {
            show: false,
          },
          grid: {
            left: "30",
            top: "0",
            right: "0",
            bottom: "0",
            containLabel: true,
          },
          yAxis: {
            type: "category",
            show: false,
          },
          series: [
            {
              type: "bar",
              barWidth: 8,
              barGap: "400%",
              // barCategoryGap:'0%',
              showBackground: false,
              label: {
                show: true,
                animation: false,
                position: "left",
                offset: [120, 15],
                formatter:
                  "本月" +
                  this.energyTrendData[i].text +
                  ":{a| " +
                  this.energyTrendData[i].monthPower +
                  " }" +
                  this.energyTrendData[i].unit +
                  "",
                textStyle: {
                  color: "rgb(255,255,255,.7)",
                  fontSize: 14,
                  width: "115",
                  textAlign: "bottom",
                  rich: {
                    a: {
                      fontFamily: "BYfont",
                      color: "#fff",
                      fontSize: 16,
                    },
                  },
                },
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 2,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#1e3957" },
                    { offset: 1, color: "#4396f3" },
                  ]),
                },
              },
              data: [this.energyTrendData[i].monthPower],
            },
            {
              type: "bar",
              barWidth: 8,
              showBackground: false,
              label: {
                show: true,
                animation: false,
                position: "left",
                offset: [120, 15],
                formatter:
                  "本年" +
                  this.energyTrendData[i].text +
                  ":{a| " +
                  this.energyTrendData[i].yearPower +
                  " }" +
                  this.energyTrendData[i].unit +
                  "",
                textStyle: {
                  color: "rgb(255,255,255,.7)",
                  fontSize: 14,
                  width: "115",
                  textAlign: "bottom",
                  rich: {
                    a: {
                      fontFamily: "BYfont",
                      color: "#fff",
                      fontSize: 16,
                    },
                  },
                },
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 2,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#1e3957" },
                    { offset: 1, color: "#4396f3" },
                  ]),
                },
              },
              data: [this.energyTrendData[i].yearPower],
            },
          ],
        };
        redomEchart("energyTrendEchart" + i, option);
      }
    },
    // 车行态势
    carSituationFun () {
      var names = ["进", "出"],
        xData = ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00"],
        datas = [
          [7, 9, 3, 14, 9, 36, 23],
          [10, 15, 12, 23, 20, 45, 36],
        ];
      var option = {
        tooltip: {
          // show: false,
          // trigger: 'item',
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
            name: "辆",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            // min: 800,
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
        series: [],
      };
      var color = ["#97c8ff", "#ffdd8d"],
        _data = [],
        _data2 = [],
        Linear = {
          0: [
            { offset: 0, color: "rgb(255, 255, 255, 0.2)" },
            { offset: 1, color: "rgb(255, 255, 255, 0)" },
          ],
          1: [
            { offset: 0, color: "rgb(255, 180, 0, 0.2)" },
            { offset: 1, color: "rgb(255, 221, 141, 0)" },
          ],
        };
      for (var i = 0; i < xData.length; i++) {
        var b = {
          symbol: i != xData.length - 1 ? "none" : "",
        };
        _data[i] = {
          value: datas[0][i],
          ...b,
          itemStyle: {
            color: color[0],
          },
        };
        _data2[i] = {
          value: datas[1][i],
          ...b,
          itemStyle: {
            color: color[1],
          },
        };
      }
      for (var j = 0; j < names.length; j++) {
        option.series[j] = {
          name: names[j],
          type: "line",
          smooth: true,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                ...Linear[j],
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
          data: j == 0 ? _data : _data2,
        };
      }
      option.xAxis.data.push("时间");
      redomEchart("carSituationEchart", option);
    },
    // 设备态势
    equipmentSituationFun () {
      var names = ["正常", "故障"];
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
            data: ["安防", "能耗", "网络", "消防"],
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
              margin: 10,
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
            data: [27860, 35320, 34320, 29450],
          },
          {
            name: names[1],
            type: "bar",
            barWidth: 14,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#97C8FF" },
                { offset: 1, color: "rgb(151, 200, 255, .1)" },
              ]),
            },
            data: [12530, 23440, 24520, 23440],
          },
        ],
      };
      redomEchart("equipmentSituationEchart", option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
#pedestrianPostureEchart {
  width: 100%;
  height: 170px;
}
#outputValueEchart {
  width: 100%;
  height: 160px;
}
#parkCaseEchart0,
#parkCaseEchart1 {
  width: 50%;
  height: 190px;
}
.parkCaseEchartAll {
  display: flex;
  width: 60%;
  height: 190px;
}
.parkCaseEchartAll2 {
  width: 40%;
  height: 190px;
}
#minEchart0,
#minEchart1,
#minEchart2 {
  width: 100%;
  height: 33%;
}
#energyTrendEchart0,
#energyTrendEchart1 {
  width: 100%;
  height: 100%;
}
#carSituationEchart,
#equipmentSituationEchart {
  width: 100%;
  height: 160px;
}
.SearchBoxClass {
  width: 6.25rem /* 500/80 */;
}
.parkCase {
  width: 100%;
  height: 190px;
  display: flex;
}
.pedestrianPosture {
  .pp_top {
    width: 100%;
    display: flex;
    padding: 5px 25px 15px;
    li {
      flex: 1;
      span:nth-child(1) {
        .datas_s();
      }
      span:nth-child(2) {
        .text_s();
      }
    }
  }
}
.energyTrend {
  width: 100%;
  height: 75px;
  display: flex;
  .energyTrend_l {
    width: 35%;
    border-right: 0.1px rgba(255, 255, 255, 0.2) dotted;
    padding-right: 15px;
    span:nth-child(1) {
      .text_s();
      i {
        .datas_s();
        color: #fff;
        font-size: 24px;
      }
    }
    span:nth-child(2) {
      .text_s();
    }
  }
  .energyTrend_r {
    width: 65%;
  }
}
.carSituation {
  width: 100%;
  .carSituation_datas {
    width: 100%;
    height: 40px;
    display: flex;
    padding: 0 40px;
    margin-bottom: 20px;
    .y_c {
      flex: 1;
      span:nth-child(1) {
        .datas_s();
      }
      span:nth-child(2) {
        .text_s();
      }
    }
  }
}
.equipmentSituation {
  width: 100%;
  .equipmentSituation_datas {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 20px;
    li {
      width: 65px;
      height: 65px;
      margin: 0 10px;
      border: 1px solid rgba(67, 149, 243, 0.4);
      border-radius: 50%;
      background: rgba(30, 57, 87, 0.5);
      span:nth-child(1) {
        .datas_s();
      }
      span:nth-child(2) {
        .text_s();
      }
    }
  }
}
</style>
