<template>
  <!-- -- -->
  <div class="container">
     <IOCLeft>
       <div class="energy">
          <div class="tittle">本月能耗总览</div>
          <div class="energy_total">
            <div class="energy_box"></div>
            <div class="content">
              <span>43.24</span>
              <span>TCE</span>
              <div>总能耗</div>
            </div>
            <div class="percentage">
             <img src="../../../../assets/img/1.png" alt="">
              <span>13.22%</span>
            </div>
          </div>
       </div>
       <div class="energy_consumption">
         <ul>
           <li v-for="item in 3" :key="item">
             <img src="../../../../assets/img/electirc.png" alt="">
             <div class="energy_consumption_desc">
               <span>304376.75</span>
               <span>KWH</span>
               <div>电耗能</div>
             </div>
             <div class="percentage">
               <img src="../../../../assets/img/1.png" alt="">
               <span>14.53%</span>
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
             <img src="../../../../assets/img/4.png" alt="">
             <span>电耗能</span>
           </div>
          <div>
             <img src="../../../../assets/img/6.png" alt="">
             <span>水耗能</span>


             </div>
         </div>
         <div class="energy_chart">
          <ul>
            <li v-for="i in dateList" :key="i">
              <div class="date">{{i.dateType}}</div>
              <div class="use">
                <i :style="'width:'+i.percentage+'%'"></i>
                <span>今日用电量：<span>{{i.kwh}}</span> kW.h</span>
              </div>
              <div class="increase">
                <img src="../../../../assets/img/2.png" alt="">
                <span>{{i.increase}}%</span>
              </div>
            </li>
          </ul>
         </div>
      

       </div>
      <div class="KPI">
         <div class="tittle">关键指标KPI</div>
         <div id='KPI'></div>

         </div>
     </IOCRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { EleResize } from "assets/js/echarts";
export default {
  name: 'homePage',
  data(){
    return{
      dateList:[
        {
          dateType:'日',
          kwh:447.31,
          percentage:40,
          increase:1.02
        },
         {
          dateType:'周',
          kwh:5152.11,
          percentage:50,
          increase:2.35
        },
         {
          dateType:'月',
          kwh:25101.91,
          percentage:60,
          increase:5.96
        },
         {
          dateType:'年',
          kwh:729187.01,
          percentage:70,
          increase:3.56
        },
      ]
    }
  },
  methods:{
      drawLine(dom, option) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById(dom));
      let resizeDiv = document.getElementById(dom);
      // 绘制图表
      myChart.setOption(option);
      let listener = function () {
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
            data: [1,5, 7, 8, 9, 22, 15, 26, 30, 18, 13, 10],
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
            data: [1,10, 26, 30, 32, 39, 28, 36, 34, 30, 35, 39],
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
    KPIint(){
         var dom = "KPI";
         var option = {
           tooltip: {
            trigger: 'item'
           },
           title:{
           show: true, // 显示策略，默认值true,可选为：true（显示） | false（隐藏）
                text: "本月电能耗"+'\n'+ 43.24 +'TCE', // 主标题文本，'\n'指定换行
                link: "", // 主标题文本超链接,默认值true
                target: null, // 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                // subtext: 546, // 副标题文本，'\n'指定换行
                sublink: "", // 副标题文本超链接
                subtarget: null, // 指定窗口打开副标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
                top: '25%',
                left: 200,
            },
  
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['90%', '75%'],
                center: ["25%", "53%"], 　
                avoidLabelOverlap: false,
                hoverAnimation:false,   //关闭放大动画
                selectedOffset:0,     //选中块的偏移量
                label: {
                    show: false,
                    position: 'center',
                    formatter: '{d}%'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {    
                        value: 200,
                        name: '直接访问',
                        selected:true,     //默认选中第一块
                         label:{
                        show:true,     //默认显示第一块
                        fontSize: '20',
                        fontWeight: 'bold'
                       },
                       itemStyle:{
                         color:'#CDA857'
                       }
                    },
                    {
                      value: 300,
                      width:20,
                      itemStyle:{
                         color:'#1E3957'
                       },
                     name: '邮件营销'},
                ]
            }
        ]
      };
      this.drawLine(dom, option);
    }
  },
  mounted(){
    this.trendInit()
    this.KPIint()
  }
}
</script>

