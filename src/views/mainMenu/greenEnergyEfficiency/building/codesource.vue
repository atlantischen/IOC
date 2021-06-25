<template>
  <IOCLeft>
    <div class="cold_row_t">
      <div class="tittle">今日一览</div>
      <div class="TodayToSee">
        <div class="TodayToSee_data1 flex">
          <span>21.26</span>
          <span>总功率(kw)</span>
        </div>
        <div class="TodayToSee_data2 flex">
          <span>768</span>
          <span>总用电能耗累计(kw·h)</span>
        </div>
      </div>
       <ul class="list">
        <li v-for="item in 3" :key="item">
          <span>空调足迹COP平均值</span>
          <span>6.0</span>
        </li>
      </ul >
    </div>
    <div class="cold_row_b">
      <div class="tittle">今日告警</div>
      <ul class="warning scroll">
          <li v-for="item in 19" :key="item">
            <div class="tips">严重</div>
            <div class="warning_m">
              <span>15:06</span>
              <span>1#冷却水泵_发生故障</span>
            </div>
            <div class="warning_r">待处理</div>
          </li>
      </ul>
     
    </div>
  </IOCLeft>
  <IOCRight>
    <div class="total_power">
      <div class="tittle">实时总功率</div>
       <div id="RealTotalPower"></div>

    </div>
    <div class="KWH">
      <div class="tittle">用电量统计</div>
      <div class="btn">
        <ul>
          <li :class="{active:activeIndex ===1}" @click="changeBtn(1)">近30天</li>
          <li :class="{active:activeIndex ===2}" @click="changeBtn(2)">近12月</li>
          <li :class="{active:activeIndex ===3}" @click="changeBtn(3)">近3年</li>
        </ul>
        <div id="ElectricityStatistics"></div>
      </div>

    </div>
  </IOCRight>
</template>

<script>
import * as echarts from "echarts";

