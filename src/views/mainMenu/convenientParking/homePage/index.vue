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
          <DropDown :list="yearsList" name="label"/>
          <DropDown :list="momthsList" name="label"  />
        </div>
        <div class="count">停车数量合计:<NumCounter class="num" :value="1369"></NumCounter>辆</div>

        <div id="park_time"  ref="park_time"></div>
      </div>
    </IOCLeft>
    <Tips :list="list"></Tips>
    <div class="search_box">
     <LicensePlateSearch class="ioc_animated fadeInDownTop" @search="search" :searchData="searchData"></LicensePlateSearch>

    </div>
   
    <IOCRight>
      <div class="revenue_total">
        <div class="tittle">营收总览</div>
        <div class="select">
          <DropDown :list="yearsList" name="label"  />
        </div>
        <div class="count">停车场营收合计:<NumCounter class="num" :value="2496.852"></NumCounter>元</div>

        <div id="revenue_total" ref="revenue_total"></div>
      </div>
      <div class="car_trend">
        <div class="tittle">车辆进出场走势统计</div>
        <div class="select">
          <DropDown :list="yearsList" name="label"  />
          <DropDown :list="momthsList" name="label" />
          <DropDown :list="dateList" name="label" />
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
  data () {
    return {
      list: [
        {
          num: 2465,
          describe: '总车位数'
        },
        {
          num: 2084,
          describe: '在场车辆'
        },
        {
          num: 381,
          describe: '剩余车位'
        },
      ],
      parkList: [
        {
          floor: 'B1',
          presencePark: 553,
          freePark: 72,
          totalPark: 625

        },
        {
          floor: 'B2',
          presencePark: 755,
          freePark: 101,
          totalPark: 856

        },
        {
          floor: 'B3',
          presencePark: 903,
          freePark: 63,
          totalPark: 966

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
      dateList: [
        {
          label: "24日",
          value: 6,
        },
        {
          label: "23日",
          value: 5,
        },
        {
          label: "21日",
          value: 4,
        },
        {
          label: "20日",
          value: 3,
        },
        {
          label: "19日",
          value: 2,
        },
        {
          label: "18日",
          value: 1,
        },
      ],
      searchData:{
          region:'赣',
        letter:'A',
        number:'8720B'

      }
    };
  },
  components: {},
  methods: {
    changePSMonths (val) {
      console.log(val);
    },
    search(val){
      let value = JSON.stringify(val)
      this.$router.push({name:'SmartParking',params:{value:value}})
    },
    postMessageToUnity (data) {

    },

    handleClick () {
      this.$SendMessageToUnity("gan", { wocao: true, fuckyou: "123" });
      this.$SendMessageToUnity("gan2", {});
      // this.$SendMessageToUnity("nimei",{wocao:true,fuckyou:"456"});
      // console.log(window.iframe.contentWindow,'iframe');
    },
    AssetsAndEquipment () {
      var dom = this.$refs["park_time"]
      var option = {
        grid: {
          top: "30",
          left: "0",
          right: "0",
          bottom: "0",
          containLabel: true,
        },
     
           tooltip: {
          // show: false,
          trigger: "axis",
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
            max: 70,
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
                width: 1,
                type: "dashed",
                color: "rgb(255,255,255,.5)",
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
            data: [40, 30, 20, 10, 20, 30, 35],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    revenueInit () {
      var dom = this.$refs["revenue_total"]
      var option = {
        // title: {
        //   text: "{a|停车场营收合计：}{b|" + "2.496.852" + "}{c|元}",
        //   left: "0",
        //   top: "10",
        //   // subtext: '会议数',
        //   subtextStyle: {
        //     color: "#fff",
        //   },
        //   textStyle: {
        //     rich: {
        //       a: {
        //         fontSize: 14,
        //         color: "#fff",
        //         fontFamily: "Microsoft YaHei",
        //         opacity: 0.7,
        //       },
        //       b: {
        //         fontSize: 20,
        //         color: "ffff",
        //         fontFamily: "BYfont",
        //       },
        //       c: {
        //         fontSize: 12,
        //         fontWeight: "bold",
        //         padding: [0, 5],
        //         color: "#fff",
        //       },
        //     },
        //   },
        // },
        grid: {
          top: "50",
          left: "0",
          x2: 0,
          y2: -30,
          containLabel: true,
        },
        tooltip: {
          // show: false,
          trigger: "axis",
           axisPointer:{
                lineStyle:{
                color:'transparent'
              }
              }
        },
        legend: {
          top: 10,
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
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
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
              padding: [20, 40, 0, 0],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 1000000,
            splitNumber: 4,
            interval: 200000,
            name: "个",
            nameTextStyle: {
              align: "right",
            },
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
                width: 1,
                type: "dashed",
                color: "rgb(255,255,255,.5)",
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
            data: [320000, 435000, 430000, 340000, 456000, 560000, 340000],
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
            data: [62000, 73200, 70100, 73400, 109000, 113000, 112000],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    trendInit () {
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
          // show: false,
          // trigger: 'item',  
          trigger: 'axis',
          axisPointer:{
            lineStyle:{
            color:'transparent'
          }
          }
        
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
            max: 40,
            splitNumber: 4,
            interval: 5,
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
                width: 1,
                type: "dashed",
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
              formatter: function (_) {
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
              formatter: function (_) {
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
  mounted () {
    this.AssetsAndEquipment();
    this.revenueInit();
    this.trendInit();
   
  },
};
</script>

<style lang='less' scoped>
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
  .search_box{
      position: absolute;
  left: 50%;
  top: 2.6rem /* 208/80 */ /* 128/80 */;
  // transform: translateX(-50%);
 
  }
}
</style>
