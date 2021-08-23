<template>
  <IOCLeft>
    <div class="today">
      <div class="tittle" >今日一览</div>
       <div class="total">
          <ul>
            <li>
              <span class="font_text">21.26</span>
              <span>总功率(kw)</span>
            </li>
            <li>
              <span class="font_text">786</span>
              <span>总能耗(kw·h)</span>
            </li>
            <li>
              <span class="font_text">789</span>
              <span>能耗费用(元)</span>
            </li>
          </ul>
        </div>
    </div>
    <div class="cold_row_b">
      <div class="tittle">今日告警</div>
      <ul class="warning scroll">
        <li v-for="(item,index) in errorList" :key="index">
          <div class="tips">{{item.status}}</div>
          <div class="warning_m">
            <span>{{item.time}}</span>
            <span>{{item.desc}}</span>
          </div>
          <div class="warning_r">{{item.type}}</div>
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
    <div class="KWH_control">
      <div class="tittle">今日电磁阀开关</div>
       <ul class="SolenoidSwitches scroll">
          <li v-for="(item,i) in SolenoidSwitchesDatas" :key="i">
            <span><i>开关时间： </i>{{item.time}}</span>
            <span :class="{'active':item.status==1}">{{item.status==1?'开启':'关闭'}}</span>
          </li>
        </ul>
    </div>
    <div class="pump ">
      <div class="tittle">泵房监控</div>
        <ul>
          <li  >
            <!-- <span>2020-12-31    14:40</span>
            <span>{{item++}}号客梯</span> -->
           <!-- <Vloading v-show="showIfame" /> -->

          <Player :dialogShow="dialogShow"  width="49" :monitorList="monitorList" ></Player>
         <!-- <iframe
          v-show="!showIfame"
          scrolling="no"
          v-if="item.url"
          class="iframeVideo"
          name="iFrame"
          id="iframe"
          :ref="'iframeVideo' +index"
          style="width: 100%; height: 100%"
          :src="item.url + '&protocol=FLV&iframe=yes'"
          allowfullscreen
          allow="autoplay; fullscreen"
        ></iframe>       -->
          </li>
        </ul>

    </div>
  </IOCRight>
  <LookVideo :Visible="Visible" :title="dialogTitle" @off="openCloseDialog" />

</template>

<script>
import * as echarts from "echarts";
import {urlArry} from '@/utils/flv_url.js'

