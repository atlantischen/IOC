<template>
  <div class="LeaseSummaryAll">
    <div class="tittle">{{ title }}</div>
    <div :id="'leaseSummaryEchart_' + ids"></div>
  </div>
</template>

<script>
export default {
  name: "leaseSummary",
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
    this.leaseSummaryFun(this.datas)
  },
  methods: {
    leaseSummaryFun (val) {
      var optionName = ["多功能演播厅", "云平台广场", "会议室", "运动中心"],
        datas = [59.6, 21.43, 10.37, 8.6];
      var option = {
        title: [
          {
            show: true,
            text: "12",
            link: "",
            target: null,
            subtext: "今日预定次数",
            sublink: "",
            subtarget: null,
            right: "18%",
            top: "0",
            textAlign: "center",
            textStyle: {
              fontFamily: "BYfont",
              fontSize: 24,
              padding: [2, 0],
              fontWeight: 550,
              color: "#fff",
            },
            subtextStyle: {
              fontSize: 12,
              color: "rgb(255,255,255,.7)",
            },
          },
          {
            show: true,
            text: "284",
            link: "",
            target: null,
            subtext: "累计预定次数",
            sublink: "",
            subtarget: null,
            right: "-7%",
            top: "0",
            textAlign: "center",
            textStyle: {
              fontFamily: "BYfont",
              fontSize: 24,
              padding: [2, 0],
              fontWeight: 550,
              color: "#fff",
            },
            subtextStyle: {
              fontSize: 12,
              color: "rgb(255,255,255,.7)",
            },
          },
        ],
        legend: {
          selectedMode: false,
          show: true,
          orient: "vertical", // 'horizontal'
          left: "50%",
          top: "35%",
          data: optionName,
          formatter: function (name) {
            var index = 0;
            optionName.forEach(function (value, i) {
              if (value == name) index = i
            })
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
        // color: ["#cda857", "#4396f3", "#0ff", "#236390"],
        color: ["rgba(30, 57, 87, 0.5)", "#cda857", "#4396f3", "#0ff"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["0", "45%"],
            center: ["20%", "50%"],
            startAngle: -45,
            color: 'rgba(30, 57, 87, 0.3)',
            avoidLabelOverlap: false,
            animationType: 'scale',
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [100],
          },
          {
            name: "",
            type: "pie",
            radius: ["0", "65%"],
            center: ["20%", "50%"],
            // roseType: 'area', //radius
            startAngle: -45,
            itemStyle: {
              normal: {
                // borderWidth: 2,
                // borderColor: 'rgba(0, 0, 0, 0)',
                // opacity: 0.75,
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowOffsetY: 7,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            animationType: 'scale',
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
        option.series[1].data[i] = {
          value: datas[i],
          name: optionName[i],
        };
      }
      this.$redomEchart("leaseSummaryEchart_" + this.ids, option);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 聚焦产业
#leaseSummaryEchart_,
[id^="leaseSummaryEchart_"] {
  width: 100%;
  height: 2.375rem /* 190/80 */;
}
</style>
