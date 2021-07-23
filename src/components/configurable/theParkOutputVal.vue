<template>
  <div class="theParkOutputValAll">
    <div class="tittle">{{ title }}</div>
    <div
      :id="'outputValueEchart_' + ids"
      :ref="'outputValueEchart_' + ids"
    ></div>
  </div>
</template>

<script>
export default {
  name: "theParkOutputValAll",
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
  mounted() {
    this.outputValueFun(this.datas);
  },
  methods: {
    // 园区产值
    outputValueFun(val) {
      const { optionName, datas } = val;
      var option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.8)",
          borderWidth: 1,
          borderColor: "#4396f3",
          padding: [5, 10],
          extraCssText: "box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);",
          textStyle: {
            color: "#fff",
          },
          // formatter: v => {
          //   return {v.name} +':'+ v.value + '%'
          // }
        },
        title: {
          show: true,
          text: 164,
          link: "",
          target: null,
          subtext: "税收总数\n(亿元)",
          sublink: "",
          subtarget: null,
          left: "22%",
          bottom: "32%",
          textAlign: "center",
          // backgroundColor:
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
            color: "#fff",
          },
        },
        legend: {
          selectedMode: false,
          show: true,
          orient: "vertical", // 'horizontal'
          right: 8,
          y: "center",
          data: optionName,
          formatter: function(name) {
            return "{a|" + name + "}";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {},
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 18,
        },
        color: [
          "#4396f3",
          "#95c7ff",
          "#456af3",
          "#0ff",
          "#236390",
          "#ffdd8d",
          "#9a866a",
          "#c9a555",
          "#fff",
        ],
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
      this.$redomEchart(this.$refs["outputValueEchart_" + this.ids], option);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.theParkOutputValAll {
  #outputValueEchart,
  [id^="outputValueEchart_"] {
    width: 100%;
    height: 2rem /* 160/80 */;
  }
}
</style>