export default {
  data(){
    return{
      showIfame: true,
      dialogShow:true,
      Visible: false,
      dialogTitle:'',
      activeIndex:1,
      errorList:[
        {
          time:'09:56',
          desc:'1#冷却水泵_发生故障',
          type:'待处理',
          status:"严重"
        },
         {
          time:'10:04',
          desc:'2#冷却水泵_发生故障',
          type:'待处理',
          status:"严重"

        },
         {
          time:'10:32',
          desc:'1#冷却水泵_运行异常',
          type:'待处理',
          status:"严重"
        },
         {
          time:'12:13',
          desc:'2#冷却水泵_运行异常',
          type:'待处理',
          status:"严重"

        },
         {
          time:'16:36',
          desc:'3#冷却水泵_断电',
          type:'待处理',
          status:"严重"

        }
        
      ],
       SolenoidSwitchesDatas: [{
            time: '2021-03-01 12:22:03',
            status: 0
          },
          {
            time: '2021-03-02 11:03:00',
            status: 1
          },
          {
            time: '2021-03-02 13:00:03',
            status: 0
          },
          {
            time: '2021-03-02 15:15:15',
            status: 1
          },
          {
            time: '2021-03-02 15:30:20',
            status: 0
          },
          {
            time: '2021-03-03 12:21:00',
            status: 1
          },
          {
            time: '2021-03-03 12:45:00',
            status: 0
          },
          {
            time: '2021-03-03 13:40:23',
            status: 1
          },
          {
            time: '2021-03-03 16:22:03',
            status: 0
          },
          {
            time: '2021-03-04 15:55:11',
            status: 1
          },
          {
            time: '2021-03-04 16:16:28',
            status: 1
          },
        ],
        monitorList:urlArry.watersupplyList
        
    }
  },
  methods:{
  
     ElectricityStatistics(data, data2, yData) {
      let { name,company, splitNumber, min, max, interval } = yData;
      var dom = this.$refs.ElectricityStatistics;

      var option = {
        tooltip: {
          trigger: "axis",
          // formatter: '{b0}({a0}): {c0}<br />{b1}({a1}): {c1}%'
        },
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
               formatter:function (value, index) {   
              if(company=='月'){
					    	 return value.toFixed(1);      
              }
               return value
						}
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
            animationDuration: 1000,
            animationEasing:'linear',
            name: "",
            type: "line",
            // smooth: true,
            label: {
              show: false,
              color: "#fff",
              position: ["0", "-20"],
            },
            color: "#00ffff",
            symbolSize: 10,
            symbol: "circle",
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
                lineStyle: {
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
         ["7.24", "7.25", "7.26", "7.27", "7.28", "7.29", "7.30"],
      [700, 1000, 1300, 1800, 2000, 2300, 1300,],
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
      lookVideo (val) {
        console.log(val);
      this.dialogTitle = val
      this.openCloseDialog(true)

    },
    openCloseDialog (val) {
      this.Visible = val
    },
  },
  mounted(){
    this.ElectricityStatistics(
       this.$fun_date(),
      [2019, 2323, 2436, 2536, 2831, 2912, 3122,],
      {
        name: "kw·h",
        company:'日',

        splitNumber: 3,
        min: 0,
        max: 4800,
        interval: 1200,
      }
    );
    //    this.$afterIframeOnload('iframeVideo0', () => {
    //   this.showIfame = false 
    // })
  },
  beforeRouteLeave(to, from, next) {
    if (to.path != from.path) {
        this.dialogShow = false;
    }
    next();
  },
}
</script>

<style lang="less" scoped>
#ElectricityStatistics {
  // width: 400px;
  margin-top: 0.125rem /* 10/80 */ /* 15/80 */ /* 10/80 */;
  height: 3.125rem;
}
.today{
   .total{
    &>ul{
      display: flex;
      justify-content: space-around;
      margin: .25rem /* 20/80 */ 0;
      &>li{
        display: flex;
        flex-direction: column;
        text-align: center;
        span:first-child{
          font-size: .25rem /* 20/80 */;
          margin-bottom: .125rem /* 10/80 */;
        }
        span:last-child{
          font-size: .15rem /* 12/80 */;
        }
      }
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
        color: red;
        border: 1px solid #ff4901;
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
.KWH_control{
    // 今日电磁阀开关
  .SolenoidSwitches{
    height: 4.75rem /* 380/80 */;
    overflow-y: auto;
    font-size: .175rem /* 14/80 */;
    color: #fff;
    // margin-left: .125rem /* 10/80 */;
    // padding: 0 20px;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .1875rem /* 15/80 */ .25rem /* 20/80 */ ;
      span{
        i{
          font-size: .15rem /* 12/80 */;
          font-family:'Microsoft YaHei';
        }
        &:nth-child(2){
          color: #4396F3;
          cursor: pointer;
        }
      }
      &:nth-child(even){
        background: rgba(67, 150, 243, .2);
      }
    }

  }

}
.pump{
  ul{
      // display: flex;
      // flex-wrap: wrap;
      // justify-content: space-between;
      // padding: 0 .175rem /* 14/80 */;


    li{
       width: 100% /* 174/80 */ /* 112/80 */;
      height: 100% /* 112/80 */;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // margin: 0 .1rem /* 8/80 */ .1rem /* 8/80 */ 0;
      
      // span:first-child{}
      // span:last-child{
      //   position: absolute;
      //   bottom: .125rem /* 10/80 */;
      //   right: .1625rem /* 13/80 */;
      // }
      //  #iframe{
      //     width: 100% /* 174/80 *//* 112/80 */;
      //     height: 1.4rem !important /* 112/80 *//* 112/80 */;
      // }
    }
    // li:nth-child(2n){
    //   margin-right: 0;
    // }
  }
}
</style>