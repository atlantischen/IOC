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
        <li>
          <span>平均节能率</span>
          <span>10%</span>
        </li>
        <li >
          <span>能耗费用(元)</span>
          <span>786</span>
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
            近30天
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
  <IOCRight>
    <div class="airControl">
      <div class="tittle">新风控制</div>
      <div class=" NewRiskControl">
        <div class="NewRiskControl_row">
          <div class="NewRiskControl_row_top">
            <span class="NewRiskTitle" >SA01_新风</span>
            <div class="sliderBtn " :class="NewRiskData.speedStates==1?'open ':'close'" @click="closeOpen('speed')"></div>
          </div>
          <div class="NewRiskControl_row_ct">
            <div class="winspeed">送风风速
              <span :class="{'actived':NewRiskData.speed1>=1}" @click="changeWinSpeed('speed1', 1)">
                <i class="iconfont icon-fengsu" ></i>
              </span>
              <span  :class="{'actived':NewRiskData.speed1>=2}" @click="changeWinSpeed('speed1', 2)">
                <i class="iconfont icon-fengsu" ></i>
              </span>
              <span  :class="{'actived':NewRiskData.speed1>=3}" @click="changeWinSpeed('speed1',3)">
                <i class="iconfont icon-fengsu" ></i>
              </span>
            </div>
            <div class="winspeed">排风风速
              <span :class="{'actived':NewRiskData.speed2>=1}" @click="changeWinSpeed('speed2', 1)">
                <i class="iconfont icon-fengsu" ></i>
              </span>
              <span  :class="{'actived':NewRiskData.speed2>=2}" @click="changeWinSpeed('speed2', 2)">
                <i class="iconfont icon-fengsu" ></i>
              </span>
              <span  :class="{'actived':NewRiskData.speed2>=3}" @click="changeWinSpeed('speed2', 3)">
                <i class="iconfont icon-fengsu" ></i>
              </span>
            </div>
          </div>
        </div>
        <div class="NewRiskControl_row">
          <div class="NewRiskControl_row_top">
            <span>定时开启</span>
            <div class="sliderBtn " :class="NewRiskData.timeOpenStates==1?'open ':'close'" @click="closeOpen('open')"></div>
          </div>
          <div class="NewRiskControl_row_ct">
            <div class="setReTime">
              <span>开启时间</span>
              <span> <input class="inputNumber"  :placeholder="NewRiskData.openTime.split(':')[0]" @input="myFunction1" type="number">时 </span>
              <span> <input class="inputNumber" :placeholder="NewRiskData.openTime.split(':')[1]"  @input="myFunction2" type="number">分 </span>
            </div>
            <div class="setReDate">
              <span>重复</span>
              <ul class="dateList">
                <li :class="{'actived':NewRiskData.openDate.includes(1)}" @click="changeRepeteMode( 'open', 1)">一</li>
                <li :class="{'actived':NewRiskData.openDate.includes(2)}" @click="changeRepeteMode( 'open', 2)">二</li>
                <li  :class="{'actived':NewRiskData.openDate.includes(3)}" @click="changeRepeteMode( 'open', 3)">三</li>
                <li  :class="{'actived':NewRiskData.openDate.includes(4)}" @click="changeRepeteMode( 'open', 4)">四</li>
                <li :class="{'actived':NewRiskData.openDate.includes(5)}" @click="changeRepeteMode( 'open', 5)">五</li>
                <li :class="{'actived':NewRiskData.openDate.includes(6)}" @click="changeRepeteMode( 'open', 6)">六</li>
                <li  :class="{'actived':NewRiskData.openDate.includes(7)}" @click="changeRepeteMode( 'open', 7)">天</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="NewRiskControl_row">
          <div class="NewRiskControl_row_top">
            <span>定时关闭</span>
            <div class="sliderBtn " :class="NewRiskData.timeCloseStates==1?'open ':'close'" @click="closeOpen('close')"></div>
          </div>
          <div class="NewRiskControl_row_ct">
            <div class="setReTime">
              <span>开启时间</span>
              <span> <input class="inputNumber"  :placeholder="NewRiskData.closeTime.split(':')[0]" @input="myFunction3" type="number">时 </span>
              <span> <input class="inputNumber"  :placeholder="NewRiskData.closeTime.split(':')[1]" @input="myFunction4" type="number">分 </span>
            </div>
            <div class="setReDate">
              <span>重复</span>
              <ul class="dateList">
                <li :class="{'actived':NewRiskData.closeDate.includes(1)}" @click="changeRepeteMode( 'close', 1)">一</li>
                <li :class="{'actived':NewRiskData.closeDate.includes(2)}" @click="changeRepeteMode( 'close', 2)">二</li>
                <li  :class="{'actived':NewRiskData.closeDate.includes(3)}" @click="changeRepeteMode( 'close', 3)">三</li>
                <li  :class="{'actived':NewRiskData.closeDate.includes(4)}" @click="changeRepeteMode( 'close', 4)">四</li>
                <li :class="{'actived':NewRiskData.closeDate.includes(5)}" @click="changeRepeteMode( 'close', 5)">五</li>
                <li :class="{'actived':NewRiskData.closeDate.includes(6)}" @click="changeRepeteMode( 'close', 6)">六</li>
                <li  :class="{'actived':NewRiskData.closeDate.includes(7)}" @click="changeRepeteMode( 'close', 7)">天</li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="NewRiskControl_row NewRisk_info">
          <li>新风量: <i>4000</i><i>m³/h</i></li>
          <li>机外余压: <i>260</i><i>Pa</i></li>
          <li>额定功率: <i>3000</i><i>W</i></li>
          <li>额定电压: <i>350</i><i>W</i></li>
          <li>噪声: <i>59</i><i>dB(A)</i></li>
          <li>净重: <i>350</i><i>kg</i></li>
          <li>焓回收率: <i>夏季62%</i> <i>冬季62%</i></li>
          <li>外形尺寸: <i>2000x1400x720</i><i>mm</i></li>
        </ul>
      </div>
    </div>
  </IOCRight>
