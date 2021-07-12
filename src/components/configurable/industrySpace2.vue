<template>
  <div class="industrySpace2All">
    <div class="tittle">{{ title }}</div>
    <div class="industrySpace2" :style="$paddingFun(datas.padding)">
      <div
        :id="'industrySpace2Echart_' + ids"
        :ref="'industrySpace2Echart_' + ids"
        :style="$eHeightFun(datas.eHeight)"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "theParkIsAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),

      spaceRadio: 0,
    }
  },
  mounted () {
    this.industrySpace2Fun(this.datas)
  },
  methods: {
    industrySpace2Fun (val) {
      var dom = this.$refs["industrySpace2Echart_" + this.ids]
      var ii = -1;
      var optionName = [
        "新能源、新材料",
        "智能制造",
        "信息技术",
        "生物医药",
        "文化创意",
        "现代服务",
        "节能环保",
      ],
        datas = [23.46, 24.29, 32.26, 1.2, 12.8, 3.25, 2.74];
      var option = {
        title: {
          show: true,
          text: "",
          link: "",
          target: null,
          subtext: "",
          sublink: "",
          subtarget: null,
          left: "22%",
          bottom: "42%",
          textAlign: "center",
          itemGap: 6,
          textStyle: {
            show: false,
            fontFamily: "BYfont",
            fontSize: 24,
            color: "#fff",
            fontWeight: 550,
          },
          subtextStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
        legend: {
          selectedMode: true,
          show: true,
          orient: "vertical", // 'horizontal'
          left: "45%",
          y: "center",
          data: optionName,
          formatter: function (name) {
            var index = 0;
            optionName.forEach(function (value, i) {
              if (value == name) index = i;
            });
            return "{a|" + name + "}" + datas[index] + "%";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {
                color: "rgb(255,255,255,.7)",
                padding: [0, 10, 0, 0],
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 12,
        },
        color: [
          "#4396f3",
          "#0ff",
          "#236390",
          "#9a866a",
          "#cda857",
          "#c7d392",
          "#fff",
        ],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0", "65%"],
            center: ["20%", "50%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [],
          },
        ],
      };
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data[i] = {
          value: datas[i],
          name: optionName[i],
        };
      }
      this.$redomEchart(dom, option);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 产业空间
#industrySpace2Echart_,
[id^="industrySpace2Echart_"] {
  width: 100%;
  height: 2.125rem /* 170/80 */;
}
</style>
