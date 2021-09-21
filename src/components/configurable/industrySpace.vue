<template>
  <div class="IndustrySpaceAll">
    <div class="tittle">{{ title }}</div>
    <div class="SpaceRadioGroup">
      <el-radio-group
        class="radioGroup"
        v-model="spaceRadio"
        @change="selectSpaceRadio"
      >
        <el-radio v-for="(item, i) in datas.datas" :key="i" :label="i">{{
          item.name
        }}</el-radio>
      </el-radio-group>
    </div>
    <div class="IndustrySpace" :style="$paddingFun(datas.padding)">
      <div
        :id="'IndustrySpaceEchart_' + ids"
        :ref="'IndustrySpaceEchart_' + ids"
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
    this.IndustrySpaceFun(this.datas)
  },
  methods: {
    selectSpaceRadio () {
      this.IndustrySpaceFun(this.datas)
    },
    IndustrySpaceFun (val) {
      var dom = this.$refs["IndustrySpaceEchart_" + this.ids], xdatas = val.datas[this.spaceRadio].d
      const { optionName } = val
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
          formatter: (v) => {
            return v.name + ':' + v.value + '%'
          }
        },
        title: {
          show: true,
          text: "",
          link: "",
          target: null,
          subtext: val.datas[this.spaceRadio].name,
          sublink: "",
          subtarget: null,
          left: "18%",
          bottom: "42%",
          textAlign: "center",
          // backgroundColor:
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
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
            return "{a|" + name + "}" + xdatas[index] + "%";
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
          itemGap: 15,
        },
        color: ["#cda857", "#4396f3", "#0ff", "#236390"],
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "65%"],
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
          value: xdatas[i],
          name: optionName[i],
        };
      }
      this.$redomEchart(dom, option);
      // myChart.dispatchAction({
      //   type: 'highlight',
      //   seriesIndex: 0,
      //   dataIndex: 0
      // });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 产业空间
#IndustrySpaceEchart_,
[id^="IndustrySpaceEchart_"] {
  width: 100%;
  height: 2rem /* 160/80 */;
}

.SpaceRadioGroup {
  position: absolute;
  right: 0;
  z-index: 1;
}
</style>
