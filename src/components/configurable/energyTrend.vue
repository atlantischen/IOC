<template>
  <div class="energyTrendAll">
    <div class="tittle">{{ title }}</div>
    <div
      class="energyTrend"
      v-for="(item, i) in datas.energyTrendData"
      :key="i"
    >
      <div class="energyTrend_l y_c">
        <span
          ><i class="LineBeyond">{{ item.todayPower }}</i
          >{{ item.unit }}</span
        >
        <span>今日{{ item.text }}</span>
      </div>
      <div class="energyTrend_r">
        <div
          :id="`energyTrendEchart_${i}` + ids"
          :ref="`energyTrendEchart_${i}` + ids"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "theParkOutputValAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid()
    }
  },
  mounted () {
    this.energyTrendFun(this.datas)
  },
  methods: {
    // 能耗态势
    energyTrendFun (val) {
      var _data = val.energyTrendData
      for (var i = 0; i < _data.length; i++) {
        console.log(i,'i');
        var option = {
          xAxis: {
            show: false,
          },
          grid: {
            left: "30",
            top: "0",
            right: "0",
            bottom: "0",
            containLabel: true,
          },
          yAxis: {
            type: "category",
            show: false,
          },
          series: [
            {
              type: "bar",
              barWidth: 8,
              barGap: "400%",
              // barCategoryGap:'0%',
              showBackground: false,
              label: {
                show: true,
                animation: false,
                position: "left",
                offset: [120, 15],
                formatter:
                  "本月" +
                  _data[i].text +
                  ":{a| " +
                  _data[i].monthPower +
                  " }" +
                  _data[i].unit +
                  "",
                textStyle: {
                  color: "rgb(255,255,255,.7)",
                  fontSize: 14,
                  width: "115",
                  textAlign: "bottom",
                  rich: {
                    a: {
                      fontFamily: "BYfont",
                      color: "#fff",
                      fontSize: 16,
                    },
                  },
                },
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 2,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#1e3957" },
                    { offset: 1, color: "#4396f3" },
                  ]),
                },
              },
              data: [_data[i].monthPower],
            },
            {
              type: "bar",
              barWidth: 8,
              showBackground: false,
              label: {
                show: true,
                animation: false,
                position: "left",
                offset: [120, 15],
                formatter:
                  "本年" +
                  _data[i].text +
                  ":{a| " +
                  _data[i].yearPower +
                  " }" +
                  _data[i].unit +
                  "",
                textStyle: {
                  color: "rgb(255,255,255,.7)",
                  fontSize: 14,
                  width: "115",
                  textAlign: "bottom",
                  rich: {
                    a: {
                      fontFamily: "BYfont",
                      color: "#fff",
                      fontSize: 16,
                    },
                  },
                },
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 2,
                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: "#1e3957" },
                    { offset: 1, color: "#4396f3" },
                  ]),
                },
              },
              data: [_data[i].yearPower],
            },
          ],
        };
        this.$redomEchart(this.$refs["energyTrendEchart_" + i + this.ids], option);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 能耗态势
.energyTrendAll {
  #energyTrendEchart_,
  [id^="energyTrendEchart_"] {
    width: 100%;
    height: 100%;
  }
  .energyTrend {
    width: 100%;
    height: 0.9375rem /* 75/80 */;
    display: flex;
    .energyTrend_l {
      width: 35%;
      border-right: 0.00125rem /* 0.1/80 */ rgba(255, 255, 255, 0.2) dotted;
      padding-right: 0.1875rem /* 15/80 */;
      span:nth-child(1) {
        .text_s();
        i {
          .datas_s();
          color: #fff;
          font-size: 0.3rem /* 24/80 */;
        }
      }
      span:nth-child(2) {
        .text_s();
      }
    }
    .energyTrend_r {
      width: 65%;
    }
  }
}
</style>
