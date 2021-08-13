<template>
  <IOCLeft>
    <div class="cold_row_t">
      <div class="tittle">今日一览</div>
      <div class="TodayToSee">
        <div class="TodayToSee_data1 flex">
          <span class="font_text">11</span>
          <span>VRV空调室外机</span>
        </div>
        <div class="TodayToSee_data2 flex">
          <span class="font_text">156</span>
          <span>VRV空调室内机</span>
        </div>
      </div>
    </div>
    <div class="cold_row_b">
      <div class="tittle">今日告警</div>
      <ul class="warning scroll">
        <li v-for="(item,index) in warningList" :key="index">
          <div class="tips" :class="item.status===0?'_red':'_yellow'">严重</div>
          <div class="warning_m">
            <span>{{item.time}}</span>
            <span>{{item.title}}</span>
          </div>
          <div class="warning_r">待处理</div>
        </li>
      </ul>
    </div>
    <div class="KWH">
      <div class="tittle">用电量统计</div>
      <div class="btn">
        <!-- <ul>
          <li :class="{ active: activeIndex === 1 }" @click="changeBtn(1)">
            近7天
          </li>
          <li :class="{ active: activeIndex === 2 }" @click="changeBtn(2)">
            近12月
          </li>
          <li :class="{ active: activeIndex === 3 }" @click="changeBtn(3)">
            近3年
          </li>
        </ul> -->
      </div>
      <div id="ElectricityStatistics" ref="ElectricityStatistics"></div>
    </div>
  </IOCLeft>
  <IOCRight>
    <div class="tittle">空调面板</div>
    <ul class="airPanel miniBar scroll">
      <li
        v-for="(_it, i) in airPanelList"
        :class="_it.states == 1 ? '' : 'toGrey'"
        :key="i"
      >
        <div class="airPanel_tp">
          <span class="airPanel_tilte" v-text="_it.localName"></span>
          <div
            class="sliderBtn"
            :class="_it.states == 1 ? 'open ' : 'close'"
            @click="closeOpen(_it.states, i)"
          ></div>
        </div>
        <div class="airPanel_ct" :class="_it.states == 1 ? '' : 'disable'">
          <div class="childBox temperature" v-show="_it.airPanelV == 1">
            <p>
              当前温度：<i
                
                v-text="_it.tem.currentTem"
              ></i>
              ℃
            </p>
            <div class="showTemper">
              <div
                class="EnergyEfficiency"
                :id="'EnergyEfficiency' + i"
                :ref="'EnergyEfficiency' + i"
              ></div>
              <div class="setTemper">
                <a @click="changeTemper('up', i)"
                  ><i class="iconfont icon-jia"></i
                ></a>
                <a @click="changeTemper('down', i)"
                  ><i class="iconfont icon-jian"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="childBox airMode" v-show="_it.airPanelV == 2">
            <a
              :class="{ actived: _it.mode.value == 1 }"
              @click="changeMode(1, i)"
            >
              <i class="iconfont icon-zhileng-"></i>
              <i>制冷</i>
            </a>
            <a
              :class="{ actived: _it.mode.value == 2 }"
              @click="changeMode(2, i)"
            >
              <i class="iconfont icon-zhire"></i>
              <i>制热</i>
            </a>
            <a
              :class="{ actived: _it.mode.value == 3 }"
              @click="changeMode(3, i)"
            >
              <i class="iconfont icon-zidong"></i>
              <i>自动</i>
            </a>
          </div>
          <div class="childBox WindSpeeds" v-show="_it.airPanelV == 3">
            <span
              :class="_it.speed.value >= 0 ? 'actived' : ''"
              @click="changeSpeeds(1, i)"
            >
              <i class="iconfont icon-fengsu"></i>
            </span>
            <span
              :class="_it.speed.value >= 2 ? 'actived' : ''"
              @click="changeSpeeds(2, i)"
            >
              <i class="iconfont icon-fengsu"></i>
            </span>
            <span
              :class="_it.speed.value >= 3 ? 'actived' : ''"
              @click="changeSpeeds(3, i)"
            >
              <i class="iconfont icon-fengsu"></i>
            </span>
            <span
              :class="_it.speed.value >= 4 ? 'actived' : ''"
              @click="changeSpeeds(4, i)"
            >
              <i class="iconfont icon-fengsu" v-show="_it.speed.value >= 4"></i>
            </span>
          </div>
        </div>
        <div class="airPanel_bt" :class="_it.states == 1 ? '' : 'disable'">
          <a
            :class="_it.airPanelV == 1 ? 'actived' : ''"
            @click="changeAirPanel(1, i)"
            ><i class="iconfont icon-wendu"></i>温度</a
          >
          <a
            :class="_it.airPanelV == 2 ? 'actived' : ''"
            @click="changeAirPanel(2, i)"
            ><i class="iconfont icon-liulanmoshi"></i>模式</a
          >
          <a
            :class="_it.airPanelV == 3 ? 'actived' : ''"
            @click="changeAirPanel(3, i)"
            ><i class="iconfont icon-fengsu"></i>风速</a
          >
        </div>
      </li>
    </ul>
  </IOCRight>
