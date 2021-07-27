<template>
  <div class="container">
    <IOCLeft>
      <div class="equipment">
        <div class="tittle">设备情况</div>
        <div id="equipment" ref="equipment"></div>
      </div>
      <div class="equipment_faulty">
        <div class="tittle">设备报损率分析</div>
        <div id="equipment_faulty" ref="equipment_faulty"></div>
      </div>
    </IOCLeft>
    <Tips :list="list"></Tips>
    <IOCRight>
      <div class="equipment_comparison">
        <div class="tittle">设备对比分析</div>
        <div class="select">
          <DropDown :list="yearsList" name="label" @_cg="changePSYears" />
          <DropDown :list="momthsList" name="label" @_cg="changePSYears" />
        </div>
        <div id="equipment_comparison" ref="equipment_comparison"></div>
        <ul class="equipment_title">
          <li>
            <div class="font_text">15</div>
            <div>故障数量</div>
          </li>
          <li>
            <div class="font_text">67</div>
            <div>预警数量</div>
          </li>
          <li>
            <div class="font_text">36</div>
            <div>报警数量</div>
          </li>
        </ul>
      </div>
      <div class="equipment_warning">
        <div class="tittle">设备告警分析</div>
        <div id="equipment_warning" ref="equipment_warning"></div>
      </div>
    </IOCRight>
    <!-- <Rtps></Rtps> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "homePage",
  data () {
    return {
      list: [
        {
          num: 33526,
          describe: '设备总数'
        },
        {
          num: 33423,
          describe: '在线设备数'
        },
        {
          num: 104,
          describe: '离线设备数'
        },
        {
          num: 21,
          describe: '告警设备数'
        }
      ],
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
          label: "12月",
          value: 12,
        },
        {
          label: "11月",
          value: 11,
        },
        {
          label: "10月",
          value: 10,
        },
        {
          label: "9月",
          value: 9,
        },
        {
          label: "8月",
          value: 8,
        },
        {
          label: "7月",
          value: 7,
        },
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
  methods: {
    changePSMonths (val) {
     
    },
    equipmentInit () {
      var dom = this.$refs["equipment"];
      var option = {
        grid: {
          x: 10,
          y: 50,
          x2: 10,
          y2: -10,
          containLabel: true,
        },
         tooltip: {
           backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          trigger: 'axis',
          axisPointer:{
            lineStyle:{
            color:'transparent'
          }
          }
        
        },
        xAxis: [
          {
            name: "",
            type: "category",
            data: ["视频", "门禁", "能源", "照明", "BA", "消防", "电梯"],
            axisLine: {
              lineStyle: {
                width: 0,
                color: "#fff",
              },
            },
            axisLabel: {
              interval: 0,
              // rotate: 40,
              textStyle: "#fff",
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              rotate: -30,
              padding: [15, 0, 0, -10],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 30000,
            splitNumber: 4,
            interval: 5000,
            name: "个",
            nameTextStyle: {
              align: "right",
            },
            //               nameTextStyle: {
            //     padding: [-10, 0, 0, -10]    // 四个数字分别为上右下左与原位置距离
            // },
            type: "value",
            splitNumber: 2,
            axisLabel: {
              formatter: function (value) {
                return value;
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
              splitLine: {
              lineStyle: {
                width: 0.5,
                type: "dashed",
                color: "rgb(255,255,255,1)",
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 14,
            color: "#0090FF",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0.2,
                      color: "rgba(67, 149, 243, 0.2)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(67, 149, 243, 1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            data: [4000, 3000, 20000, 10000, 20000, 3099, 3559],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    equipmentFaultyInit () {
      var dom = this.$refs["equipment_faulty"];
      var datas = [
        [
          { name: "电梯", value: 6.30, itemStyle: { color: "#fff" } },
          { name: "门禁", value: 22.05, itemStyle: { color: "#4396F3" } },
          { name: "视频", value: 25.02, itemStyle: { color: "#95C7FF" } },
          { name: "能源", value: 9.45, itemStyle: { color: "#08E2FF" } },
          { name: "照明", value: 11.05, itemStyle: { color: "#236390" } },
          { name: "BA", value: 12.60, itemStyle: { color: "#C7D392" } },
          { name: "消防", value: 13.39, itemStyle: { color: "#9A866A" } },
        ],
      ];

      var option = {
          tooltip: {
          trigger: "item",
           backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
             formatter:function(param){
            return param.marker+param.name+"："+ param.value + "%<br>";
        }

        },
        series: datas.map(function (data, idx) {
          var top = idx * 33.3;
          return {
            type: "pie",
            radius: [50, 70],
            top: top + "%",
            // height: "33.33%",
            left: "center",
            width: 550,
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            itemStyle: {
              // 此配置
              normal: {
                borderWidth: 0,
              },
            },
            label: {
              alignTo: "edge",
              formatter: "{name|{b}}\n{time|{c}%}",
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              // padding:[0,10],
              rich: {
                name: {
                  fontSize: 14,
                  color: "#fff",
                },
                time: {
                  fontSize: 10,
                  color: "#fff",
                },
              },
            },
            labelLine: {
              length: 40,
              length2: 120,
              maxSurfaceAngle: 80,
            },
            labelLayout: function (params) {
              var isLeft = params.labelRect.x < myChart.getWidth() / 2;
              var points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;

              return {
                labelLinePoints: points,
              };
            },
            data: data,
          };
        }),
      };
      this.$redomEchart(dom, option);

    },
    equipmentWarningInit () {
      var dom = this.$refs["equipment_warning"];
      var option = {
        grid: {
          x: 10,
          y: 50,
          x2: 10,
          y2: -10,
          containLabel: true,
        },
          tooltip: {
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          trigger: 'axis',
          axisPointer:{
            lineStyle:{
            color:'transparent'
          }
          }
        
        },
        xAxis: [
          {
            name: "",
            type: "category",
            data: [
              "周界入侵",
              "人员黑名单",
              "车辆黑名单",
              "BA系统",
              "消防告警",
              "违规停车",
              "故障离线",
            ],
            axisLine: {
              lineStyle: {
                width: 0,
                color: "#fff",
              },
            },
            axisLabel: {
              interval: 0,
              // rotate: 40,
              textStyle: "#fff",
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              rotate: -30,
              padding: [15, 0, 0, -10],

              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 250,
            splitNumber: 4,
            interval: 50,
            name: "个",
            nameTextStyle: {
              align: "right",
            },
            //               nameTextStyle: {
            //     padding: [-10, 0, 0, -10]    // 四个数字分别为上右下左与原位置距离
            // },
            type: "value",
            splitNumber: 2,
            axisLabel: {
              formatter: function (value) {
                return value;
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                width: 0.5,
                type: "dashed",
                color: "rgb(255,255,255,1)",
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 14,
            color: "#0090FF",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0.2,
                      color: "rgba(67, 149, 243, 0.2)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(67, 149, 243, 1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            data: [140, 130, 200, 100, 98, 99, 59],
          },
        ],
      };
      this.$redomEchart(dom, option);

    },
    equipmentComparisonInit () {
      var dom = this.$refs["equipment_comparison"];
      var data = [-2.54, 4.74, 2.54];
      var option = {
        grid: {
          x: -30,
          y: -30,
          x2: -10,
          y2: 20,
          containLabel: true,
        },

  tooltip: {
           backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          trigger: 'axis',
          axisPointer:{
            lineStyle:{
            color:'transparent'
          }
          }
        
        },
        // grid: {
        //   left: "3%",
        //   right: "4%",
        //   bottom: "3%",
        //   containLabel: true,
        // },
        color: new echarts.graphic.LinearGradient(
          0,
          1,
          0,
          0,
          [
            {
              offset: 0.2,
              color: "rgba(67, 149, 243, 0.2)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(67, 149, 243, 1)", // 100% 处的颜色
            },
          ],
          false
        ),
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#FFFF",
                dashOffset: 30,
                type: "dashed",
              },
            },
          },
        ],
        yAxis: [
          {
            max: 20,
            show: false,
            type: "value",
          },
        ],
        series: [
          {
            name: "",
            barWidth: 40,
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  // position: (data) => (1 > 0 ? "top" : "bottom"),
                  textStyle: {
                    fontFamily: "BYfont",
                    fontSize: "16",
                    color: "#fff",
                  },
                },
              },
            },
            data: data.map((item) => {
              return {
                value: item,
                label: {
                  formatter: "{img1|}{c}%",
                  rich: {
                    img1: {
                      width: 17,
                      height: 27,
                      backgroundColor: {
                        image: item > 0 ? "/img/1.png" : "/img/2.png",
                      },
                    },
                  },
                  position: item > 0 ? "top" : "bottom",
                },
              };
            }),
          },
        ],
      };
      this.$redomEchart(dom, option);

    },
  },
  mounted () {
    this.equipmentInit();
    this.equipmentFaultyInit();
    this.equipmentWarningInit();
    this.equipmentComparisonInit();
  },
};
</script>

<style lang="less" scoped>
.container {
  .equipment {
    #equipment {
      width: 100%;
      height: 3.75rem /* 300/80 */ /* 250/80 */ /* 220/80 */;
      //  background-color: red;
    }
  }
  .equipment_faulty {
    margin-top: 0.7125rem /* 57/80 */ /* 80/80 */ /* 90/80 */;
    #equipment_faulty {
      width: 100%;
      height: 3.125rem /* 250/80 */ /* 500/80 */ /* 200/80 */ /* 150/80 */;
    }
  }
  .equipment_comparison {
    width: 100%;
    .date {
      display: flex;
      justify-content: flex-end;
    }
    #equipment_comparison {
      width: 100%;
      height: 2.25rem /* 180/80 */ /* 200/80 */ /* 250/80 */ /* 300/80 */;
    }
  }
  .equipment_title {
    color: #fff;
    display: flex;
    justify-content: space-around;
    margin-top: 0.25rem /* 20/80 */;
    & > li > {
      text-align: center;
      & > div:nth-child(1) {
        font-size: 0.25rem; /* 20/80 */
      }
      & > div:nth-child(2) {
        font-size: 0.15rem /* 12/80 */;
        opacity: 0.7;
      }
    }
  }
  .equipment_warning {
    margin-top: 0.375rem /* 30/80 */;
    #equipment_warning {
      width: 100%;
      height: 3.75rem /* 300/80 */;
    }
  }
}
</style>