<style lang='less' scoped>
.container{
.energy{
  .energy_total{
    margin-top: .125rem /* 10/80 */;
    position: relative;
    .energy_box{
      width: 1.3125rem;
      height: 2.2375rem;
      background-image: url('../../../../assets/img/871.png');
      background-repeat: no-repeat;
      overflow: hidden;
    position: relative;

      &::before{
        content: '';
        width: 1.05rem /* 84/80 */;
        height: .625rem /* 50/80 */;
        position: absolute;
        left: .175rem /* 14/80 *//* 24/80 */ /* 14/80 */;
        bottom: .1875rem /* 15/80 */ /* 48/80 */ /* 15/80 */ /* 25/80 */ /* 15/80 */;
        background-image: url('../../../../assets/img/16.png');
      }
      // background-size: 1.3125rem /* 105/80 */ 2.2375rem /* 179/80 */ ;
    }
    .content{
      position: absolute;
      top: .425rem /* 34/80 */;
      left: 1.525rem /* 122/80 */;
      &>span:nth-child(1){
        font-size: .25rem /* 20/80 */;
        font-family: BY-Forvi-[C]3.00;
        font-weight: bold;
        color: #FFFFFF;
      }
       &>span:nth-child(2){
         margin-left: .05rem /* 4/80 */;
        font-size: .175rem /* 14/80 */ /* 20/80 */;
        font-weight: bold;
        color: #FFFFFF;
      }
      &>div{
        margin-top: .1625rem /* 13/80 */ /* 10/80 */;
        font-size: .175rem /* 14/80 */;
        text-align: center;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 0.7;
      }
    }
    .percentage{
      position: absolute;
      padding-left: .25rem /* 20/80 */ /* 9/80 */;
      left:2.5rem /* 200/80 */ /* 248/80 */ ;
      top: .6125rem /* 49/80 */;
       


    }

  }
}
.energy_consumption{
  margin-top: .25rem /* 20/80 */;
  ul{
    li{
      display: flex;
      margin-bottom: .25rem /* 20/80 */;
      &>img{
        width: .5rem /* 40/80 */;
        height: .5rem /* 40/80 */;
      }
      .energy_consumption_desc{
        color: #fff;
        margin-left: .2125rem /* 17/80 */;
        // display: flex;
        // flex-direction: column;
        &>span:nth-child(1){
          font-size: .25rem /* 20/80 */;
          font-family: BY-Forvi-[C]3.00;
          font-weight: bold;
          line-height: 1 /* 16/80 */;
        }
        &>span:nth-child(2){
          font-size: .175rem /* 14/80 */;
          padding-left: .125rem /* 10/80 */;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
        }
        &>div{
          font-size: .175rem /* 14/80 */;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.7;
        }
      }
     
    }
  }
}
.today_energy{
  margin-top: .375rem /* 30/80 */ /* 20/80 */;
  #today_energy{
    width: 3.75rem /* 300/80 */;
    height: 3.125rem /* 250/80 */ /* 200/80 */;
  }
}
.energy_contrast{
  .energy_title{
    display:flex;
    justify-content: flex-end;
    &>div{
      width: 1.0625rem /* 85/80 */;
      height: .6375rem /* 51/80 */;
      display: flex;
      padding-top: .0625rem /* 5/80 */;
      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
      background: #233D59;
      border: 1px solid #4696EF;
      // opacity: 0.6;
      border-radius: .05rem /* 4/80 */;
      color: #fff;
    }
    &>div:first-child{
      margin-right: .2375rem /* 19/80 */;
    }
  }
  .energy_chart{
    margin-top: .25rem /* 20/80 */;
    ul{
      li{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: .125rem /* 10/80 */;
        .date{
          width: .35rem /* 28/80 */;
          height: .35rem ;
          border: 1px solid #FFFFFF;
          border-radius: 50%;
          font-size: .175rem /* 14/80 */;
          line-height: .35rem /* 28/80 */;
          text-align: center;
          font-weight: 400;
          color: #fff;
        }
        .use{
          display: flex;
          flex-direction: column;
          width: 2.5rem /* 200/80 */;
          i{
            // width: 78px;
            height: 8px;
            display: inline-block;
            background: linear-gradient(90deg, #1E3957, #4395F3);
            border-radius: 4px;
          margin-bottom: .0625rem /* 5/80 */;

          }
          &>span{
            color: #fff;
            font-size: .175rem /* 14/80 */;
            opacity: .7;
            white-space: nowrap;
            &>span{
              font-size: .2rem /* 16/80 */;
              font-family: BY-Forvi-[C]3.00;
            }
          }
        }
        .increase{
          display: flex;
          flex-direction: column;
          align-items: center;
          &>img{
            width: .175rem /* 14/80 */;
            height: .3rem /* 24/80 */;
          }
          &>span{
            color: #fff;
            font-size: .25rem /* 20/80 */;
            font-family: BY-Forvi-[C]3.00;
          }
        }
      }
    }
  }
}
.KPI{
  #KPI{
    width: 100%;
    height: 1.5625rem /* 125/80 */;
  }
}
}
</style>
