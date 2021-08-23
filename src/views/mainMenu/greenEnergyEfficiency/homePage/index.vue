<template>
  <!-- -- -->
  <div class="container">
    <IOCLeft>
      <div class="energy">
        <div class="tittle">本月能耗总览</div>
        <div class="energy_total">
          <div class="energy_box">
            <div class="wave"></div>
          </div>
          <div class="content">
            <span class="font_text">
              <NumCounter :value="43.24"></NumCounter>
            </span>
            <span>TCE</span>
            <div>总能耗</div>
          </div>
          <div class="percentage">
            <img src="../../../../assets/img/1.png" alt="" />
            <span> <NumCounter :value="$randomNumer(1,5,2)"></NumCounter>%</span>
          </div>
        </div>
      </div>
      <div class="energy_consumption">
        <ul>
          <li>
            <img src="../../../../assets/img/electirc.png" alt="" />
            <div class="energy_consumption_desc">
              <span class="font_text">
                <NumCounter :value="1296*num"></NumCounter>
              </span>
              <span>KWH</span>
              <div>电耗能</div>
            </div>
            <div class="percentage">
              <img src="../../../../assets/img/1.png" alt="" />
              <span class="font_text"> {{$randomNumer(1,5,2)}}%</span>
            </div>
          </li>
          <li>
            <img src="../../../../assets/img/water.png" alt="" />
            <div class="energy_consumption_desc">
              <span class="font_text">
                <NumCounter :value="205*num"></NumCounter>
              </span>
              <span>T</span>
              <div>水耗能</div>
            </div>
            <div class="percentage">
              <img src="../../../../assets/img/1.png" alt="" />
              <span class="font_text">{{$randomNumer(1,5,2)}}%</span>
            </div>
          </li>
          <li>
            <img src="../../../../assets/img/gas.png" alt="" />
            <div class="energy_consumption_desc">
              <span class="font_text">
                <NumCounter :value="636.28*num"></NumCounter>
              </span>
              <span>m³</span>
              <div>气耗能</div>
            </div>
            <div class="percentage">
              <img src="../../../../assets/img/2.png" alt="" />
              <span class="font_text">{{$randomNumer(1,5,2)}}%</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="today_energy">
        <div class="tittle">当日能耗趋势</div>
        <div id="today_energy" ref="today_energy"></div>
      </div>
    </IOCLeft>
    <IOCRight>
      <div class="energy_contrast">
        <div class="tittle">能耗对比</div>
        <div class="energy_title">
          <div :class="{active:activeIndex==='电'}"  @click="changeClick('电')">
            <img src="../../../../assets/img/4.png" alt="" />
            <span>电耗能</span>
          </div>
          <div :class="{active:activeIndex==='水'}"  @click="changeClick('水')">
            <img src="../../../../assets/img/6.png" alt="" />
            <span>水耗能</span>
          </div>
        </div>
        <div class="energy_chart" v-if="activeType==='电'">
          <ul>
            <li v-for="i in dateList" :key="i">
              <div class="date">{{ i.dateType }}</div>
              <div class="use">
                  <i class="animation_m" v-style="{width:i.percentage+'%'}" ></i>
                <div>
                  <span>{{i.desc}}用电量：</span>
                  <span class="font_text">
                    <NumCounter :value="i.kwh"></NumCounter
                  ></span>
                  <span>kW.h</span>
                </div>
              </div>
              <div class="increase">
                <!-- <img src="../../../../assets/img/2.png" alt="" /> -->
                <img
                  :src="
                    i.state === 0
                      ? require('../../../../assets/img/2.png')
                      : require('../../../../assets/img/1.png')
                  "
                  alt=""
                />
                <span class="font_text">{{ i.increase }}%</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="energy_chart" v-if="activeType==='水'">
          <ul>
            <li v-for="i in WdateList" :key="i">
              <div class="date">{{ i.dateType }}</div>
              <div class="use">
                <i  class="animation_m"  v-style="{width:i.percentage+'%'}" ></i>
                <div>
                  <span>{{i.desc}}用水量：</span>
                  <span class="font_text">
                    <NumCounter :value="i.kwh"></NumCounter
                  ></span>
                  <span>kW.h</span>
                </div>
              </div>
              <div class="increase">
                <!-- <img src="../../../../assets/img/2.png" alt="" /> -->
                <img
                  :src="
                    i.state === 0
                      ? require('../../../../assets/img/2.png')
                      : require('../../../../assets/img/1.png')
                  "
                  alt=""
                />
                <span class="font_text">{{ i.increase }}%</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="KPI">
        <div class="tittle">关键指标KPI</div>
        <div class="box">
          <div id="KPI" ref="KPI"></div>
          <div class="KPI_desc">
            <span>本月电能耗</span>
            <span class="font_text">
              <NumCounter :value="43.24"></NumCounter>
            </span>
            <span>KW.H</span>
          </div>
        </div>

        <ul>
          <li>
            <img src="../../../../assets/img/electirc.png" alt="" />
            <div class="middle">
             
              <i  class="animation_m"  v-style="{width:num*3+'%'}" ></i>
              <div>
                <span>本月电能耗：</span>
                <span class="font_text">
                  <NumCounter :value="1296*num"></NumCounter>
                </span>
                <span>KW.H</span>
              </div>
            </div>
            <div class="bottom">{{num*3}}%</div>
          </li>
          <li>
            <img src="../../../../assets/img/water.png" alt="" />
            <div class="middle">
            <i  class="animation_m"  v-style="{width:num*2+'%'}" ></i>


              <div>
                <span>本月水能耗：</span>
                <span class="font_text">
                  <NumCounter :value="205*num"></NumCounter>
                </span>
                <span>T</span>
              </div>
            </div>
            <div class="bottom">{{num*2}}%</div>
          </li>
          <li>
            <img src="../../../../assets/img/gas.png" alt="" />
            <div class="middle">
          <i  class="animation_m"  v-style="{width:num*1+'%'}" ></i>

              <div>
                <span>本月气能耗：</span>
                <span class="font_text">
                  <NumCounter :value="636.28*num"></NumCounter
                ></span>
                <span>m³</span>
              </div>
            </div>
            <div class="bottom">{{num*1}}%</div>
          </li>
        </ul>
      </div>
    </IOCRight>
  <LookVideo :Visible="Visible" :title="dialogTitle" @off="openCloseDialog" />

  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "homePage",
  data () {
    return {
      ids: this.$uuid(),
      Visible: false,
      dialogTitle:'',
      activeType:'电',
      dateList: [
        {
          desc:'今日',
          dateType: "日",
          kwh: 12968,
          percentage: 46,
          increase: 1.02,
          state: 0,

        },
        {
          desc:'本周',
          dateType: "周",
          kwh: 90776,
          percentage: 52,
          increase: 2.35,
          state: 1

        },
        {
          desc:'本月',
          dateType: "月",
          kwh: 389040,
          percentage: 64,
          increase: 5.96,
          state: 0

        },
        {
          desc:'本年',
          dateType: "年",
          kwh: 4668480,
          percentage: 72,
          increase: 3.56,
          state: 1

        },
      ],
      WdateList: [
        {
          desc:'今日',
          dateType: "日",
          kwh: 2056,
          percentage: 43,
          increase: 2.03,
          state: 1,

        },
        {
          desc:'本周',
          dateType: "周",
          kwh: 14392,
          percentage: 52,
          increase: 1.35,
          state: 0

        },
        {
          desc:'本月',
          dateType: "月",
          kwh: 61680,
          percentage: 63,
          increase: 4.03,
          state: 0

        },
        {
          desc:'本年',
          dateType: "年",
          kwh: 740160,
          percentage: 76,
          increase: 2.98,
          state: 1

        },
      ],
      KPIList: [],
      num:new Date().getDate(),
      activeIndex:'电'
    };
  },
  methods: {
    lookVideo (val) {
      this.dialogTitle = val
      this.openCloseDialog(true)

    },
    changeClick(val){
      this.activeIndex=val
      this.activeType=val
    },
    openCloseDialog (val) {
      this.Visible = val
    },
    trendInit (data) {
      var dom = this.$refs["today_energy"];
      var option = {
        // grid: {
        //   top: "60",
        //   left: "30",
        //   right: "20",
        //   bottom: "30",
        //   containLabel: true,
        // },
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
        legend: {
          right: 20,
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
          x2: 25,
          y2: 20,
          containLabel: true,
        },

        xAxis: [
          {
             name: "时间",
            nameTextStyle: {
              padding: [0, 0, -30, -15],
            },
            type: "category",
            data: data,
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
              padding: [10, 25, -10, -20],
               formatter: function(value, index) {
                if (index % 2) {
                  return value;
                }
                return "";
              },
            },
          },
        ],
        yAxis: [
          {
            name: "KWH",
            type: "value",
            min: 0,
            max: 1500,
            splitNumber: 5,
            interval: 300,
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
          {
            name: "T",
            type: "value",
            min: 0,
            max: 250,
            splitNumber: 5,
            interval: 50,
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
            animationDuration: 1000,

            name: "电能源",
            yAxisIndex:0 ,
            symbol: "none",
            data: [100, 50, 70, 80, 90, 100, 150, 260, 350, 538, 689, 763, 899, 1036,1136, 1233, 1265, 1360, 1378, 1401, 1421, 1436, 1456, 1123,736],
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
            animationDuration: 1000,

            name: "水能源",
            symbol: "none",
            yAxisIndex:1 ,

            data: [5, 10, 36, 45, 50, 63, 72, 83, 106, 111, 123, 134,145, 153, 165, 168, 178, 189, 206, 236, 240, 246, 56, 39],
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
    KPIint () {
      var dom = this.$refs["KPI"];
      var option = {
        tooltip: {
          trigger: "item",
           backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
        },
        series: [
          {
            animationDuration:3000,
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
              rich: {
                d: {
                  fontSize: 50,
                  color: '#fff',
                  fontFamily: "BYfont",
                }
              }
            },
            data: [
              {
                value: 500,
                name: "已使用",
                width: 40,
                selected: true, //默认选中第一块
                label: {
                  show: true, //默认显示第一块
                  fontSize: "20",
                  fontWeight: "bold",
                  color: '#fff'
                },
                itemStyle: {
                  color: "#CDA857",
                },
              },
              {
                value: 300,
                name: "未使用",
                width: 20,
                itemStyle: {
                  color: "#1E3957",
                },
              },
            ],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
  },
  directives:{
    style:{
      mounted(el,binding){
        setTimeout(() => {
        for(let attr in binding.value){
          el.style[attr]=binding.value[attr]
        }
          }, 0);

      }
    }
  },
  mounted () {
    this.trendInit( this.$getNowTime());
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
        background-size: contain;
        background-repeat: no-repeat;
        overflow: hidden;
        position: relative;
        // animation: water-wave linear infinite;

        .wave {
          width: 1.05rem /* 84/80 */;
          height: 1.05rem /* 84/80 */;
          position: absolute;
          border-radius: 50%;
          left: 0.175rem;
          bottom: 0.1875rem;
          overflow: hidden;
          animation: water-wave linear infinite;

          &::before {
            position: absolute;
            content: "";
            top: 50%;
            left: -50%;
            // background: linear-gradient(to bottom right, #4695ED, #0C192A);
            background: rgba(70, 149, 237, 0.6);
            opacity: 0.7;
            width: 200% /* 160/80 */ /* 84/80 */;
            height: 200% /* 84/80 */;
            border-radius: 35%;
            animation: inherit;
            animation-duration: 7s;
          }

          //  position: absolute;
          //   top: 50%;
          //   left: -50%;
          //   background: red;
          //   opacity: .7;
          //   width: 2rem /* 160/80 */ /* 84/80 */;
          //   height: 2rem /* 84/80 */;
          //   border-radius: 35%;
          //   animation: inherit;
          //   animation-duration: 7s;
          // content: "";
          // width: 1.05rem /* 84/80 */;
          // height: 0.625rem /* 50/80 */;
          // position: absolute;
          // left: 0.175rem /* 14/80 */ /* 24/80 */ /* 14/80 */;
          // bottom: 0.1875rem /* 15/80 */ /* 48/80 */ /* 15/80 */ /* 25/80 */
          //   /* 15/80 */;
          // background-image: url("../../../../assets/img/16.png");
        }
        @keyframes water-wave {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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
        & > span {
          display: flex;
        }
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
      width: 100%/* 300/80 */;
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
        // opacity: 0.6;
        border-radius: 0.05rem /* 4/80 */;
        color: #fff;
      }
      .active{
        border: 1px solid #4696ef;
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
          margin-bottom: .25rem /* 20/80 *//* 10/80 */;
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
              width: 0%;
              height: .1rem /* 8/80 */;
              display: inline-block;
              background: linear-gradient(90deg, #1e3957, #4395f3);
              border-radius: 4px;
              margin-bottom: 0.0625rem /* 5/80 */;
            }
            & > div {
              color: #fff;
              white-space: nowrap;

              & > span:nth-child(1) {
                // display: block;
                font-size: 0.175rem /* 14/80 */;
                opacity: 0.7;
                // margin-bottom: 0.1875rem /* 15/80 */;
              }
              & > span:nth-child(2) {
                font-size: 0.25rem /* 20/80 */;
              }
              & > span:nth-child(3) {
                margin-left: 0.0875rem /* 7/80 */;
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
    .box {
      position: relative;
    }
    #KPI {
      width: 100%;
      height: 1.5625rem /* 125/80 */;
    }
    .KPI_desc {
      color: #fff;
      position: absolute;
      left: 60%;
      top: 50%;
      transform: translateY(-50%);
      & > span:nth-child(1) {
        display: block;
        font-size: 0.175rem /* 14/80 */;
        opacity: 0.7;
      }
      & > span:nth-child(2) {
        font-size: 0.25rem /* 20/80 */;
      }
      & > span:nth-child(3) {
        margin-left: 0.0875rem /* 7/80 */;
      }
    }
    & > ul {
      & > li {
        display: flex;
        align-items: center;
         justify-content: space-around;
        // width: 100%;
        margin: 0.125rem 0;
        img {
          width: 0.5rem /* 40/80 */;
          height: 0.5rem /* 40/80 */;
        }
         .middle {
            display: flex;
            flex-direction: column;
            width: 2.5rem /* 200/80 */;
            i {
              width: 0%;
              height: .1rem /* 8/80 */;
              display: inline-block;
              background: linear-gradient(90deg, #1e3957, #4395f3);
              border-radius: 4px;
              margin-bottom: 0.0625rem /* 5/80 */;
            }
            & > div {
              color: #fff;
              white-space: nowrap;

              & > span:nth-child(1) {
                // display: block;
                font-size: 0.175rem /* 14/80 */;
                opacity: 0.7;
                // margin-bottom: 0.1875rem /* 15/80 */;
              }
              & > span:nth-child(2) {
                font-size: 0.25rem /* 20/80 */;
              }
              & > span:nth-child(3) {
                margin-left: 0.0875rem /* 7/80 */;
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
        .bottom {
          font-size: 0.175rem /* 14/80 */;
          color: #fff;
          padding-left: .125rem /* 10/80 */ /* 5/80 */;
        }
      }
    }
  }
}
</style>
