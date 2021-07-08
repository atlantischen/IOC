<template>
  <!-- 条形图 -->
  <div class="horizontalBarChartAll">
    <div class="tittle">{{ title }}</div>
    <p
      class="horizontalBar_tp"
      v-show="datas.datas2"
      v-for="(_t, i) in datas.datas2"
      :key="i"
    >
      {{ _t.name }}:<span><NumCounter :value="_t.value"></NumCounter></span>
    </p>
    <div class="horizontalBarChart">
      <div
        v-show="datas.data"
        v-for="(item, i) in datas.data"
        :key="i"
        :id="'horizontalBarChartEchart_' + i + ids"
        :ref="'horizontalBarChartEchart_' + i + ids"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "horizontalBarChart",
  props: {
    _data: {
      type: Object,
    },
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  created () { },
  mounted () {
    this.horizontalBarChartFun(this.datas);
  },
  methods: {
    horizontalBarChartFun (val) {
      var _data = val.data;
      for (var i = 0; i < _data.length; i++) {
        var option = {
          xAxis: {
            show: false,
          },
          grid: {
            left: "15",
            top: "30",
            right: "0",
            bottom: "0",
            containLabel: true,
          },
          yAxis: {
            type: "category",
            show: false,
          },
          color: ["red"],
          series: [
            {
              type: "bar",
              barWidth: 22,
              barGap: "-100%",
              barCategoryGap: "100%",
              animation: false,
              hoverAnimation: false,
              label: {
                show: false,
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 8,
                },
              },
              data: [
                {
                  itemStyle: {
                    normal: {
                      color: "#0e1c36",
                    },
                  },
                  value: val.datas2 ? val.datas2[0].value : 100,
                },
              ],
              z: 1,
            },
            {
              type: "bar",
              barWidth: 22,
              barGap: "-100%",
              barCategoryGap: "-100%",
              label: {
                show: true,
                position: "left",
                offset: [120, -20],
                formatter: _data[i].name + "{a| " + _data[i].value + " }",
                textStyle: {
                  color: "rgb(255,255,255,.7)",
                  fontSize: 14,
                  width: "115",
                  textAlign: "bottom",
                  rich: {
                    a: {
                      fontFamily: "BYfont",
                      color: "#fff",
                      fontSize: 18,
                      padding: [0, 0, -8, 8],
                    },
                  },
                },
              },
              itemStyle: {
                normal: {
                  barBorderRadius: 8,
                },
              },
              data: [
                {
                  itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: "#1e3957" },
                        { offset: 1, color: "#4396f3" },
                      ]),
                    },
                  },
                  value: _data[i].value.indexOf('%') != -1 ? _data[i].value.split("%")[0] : _data[i].value,
                  z: 1,
                },
              ],
            },
          ],
        };
        this.$redomEchart(
          this.$refs["horizontalBarChartEchart_" + i + this.ids],
          option
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
//
.horizontalBarChartAll {
  .horizontalBarChart {
    width: 100%;
  }
  .horizontalBar_tp {
    text-align: right;
    margin-right: 0.3125rem /* 25/80 */;
    .text_s();
    span {
      .datas_s();
      margin-left: 0.125rem /* 10/80 */;
    }
  }
  #horizontalBarChartEchart_,
  [id^="horizontalBarChartEchart_"] {
    width: 100%;
    height: 0.8125rem /* 65/80 */;
  }
}
</style>