export default {
  data(){
    return{
        activeIndex:1
    }
  },
  methods:{
    changeBtn(val){
      console.log(val);
      this.activeIndex= val
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
          this.ElectricityStatistics(["2019年", "2020年", "2021年"], [23, 41, 13], {
            name: "万kw·h",
            splitNumber: 4,
            min: 0,
            max: 60,
            interval: 20,
          });
        }
    },
     RealTotalPower() {
        var y = [0, 25, 50, 75];
        var dom = "RealTotalPower";
        var option = {
          title: {
            text: "",
            subtext: "",
            subtextStyle: {
              color: "#fff",
            },
            textStyle: {
              color: "#fff",
            },
          },
          grid: {
            top: "40",
            left: "10",
            right: "0",
            bottom: "10",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            // name: '时间',
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(255,255,255,0.5)",
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
            data: [
              "00:00",
              "02:00",
              "04:00",
              "06:00",
              "08:00",
              "10:00",
              "12:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
            ],
          },
          yAxis: {
            name: "kw",
            type: "value",
            splitNumber: 3,
            min: 0,
            max: 75,
            interval:25,
            nameTextStyle: {
              color: "#fff",
            },
             axisTick:{     
              show:false
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                type: "dashed",
                color: "rgb(255,255,255,0.5)",
              },
            },
            axisLabel: {
              interval: (index, value) => {
                if (y.includes(value)) {
                  return true;
                }
              },
              fontSize: 12,
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(255,255,255,0.5)",
                width: 1,
              },
            },
          },
          series: [
            {
              name: "实时访客",
              data: [
                {
                  value: 20,
                  symbol: "none",
                },
                {
                  value: 45,
                  symbol: "none",
                },
                {
                  value: 30,
                  symbol: "none",
                },
                {
                  value: 60,
                  symbol: "none",
                },
                {
                  value: 45,
                  symbol: "none",
                },
                {
                  value: 60,
                  symbol: "none",
                },
                {
                  value: 55,
                  symbol: "none",
                },
                {
                  value: 60,
                  symbol: "none",
                },
                {
                  value: 75,
                  symbol: "none",
                },
                {
                  value: 60,
                  symbol: "none",
                },
                {
                  value: 52,
                  itemStyle: {
                    color: "#00ffff",
                  },
                },
              ],
              type: "line",
              symbolSize: 6,
              smooth: true,
              itemStyle: {
                // 图形样式
                normal: {
                  barBorderRadius: 0,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#0090ff",
                    },
                    {
                      offset: 1,
                      color: "#00ffff",
                    },
                  ]),
                },
              },
              endLabel: {
                show: false,
                offset: [0, -30],
                overflow: "break",
                distance: -90,
                color: "#fff",
                fontSize: "12",
                formatter: function (_) {
                  return "实时访客: " + _.value;
                },
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#02b4e1",
                    },
                    {
                      offset: 1,
                      color: "rgba(1, 208, 239, 0)",
                    },
                  ]),
                },
              },
            },
          ],
        };
       this.$redomEchart(dom, option);

      },
     ElectricityStatistics(data, data2, yData) {
        let { name, splitNumber, min, max, interval } = yData;
        var dom = "ElectricityStatistics"
  
        var option = {
          tooltip: {
            trigger: "axis",
            // formatter: '{b0}({a0}): {c0}<br />{b1}({a1}): {c1}%'
          },
          color: ["#ffea00", "#0df8fc", "#fff"],
          grid: {
            top: "40",
            left: "10",
            right: "0",
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
                axisTick:{     
              show:false
            },
              splitLine: {
               
                lineStyle: {
                  width: 1,
                  type: "dashed",
                  color: "rgb(255,255,255,0.5)",
                },
              },
              axisLine:{
                show:false
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
                  color: "#00ffff",
                  lineStyle: {
                    color: "#00ffff",
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
  },
  mounted(){
    this.RealTotalPower()
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
#ElectricityStatistics {
  // width: 400px;
  margin-top:.125rem /* 10/80 */ /* 15/80 *//* 10/80 */;
  height: 3.125rem;
}

#RealTotalPower {
  // width: 400px;
  margin-top:.125rem /* 20/80 */ /* 10/80 */;

  height: 3.125rem /* 250/80 */ /* 300/80 */ /* 250/80 */;
}


.cold_row_t{
  color: #fff;

  .flex{
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 50%;

    &>span:nth-child(1){
      font-size: .375rem /* 30/80 */;
      color: #00EEFF;
      margin-bottom: .125rem /* 10/80 */;
    }
  }
  .TodayToSee{
      display: flex;
      padding: .375rem 0 /* 30/80 */;
      position: relative;
      // border-bottom: 1px dashed #fff;
      &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      border-bottom: 1px dashed #fff;

      }
    
  }
  .list{
    margin-top: .3125rem /* 25/80 */;
       &>li{
         display: flex;
         justify-content: space-around;
         margin-bottom: .3rem /* 24/80 */;
         &>span:nth-child(1){
           font-size: .175rem /* 14/80 */;
           width: 50%;
           text-align:center ;
         }
         &>span:nth-child(2){
           color:#00EEFF ;
           width: 50%;
           text-align:center ;


         }
       }
    }

}
.cold_row_b{
  color: #fff;

  .warning{
    height: 3.125rem /* 250/80 *//* 300/80 */;
    margin-top: .375rem /* 30/80 */;
    overflow: auto;
    padding-left: .125rem /* 10/80 */;
    font-size: .175rem /* 14/80 */;

    &>li{
      display: flex;
      align-items: center;
      position: relative;
        margin-bottom: .375rem /* 30/80 */;

      .tips{
        width: .7rem /* 56/80 */;
        height: .325rem /* 26/80 */;
        line-height: .325rem /* 26/80 */;
        text-align: center;
        color: red;
        border: 1px solid #FF4901;
        border-radius: 12px;
       }
       .warning_m{
         display: flex;
         flex-direction: column;
         margin-left: .0875rem /* 7/80 */;
         &>span:first-child{
           margin-bottom: .0625rem /* 5/80 *//* 9/80 */;
         }
       }
       .warning_r{
         position: absolute;
          color:#00EEFF ;

         right: .25rem /* 20/80 *//* 10/80 */;
       }
    }
  }
  
}
.KWH{
  position: relative;
  margin-top: .625rem /* 50/80 */ /* 30/80 */;
  .btn{
       
    &>ul{
      display: flex;
       position: absolute;
        right: 0;
        top: 0;
      &>li{
        width: .75rem /* 60/80 */ /* 76/80 */;
        margin-right: .0625rem /* 5/80 */;
        height: .325rem /* 26/80 */;
        border: 1px solid #FFFFFF;
        border-radius: .1625rem /* 13/80 */;
        font-size: .175rem /* 14/80 */;
        color: #fff;
        text-align: center;
        line-height: .325rem;
        
      }
       .active{
        color:#00EEFF ;
        border-color: #00EEFF;
      }
    }
  }
}
</style>
