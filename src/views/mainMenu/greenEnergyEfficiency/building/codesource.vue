<template>
  <IOCLeft>
    <div class="cold_row_t">
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
        <li v-for="(item, index) in percentageList" :key="index">
          <span>{{ item.desc }}</span>
          <span>{{ item.val }}</span>
        </li>
      </ul>
    </div>
    <div class="cold_row_b">
      <div class="tittle">今日告警</div>
      <ul class="warning scroll">
        <li v-for="(item, index) in warningList" :key="index">
          <div class="tips" :class="item.status === 0 ? '_red' : '_yellow'">
            严重
          </div>
          <div class="warning_m">
            <span>{{ item.time }}</span>
            <span>{{ item.title }}</span>
          </div>
          <div class="warning_r">待处理</div>
        </li>
      </ul>
    </div>
    <div class="total_power">
      <div class="tittle">实时总功率</div>
      <div id="RealTotalPower" ref="RealTotalPower"></div>
    </div>
  </IOCLeft>
  <IOCRight>
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
        <div id="ElectricityStatistics" ref="ElectricityStatistics"></div>
      </div>
    </div>
    <div class="new_air">
      <div class="tittle">冷源监控</div>
      <ul class="scroll">
        <li @click="lookVideo(`${++index}号客梯`)">
          <!-- <Vloading v-show="showIfame" /> -->

          <Player
            ref="player"
             :dialogShow="dialogShow"
            width="49"
            :monitorList="monitorList"
          ></Player>
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
          <!-- <Vloading v-show="item.url" :text="'无信号'" /> -->
        </li>
      </ul>
    </div>
  </IOCRight>
  <LookVideo :Visible="Visible" :flv_url="flv_url" @off="openCloseDialog" />
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      showIfame: true,
      dialogShow: true,
      Visible: false,
      flv_url: "",
      dialogTitle: "",
      activeIndex: 1,
      percentageList: [
        {
          desc: "空调足迹COP平均值",
          val: "6.0",
        },
        {
          desc: "平均节能率",
          val: "10%",
        },
        {
          desc: "能耗费用(元)",
          val: "786",
        },
      ],
      warningList: [
        {
          status: 0,
          time: "10:00",
          title: "1#冷却塔_供水温度低于下限值",
        },
        {
          status: 1,
          time: "11:09",
          title: "1#冷却水泵_发生故障",
        },
        {
          status: 0,
          time: "15:06",
          title: "2#冷却泵_发生故障",
        },
        {
          status: 0,
          time: "16:13",
          title: "3#冷冻泵_供水温度低于下限值",
        },
        {
          status: 0,
          time: "15:55",
          title: "4#冷却水泵_温度异常",
        },
        {
          status: 1,
          time: "19:05",
          title: "2#冷却塔_供水温度低于下限值",
        },
      ],
      monitorList: [
        {
        id: this.$uuid(),
          url: "http://10.10.7.27:8084/live?app=live&stream=cctv1",
        },
        {
       id: this.$uuid(),
          url: "http://10.10.7.27:8084/live?app=live&stream=cctv2",
        },
        {
         id: this.$uuid(),
          url: "http://10.10.7.27:8084/live?app=live&stream=cctv3",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8084/live?app=live&stream=cctv4",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8084/live?app=live&stream=cctv5",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8084/live?app=live&stream=cctv6",
        },
        // {
        //   local: '16层C区女厕',
        //   url: 'http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=2&protocol=WS_FLV',
        // },
        // {
        //   local: '16楼前台',
        //   url: 'http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=3&protocol=WS_FLV',
        // },
        // {
        //   local: '16楼A区铭筑男厕',
        //   url: 'http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=4&protocol=WS_FLV',
        // },
        // {
        //   local: '16楼A区会议室',
        //   url: 'http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=5&protocol=WS_FLV',
        // },
        // {
        //   local: '14楼A区铭筑',
        //   url: 'http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=6&protocol=WS_FLV',
        // },
      ],
    };
  },
  methods: {
   
    RealTotalPower(data) {
      var y = [0, 25, 50, 75];
      var dom = this.$refs.RealTotalPower;
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
        grid: {
          top: "40",
          left: "10",
          right: "10",
          bottom: "10",
          containLabel: true,
        },
        xAxis: {
          name: "时间",
            nameTextStyle: {
              padding: [0, 0, -30, -30],
            },
          type: "category",
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
            interval: 0,
            fontSize: 11,
            textStyle: {
              color: "#fff",
            },
            rotate: 40,
            formatter: function(value, index) {
              if (index % 2) {
                return value;
              }
              return "";
            },
          },
          data: data,
        },
        yAxis: {
          name: "kw",
          type: "value",
          splitNumber: 3,
          min: 0,
          max: 75,
          interval: 25,
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
            show: false,
            lineStyle: {
              color: "rgb(255,255,255,0.5)",
              width: 1,
            },
          },
        },
        series: [
          {
            name: "功率",
            data: [
              {
                value: 2,
                symbol: "none",
              },
              {
                value: 5,
                symbol: "none",
              },
              {
                value: 8,
                symbol: "none",
              },
              {
                value: 11,
                symbol: "none",
              },
              {
                value: 13,
                symbol: "none",
              },
              {
                value: 15,
                symbol: "none",
              },
              {
                value: 16,
                symbol: "none",
              },
              {
                value: 21,
                symbol: "none",
              },
              {
                value: 34,
                symbol: "none",
              },
              {
                value: 39,
                symbol: "none",
              },
              {
                value: 42,
                symbol: "none",
              },
              {
                value: 48,
                symbol: "none",
              },
              {
                value: 50,
                symbol: "none",
              },
              {
                value: 52,
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
                value: 61,
                symbol: "none",
              },
              {
                value: 63,
                symbol: "none",
              },
              {
                value: 65,
                symbol: "none",
              },
              {
                value: 67,
                symbol: "none",
              },
              {
                value: 60,
                symbol: "none",
              },
              {
                value: 40,
                symbol: "none",

                // itemStyle: {
                //   color: "#FFB400",
                // },
              },
              {
                value: 22,
                symbol: "none",

                // itemStyle: {
                //   color: "#FFB400",
                // },
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
                    color: "#FFB400",
                  },
                  {
                    offset: 1,
                    color: "#FFDD8D",
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
              formatter: function(_) {
                return "实时访客: " + _.value;
              },
            },
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
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    ElectricityStatistics(data, data2, yData) {
      let { name, company, splitNumber, min, max, interval } = yData;
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
            padding: [20, 0, 0, -10], // 四个数字分别为上右下左与原位置距离
          },
          // nameTextStyle: {
          //   rich: {
          //     a: {
          //       color: "#fff",
          //       padding: [-10, 0, 0, -40],
          //     },
          //   },
          // },
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
              formatter: function(value, index) {
                if (company == "月") {
                  return value.toFixed(1);
                }
                return value;
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
            symbol: "none",
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
            lineWidth: 0.5,
            data: data2,
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    lookVideo(val) {
      console.log();
      this.flv_url = val;
      this.openCloseDialog(true);
    },
    openCloseDialog(val) {
      this.Visible = val;
    },
  },
  mounted() {
    let that = this;
    this.RealTotalPower(this.$getNowTime());
    this.ElectricityStatistics(
      this.$fun_date(),
      [2000, 3300, 3300, 4300, 3000, 3001, 4000],
      {
        name: "kw·h",
        company: "日",
        splitNumber: 3,
        min: 0,
        max: 4800,
        interval: 1200,
      }
    );
    //  this.$afterIframeOnload('iframeVideo0', () => {
    //   this.showIfame = false
    // })
    // window.onload = function() {
    //   that.$nextTick(() => {
    //     //  const iframe = window.frames['iFrame']
    //     // const handleLoad = () => {
    //     //   setTimeout(() => {
    //     //     const Do = (iframe.contentWindow || iframe.contentDocument)
    //     //     console.log(Do,'do');
    //     //     Do.document.document.getElementById('ascrail2000').style.display = 'none'
    //     //   }, 500)
    //     // }
    //     // iframe.addEventListener('load', handleLoad, true)
    //     var _iframe = document.getElementById("iframe");
    //     var a = this.$refs.iframeVideo0;
    //     //  _iframe.style.overflow= "hidden";
    //     console.log(_iframe, a, "_iframe");
    //   });

    //   // var _iframe = document.getElementById('iframe').contentWindow

    //   // console.log(_iframe,'_iframe');
    //   // _iframe.style.display= "none";  //修改样式
    // };
  },
  beforeRouteLeave(to, from, next) {
    if (to.path != from.path) {
       this.dialogShow = false;
    }
    next();
  },
};
</script>

<style lang="less" scoped>
#ElectricityStatistics {
  // width: 400px;
  margin-top: 0.125rem /* 10/80 */ /* 15/80 */ /* 10/80 */;
  height: 3.125rem;
}

#RealTotalPower {
  // width: 400px;
  // margin-top:.125rem /* 20/80 */ /* 10/80 */;
  height: 2.75rem /* 220/80 */ /* 200/80 */ /* 250/80 */ /* 300/80 */
    /* 250/80 */;
}

