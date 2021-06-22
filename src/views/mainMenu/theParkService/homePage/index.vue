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
          <div id="popularServiceEchart"></div>
        </div>
      </template>
      <template #right>
        <div class="tittle">服务办理总数</div>
        <div class="tittle">各服务办理分布</div>
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
    return {};
  },
  components: {},
  mounted() {
    this.popularServiceFun();
  },
  methods: {
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
          left: "0%",
          top: "0%",
          textAlign: "left",
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
          itemGap: 6,
          textStyle: {
            rich: {
              c:{
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
                fontFamily: "BYfont",
                fontSize: 12,
                padding: [0, 5],
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
  },
};
</script>

<style lang='less' scoped>
@import "~@/style/gl.less";
#popularServiceEchart {
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
        .gradient(right,#4396f3,#ffffff00);
        border-radius: 3px 0 0 3px;
      }
    }
  }
}
.popularServicesAll {
}
</style>
