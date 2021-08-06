<template>
  <div class="container">
    <IOCLeft :fade="fade">
      <div class="equipment">
        <div class="tittle">设备情况</div>
        <div id="equipment" ref="equipment"></div>
      </div>
      <div class="equipment_faulty">
        <div class="tittle">设备报损率分析</div>
        <div id="equipment_faulty" ref="equipment_faulty"></div>
      </div>
    </IOCLeft>
    <Tips :fade="fade" :list="list"></Tips>
    <IOCRight :fade="fade">
      <div class="equipment_comparison">
        <div class="tittle">设备对比分析</div>
        <div class="select">
          <DropDown :list="yearsList" name="label" @_cg="changePSYears" />
          <DropDown
            :list="flag ? momthsList : nowMomthsList"
            name="label"
            @_cg="changePSMonths"
          />
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
      <!-- 设备管理 -->
    <Device
      v-show="deviceShow"
      :_fade="_fade"
      :idArry="idArry"
      @chageFade="chageFade($event)"
    ></Device>
    <div v-if="fade" class="mask" @mouseenter="deviceChangeShow"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "homePage",
  data() {
    return {
      idArry:[6,7,8,9],
      flag: false,
      deviceShow: false,
      _fade:false,
      fade:false,
      list: [
        {
          num: 33526,
          describe: "设备总数",
        },
        {
          num: 33423,
          describe: "在线设备数",
        },
        {
          num: 104,
          describe: "离线设备数",
        },
        {
          num: 21,
          describe: "告警设备数",
        },
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
      nowMomthsList: this.$monthRangeArrList(),
    };
  },
  components: {},
  methods: {
      chageFade (val) {
      this._fade = val;
    },
    deviceChangeShow(){
      console.log('进入！');
      this.deviceShow=true
       this._fade=false
    },
    changePSMonths(val) {
      switch (val) {
        case 12:
          this.equipmentComparisonInit([-1.21, 2.98, 2.56]);
          break;
        case 11:
          this.equipmentComparisonInit([-2.36, -3.02, 2.13]);
          break;
        case 10:
          this.equipmentComparisonInit([-2.36, -3.02, 2.13]);
        case 9:
          this.equipmentComparisonInit([0.98, -2.02, 3.45]);
          break;
        case 8:
          this.equipmentComparisonInit([1.21, -2.19, 4.13]);
          break;
        case 7:
          this.equipmentComparisonInit([-1.29, -3.02, 2.13]);
        case 6:
          this.equipmentComparisonInit([2.36, -3.02, 2.13]);
          break;
        case 4:
          this.equipmentComparisonInit([-2.36, -3.02, 2.13]);
          break;
        case 3:
          this.equipmentComparisonInit([-2.36, 3.02, 2.13]);
        case 2:
          this.equipmentComparisonInit([3.36, -2.02, 2.13]);
          break;
        case 1:
          this.equipmentComparisonInit([-2.89, -3.36, 1.13]);
          break;
        default:
          break;
      }
    },
    changePSYears(val) {
      switch (val) {
        case 2021:
          this.equipmentComparisonInit([-1.36, 4.12, 2.38]);
          this.flag = false;
          break;
        case 2020:
          this.equipmentComparisonInit([-0.36, 3.98, 3.13]);

          this.flag = true;

          break;
        case 2019:
          this.equipmentComparisonInit([-1.36, -4.21, 3.38]);

          this.flag = true;

          break;
        default:
          break;
      }
    },
    equipmentInit() {
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
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
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
              formatter: function(value) {
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
            data: [4580, 3666, 23623, 11230, 24631, 3099, 3559],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    equipmentFaultyInit() {
      var dom = this.$refs["equipment_faulty"];
      var datas = [
        [
          { name: "电梯", value: 6.3, itemStyle: { color: "#fff" } },
          { name: "门禁", value: 22.05, itemStyle: { color: "#4396F3" } },
          { name: "视频", value: 25.02, itemStyle: { color: "#95C7FF" } },
          { name: "能源", value: 9.45, itemStyle: { color: "#08E2FF" } },
          { name: "照明", value: 11.05, itemStyle: { color: "#236390" } },
          { name: "BA", value: 12.6, itemStyle: { color: "#C7D392" } },
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
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          formatter: function(param) {
            return param.marker + param.name + "：" + param.value + "%<br>";
          },
        },
        series: datas.map(function(data, idx) {
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
            labelLayout: function(params) {
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
    equipmentWarningInit() {
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
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
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
              formatter: function(value) {
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
            data: [143, 126, 209, 89, 78, 96, 59],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    equipmentComparisonInit(data) {
      var dom = this.$refs["equipment_comparison"];
      // var data = [2.54, -4.74, 2.54];
      var option = {
        grid: {
          x: -30,
          y: -30,
          x2: -10,
          y2: 50,
          containLabel: true,
        },

        tooltip: {
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
        },

        color: new echarts.graphic.LinearGradient(
          0,
          1,
          0,
          0,
          [
            {
              offset: 0,
              color: "rgba(67, 149, 243, 0.5)", // 0% 处的颜色
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
                  // formatter: "{img1|}{c}%",
                  formatter:function (params) {
                    let c = Math.abs(params.data.value);
                    console.log(c,'c');
                    return `{img1|}${c}%`;
                  },
                  
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
  computed: {
    getUnityData () {
      return this.$store.state.unitySendData;
    },
  },
  watch:{
    getUnityData(val){
      try {
       if(val.action ==='ME_ZHYLSingle' && val.data==='1' ){
         this.fade =true
           this.$SendMessageToUnity("ShowIoTDevice_IOCMap",{strList:'6,7,8,9'});
       }else if(val.action ==='ME_ZHYLSingle' && val.data==='0'){
         this.fade =false
       }
      } catch (e) { }
    }
  },
  mounted() {
    this.equipmentInit();
    this.equipmentFaultyInit();
    this.equipmentWarningInit();
    this.equipmentComparisonInit([-2.54, 4.74, 2.54]);
  },
  created(){
  

  }
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
  .mask{
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: .75rem /* 60/80 */ /* 100/80 */ /* 300/80 */;
    height: 6.25rem /* 500/80 */ /* 300/80 */;
    // background-color: red;
  }
}
</style>