.cold_row_t {
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
      border-bottom: 1px dashed #fff;
    }
  }
  .list {
    margin-top: 0.3125rem /* 25/80 */;
    & > li {
      display: flex;
      justify-content: space-around;
      margin-bottom: 0.225rem /* 18/80 */ /* 24/80 */;
      & > span:nth-child(1) {
        font-size: 0.175rem /* 14/80 */;
        width: 50%;
        text-align: left;
      }
      & > span:nth-child(2) {
        width: 50%;
        text-align: center;
      }
    }
  }
}
.cold_row_b {
  color: #fff;

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
        border-radius: 0.15rem /* 12/80 */;
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
.total_power {
  margin-top: 0.125rem /* 10/80 */;
}
.KWH {
}
.new_air {
  margin-top: 0.4375rem /* 35/80 */ /* 45/80 */ /* 15/80 */;
  & > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 4.425rem /* 354/80 */ /* 474/80 */ /* 466/80 */;
    overflow: auto;
    margin-top: 0.3125rem /* 25/80 */;

    & > li {
      width: 100% /* 174/80 */ /* 112/80 */;
      height: 100% /* 112/80 */;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // height: 1.4rem /* 112/80 */;
      // background-image: url('../../../../assets/img/monitor/snap (2).png');
      // background-repeat: no-repeat;
      // background-size: 100% 100%;
      // &>img{
      //   width: 100%;
      //   height: 100%;
      // }

      // #iframe {
      //   width: 100% /* 174/80 */ /* 112/80 */;
      //   height: 1.4rem !important /* 112/80 *//* 112/80 */;
      // }
      // #iframe::-webkit-scrollbar {
      //   display: none !important;
      // }
      // background-color: rgba(67, 150, 243, 0.25);
      // color: #fff;
      // margin: 0 0.1rem /* 8/80 */ 0.1rem /* 8/80 */ 0;
      // padding: 0.125rem /* 10/80 */;
      // box-sizing: border-box;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      // align-items: flex-end;
    }
  }
}
</style>
