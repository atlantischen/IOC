<template>
  <!-- -- -->
  <div class="container">
    <IOCLeft>
      <div class="energy">
        <div class="tittle">本月能耗总览</div>
        <div class="energy_total">
          <div class="energy_box"></div>
          <div class="content">
            <span class="font_text">43.24</span>
            <span>TCE</span>
            <div>总能耗</div>
          </div>
          <div class="percentage">
            <img src="../../../../assets/img/1.png" alt="" />
            <span>13.22%</span>
          </div>
        </div>
      </div>
      <div class="energy_consumption">
        <ul>
          <li >
            <img src="../../../../assets/img/electirc.png" alt="" />
            <div class="energy_consumption_desc">
              <span class="font_text">304376.75</span>
              <span>KWH</span>
              <div>电耗能</div>
            </div>
            <div class="percentage">
              <img src="../../../../assets/img/1.png" alt="" />
              <span class="font_text">14.53%</span>
            </div>
          </li>
           <li >
            <img src="../../../../assets/img/water.png" alt="" />
            <div class="energy_consumption_desc">
              <span class="font_text">48.52</span>
              <span>T</span>
              <div>水耗能</div>
            </div>
            <div class="percentage">
              <img src="../../../../assets/img/1.png" alt="" />
              <span class="font_text">6.37%</span>
            </div>
          </li>
           <li >
            <img src="../../../../assets/img/gas.png" alt="" />
            <div class="energy_consumption_desc">
              <span class="font_text">63.28</span>
              <span>m³</span>
              <div>气耗能</div>
            </div>
            <div class="percentage">
              <img src="../../../../assets/img/2.png" alt="" />
              <span class="font_text">8.08%</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="today_energy">
        <div class="tittle">当日能耗趋势</div>
        <div id="today_energy"></div>
      </div>
    </IOCLeft>
    <IOCRight>
      <div class="energy_contrast">
        <div class="tittle">能耗对比</div>
        <div class="energy_title">
          <div>
            <img src="../../../../assets/img/4.png" alt="" />
            <span>电耗能</span>
          </div>
          <div>
            <img src="../../../../assets/img/6.png" alt="" />
            <span>水耗能</span>
          </div>
        </div>
        <div class="energy_chart">
          <ul>
            <li v-for="i in dateList" :key="i">
              <div class="date">{{ i.dateType }}</div>
              <div class="use">
                <i :style="'width:' + i.percentage + '%'"></i>
                <div>
                  <span>今日用电量：</span>
                  <span class="font_text">{{ i.kwh }}</span>
                  <span>kW.h</span>
                </div>
               
              </div>
              <div class="increase">
                <!-- <img src="../../../../assets/img/2.png" alt="" /> -->
                <img :src="i.state===0?require('../../../../assets/img/2.png'):require('../../../../assets/img/1.png')" alt="" />
                <span class="font_text">{{ i.increase }}%</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="KPI">
        <div class="tittle">关键指标KPI</div>
        <div class="box">
            <div id="KPI"></div>
            <div class="KPI_desc">
              <span>本月电能耗</span>
              <span class="font_text">43.24</span>
              <span>KW.H</span>
            </div>
        </div>
       
        <ul>
          <li >
            <img src="../../../../assets/img/electirc.png" alt="">
            <div class="middle">
                <i :style="'width:90%'"></i>
                <div>
                  <span>本月电能耗：</span>
                  <span class="font_text">304376.75</span>
                  <span>KW.H</span>
                </div>
              
            </div>
            <div class="bottom">8.32%</div>
          </li>
           <li >
            <img src="../../../../assets/img/water.png" alt="">
            <div class="middle">
                <i :style="'width:80%'"></i>
                <div>
                  <span>本月电能耗：</span>
                  <span class="font_text">48.52</span>
                  <span>T</span>
                </div>
              
            </div>
            <div class="bottom">4.73%</div>
          </li>
           <li >
            <img src="../../../../assets/img/gas.png" alt="">
            <div class="middle">
                <i :style="'width:70%'"></i>
                <div>
                  <span>本月电能耗：</span>
                  <span class="font_text">63.28</span>
                  <span>m³</span>
                </div>
              
            </div>
            <div class="bottom">2.54%</div>
          </li>
        </ul>
      </div>
    </IOCRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { EleResize } from "assets/js/echarts";