</template>

<script>
import * as echarts from "echarts";

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
       NewRiskData:{
          name: 'SA01_新风',
          speedStates: 0,
          speed1: 2,
          speed2: 1,
          timeOpenStates:0,
          openTime: '22:10',
          openDate: [1, 2, 3, 4, 5],
          timeCloseStates:1,
          closeTime: '12:00',
          closeDate: [1, 2, 3, 6],
        }
    };
  },
  methods:{
    ElectricityStatistics(data, data2, yData) {
      let { name, splitNumber, min, max, interval } = yData;
      // var dom = "ElectricityStatistics";
      var dom = this.$refs.ElectricityStatistics;

      var option = {
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
            smooth: true,
            label: {
              show: false,
              color: "#fff",
              position: ["0", "-20"],
            },
            color: "#00ffff",
            symbolSize: 6,
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
      // 改变风速
        changeWinSpeed(name, i){
          if(name == 'speed1'){
            this.NewRiskData.speed1 = i
          }else{
            this.NewRiskData.speed2= i
          }
        },
        myFunction1(e){
          let val = e.target.value
          if(val<0 || val>24){
            alert('请输入正确的时间（0~24）') 
            }
          // this.NewRiskData.openTime = (val<10?('0'+val):val)+':'+this.NewRiskData.openTime.split(':')[1]
       
        },
        myFunction2(e){
          let val = e.target.value
          if(val<0 || val>60){alert('请输入正确的时间（0~60）')}
          this.NewRiskData.openTime = this.NewRiskData.openTime.split(':')[0]+':'+(val<10?('0'+val):val)
          
        },
        myFunction3(e){
          let val = e.target.value
          if(val<0 || val>24){alert('请输入正确的时间（0~24）')}
          this.NewRiskData.closeTime = (val<10?('0'+val):val)+':'+this.NewRiskData.closeTime.split(':')[1]
          
        },
        myFunction4(e){
          let val = e.target.value
          if(val<0 || val>60){alert('请输入正确的时间（0~60）')}
          this.NewRiskData.closeTime = this.NewRiskData.closeTime.split(':')[0]+':'+(val<10?('0'+val):val)
          
        },
        // 改变模式
        changeRepeteMode(val, i) {
          if(val == 'close'){
            if(this.NewRiskData.closeDate.includes(i)){
              this.NewRiskData.closeDate.splice(this.NewRiskData.closeDate.indexOf(i), 1)
            }else{
              this.NewRiskData.closeDate.push(i)
            }
          }else{
            if(this.NewRiskData.openDate.includes(i)){
              this.NewRiskData.openDate.splice(this.NewRiskData.openDate.indexOf(i), 1)
            }else{
              this.NewRiskData.openDate.push(i)
            }
          }
        },
           closeOpen(val) {
          if(val == 'speed'){
            this.NewRiskData.speedStates = this.NewRiskData.speedStates==1?0:1
          }else if(val == 'open'){
            this.NewRiskData.timeOpenStates = this.NewRiskData.timeOpenStates==1?0:1
          }else{
            this.NewRiskData.timeCloseStates = this.NewRiskData.timeCloseStates==1?0:1
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
.airControl{
   // 新风控制
  .NewRiskControl{
    .NewRiskControl_row{
      color: #fff;
      font-size: .175rem /* 14/80 */;
      margin-left: .5rem /* 40/80 */;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: .1875rem /* 15/80 */ 0;
      &:nth-child(3),&:nth-child(4){
        padding: .3125rem /* 25/80 */ 0;
      }
      &:last-child{
        border: none;
      }
    }
    .NewRiskControl_row_top{
      display: flex;
      justify-content: space-between;
      .NewRiskTitle{
        font-weight: bold;
      }
    }
    .NewRiskControl_row_ct{
      padding: .125rem /* 10/80 */ 0 ;
      .actived{
        color: #4396F3;
        i{
          color: #4396F3;
        }
      }
      .winspeed{
        padding: .0625rem /* 5/80 */ 0;
        display: flex;
        align-items: center;
        span{
          margin-left: .1875rem /* 15/80 */;
          cursor: pointer;
          i{
            font-size: .3rem /* 24/80 */;
          }
        }
      }
      .setReTime{
        padding: .125rem /* 10/80 */ 0 .3125rem /* 25/80 */;
        span{
          padding-right: .25rem /* 20/80 */ ;
        }
      }
      .setReDate{
        display: flex;
        justify-content: space-between;
        .dateList{
          display: flex;
          li{
            cursor: pointer;
            padding:0 .15rem /* 12/80 */ ;
          }
        }
      }
    }
    .NewRisk_info{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: .3125rem /* 25/80 */;
      li{
        min-width: 1.5625rem /* 125/80 */;
        margin-right: .0625rem /* 5/80 */;
        white-space: nowrap;
        padding: .125rem /* 10/80 */ 0;
      }
    }
  } 
}
</style>