</template>

<script>
import * as echarts from "echarts";

export default {
  data () {
    return {
      activeIndex: 1,
      airPanelList: [
        {
          states: 1,
          airPanelV: 1,
          localName: "1601_会议室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "1601_洽谈室",
          tem: {
            targetTem: 28,
            currentTem: 26,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "研发一部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "市场一部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "研发二部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "市场二部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "总经理办公室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "财务办公室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "杂物间",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "餐厅室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "1601_会议室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "1601_洽谈室",
          tem: {
            targetTem: 28,
            currentTem: 26,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "研发一部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "市场一部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "研发二部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "市场二部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "总经理办公室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "财务办公室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "杂物间",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "餐厅室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "1601_会议室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "1601_洽谈室",
          tem: {
            targetTem: 28,
            currentTem: 26,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "研发一部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "市场一部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "研发二部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "市场二部",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 0,
          airPanelV: 1,
          localName: "总经理办公室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "财务办公室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "杂物间",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
        {
          states: 1,
          airPanelV: 1,
          localName: "餐厅室",
          tem: {
            targetTem: 20,
            currentTem: 24,
          },
          mode: {
            value: 2,
          },
          speed: {
            value: 3,
          },
        },
      ],
       warningList:[
        {
          status:0,
          time:'10:00',
          title:'16F-市场一部_压缩机损坏'
        },
        {
          status:1,
          time:'11:09',
          title:'16F-市场二部_温控器超高温'
        }
        ,
        {
          status:0,
          time:'15:06',
          title:'14F-财务室_空调机运转异常'
        }
        ,
        {
          status:0,
          time:'16:13',
          title:'14F-财务室_压缩机启动不良'
        }
        ,
        {
          status:0,
          time:'15:55',
          title:'14F-1601_室内风扇故障'
        }
        ,
        {
          status:1,
          time:'19:05',
          title:'14F-财务室_空调机运转异常'
        },
        {
          status:0,
          time:'15:55',
          title:'15F-财务室_空调机运转异常'
        }
        ,
        {
          status:1,
          time:'19:05',
          title:'16F-财务室_空调机运转异常'
        },
        {
          status:0,
          time:'15:55',
          title:'16F-财务室_压缩机启动不良'
        }
        ,
        {
          status:1,
          time:'19:05',
          title:'14F-财务室_空调机运转异常'
        }

      ]
    };
  },
  methods: {
    changeBtn (val) {
      console.log(val);
      this.activeIndex = val;
      if (val == 1) {
        this.ElectricityStatistics(
        ["7.24", "7.25", "7.26", "7.27", "7.28", "7.29", "7.30"],
      [2500, 3000, 2800, 4000, 3000, 2900, 3900,],
          {
            name: "kw·h",
            company:'日',
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
            company:'月',

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
            company:'年',
          
            splitNumber: 4,
            min: 0,
            max: 60,
            interval: 20,
          }
        );
      }
    },

    ElectricityStatistics (data, data2, yData) {
      let { name,company, splitNumber, min, max, interval } = yData;
      // var dom = "ElectricityStatistics";
      var dom = this.$refs.ElectricityStatistics;

      var option = {
        color: ["#ffea00", "#0df8fc", "#fff"],
        grid: {
          top: "40",
          left: "10",
          right: "20",
          bottom: "10",
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
           name: company,
          nameTextStyle: {
            padding: [20, 0, 0, -10]    // 四个数字分别为上右下左与原位置距离
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
                width: 0.5,
                type: "dashed",
                color: "rgb(255,255,255,1)",
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
            smooth: true,
            symbol: "none",
             areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(255, 180, 0, .2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 221, 141, .2)",
                  },
                ]),
              },
            },
            itemStyle: {
              normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#FFB400",
                  },
                  {
                    offset: 1,
                    color: "#FFDD8D",
                  },
                ]),
                // lineStyle: {
                //   color: "#ffff",
                // },
              },
            },
            lineWidth: 0.5,
            data: data2,
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    // 改变目标温度
    changeTemper (name, i) {
      if (name === 'up') {
        if (this.airPanelList[i].tem.targetTem >= 30) return false
        console.log(this.airPanelList[i].tem.targetTem);
        this.EnergyEfficiency(
          this.$refs["EnergyEfficiency" + i],
          this.airPanelList[i].tem.targetTem += 1
        );
      } else if (name === 'down') {
        // this.airPanelList[i].tem.targetTem--
        if (this.airPanelList[i].tem.targetTem <= 0) return false
        this.EnergyEfficiency(
          this.$refs["EnergyEfficiency" + i],
          this.airPanelList[i].tem.targetTem -= 1
        );

      }
    },
    // 改变模式
    changeMode (val, i) {
      this.airPanelList[i].mode.value = val;
    },
    // 改变风速
    changeSpeeds (val, i) {
      console.log(val, i);
      this.airPanelList[i].speed.value = val;
    },
    changeAirPanel (val, i) {
      this.airPanelList[i].airPanelV = val;
    },
    closeOpen (val, i) {
      this.airPanelList[i].states = val == 1 ? 0 : 1;
    },

    EnergyEfficiency (val, data) {
      var dom = val;
      
      var option = {
        series: [
          {
            type: "gauge",
            radius: "140%",
            center: ["50%", "100%"],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 30,
            splitNumber: 4,

            itemStyle: {
                color: 'red',
                 shadowColor: 'rgba(0,138,255,0.45)',
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: "#00FFFF",
              //   },
              //   {
              //     offset: 1,
              //     color: "red",
              //   },
              // ]),
            },
            progress: {
              show: true,
              width: 6,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 6,
                color: [[data / 30, '#4396f3'],[30/ data, '#fff']],
                shadowColor: "rgba(0, 0, 0, 0.4)",
                shadowBlur: 8,
                shadowOffsetX: 1,
                shadowOffsetY: 2,

              },
            },
            axisTick: {
              show: false,
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              show: false,
              distance: 2,
              length: 8,
              lineStyle: {
                width: 1,
                color: "#fff",
                formatter: function (value) {
                  return value;
                },
              },
            },
            axisLabel: {
              show: false,
              distance: 13,
              color: "#fff",
              fontSize: 12,
              formatter: function (value) {
                if (value != 2 && value != 6) return value + ".0";
              },
            },
            anchor: {
              show: false,
            },
            title: {
              offsetCenter: [0, "-10%"],
              fontSize: 12,
              color: "#fff",
            },
            detail: {
              valueAnimation: true,
              width: "60%",
              lineHeight: 40,
              height: "15%",
              borderRadius: 8,
              offsetCenter: [0, "-50%"],
              fontSize: 20,
              fontWeight: "500",
              formatter: "{value} ",
              color: "#fff",
              formatter: function (value) {
                return value;
              },
            },
            data: [
              {
                value: data,

                name: "目标温度",
              },
            ],
          },
        ],
      };


      this.$redomEchart(dom, option);
    },
  },
  mounted () {
    this.$nextTick(()=>{
      this.ElectricityStatistics(
     this.$fun_date(),
      [2056, 2511, 2932, 3126, 3412, 3612, 3759,],
      {
        name: "kw·h",
        company:'日',
        splitNumber: 3,
        min: 0,
        max: 4800,
        interval: 1200,
      }
    );
    for (var i = 0; i < this.airPanelList.length; i++) {
      this.EnergyEfficiency(
        this.$refs["EnergyEfficiency" + i],
        this.airPanelList[i].tem.targetTem
      );
    }
    })
    
  },
};
</script>

