<template>
  <!-- 饼图（圆环） -->
  <div class="rentalAndSaleAll">
    <div class="tittle">{{ title }}</div>
    <div class="rentalAndSale" :style="$paddingFun(datas.padding)">
      <div
        :id="'rentalAndSaleEchart_' + ids"
        :ref="'rentalAndSaleEchart_' + ids"
        :style="$eHeightFun(datas.eHeight)"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "rentalAndSale",
  props: {
    _data: {
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  created() {},
  mounted() {
    this.rentalAndSaleFun(this.datas);
  },
  methods: {
    rentalAndSaleFun(val) {
      let { optionName, datas, keyD } = val;
      var option = {
        title: {
          show: true,
          text: keyD.value,
          link: "",
          target: null,
          subtext: keyD.name,
          sublink: "",
          subtarget: null,
          left: "22%",
          bottom: "32%",
          textAlign: "center",
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
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
          show: true,
          orient: "vertical", // 'horizontal'
          left: "50%",
          y: "center",
          data: optionName,
          formatter: function(name) {
            var index = 0;
            optionName.forEach(function(value, i) {
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
        color: ["#ffdd8d", "#4396f3", "#1e3957"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["62%", "80%"],
            center: ["23%", "50%"],
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
      this.$redomEchart(this.$refs["rentalAndSaleEchart_" + this.ids], option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
//
.rentalAndSaleAll {
  .rentalAndSale {
    width: 100%;
  }
  #rentalAndSaleEchart_,
  [id^="rentalAndSaleEchart_"] {
    width: 100%;
    height: 1.875rem /* 150/80 */;
  }
}
</style>