export default {
  name: "homePage",
  data() {
    return {
      dateList: [
        {
          dateType: "日",
          kwh: 447.31,
          percentage: 40,
          increase: 1.02,
          state:0,

        },
        {
          dateType: "周",
          kwh: 5152.11,
          percentage: 50,
          increase: 2.35,
          state:1

        },
        {
          dateType: "月",
          kwh: 25101.91,
          percentage: 60,
          increase: 5.96,
          state:0

        },
        {
          dateType: "年",
          kwh: 729187.01,
          percentage: 70,
          increase: 3.56,
          state:1

        },
      ],
      KPIList:[
      
      ]
    };
  },
  methods: {
    drawLine(dom, option) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(dom));
      let resizeDiv = document.getElementById(dom);
      // 绘制图表
      myChart.setOption(option);
      let listener = function() {
        myChart.resize();
      };
      EleResize.on(resizeDiv, listener);
    },
    trendInit() {
      var dom = "today_energy";
      var option = {
        grid: {
          top: "60",
          left: "30",
          right: "0",
          bottom: "30",
          containLabel: true,
        },
        legend: {
          right: 0,
          top: 10,
          data: ["电能源", "水能源"],
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
              "11:00",
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
              padding: [10, 25, 0, 0],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            name: "KWH",
            type: "value",
            min: 0,
            max: 60,
            splitNumber: 5,
            interval: 10,
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
          {
            name: "T",
            type: "value",
            min: 0,
            max: 30,
            splitNumber: 5,
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
            name: "电能源",
            symbol: "none",
            data: [1, 5, 7, 8, 9, 22, 15, 26, 30, 18, 13, 10],
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
                    color: "rgba(255, 255, 255, 1)",
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
            name: "水能源",
            symbol: "none",
            data: [1, 10, 26, 30, 32, 39, 28, 36, 34, 30, 35, 39],
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
                    color: "rgba(255, 180, 0, 1)",
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
      this.drawLine(dom, option);
    },
    KPIint() {
      var dom = "KPI";
      var option = {
        tooltip: {
          trigger: "item",
        },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["90%", "75%"],
            center: ["25%", "53%"],
            avoidLabelOverlap: false,
            hoverAnimation: false, //关闭放大动画
            selectedOffset: 0, //选中块的偏移量
            label: {
              show: false,
              position: "center",
              formatter: "{d}%",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: 200,
                name: "直接访问",
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "20",
                  fontWeight: "bold",
                },
                itemStyle: {
                  color: "#CDA857",
                },
              },
              {
                value: 300,
                width: 20,
                itemStyle: {
                  color: "#1E3957",
                },
                name: "邮件营销",
              },
            ],
          },
        ],
      };
      this.drawLine(dom, option);
    },
  },
  mounted() {
    this.trendInit();
    this.KPIint();
  },
};
</script>