<style lang="less" scoped>
#ElectricityStatistics {
  // width: 400px;
  margin-top: 0.125rem /* 10/80 */ /* 15/80 */ /* 10/80 */;
  height: 3.125rem;
}
.cold_row_t {
  color: #fff;
  .flex {
    display: flex;
    flex-direction: column;
    text-align: center;
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
    }
  }
}
.cold_row_b {
  .warning {
    height: 2.75rem /* 220/80 */ /* 250/80 */ /* 300/80 */;
    margin-top: 0.25rem /* 20/80 */ /* 30/80 */;
    overflow: auto;
    padding-left: 0.125rem /* 10/80 */;
    font-size: 0.175rem /* 14/80 */;

    & > li {
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 0.1875rem /* 15/80 */ /* 20/80 */ /* 30/80 */;

      .tips {
        width: 0.7rem /* 56/80 */;
        height: 0.325rem /* 26/80 */;
        line-height: 0.325rem /* 26/80 */;
        text-align: center;
        border-radius: 12px;
      }
      .warning_m {
        display: flex;
        flex-direction: column;
        margin-left: 0.0875rem /* 7/80 */;
        & > span:first-child {
          margin-bottom: 0.0625rem /* 5/80 */ /* 9/80 */;
        }
      }
      .warning_r {
        position: absolute;
        color: #4396f3;
        bottom: 0;
        right: 0.25rem /* 20/80 */ /* 10/80 */;
      }
    }
  }
}
.KWH {
}
// 空调面板
.airPanel {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 8.4375rem /* 675/80 */;
  overflow-y: scroll;
  // margin: 10px 0 0 10px;
  li {
    position: relative;
    width: 2.0625rem /* 165/80 */ ;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    margin: 0 0.125rem /* 10/80 */ 0.15rem /* 12/80 */ 0;
    &:nth-child(2n) {
      margin-right: 0px;
    }

    .airPanel_tp {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 0.45rem /* 36/80 */;
      padding: 0 0.0625rem /* 5/80 */;
      font-size: 0.15rem /* 12/80 */;

      .airPanel_tilte {
        color: #fff;
        font-size: 0.175rem /* 14/80 */;
        font-weight: bold;
        width: 1.375rem /* 110/80 */;
      }
    }

    .airPanel_ct {
      width: 100%;
      height: 1.25rem /* 100/80 */;
      padding: 0 5px;
      overflow: hidden;

      .childBox {
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 0.15rem /* 12/80 */;
      }

      .temperature {
        .showTemper {
          width: 100%;
          height: 100%;
          display: flex;
          .EnergyEfficiency {
            width: 1.875rem /* 150/80 */;
            height: 1rem /* 80/80 */ /* 50/80 */;
          }
          .setTemper {
            width: 0.375rem /* 30/80 */;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            a {
              width: 0.3125rem /* 25/80 */;
              height: 0.3125rem /* 25/80 */;
              line-height: 0.3125rem /* 25/80 */;
              border-radius: 0.05rem /* 4/80 */;
              text-align: center;
              background: rgba(255, 255, 255, 0.2);
            }
          }
        }
      }

      .airMode {
        display: flex;

        a {
          width: 0.5875rem /* 47/80 */;
          min-height: 0.75rem /* 60/80 */;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0.075rem /* 6/80 */;
          padding: 0.125rem /* 10/80 */ 0;
          text-align: center;
          margin: 0.125rem /* 10/80 */ 0;

          &:nth-child(2) {
            margin: 0.125rem /* 10/80 */ 0.1rem /* 8/80 */;
          }

          i {
            display: block;

            &:nth-child(1) {
              font-size: 0.375rem /* 30/80 */;
              padding-bottom: 0.1rem /* 8/80 */;
            }

            &:nth-child(2) {
              font-size: 0.175rem /* 14/80 */;
            }
          }

          &.actived {
            color: rgba(67, 150, 243, 1);

            i {
              color: rgba(67, 150, 243, 1);
            }
          }
        }
      }

      .WindSpeeds {
        display: flex;
        align-items: center;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 0.45rem /* 36/80 */;
          height: 0.625rem /* 50/80 */;
          border-radius: 0.075rem /* 6/80 */;
          background: rgba(255, 255, 255, 0.2);
          margin-right: 0.0625rem /* 5/80 */;
          cursor: pointer;
          &:last-child {
            margin: 0;
            border-radius: 0 0.25rem /* 20/80 */ 0.25rem /* 20/80 */ 0;
          }
          &.actived {
            background: #4396f3;
            i {
              color: #fff;
            }
          }
          i {
            font-size: 0.325rem /* 26/80 */;
          }
        }
      }
    }

    .airPanel_bt {
      width: 100%;
      height: 0.45rem /* 36/80 */;
      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
        display: flex;

        align-items: center;
        width: 0.625rem /* 50/80 */ /* 47/80 */;
        height: 0.25rem /* 20/80 */;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.05rem /* 4/80 */;
        color: #fff;
        font-size: 0.15rem /* 12/80 */;
        padding: 0 0.025rem /* 2/80 */;

        &.actived {
          color: #4396f3;

          i {
            color: #4396f3;
          }
        }

        i {
          color: #fff;
          font-size: 0.175rem /* 14/80 */;
          margin-right: 0.025rem /* 2/80 */;
        }
      }
    }

    .sliderBtn {
      float: right;
    }
  }
  li:nth-child(2n) {
    margin-right: 0;
  }
}
</style>
