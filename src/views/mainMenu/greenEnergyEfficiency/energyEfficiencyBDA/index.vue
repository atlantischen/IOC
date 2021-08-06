<template>
  <!-- 能效大数据分析 -->
  <div class="box">
    <IOCLeft>
      <div class="today_use">
        <div class="tittle">今日分项用电分析</div>
        <ul>
          <li v-for="(item, index) in todayList" :key="index">
            <span class="font_text"><NumCounter :value="item.kwh"></NumCounter>kwh</span>
            <span>{{ item.text }}</span>
            <div>
              <div class="left">
                <span>{{ item.percentage }}%</span>
                <span>昨日同比</span>
              </div>
              <div class="right">
                <img
                  :src="
                    item.state === 1
                      ? require('../../../../assets/img/1.png')
                      : require('../../../../assets/img/2.png')
                  "
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="month_use">
        <div class="tittle">本月建筑用电分析</div>
        <!-- <div class="count">本月总耗计:<NumCounter class="num" :value="35723.18"></NumCounter>kwh</div> -->
        <div id="park_time" ref="park_time"></div>
      </div>
      <div class="TOP">
        <div class="tittle">本月用电单位Top5</div>

        <ul>
          <li v-for="(item, index) in topList" :key="index">
            <span :style="'width:' + item.value + '%'"></span>
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </IOCLeft>
    <IOCRight>
      <div class="energy">
        <div class="tittle">能耗指标</div>
        <div class="outer">
          <div id="energy" ref="energy"></div>
          <div class="desc">
            总耗能指标 <span class="font_text">180</span> TCE
          </div>
        </div>
        <div class="outer2">
          <div id="energy2" ref="energy2"></div>
          <div id="energy3" ref="energy3"></div>
        </div>
         <div class="month_use_w">
          <div class="tittle">本月建筑用水分析</div>
        <!-- <div class="count">月能耗总计:<NumCounter class="num" :value="9245.94"></NumCounter>m³</div> -->

          <div id="use_W" ref="use_W"></div>
      </div>
      </div>
    </IOCRight>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "energyEfficiencyBDA",
  data() {
    return {
      todayList: [
        {
          kwh: 4802.78,
          text: "照明插座用电",
          percentage: this.$randomNum(1,5),
          state: 1,
        },
        {
          kwh: 2659.16,
          text: "动力用电",
          percentage:  this.$randomNum(1,5),
          state: 1,
        },
        {
          kwh: 9615.09,
          text: "空调用电",
          percentage:  this.$randomNum(1,5),
          state: 0,
        },
        {
          kwh: 784.60,
          text: "其他用电",
          percentage:  this.$randomNum(1,5),
          state: 0,
        },
      ],
      topList: [
        {
          name: "纵横国际影城",
          value: 70,
        },
        {
          name: "卓然睿和自动化",
          value: 60,
        },
        {
          name: "威信科技",
          value: 50,
        },
        {
          name: "格瑞能源",
          value: 40,
        },
        {
          name: "思码软件",
          value: 30,
        },
      ],
    };
  },
  components: {},
  methods: {
    AssetsAndEquipment() {
      var dom = this.$refs["park_time"];
      const data=[12369, 9823, 10345, 13245, 10236];
      const total = data.reduce((x, y) => x + y, 0);

      var option = {
        
         title: {
          show: true,
          text: `{c|月能总耗计:}{a|${total}}{b|kw.h}`,
          link: "",
          target: null,
          left: "1%",
          top: "-10",
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
        grid: {
          top: "60",
          left: "0",
          right: "0",
          bottom: "20",
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
            data: ["1期", "2期", "3期", "生产楼", "宿舍楼"],
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
              // rotate: -30,
              // padding: [20, 30, 0, -20],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 18000,
            // splitNumber: 4,
            interval: 3000,
            name: "kw.h",
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
            data: data,
          },
        ],
      };
      this.$redomEchart(dom, option);
    },

    Energy() {
      var dom = this.$refs["energy"];
      var option = {
        series: [
          {
            type: "gauge",
            // center:['50%','50%'],
            min: 0,
            max: 200,
            radius: "95%",
            progress: {
              show: true,
              width: 16,
            },
            axisLine: {
              lineStyle: {
                width: 14,
                color: [
                  [0.2, "#05E3FF"],
                  [0.8, "#4695ED"],
                  [1, "#E21C1C"],
                ],
              },
            },
            axisTick: {
              distance: 0,
              length: 6,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              distance: 0,
              color: "#999",
              fontSize: 12,
            },
            pointer: {
              show: true,
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 12,
              itemStyle: {
                borderWidth: 10,
              },
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 12,
              color:'transparent',
              offsetCenter: [0, "70%"],
        
            },
            data: [
              {
                value: 180,
              },
            ],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    Energy2() {
      var dom = this.$refs["energy2"];
      var option = {
        series: [
          {
            type: "gauge",
            // center:['50%','50%'],
            min: 0,
            max: 200,
            radius: "95%",
            progress: {
              show: true,
              width: 16,
            },
            axisLine: {
              lineStyle: {
                width:10,
                color: [
                  [0.2, "#05E3FF"],
                  [0.8, "#4695ED"],
                  [1, "#E21C1C"],
                ],
              },
            },
            axisTick: {
              distance: 0,
              length: 6,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              distance: -10,
              color: "#999",
              fontSize: 12,
            },
            pointer: {
              show: true,
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 12,
              itemStyle: {
                borderWidth: 10,
              },
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 12,
              offsetCenter: [0, "75%"],
              formatter: function(value) {
                return "{value|" + value + "}\n{unit|耗电指标}\n{unit|TCE}";
              },
              rich: {
                value: {
                  fontSize: 22,
                  color: "#fff",
                },
                unit: {
                  fontSize: 12,
                  color: "#999",
                },
              },
            },
            data: [
              {
                value: 105,
              },
            ],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    Energy3() {
      var dom = this.$refs["energy3"];
       var option = {
        series: [
          {
            type: "gauge",
            // center:['50%','50%'],
            min: 0,
            max: 200,
            radius: "95%",
            progress: {
              show: true,
              width: 16,
            },
            axisLine: {
              lineStyle: {
                width:10,
                color: [
                  [0.2, "#05E3FF"],
                  [0.8, "#4695ED"],
                  [1, "#E21C1C"],
                ],
              },
            },
            axisTick: {
              distance: 0,
              length: 6,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              distance: -10,
              color: "#999",
              fontSize: 12,
            },
            pointer: {
              show: true,
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 12,
              itemStyle: {
                borderWidth: 10,
              },
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 12,
              offsetCenter: [0, "70%"],
              formatter: function(value) {
                return "{value|" + value + "}\n{unit|耗水指标}\n{unit|TCE}";
              },
              rich: {
                value: {
                  fontSize: 22,
                  color: "#fff",
                },
                unit: {
                  fontSize: 12,
                  color: "#999",
                },
              },
            },
            data: [
              {
                value: 75,
              },
            ],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
     use_W() {
       const data = [2659, 2963, 2314, 1124, 1436]
      const total = data.reduce((x, y) => x + y, 0);

      var dom = this.$refs["use_W"];
      var option = {
         title: {
          show: true,
          text: `{c|月能耗总计:}{a|${total}}{b|m³}`,
          link: "",
          target: null,
          left: "1%",
          top: "-10",
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
        grid: {
          top: "60",
          left: "0",
          right: "0",
          bottom: "20",
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
            data: ["1期", "2期", "3期", "生产楼", "宿舍楼"],
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
              // rotate: -30,
              // padding: [20, 30, 0, -20],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 3500,
            // splitNumber: 4,
            interval: 500,
            name: "m³",
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
            data:data,
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
  },
  mounted() {
    this.AssetsAndEquipment();
    this.Energy();
    this.Energy2();
    this.Energy3();
    this.use_W();
  },
};
</script>

<style lang="less" scoped>
.box {
  .today_use {
    & > ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        display: flex;
        flex-direction: column;
        span:first-child {
          font-size: 0.25rem /* 20/80 */;
          display: flex;
        }
        span:last-child {
          font-size: 0.15rem /* 12/80 */;
        }
        & > div {
          display: flex;
          padding: 0.1875rem /* 15/80 */ 0;

          .left {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-right: 0.125rem /* 10/80 */;
            span:first-child {
              margin-bottom: 0.1125rem /* 9/80 */; /* 20/80 */
            }
          }
          .right {
            display: flex;
            align-items: center;
            img {
              width: 0.175rem /* 14/80 */;
              height: 0.3rem /* 24/80 */;
            }
          }
        }
      }
    }
  }
  .month_use {
    #park_time {
      width: 4.75rem /* 250/80 */;
      height: 3.125rem /* 250/80 */ /* 280/80 */ /* 300/80 */ /* 160/80 */;
    }
  }
  .TOP {
    & > ul {
      display: flex;
      flex-direction: column;
      & > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.125rem /* 10/80 */ /* 15/80 */;
        span:first-child {
          width: 70%;
          height: 0.1rem /* 8/80 */;
          background: linear-gradient(90deg, #1e3957, #4395f3);
          border-radius: 0.05rem /* 4/80 */;
        }
        span:last-child {
        }
      }
    }
  }
}
.energy {
  .outer {
    position: relative;
    #energy {
      width: 2.75rem /* 220/80 */ /* 250/80 */ /* 300/80 */ /* 200/80 */;
      height: 2.75rem /* 300/80 */ /* 150/80 */;
    }
    .desc {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.175rem /* 14/80 */;
      span {
        font-size: 0.25rem /* 20/80 */;
      }
    }
  }
  .outer2{
    display: flex;
    #energy2,#energy3{
      width: 100%;
      height: 2.2rem;
    }
  }
   #use_W {
      width: 100%/* 250/80 */;
      height: 3.5rem /* 280/80 *//* 250/80 */ /* 280/80 */ /* 300/80 */ /* 160/80 */;
    }
}
</style>