<style lang="less" scoped>
.container {
  .energy {
    .energy_total {
      margin-top: 0.125rem /* 10/80 */;
      position: relative;
      .energy_box {
        width: 1.3125rem;
        height: 2.2375rem;
        background-image: url("../../../../assets/img/871.png");
        background-repeat: no-repeat;
        overflow: hidden;
        position: relative;

        &::before {
          content: "";
          width: 1.05rem /* 84/80 */;
          height: 0.625rem /* 50/80 */;
          position: absolute;
          left: 0.175rem /* 14/80 */ /* 24/80 */ /* 14/80 */;
          bottom: 0.1875rem /* 15/80 */ /* 48/80 */ /* 15/80 */ /* 25/80 */
            /* 15/80 */;
          background-image: url("../../../../assets/img/16.png");
        }
        // background-size: 1.3125rem /* 105/80 */ 2.2375rem /* 179/80 */ ;
      }
      .content {
        position: absolute;
        top: 0.425rem /* 34/80 */;
        left: 1.525rem /* 122/80 */;
        & > span:nth-child(1) {
          font-size: 0.25rem /* 20/80 */;
          color: #ffffff;
        }
        & > span:nth-child(2) {
          margin-left: 0.05rem /* 4/80 */;
          font-size: 0.175rem /* 14/80 */ /* 20/80 */;
          font-weight: bold;
          color: #ffffff;
        }
        & > div {
          margin-top: 0.1625rem /* 13/80 */ /* 10/80 */;
          font-size: 0.175rem /* 14/80 */;
          text-align: center;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #ffffff;
          opacity: 0.7;
        }
      }
      .percentage {
        position: absolute;
        padding-left: 0.25rem /* 20/80 */ /* 9/80 */;
        left: 2.5rem /* 200/80 */ /* 248/80 */;
        top: 0.6125rem /* 49/80 */;
      }
    }
  }
  .energy_consumption {
    margin-top: 0.25rem /* 20/80 */;
    ul {
      li {
        display: flex;
        margin-bottom: 0.25rem /* 20/80 */;
        & > img {
          width: 0.5rem /* 40/80 */;
          height: 0.5rem /* 40/80 */;
        }
        .energy_consumption_desc {
          color: #fff;
          margin-left: 0.2125rem /* 17/80 */;
          // display: flex;
          // flex-direction: column;
          & > span:nth-child(1) {
            font-size: 0.25rem /* 20/80 */;

            line-height: 1 /* 16/80 */;
          }
          & > span:nth-child(2) {
            font-size: 0.175rem /* 14/80 */;
            padding-left: 0.125rem /* 10/80 */;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
          }
          & > div {
            font-size: 0.175rem /* 14/80 */;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
            opacity: 0.7;
          }
        }
      }
    }
  }
  .today_energy {
    margin-top: 0.375rem /* 30/80 */ /* 20/80 */;
    #today_energy {
      width: 3.75rem /* 300/80 */;
      height: 3.125rem /* 250/80 */ /* 200/80 */;
    }
  }
  .energy_contrast {
    .energy_title {
      display: flex;
      justify-content: flex-end;
      & > div {
        width: 1.0625rem /* 85/80 */;
        height: 0.6375rem /* 51/80 */;
        display: flex;
        padding-top: 0.0625rem /* 5/80 */;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        background: #233d59;
        border: 1px solid #4696ef;
        // opacity: 0.6;
        border-radius: 0.05rem /* 4/80 */;
        color: #fff;
      }
      & > div:first-child {
        margin-right: 0.2375rem /* 19/80 */;
      }
    }
    .energy_chart {
      margin-top: 0.25rem /* 20/80 */;
      ul {
        li {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 0.125rem /* 10/80 */;
          .date {
            width: 0.35rem /* 28/80 */;
            height: 0.35rem;
            border: 1px solid #ffffff;
            border-radius: 50%;
            font-size: 0.175rem /* 14/80 */;
            line-height: 0.35rem /* 28/80 */;
            text-align: center;
            font-weight: 400;
            color: #fff;
          }
          .use {
            display: flex;
            flex-direction: column;
            width: 2.5rem /* 200/80 */;
            i {
              // width: 78px;
              height: 8px;
              display: inline-block;
              background: linear-gradient(90deg, #1e3957, #4395f3);
              border-radius: 4px;
              margin-bottom: 0.0625rem /* 5/80 */;
            }
            &>div{
              color: #fff;
              
             &>span:nth-child(1){
              // display: block;
              font-size: .175rem /* 14/80 */;
              opacity: 0.7;
              margin-bottom: .1875rem /* 15/80 */;
            }
            &>span:nth-child(2){
              font-size: .25rem /* 20/80 */;
              
            }
            &>span:nth-child(3){
              margin-left: .0875rem /* 7/80 */;
            }
            }
            & > span {
              color: #fff;
              font-size: 0.175rem /* 14/80 */;
              white-space: nowrap;
              & > span {
                font-size: 0.2rem /* 16/80 */;
              }
            }
          }
          .increase {
            display: flex;
            flex-direction: column;
            align-items: center;
            & > img {
              width: 0.175rem /* 14/80 */;
              height: 0.3rem /* 24/80 */;
            }
            & > span {
              color: #fff;
              font-size: 0.25rem /* 20/80 */;
            }
          }
        }
      }
    }
  }

  .KPI {
    .box{
    position: relative;
      
    }
    #KPI {
      width: 100%;
      height: 1.5625rem /* 125/80 */;
    }
    .KPI_desc{
      color: #fff;
      position: absolute;
      left: 60%;
      top: 50%;
      transform: translateY(-50%);
      &>span:nth-child(1){
        display: block;
        font-size: .175rem /* 14/80 */;
        opacity: 0.7;
        margin-bottom: .1875rem /* 15/80 */;
      }
      &>span:nth-child(2){
        font-size: .25rem /* 20/80 */;
        
      }
      &>span:nth-child(3){
        margin-left: .0875rem /* 7/80 */;
      }
    }
    &>ul{
      &>li{
        display: flex;
        width: 100%;
        margin-bottom: 0.125rem;
        margin-top: .25rem /* 20/80 */;
        img{
          width: .5rem /* 40/80 */;
          height: .5rem /* 40/80 */;
        }
        .middle{
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          margin-left: .25rem /* 20/80 */;

          &>i{
             height: 8px;
              display: inline-block;
              background: linear-gradient(90deg, #1e3957, #4395f3);
              border-radius: 4px;
              margin-bottom: 0.0625rem /* 5/80 */;
          }
          &>div{
            color: #fff;
            &>span:nth-child(1){
              font-size: .175rem /* 14/80 */;
              opacity: 0.7;
            }
            &>span:nth-child(2){
              font-size: .2rem /* 16/80 */;
            }
            &>span:nth-child(3){
              font-size: .15rem /* 12/80 */;
              margin-left: .0625rem /* 5/80 */;
              opacity: 0.7;
            }
         
          }
        
        }
        .bottom{
          font-size: .175rem /* 14/80 */;
          color: #fff;
        }
      }
    }
  }
}
</style>
