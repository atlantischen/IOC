<template>
  <div class="container">
    <IOCLeft>
      <div class="store_type">
        <div class="tittle">商家类型占比</div>
        <div id="store" ref="store"></div>
      </div>
      <div class="store_top">
        <div class="tittle">热门商家TOP5</div>
        <div id="store_top"></div>
      </div>
      <div class="store_discount">
        <div class="tittle">商家优惠信息</div>
        <ul class="outer">
          <li>
            <img src="../../../../assets/img/真功夫.png" alt="" />
            <div class="content">
              <div class="head">【真功夫】</div>
              <div class="describe">
                2021.06.01-2021.08.31期间，所有菜品8折优惠。
              </div>
            </div>
          </li>
          <li>
            <img src="../../../../assets/img/星巴克.png" alt="" />
            <div class="content">
              <div class="head">【星巴克】</div>
              <div class="describe">
                2021年星巴克春季买一送一活动，活动时间：2021.5.12-6.15每天！下午！3:00!
              </div>
            </div>
          </li>
          <li>
            <img src="../../../../assets/img/面点王.png" alt="" />
            <div class="content">
              <div class="head">【面点王】</div>
              <div class="describe">
                回馈新老用户，凡是在本店消费满99元可赠送20元代金券，2021.04.31前有效！
              </div>
            </div>
          </li>
        </ul>
      </div>
    </IOCLeft>
    <!-- <div class="box"> eqweqe</div> -->
    <IOCRight>
      <div class="store_list">
        <div class="tittle">商家列表</div>
        <div class="type">
          <span>类型：</span>
          <ul>
            <li class="item" v-for="(item, index) in listType" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="building">
          <span>栋座：</span>
          <ul>
            <li class="item" v-for="(item, index) in listBuilding" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="store_img">
        <ul>
          <li v-for="(item, index) in imgList" :key="index">
            <img :src="item" alt="" />
          </li>
        </ul>
      </div>
      <div class="store_wait">
        <div class="tittle" @click="handleFullScreen">待入驻商家</div>
        <ul>
          <li v-for="(item, index) in waitList" :key="index">
            <img :src="item" alt="" />
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
  name: "HomePage",
  data() {
    return {
      //   isShow:true,
      fade: false,
      listType: ["餐饮", "娱乐", "文化", "健康", "教育", "购物"],
      listBuilding: ["1栋", "2栋", "3栋", "A座", "B座", "C座"],
      imgList: [
        require("../../../../assets/img/94.png"),
        require("../../../../assets/img/95.png"),
        require("../../../../assets/img/96.png"),
        require("../../../../assets/img/97.png"),
        require("../../../../assets/img/98.png"),
        require("../../../../assets/img/99.png"),
        require("../../../../assets/img/100.png"),
        require("../../../../assets/img/101.png"),
      ],
      waitList: [
        require("../../../../assets/img/入驻商家1.png"),
        require("../../../../assets/img/入驻商家2.png"),
        require("../../../../assets/img/入驻商家3.png"),
        require("../../../../assets/img/入驻商家4.png"),
        require("../../../../assets/img/入驻商家5.png"),
        require("../../../../assets/img/入驻商家6.png"),
      ],
    };
  },
  components: {
    // Left,
    // Right
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
    meetEchartInit() {
      var dom = "store";
      var option = {
        tooltip: {
          trigger: "item",
        },
        labelLine: {
          show: false,
        },
        color: [
          "#457EF3",
          "#CED392",
          "#08E2FF",
          "#CD9A57",
          "#46BDEF",
          "#95C7FF",
        ],
        legend: {
          orient: "horizontal",
          top: 28,
          color: "#fff",
          width: "60%",
          left: 150,
          icon: "circle",
          itemWidth: 6,
          itemHeight: 8,
          itemGap: 20,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
            opacity: 0.7,
          },
          formatter: function(name) {
            var i = 0;
            i += 1;
            return name + "  " + "29.2%";
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "80%",
            center: ["20%", "50%"],
            label: {
              normal: {
                position: "inner",
                show: false,
              },
            },
            data: [
              { value: 800, name: "餐饮" },
              { value: 800, name: "健康" },
              { value: 1100, name: "娱乐" },
              { value: 1500, name: "教育" },
              { value: 600, name: "文化" },
              { value: 600, name: "购物" },
            ],
          },
        ],
      };
      this.drawLine(dom, option);
    },
    AssetsAndEquipment() {
      var dom = "store_top";
      var option = {
        title: {
          text: "",
          // subtext: '会议数',
          subtextStyle: {
            color: "#fff",
          },
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          top: "30",
          left: "30",
          right: "30",
          bottom: "0",
          containLabel: true,
        },
        tooltip: {
          // show: false,
          trigger: "axis",
        },
        xAxis: [
          {
            name: "",
            type: "category",
            data: ["纵横影院", "嘉旺快餐", "星巴克", "麦当劳", "面点王"],
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
              rotate: -30,
              padding: [20, 30, 0, -20],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 25000,
            splitNumber: 4,
            interval: 5000,
            name: "",
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
                width: 1,
                type: "dashed",
                color: "rgb(255,255,255,.5)",
              },
            },
          },
        ],
        series: [
          {
            name: "其他",
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
            data: [19400, 18400, 17400, 16400, 15400],
          },
        ],
      };
      this.drawLine(dom, option);
    },
  },
  created() {},
  destroyed() {},
  mounted() {
    this.meetEchartInit();
    this.AssetsAndEquipment();

    //   console.log(event.data);
  },
};
</script>

