<template>
  <!-- -- -->
  <div class="homePage">
    <IOCLeft>
      <div class="park">
        <div class="tittle">车位情况</div>
        <ul>
          <li v-for="(item, index) in parkList" :key="index">
            <div class="floor" @click="handleClick">{{ item.floor }}</div>
            <div class="present">
              <span>在场车位</span>
              <span class="font_text">
                <NumCounter :value="item.presencePark"></NumCounter>
              </span>
            </div>
            <div class="free">
              <span>空余车位</span>
              <span class="font_text">
                <NumCounter :value="item.freePark"></NumCounter
              ></span>
            </div>
            <div class="total">
              <span>总车位</span>
              <span class="font_text">
                <NumCounter :value="item.totalPark"></NumCounter>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="park_time">
        <div class="tittle">停车时长统计</div>
        <div class="select">
          <DropDown :list="yearsList" name="label" @_cg="changePSYears" />
          <DropDown :list="flag?momthsList:nowMomthsList" name="label" @_cg="changePSMonths" />
        </div>
        <!-- <div class="count">停车数量合计:<NumCounter class="num" :value="total"></NumCounter>辆</div> -->

        <div id="park_time" ref="park_time"></div>
      </div>
    </IOCLeft>
    <Tips :list="list"></Tips>
    <div class="search_box">
      <LicensePlateSearch
        class="ioc_animated fadeInDownTop"
        @search="search"
        :searchData="searchData"
      ></LicensePlateSearch>
    </div>

    <IOCRight>
      <div class="revenue_total">
        <div class="tittle">营收总览</div>
        <div class="select">
          <DropDown
            :list="yearsList"
            name="label"
            @_cg="RevenueChangePSYears"
          />
        </div>
        <!-- <div class="count">停车场营收合计:<NumCounter class="num" :value="2496852.00"></NumCounter>元</div> -->

        <div id="revenue_total" ref="revenue_total"></div>
      </div>
      <div class="car_trend">
        <div class="tittle">车辆进出场走势统计</div>
        <div class="select">
          <DropDown :list="yearsList" name="label" @_cg="carChangeYears" />
          <DropDown :list="momthsList" name="label" @_cg="carChangeMomth" />
          <DropDown :list="dateList" name="label" @_cg="carChangeDate" />
        </div>
        <div id="car_trend" ref="car_trend"></div>
      </div>
    </IOCRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "homePage",
  data() {
    return {
      flag:true,
      total: null,
      list: [
        {
          num: 2447,
          describe: "总车位数",
        },
        {
          num: 2211,
          describe: "在场车辆",
        },
        {
          num: 236,
          describe: "剩余车位",
        },
      ],
      parkList: [
        {
          floor: "B1",
          presencePark: 553,
          freePark: 72,
          totalPark: 625,
        },
        {
          floor: "B2",
          presencePark: 755,
          freePark: 101,
          totalPark: 856,
        },
        {
          floor: "B3",
          presencePark: 903,
          freePark: 63,
          totalPark: 966,
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
      nowMomthsList:this.$monthRangeArrList(),
      dateList: [
        {
          label: "31日",
          value: 31,
        },
        {
          label: "30日",
          value: 30,
        },
        {
          label: "29日",
          value: 29,
        },
        {
          label: "28日",
          value: 28,
        },
        {
          label: "27日",
          value: 27,
        },
        {
          label: "26日",
          value: 26,
        },
        {
          label: "25日",
          value: 25,
        },
        {
          label: "24日",
          value: 24,
        },
        {
          label: "23日",
          value: 23,
        },
        {
          label: "22日",
          value: 22,
        },
        {
          label: "21日",
          value: 21,
        },
        {
          label: "20日",
          value: 20,
        },
        {
          label: "19日",
          value: 19,
        },
        {
          label: "18日",
          value: 18,
        },
        {
          label: "17日",
          value: 17,
        },
        {
          label: "16日",
          value: 16,
        },
        {
          label: "15日",
          value: 15,
        },
        {
          label: "14日",
          value: 14,
        },
        {
          label: "13日",
          value: 13,
        },
        {
          label: "12日",
          value: 12,
        },
        {
          label: "11日",
          value: 11,
        },
        {
          label: "10日",
          value: 22,
        },
        {
          label: "9日",
          value: 9,
        },
        {
          label: "8日",
          value: 8,
        },
        {
          label: "7日",
          value: 12,
        },
        {
          label: "6日",
          value: 6,
        },
        {
          label: "5日",
          value: 5,
        },
        {
          label: "4日",
          value: 4,
        },
        {
          label: "3日",
          value: 3,
        },
        {
          label: "2日",
          value: 2,
        },
        {
          label: "1日",
          value: 1,
        },
      ],
      searchData: {
        region: "赣",
        letter: "A",
        number: "8720B",
      },
    };
  },
  components: {},
  methods: {
    changePSMonths(val) {
      switch (val) {
        case 12:
          this.AssetsAndEquipment({
            max: 80,
            data: [25, 26, 54, 70, 72, 38, 25],
          });

          break;
        case 11:
          this.AssetsAndEquipment({
            max: 90,
            data: [22, 38, 45, 77, 80, 43, 28],
          });
          break;
        case 10:
          this.AssetsAndEquipment({
            max: 70,
            data: [23, 44, 55, 64, 67, 50, 30],
          });
        case 9:
          this.AssetsAndEquipment({
            max: 90,
            data: [20, 33, 45, 77, 85, 60, 28],
          });
          break;
        case 8:
          this.AssetsAndEquipment({
            max: 80,
            data: [25, 33, 54, 72, 74, 38, 21],
          });
          break;
        case 7:
          this.AssetsAndEquipment({
            max: 80,
            data: [23, 26, 54, 69, 70, 45, 23],
          });
        case 6:
          this.AssetsAndEquipment({
            max: 70,
            data: [20, 43, 55, 66, 67, 50, 33],
          });
        case 5:
          this.AssetsAndEquipment({
            max: 90,
            data: [10, 18, 45, 80, 82, 45, 23],
          });
          break;
        case 4:
          this.AssetsAndEquipment({
            max: 70,
            data: [25, 36, 55, 62, 63, 38, 25],
          });
          break;
        case 3:
          this.AssetsAndEquipment({
            max: 80,
            data: [25, 38, 54, 70, 72, 44, 25],
          });
        case 2:
          this.AssetsAndEquipment({
            max: 90,
            data: [22, 33, 45, 76, 75, 53, 28],
          });
          break;
        case 1:
          this.AssetsAndEquipment({
            max: 70,
            data: [29, 43, 50, 59, 65, 54, 35],
          });
          break;
        default:
          break;
      }
    },
    changePSYears(val) {
      switch (val) {
        case 2021:
          this.AssetsAndEquipment({
            max: 70,
            data: [29, 43, 55, 65, 68, 54, 35],
          });
          this.flag= false
          break;
        case 2020:
          this.AssetsAndEquipment({
            max: 80,
            data: [25, 38, 54, 70, 72, 44, 25],
          });
          this.flag= true
          break;
        case 2019:
          this.AssetsAndEquipment({
            max: 90,
            data: [22, 33, 45, 78, 82, 53, 28],
          });
          this.flag= true
          break;
        default:
          break;
      }
    },
    RevenueChangePSYears(val) {
      switch (val) {
        case 2021:
          this.revenueInit({
            max: 1000000,
            Monthly: [320000, 435000, 530000, 340000, 456000, 560000, 540000],
            Temporary: [92000, 93200, 90100, 103400, 209000, 113000, 112000],
            month: this.$monthRangeArr(),
          });
          this.flag=true
          break;
        case 2020:
           this.revenueInit({
            max: 1000000,
            Monthly: [320000, 435000, 430000, 340000, 456000, 560000, 220000,120000, 280000, 130000, 140000, 356000],
            Temporary:[62000, 73200, 70100, 73400, 109000, 113000, 112000,62000, 63200, 70100, 63400, 209000],
            month:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
          });
          break;
        case 2019:
            this.revenueInit({
            max: 1000000,
            Monthly:[220000, 335000, 430000, 340000, 256000, 360000, 220000,120000, 280000, 150000, 160000, 156000],
            Temporary:[82000, 103200, 90100, 93400, 109000, 113000, 112000,82000, 73200, 70100, 93400, 169000],
            month:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],

          });
          break;
        default:
          break;
      }
    },
    search(val) {
      let value = JSON.stringify(val);
      this.$router.push({ name: "SmartParking", params: { value: value } });
    },
    postMessageToUnity(data) {},

    handleClick() {
      this.$SendMessageToUnity("gan", { wocao: true, fuckyou: "123" });
      this.$SendMessageToUnity("gan2", {});
    },
    AssetsAndEquipment(val) {
      const { max, data } = val;
      const total = data.reduce((x, y) => x + y, 0);
      var dom = this.$refs["park_time"];
      var option = {
        grid: {
          top: "60",
          left: "0",
          right: "20",
          bottom: "0",
          containLabel: true,
        },
        title: {
          show: true,
          text: `{c|车辆数量合计:}{a|${total}}{b|辆}`,
          link: "",
          target: null,
          left: "1%",
          top: "-8",
          textAlign: "left",
          itemGap: 6,
          textStyle: {
            rich: {
              c: {
                fontSize: 14,
                color: "rgb(255,255,255,1)",
                padding: [0, 0, 10, 0],
              },
              a: {
                color: "#fff",
                fontFamily: "BYfont",
                fontSize: 20,
                padding: [0, 0, 5, 5],
              },
              b: {
                color: "#fff",
                padding: [0, 0, 10, 0],

                fontSize: 12,
              },
            },
          },
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
        },
        xAxis: [
          {
            name: "辆",
            nameTextStyle: {
              padding: [0, 0, -30, -18],
            },
            type: "category",
            data: [
              "<0.5h",
              "0.5h~1h",
              "1h~3h",
              "3h~6h",
              "6h~12h",
              "12h~24h",
              ">24h",
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
              padding: [20, 30, 0, -20],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: max,
            splitNumber: 4,
            interval: 10,
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
            // name: "其他",
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
            data: data,
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    revenueInit(val) {
      const { max, Monthly, Temporary, month } = val;
      const total = [...Monthly, ...Temporary].reduce((x, y) => x + y, 0);
      var dom = this.$refs["revenue_total"];
      var option = {
        title: {
          text: "{a|停车场营收合计：}{b|" + total + "}{c|元}",
          left: "1%",
          top: "-7",
          subtextStyle: {
            color: "#fff",
          },
          textStyle: {
            rich: {
              a: {
                fontSize: 14,
                color: "#fff",
                fontFamily: "Microsoft YaHei",
                opacity: 0.7,
                padding: [0, 0, 10, 0],
              },
              b: {
                fontSize: 20,
                color: "ffff",
                fontFamily: "BYfont",
                padding: [0, 0, 5, 0],
              },
              c: {
                fontSize: 12,
                color: "#fff",
                padding: [0, 0, 10, -5],
              },
            },
          },
        },
        grid: {
          top: "80",
          left: "0",
          x2: 10,
          y2: -20,
          containLabel: true,
        },
        tooltip: {
          // show: false,
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
        },
        legend: {
          top: 25,
          right: 0,
          data: ["临时卡", "月卡"],
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
        xAxis: [
          {
            name: "",
            type: "category",
            data: month,
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
              padding: [20, 40, 0, -10],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: max,
            splitNumber: 4,
            interval: 200000,
            name: "元",
            nameTextStyle: {
              align: "right",
            },
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
            name: "月卡",
            type: "bar",
            barWidth: 14,
            stack: "a",
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
                      color: "rgba(8, 226, 255, 0.5)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(8, 226, 255, 1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            data: Monthly,
          },
          {
            name: "临时卡",
            type: "bar",
            barWidth: 14,
            stack: "a",
            itemStyle: {
              normal: {
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
              },
            },
            emphasis: {
              focus: "series",
            },
            data: Temporary,
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    trendInit() {
      var dom = this.$refs["car_trend"];
      var option = {
        grid: {
          top: "60",
          left: "30",
          right: "0",
          bottom: "30",
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
        legend: {
          right: 0,
          top: 10,
          data: ["进", "出"],
          itemWidth: 10, // 图例的宽度
          itemHeight: 10, // 图例的高度
          icon: "rect",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 17,
          itemHeight: 2,
          itemGap: 15,
        },
        grid: {
          top: "70",
          left: "0",
          x2: 0,
          y2: 20,
          containLabel: true,
        },

        xAxis: [
          {
            name: "",
            type: "category",
            data: [
              "00:00",
              "01:00",
              "02:00",
              "03:00",
              "04:00",
              "05:00",
              "06:00",
              "07:00",
              "08:00",
              "09:00",
              "10:00",
            ],
            axisLine: {
              lineStyle: {
                width: 1,
                color: "#fff",
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
            axisLabel: {
              interval: 0,
              rotate: -30,
              padding: [20, 30, 0, -10],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            name: "辆",
            type: "value",
            min: 0,
            max: 3000,
            splitNumber: 4,
            interval: 500,
            // axisLabel: {
            //   formatter: function (value) {
            //     return value / 1000 + (value != 0 ? 'k' : '');
            //   },
            // },
            // data: ['5', '10', '15'],
            axisLine: {
              show: false,

              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              lineStyle: {
                width: 0.5,
                type: "dashed",
                color: "rgb(255,255,255,1)",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],

        series: [
          {
            name: "进",
            symbol: "none",
            data: [1, 7, 8, 9, 22, 15, 26, 30, 18, 13, 10],
            type: "line",
            endLabel: {
              show: false,
              offset: [0, 30],
              color: "#fff",
              fontSize: "12",
              distance: -90,
              padding: [0, 0, 30, 0],
              formatter: function(_) {
                return "进: " + _.value;
              },
            },
            symbolSize: 6,
            smooth: true,
            itemStyle: {
              normal: {
                color: "#FFFFFF", //改变折线点颜色
                lineStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#FFFFFF",
                    },
                    {
                      offset: 1,
                      color: "#FFFFFF",
                    },
                  ]),
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(255, 255, 255, .3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 255, 255, 0)",
                  },
                ]),
              },
            },
          },
          {
            name: "出",
            symbol: "none",
            data: [1, 26, 30, 32, 39, 28, 36, 34, 30, 35, 39],
            type: "line",
            symbolSize: 6,
            smooth: true,
            endLabel: {
              show: false,
              offset: [0, -30],
              overflow: "break",
              distance: -90,
              color: "#fff",
              fontSize: "12",
              formatter: function(_) {
                return "出: " + _.value;
              },
            },
            itemStyle: {
              normal: {
                color: "#FFDD8D", //改变折线点颜色
                lineStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#FFDD8D",
                    },
                    {
                      offset: 1,
                      color: "#FFDD8D",
                    },
                  ]),
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(255, 180, 0, .3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 221, 141, 0)",
                  },
                ]),
              },
            },
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
  },
  created(){
    // this.nowMomthsList=this.$monthRangeArrList()
    console.log(this.$monthRangeArrList(),'this.$monthRangeArrList()');

      
  },
  mounted() {
    this.AssetsAndEquipment({
      max: 70,
      data: [29, 43, 55, 65, 68, 54, 35],
    });
    this.revenueInit({
      max: 1000000,
      Monthly: [320000, 435000, 530000, 340000, 456000, 560000, 540000],
            Temporary: [92000, 93200, 90100, 103400, 209000, 113000, 112000],
      month: this.$monthRangeArr(),
    });
    this.trendInit();
    
    
  },
};
</script>

<style lang="less" scoped>
.homePage {
  .park {
    ul > li {
      display: flex;
      align-items: center;
      margin-top: 0.2375rem /* 19/80 */;
      .floor {
        width: 1.175rem /* 94/80 */;
        height: 1rem /* 80/80 */;
        background: linear-gradient(90deg, #4396f3, #0b0f14);
        border-radius: 0.05rem /* 4/80 */;
        font-size: 0.375rem /* 30/80 */;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        line-height: 1rem;
        text-align: center;
      }
      .free {
        margin: 0 0.2875rem /* 23/80 */ 0 0.2875rem /* 23/80 */;
      }
      .present {
        margin-left: 0.225rem /* 18/80 */;
      }
      span {
        display: block;
      }
      span:nth-child(1) {
        font-size: 0.175rem /* 14/80 */;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 0.3125rem /* 25/80 */;
        opacity: 0.7;
      }
      span:nth-child(2) {
        font-size: 0.25rem /* 20/80 */;
        color: #ffffff;
        line-height: 0.3125rem /* 25/80 */;
        text-align: center;
      }
    }
  }
  .park_time {
    margin-top: 0.5375rem /* 43/80 */ /* 30/80 */;
    #park_time {
      width: 4.75rem /* 250/80 */;
      height: 3.5rem /* 280/80 */ /* 300/80 */ /* 160/80 */;
      margin-top: 0.2125rem /* 17/80 */ /* 33/80 */;
    }
  }
  #revenue_total {
    width: 4.375rem /* 350/80 */ /* 300/80 */ /* 320/80 */ /* 300/80 */
      /* 400/80 */ /* 200/80 */ /* 250/80 */;
    height: 3.5rem /* 280/80 */ /* 300/80 */ /* 160/80 */;
  }
  .car_trend {
    margin-top: 0.375rem /* 30/80 */;
    #car_trend {
      width: 4.375rem /* 300/80 */ /* 320/80 */ /* 300/80 */ /* 400/80 */
        /* 200/80 */ /* 250/80 */;
      height: 3.5rem /* 280/80 */ /* 300/80 */ /* 160/80 */;
    }
  }
  .search_box {
    position: absolute;
    left: 50%;
    top: 2.6rem /* 208/80 */ /* 128/80 */;
    // transform: translateX(-50%);
  }
}
</style>
