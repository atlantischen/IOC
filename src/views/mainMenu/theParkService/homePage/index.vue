<template>
  <!-- 园区服务home -->
  <div class="homePage">
    <LeftRight>
      <template #left>
        <div class="serviceOverviewAll">
          <div class="tittle">服务办理概况</div>
          <div class="serviceOverviewList">
            <table class="table_style" border="0">
              <tr>
                <th></th>
                <th>预定</th>
                <th>受理</th>
                <th>完成</th>
              </tr>
              <tr>
                <td class="tb_bg">本月</td>
                <td>390</td>
                <td>478</td>
                <td>300</td>
              </tr>
              <tr>
                <td class="tb_bg">上月</td>
                <td>268</td>
                <td>478</td>
                <td>568</td>
              </tr>
              <tr>
                <td></td>
                <td><i class="tb_arrows arrows_up"></i>40.22%</td>
                <td><i class="tb_arrows arrows_up"></i>44.53%</td>
                <td><i class="tb_arrows arrows_down"></i>38.08%</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="popularServicesAll">
          <div class="tittle">热门服务TOP5</div>
          <div class="popularServices_time">
            <DropDown :list="yearsList" name="label" @_cg="changePSYears" />
            <DropDown :list="momthsList" name="label" @_cg="changePSMonths" />
          </div>
          <div id="popularServiceEchart"></div>
        </div>
      </template>
      <template #center>
        <div class="serviceSystemAll" v-show="true">
          <div class="serviceSystem_bg">
            <ul class="serviceSystem_content ">
              <div class="center_text p_xy_c x_c">
                {{ serviceSystemDatas.name }}
              </div>
              <li
                class="serviceSystem_box x_c"
                v-for="(item, i) in serviceSystemDatas.list"
                :class="['_box_' + i, { actived: actvedNum == i + 1 }]"
                :key="i"
                @mouseover="hoverItem('hover', i + 1)"
                @mouseout="hoverItem('', i + 1)"
              >
                <img class="ss_img" :src="item.src" alt="" />
                <span class="ss_name">{{ item.name }}</span>
                <ul
                  class="min_box "
                  v-show="actvedNum == i + 1"
                  :class="
                    i < serviceSystemDatas.list.length / 2
                      ? 'min_box_l'
                      : 'min_box_r'
                  "
                >
                  <li v-for="(_t, ii) in item.childs" :key="ii">
                    {{ _t.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <template #right>
        <div class="totalServicesAll">
          <div class="tittle">服务办理总数</div>
          <div class="totalServices_time x_right">
            <DropDown :list="yearsList" name="label" @_cg="changePSYears2" />
          </div>
          <div id="totalServicesEchart"></div>
        </div>
        <div class="distributionServicesAll">
          <div class="tittle">各服务办理分布</div>
          <div id="distributionServicesEchart"></div>
        </div>
      </template>
    </LeftRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { redomEchart } from "@/utils/methods";
export default {
  name: "homePage",
  data() {
    return {
      ssTimer: null,
      actvedNum: 8,
      serviceSystemDatas: {
        name: "综合服务体系",
        list: [
          {
            name: "入驻服务",
            src: require("@/assets/img/datas/zh_rzfw.png"),
            childs: [
              {
                name: "装修服务",
              },
              {
                name: "IT基础设施",
              },
            ],
          },
          {
            name: "政务服务",
            src: require("@/assets/img/datas/zh_zwfw.png"),
            childs: [
              {
                name: "落户奖励政策",
              },
              {
                name: "费用补贴政策",
              },
              {
                name: "资产投资政策",
              },
              {
                name: "人才扶持政策",
              },
            ],
          },
          {
            name: "企业服务",
            src: require("@/assets/img/datas/zh_qyfw.png"),
            childs: [
              {
                name: "入驻办理",
              },
              {
                name: "物业缴费",
              },
              {
                name: "财税咨询",
              },
              {
                name: "法律服务",
              },
            ],
          },
          {
            name: "党群服务",
            src: require("@/assets/img/datas/zh_dqfw.png"),
            childs: [
              {
                name: "入党申请",
              },
              {
                name: "党费缴纳",
              },
            ],
          },
          {
            name: "办公采购",
            src: require("@/assets/img/datas/zh_bgcg.png"),
            childs: [
              {
                name: "企业定制水",
              },
              {
                name: "桶装水预订",
              },
              {
                name: "办公用品采购",
              },
            ],
          },
          {
            name: "人才关爱",
            src: require("@/assets/img/datas/zh_rcga.png"),
            childs: [
              {
                name: "园区美食",
              },
              {
                name: "专车租赁",
              },
              {
                name: "智慧食堂",
              },
              {
                name: "商家推介",
              },
            ],
          },
          {
            name: "共享服务",
            src: require("@/assets/img/datas/zh_gxfw.png"),
            childs: [
              {
                name: "园区导航",
              },
              {
                name: "会议服务",
              },
              {
                name: "参观预约",
              },
              {
                name: "场地预订",
              },
              {
                name: "广告位申请",
              },
            ],
          },
          {
            name: "物业服务",
            src: require("@/assets/img/datas/zh_wyfw.png"),
            childs: [
              {
                name: "智慧停车",
              },
              {
                name: "报事报修",
              },
              {
                name: "物品放行",
              },
            ],
          },
        ],
      },
      yearsList: [
        {
          label: "2021",
          value: 2021,
        },
        {
          label: "2020",
          value: 2020,
        },
        {
          label: "2019",
          value: 2019,
        },
      ],
      momthsList: [
        {
          label: "6月",
          value: 6,
        },
        {
          label: "5月",
          value: 5,
        },
        {
          label: "4月",
          value: 4,
        },
        {
          label: "3月",
          value: 3,
        },
        {
          label: "2月",
          value: 2,
        },
        {
          label: "1月",
          value: 1,
        },
      ],
    };
  },
  components: {},
  mounted() {
    this.setIntervalFun();
    this.popularServiceFun();
    this.totalServicesFun();
    this.distributionServicesFun();
  },
  beforeDestroy() {
    this.clearIntervalfun();
  },
  methods: {
    clearIntervalfun() {
      clearInterval(this.ssTimer);
      this.ssTimer = null;
    },
    setIntervalFun() {
      this.ssTimer = setInterval(() => {
        this.actvedNum--;
        if (this.actvedNum == 0) {
          this.actvedNum = this.serviceSystemDatas.list.length;
        }
      }, 1000);
    },
    hoverItem(val, i) {
      switch (val) {
        case "hover":
          this.clearIntervalfun();
          this.actvedNum = i;
          break;
        default:
          this.setIntervalFun();
          break;
      }
    },
    changePSMonths(val) {
      console.log(val);
      this.popularServiceFun();
    },
    changePSYears(val) {
      console.log(val);
      this.popularServiceFun();
    },
    changePSYears2(val) {
      console.log(val);
      this.popularServiceFun();
    },
    popularServiceFun() {
      var names = [],
        xAxisNams = [
          "车位申请",
          "会议室预定",
          "报事报修",
          "园区导航",
          "意见反馈",
        ];
      var option = {
        tooltip: {},
        title: {
          show: true,
          text: "{c|服务单合计：}{a|436}{b|单}",
          link: "",
          target: null,
          subtext: "",
          sublink: "",
          subtarget: null,
          left: "1%",
          top: "0%",
          textAlign: "left",
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
          itemGap: 6,
          textStyle: {
            rich: {
              c: {
                fontSize: 14,
                color: "rgb(255,255,255,.7)",
              },
              a: {
                color: "#fff",
                fontFamily: "BYfont",
                fontSize: 20,
              },
              b: {
                color: "#fff",
                fontSize: 12,
              },
            },
          },
        },
        grid: {
          x: 10,
          y: 60,
          x2: 10,
          y2: 0,
          containLabel: true,
        },
        legend: {
          show: names.length > 0,
          right: 20,
          top: 10,
          data: names,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 20,
        },
        xAxis: [
          {
            type: "category",
            data: xAxisNams,
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "rgb(255,255,255,0)",
              },
            },
            axisLabel: {
              fontSize: 12,
              padding: [25, 0, 0, -25],
              rotate: -25,
              textStyle: {
                color: "#fff",
              },
            },
            axisline: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "个",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgb(255,255,255,.5)",
                width: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: names[0],
            type: "bar",
            barWidth: 14,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#4396f3" },
                { offset: 1, color: "rgb(67, 150, 243, .1)" },
              ]),
            },
            data: [353, 220, 160, 100, 60],
          },
        ],
      };
      redomEchart("popularServiceEchart", option);
    },
    totalServicesFun() {
      var names = [],
        xData = [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        datas = [119, 120, 130, 140, 143, 154, 160, 162, 169, 170, 190, 200];
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "transparent",
            },
          },
        },
        title: {
          show: true,
          text: "{c|服务单合计：}{a|436}{b|单}",
          link: "",
          target: null,
          subtext: "",
          sublink: "",
          subtarget: null,
          left: "1%",
          top: "0%",
          textAlign: "left",
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
          itemGap: 6,
          textStyle: {
            rich: {
              c: {
                fontSize: 14,
                color: "rgb(255,255,255,.7)",
              },
              a: {
                color: "#fff",
                fontFamily: "BYfont",
                fontSize: 20,
              },
              b: {
                color: "#fff",
                fontSize: 12,
              },
            },
          },
        },
        color: ["#fff", "#ffb400"],
        grid: {
          x: 10,
          y: 60,
          x2: 10,
          y2: 0,
          containLabel: true,
        },
        legend: {
          show: names.length > 0,
          right: 20,
          top: 0,
          orient: "horizontal",
          data: names,
          icon: "rect", // circle, rect , roundRect, triangle, diamond, pin, arrow, none
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          itemWidth: 15,
          itemHeight: 2,
          itemGap: 20,
        },
        xAxis: {
          type: "category",
          name: "时间",
          data: xData,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgb(255,255,255,0)",
            },
          },
          axisLabel: {
            fontSize: 12,
            padding: [20, 0, 0, -20],
            rotate: -20,
            interval: 0,
            margin: 10,
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: [
          {
            name: "单",
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            // min: 8,
            // max: 2000,
            splitNumber: 6,
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgb(255,255,255,.5)",
                width: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: names[0],
            type: "line",
            smooth: true,
            color: "#ffdd8d",
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgb(255, 179, 0, 0.5)" },
                  { offset: 1, color: "rgb(255, 255, 255, 0)" },
                ]),
              },
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 0.5,
                },
              },
            },
            symbolSize: 6,
            data: [],
          },
        ],
      };
      for (var i = 0; i < datas.length; i++) {
        option.series[0].data[i] = {
          value: datas[i],
          symbol: i != datas.length - 1 ? "none" : "",
          itemStyle: {
            color: "#ffdd8d",
          },
        };
      }
      redomEchart("totalServicesEchart", option);
    },
    distributionServicesFun() {
      var j = 0;
      var optionName = ["个人服务", "基础服务", "企业服务", "新材料"],
        datas = [26.86, 47.55, 21.45, 5.41];
      var option = {
        title: {
          show: false,
          text: 2483,
          link: "",
          target: null,
          subtext: "",
          sublink: "",
          subtarget: null,
          left: "48%",
          bottom: "38%",
          textAlign: "center",
          itemGap: 6,
          textStyle: {
            fontFamily: "BYfont",
            fontSize: 24,
            color: "#fff",
            fontWeight: 550,
          },
          subtextStyle: {
            fontSize: 12,
            color: "rgb(255,255,255,.7)",
          },
        },
        legend: {
          selectedMode: false,
          show: false,
          orient: "vertical", // 'horizontal'
          left: "50%",
          y: "center",
          data: optionName,
          formatter: function(name) {
            return "{a|" + name + "}" + datas[j++] + "%";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {
                width: 40,
                color: "rgb(255,255,255,.7)",
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 18,
        },
        color: [
          "#00ffff",
          "#cd9a57",
          "#97c8ff",
          "#456af3",
          "#1e3957",
          "#c7d392",
          "#9a866a",
          "#c9a555",
          "#fff",
        ],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: true,
            startAngle: 160,
            label: {
              // minMargin: 10,
              // alignTo: 'edge',
              // edgeDistance: 10,
              // lineHeight: 10,
              formatter: "{a|{c}%}\n{b|{b}}",
              padding: [0, -45, 0, 0],
              rich: {
                a: {
                  width: 100,
                  fontSize: 12,
                  color: "rgb(255,255,255,.7)",
                },
                b: {
                  width: 100,
                  fontSize: 12,
                  lineHeight: 14,
                  color: "rgb(255,255,255,.7)",
                },
              },
            },
            itemStyle: {
              borderColor: "rgb(0,0,0,.9)",
              borderWidth: 6,
            },
            labelLine: {
              length: 20,
              length2: 45,
            },
            data: [],
          },
          {
            type: "pie",
            animation: false,
            radius: ["0", "40%"],
            data: [100],
            itemStyle: {
              color: "#0e1c36",
            },
          },
        ],
      };
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data[i] = {
          value: datas[i],
          name: optionName[i],
          selected: i == optionName.length - 1,
        };
      }
      redomEchart("distributionServicesEchart", option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
@import "~@/style/animation.less";
#popularServiceEchart {
  width: 100%;
  height: 240px;
}
#totalServicesEchart {
  width: 100%;
  height: 240px;
}
#distributionServicesEchart {
  width: 100%;
  height: 240px;
}
.serviceOverviewAll {
  .serviceOverviewList {
    .table_style {
      width: 100%;
      text-align: center;
      tr {
        td {
          margin-bottom: 20px;
        }
        &:nth-last-child(2) {
          td {
            margin: 0;
          }
        }
        &:nth-last-child(1) {
          td {
            padding-bottom: 10px;
          }
        }
      }
      th {
        .text_s(14px);
        padding-bottom: 20px;
      }
      td {
        .datas_s(20px);
        font-size: 18px;
      }
      .tb_arrows {
        display: inline-block;
        width: 17px;
        height: 27px;
        &.arrows_up {
          background: url("~@/assets/img/arrows_up.png");
          background-size: contain;
        }
        &.arrows_down {
          background: url("~@/assets/img/arrows_down.png");
          background-size: contain;
        }
      }
      .tb_bg {
        .x_left();
        padding: 0 15px;
        width: 94px;
        height: 80px;
        font-size: 24px;
        font-weight: 600;
        font-family: "Microsoft YaHei";
        .gradient(right, #4396f3, #ffffff00);
        border-radius: 3px 0 0 3px;
      }
    }
  }
}
.popularServicesAll {
  .popularServices_time {
    display: flex;
    justify-content: flex-end;
    padding-right: .1rem /* 8/80 */;
    .dropDown {
      margin-left: .375rem /* 30/80 */;
    }
  }
}
.totalServicesAll {
  .totalServices_time {
    width: 100%;
    padding-right: .1rem /* 8/80 */;
  }
}
.serviceSystemAll {
  position: absolute;
  top: .375rem /* 30/80 */;
  left: 50%;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  .serviceSystem_bg {
    width: 9.275rem /* 742/80 */;
    height: 7.2rem /* 576/80 */;
    background: url("~@/assets/img/datas/zh_bg.png") center no-repeat;
    background-size: cover;
    .serviceSystem_content {
      .center_text {
        width: 2.5rem /* 200/80 */;
        height: 2.5rem /* 200/80 */;
        position: absolute;
        top: 2.5rem /* 200/80 */;
        left: 4.8125rem /* 385/80 */;
        font-family: "BYfont";
        text-align: center;
        font-size: .5375rem /* 43/80 */;
        &::after {
          .turnAround(5s);
          content: "";
          position: absolute;
          width: 5.6875rem /* 455/80 */;
          height: 5.6875rem /* 455/80 */;
          background: url("~@/assets/img/datas/zh_line.png") bottom no-repeat;
        }
      }
      .serviceSystem_box {
        position: absolute;
        width: 2.15rem /* 172/80 */;
        height: 0.85rem /* 68/80 */;
        background: url("~@/assets/img/datas/zh_box1.png") no-repeat;
        background-size: contain;
        padding: 0 10px;
        cursor: pointer;
        &.actived {
          background: rgba(0, 0, 255, 0.5);
        }
        .ss_img {
          .ioc_img(50px, 50px, 50%);
        }
        .ss_name {
          white-space: nowrap;
          font-size: 22px;
          font-family: "BYfont";
          color: "#fff";
          margin: 0 5px;
        }
        .min_box {
          position: absolute;
          top: 50%;
          transform: translate(0%, -50%);
          -webkit-transform: translate(0%, -50%);
          z-index: 50;
          li {
            white-space: nowrap;
            min-width: 1rem /* 80/80 */;
            line-height: 0.4rem /* 32/80 */;
            background: #000;
            padding: 0 0.125rem /* 10/80 */;
            border-radius: 0.05rem /* 4/80 */;
            background: rgba(67, 150, 243, 0.2);
            border: 0.0125rem /* 1/80 */ solid #3f8ee5;
            margin: 0.0625rem /* 5/80 */;
            font-size: 14px;
            text-align: center;
            color: #fff;
          }
        }
        .min_box_l {
          right: 2.1875rem /* 175/80 */;
        }
        .min_box_r {
          left: 2.1875rem /* 175/80 */;
        }
      }
      ._box_0 {
        top: -0.0625rem /* 5/80 */;
        left: -0.3125rem /* 25/80 */;
      }
      ._box_1 {
        top: 1.5rem /* 120/80 */;
        left: -0.65rem /* 52/80 */;
      }
      ._box_2 {
        top: 3.125rem /* 250/80 */;
        left: -0.65rem /* 52/80 */;
      }
      ._box_3 {
        top: 4.625rem /* 370/80 */;
        left: -0.375rem /* 30/80 */;
      }
      ._box_7 {
        top: 0rem /* 0/80 */;
        right: -0.625rem /* 50/80 */;
      }
      ._box_6 {
        top: 1.625rem /* 130/80 */;
        right: -1rem /* 80/80 */;
      }
      ._box_5 {
        top: 3.125rem /* 250/80 */;
        right: -1rem /* 80/80 */;
      }
      ._box_4 {
        top: 4.625rem /* 370/80 */;
        right: -0.75rem /* 60/80 */;
      }
    }
  }
}
</style>