<style lang="less" scoped>
.container {
  // overflow: hidden;
  /* width: 100%; */
  /* height: 100%; */
  /* position: absolute; */
  .store_type {
    width: 100%;
    height: 1.575rem /* 126/80 */ /* 180/80 */;
    #store {
      width: 100%;
      height: 1.575rem /* 126/80 */ /* 180/80 */;
    }
  }
  .store_top {
    margin: 30px 0 0 0;
    #store_top {
      width: 100%;
      height: 2.5rem /* 200/80 */;
    }
  }
  .store_discount {
    color: #ffffff;

    .outer {
      padding-left: 0.1625rem /* 13/80 */;
      margin-top: 0.25rem /* 20/80 */;
      & > li {
        display: flex;
        margin-top: 0.25rem /* 20/80 */;
        img {
          width: 0.675rem /* 54/80 */;
          height: 0.675rem /* 54/80 */;
        }
        .content {
          margin-left: 0.175rem /* 15/80 */;
          .head {
            font-size: 0.175rem /* 14/80 */ /* 15/80 */;
            opacity: 0.7;
          }
          .describe {
            width: 90%;
            //    width: 3.1rem /* 248/80 */;
            font-size: 0.175rem /* 14/80 */;
            font-family: Microsoft YaHei;
            font-weight: 400;
            line-height: 0.3rem /* 24/80 */;
          }
        }
      }
    }
  }
  .store_list {
    span {
      font-size: 0.2rem /* 16/80 */;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      line-height: 0.25rem /* 20/80 */;
      margin-left: 0.375rem /* 30/80 */ /* 40/80 */ /* 30/80 */;
      white-space: nowrap;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-left: 0.375rem /* 30/80 */;
      width: 60%;
    }
    li {
      width: 0.5625rem /* 45/80 */;
      height: 0.3125rem /* 25/80 */ /* 29/80 */;
      // border: 1px solid #4696EF;
      border-radius: 0.05rem /* 4/80 */;
      background: #233d59;
      font-size: 0.175rem; /* 14/80 */
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin: 0 0.25rem /* 20/80 */ /* 18/80 */ /* 20/80 */ /* 24/80 */ 0.125rem
        /* 10/80 */ 0;
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
    .type {
      display: flex;
      margin-top: 0.25rem /* 20/80 */ /* 30/80 */;
    }
    .building {
      display: flex;
    }
  }
  .store_img {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    li {
      margin-right: 0.125rem /* 10/80 */;
      margin-bottom: 0.125rem /* 10/80 */;
    }
    li:nth-child(2n) {
      margin-right: 0;
    }
    img {
      width: 1.75rem /* 140/80 */ /* 145/80 */;
      height: 0.875rem;
    }
  }
  .store_wait {
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 0.125rem /* 10/80 */;
      li {
        margin-right: 0.0625rem /* 5/80 */ /* 6/80 */ /* 8/80 */ /* 10/80 */;
        margin-bottom: 0.0625rem /* 10/80 */;
        img {
          width: 1.1875rem /* 95/80 */ /* 100/80 */;
          height: 0.725rem /* 58/80 */ /* 60/80 */;
        }
      }
    }
  }
}
</style>
