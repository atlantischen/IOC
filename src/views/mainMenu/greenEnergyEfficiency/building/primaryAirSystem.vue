<template>
  <IOCLeft>
    <div class="today">
      <div class="tittle">今日一览</div>
      <div class="TodayToSee">
        <div class="TodayToSee_data1 flex">
          <span class="font_text">21.26</span>
          <span>总功率(kw)</span>
        </div>
        <div class="TodayToSee_data2 flex">
          <span class="font_text">768</span>
          <span>总用电能耗累计(kw·h)</span>
        </div>
      </div>
      <ul class="list">
        <li v-for="item in 2" :key="item">
          <span>平均节能率</span>
          <span>10%</span>
        </li>
      </ul>
    </div>
    <div class="air">
      <div class="tittle">空气一览</div>
      <ul class="TheAirIn ">
        <li>
          <span></span>
          <span>PM2.5</span>
          <span>PM10</span>
          <span>VOC</span>
          <span>CO2</span>
          <span>温度</span>
          <span>湿度</span>
        </li>
        <div class="TheAirIn_main miniBar">
          <li v-for="(item, index) in airDataList" :key="index">
            <span>{{ item.floorNum }}</span>
            <span
              ><i>{{ item.PM25 }}</i> <i>良</i></span
            >
            <span
              ><i>{{ item.PM10 }}</i> <i>优</i></span
            >
            <span>{{ item.VOC }}</span>
            <span>{{ item.CO2 }}</span>
            <span>{{ item.temper }}</span>
            <span
              ><i>{{ item.humidity }}</i> <i>%</i>
            </span>
          </li>
        </div>
      </ul>
      <div class="useKWH">
        <div class="tittle">用电量统计</div>
      <div class="btn">
        <ul>
          <li :class="{ active: activeIndex === 1 }" @click="changeBtn(1)">
            近7天
          </li>
          <li :class="{ active: activeIndex === 2 }" @click="changeBtn(2)">
            近12月
          </li>
          <li :class="{ active: activeIndex === 3 }" @click="changeBtn(3)">
            近3年
          </li>
        </ul>
      </div>
        <div id="ElectricityStatistics" ref="ElectricityStatistics"></div>

      </div>
    </div>
  </IOCLeft>
  <IOCRight></IOCRight>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1,

      airDataList: [
        {
          floorNum: "12F",
          PM25: 48,
          PM10: 23,
          VOC: 100,
          CO2: 427,
          temper: 24,
          humidity: 60,
        },
        {
          floorNum: "13F",
          PM25: 23,
          PM10: 56,
          VOC: 140,
          CO2: 454,
          temper: 25,
          humidity: 75,
        },
        {
          floorNum: "14F",
          PM25: 23,
          PM10: 56,
          VOC: 140,
          CO2: 454,
          temper: 25,
          humidity: 75,
        },
        {
          floorNum: "15F",
          PM25: 23,
          PM10: 56,
          VOC: 140,
          CO2: 454,
          temper: 25,
          humidity: 75,
        },
        {
          floorNum: "16F",
          PM25: 23,
          PM10: 56,
          VOC: 140,
          CO2: 454,
          temper: 25,
          humidity: 75,
        },
      ],
    };
  },
  methods:{
    ElectricityStatistics(data, data2, yData) {
      let { name, splitNumber, min, max, interval } = yData;
      // var dom = "ElectricityStatistics";
      var dom = this.$refs.ElectricityStatistics;

      var option = {
        tooltip: {
          trigger: "axis",
          // formatter: '{b0}({a0}): {c0}<br />{b1}({a1}): {c1}%'
        },
        color: ["#ffea00", "#0df8fc", "#fff"],
        grid: {
          top: "30",
          left: "10",
          right: "0",
          bottom: "30",
          containLabel: true,
          backgroundColor: "rgba(0,0,0,0)",
          borderWidth: 1,
          borderColor: "#ccc",
        },
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

        legend: {
          show: false,
          x: "center",
          y: "0",
          data: ["预定", "实际使用"],
          itemWidth: 8, // 图例的宽度
          itemHeight: 8, // 图例的高度
          icon: "circle",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemGap: 40, // 设置间距
        },
        xAxis: {
          type: "category",
          // name: "{a|日期}",
          nameTextStyle: {
            rich: {
              a: {
                color: "#fff",
                padding: [30, 0, 0, -40],
              },
            },
          },
          data: data,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#fff", // 纵坐标轴和字体颜色
              width: 0,
            },
          },
          axisLabel: {
            fontSize: 11,
            rotate: 40,
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: [
          {
            name: name,
            splitNumber: splitNumber,
            min: min,
            max: max,
            interval: interval,
            nameTextStyle: {
              color: "#fff",
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                width: 1,
                type: "dashed",
                color: "rgb(255,255,255,0.5)",
              },
            },
            axisLine: {
              show: false,
            },

            axisLabel: {
              fontSize: 12,
              showMinLabel: false,
              textStyle: {
                color: "#fff",
              },
            },
          },
          {
            show: false,
            name: "",
            interval: 10,
            axisLabel: {
              show: false,
              formatter: "{value} %",
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "line",
            // smooth: true,
            label: {
              show: false,
              color: "#fff",
              position: ["0", "-20"],
            },
            color: "#00ffff",
            symbolSize: 6,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#ffff",
                lineStyle: {
                  color: "#ffff",
                },
              },
            },
            lineWidth: 0.5,
            data: data2,
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
      changeBtn(val) {
      console.log(val);
      this.activeIndex = val;
      if (val == 1) {
        this.ElectricityStatistics(
          ["1", "4", "7", "11", "14", "17", "21", "24", "27", "31"],
          [200, 2300, 2300, 4300, 2000, 1001, 400, 2050, 2030, 2300],
          {
            name: "kw·h",
            splitNumber: 3,
            min: 0,
            max: 4800,
            interval: 1200,
          }
        );
      } else if (val == 2) {
        this.ElectricityStatistics(
          ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          [3, 4, 4, 3, 2, 1, 2, 5, 4, 3, 6, 2],
          {
            name: "万kw·h",
            splitNumber: 4,
            min: 0,
            max: 6.0,
            interval: 1.5,
          }
        );
      } else {
        this.ElectricityStatistics(
          ["2019年", "2020年", "2021年"],
          [23, 41, 13],
          {
            name: "万kw·h",
            splitNumber: 4,
            min: 0,
            max: 60,
            interval: 20,
          }
        );
      }
    },
  },
  mounted(){
     this.ElectricityStatistics(
      ["1", "4", "7", "11", "14", "17", "21", "24", "27", "31"],
      [200, 2300, 2300, 4300, 2000, 1001, 400, 2050, 2030, 2300],
      {
        name: "kw·h",
        splitNumber: 3,
        min: 0,
        max: 4800,
        interval: 1200,
      }
    );
    
  }
};
</script>

<style lang="less" scoped>
.today {
  .flex {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50%;

    & > span:nth-child(1) {
      font-size: 0.25rem /* 20/80 */ /* 30/80 */;
      margin-bottom: 0.125rem /* 10/80 */;
    }
  }
  .TodayToSee {
    display: flex;
    padding: 0.25rem /* 20/80 */ /* 30/80 */;
    position: relative;
    // border-bottom: 1px dashed #fff;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px dashed #fff;
    }
  }
  .list {
    margin-top: 0.3125rem /* 25/80 */;
    & > li {
      display: flex;
      justify-content: space-around;
      padding: 0 0.25rem;
      text-align: left;
      margin-bottom: 0.225rem /* 18/80 */ /* 24/80 */;
      & > span:nth-child(1) {
        font-size: 0.175rem /* 14/80 */;
        width: 50%;
        // text-align: center;
      }
      & > span:nth-child(2) {
        width: 50%;
        // text-align: center;
      }
    }
  }
}
.air {
  // 空气一览
  .TheAirIn {
    color: #fff;
    margin-bottom: 0.1875rem /* 15/80 */;
    .TheAirIn_main {
      height: 200px;
      overflow-y: auto;
      li {
        font-weight: 500;
        border: none;
        span {
          color: #ffff;
          &:first-child {
            height: 0.3125rem;
            text-align: center;
            margin: .0625rem /* 5/80 */;
            line-height: 0.3125rem /* 25/80 */;
            color: #fff;
            background-color: #4396f3;
            border-radius: 0.05rem /* 4/80 */;
          }
        }
      }
    }
    li {
      height: 0.5rem /* 40/80 */;
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 700;
      margin: 0 0.25rem /* 20/80 */ 0 0.25rem /* 20/80 */;
      padding: 0.0625rem /* 5/80 */ 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      &:nth-child(even) {
        background: rgba(67, 150, 243, .2);
      }
      span {
        flex: 1;
      
      }
    }
  }
}
.useKWH{
  #ElectricityStatistics {
  // width: 400px;
  margin-top: 0.125rem /* 10/80 */ /* 15/80 */ /* 10/80 */;
  height:2.25rem /* 180/80 *//* 200/80 *//* 220/80 */;
}
}
</style>
