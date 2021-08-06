<template>
  <!-- 综合态势home -->
  <div class="zhts_Home">
    <!-- <button @click="cgLang" class="cgLang">{{ $t("lg.name", lang) }}</button> -->
    <LeftRight :_show="isShowRIght">
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center>
        <SearchBox
          class="SearchBoxClass"
          :text="'搜园区建筑、搜企业、搜商家'"
          :inputV="inputVal"
          @click="clickSwitch()"
        />
        <!-- @_search / @_input -->
      </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
    <RightContent :_show="isShowRIght" :inputVal="inputV" @_c="clickSwitch" />
  </div>
</template>

<script>
import data from "@/utils/falseData.js";
import { homePage } from "@/lang/data/comprehensiveSituational/index";
import i18n from "@/lang/index";
import RightContent from "./components/rightContent.vue";
import * as echarts from "echarts";
// import { aaa } from "@/api/mockApi";
// import axios from "axios";
export default {
  components: { RightContent },
  // name: "zhts",
  data() {
    return {
      inputVal: null,
      inputV: null,
      // 左侧组件info
      leftInfo: [
        {
          title: "园区情况",
          type: "TheParkIs",
          datas: {
            datas1: [
              [
                {
                  data: [79],
                  name: "待入驻企业",
                },
                {
                  data: [168],
                  name: "已入驻企业",
                },
              ],
              [
                {
                  data: [36],
                  name: "装修中企业",
                },
                {
                  data: [132],
                  name: "已办公企业",
                },
              ],
            ],
            datas2: {
              datas: [2.57, 25, 78.3],
              names: ["占地面积", "绿化率", "入驻率"],
            },
          },
        },
        {
          title: "人行态势",
          type: "PedestrianPosture",
          datas: {
            smooth: false,
            unit: ["时间", "人"],
            names: ["访客"],
            // names: ["办公人员", "访客"],
            // xData: ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00"],
            // datas: [
            //   [23, 12, 43, 32, 21, 43],
            //   [34, 2, 32, 32, 32, 23],
            // ],
            xData: this.$timeRangeArr(),
            datas: [
              [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                this.$randomNumer(0, 6),
                this.$randomNumer(6, 9),
                this.$randomNumer(9, 12),
                this.$randomNumer(12, 24),
                this.$randomNumer(20, 24),
                this.$randomNumer(24, 30),
                this.$randomNumer(24, 30),
                this.$randomNumer(24, 32),
                this.$randomNumer(24, 30),
                this.$randomNumer(4, 9),
                this.$randomNumer(1, 4),
                0,
                0,
                0,
                0,
                0,
              ],
            ],
            datas2: [
              {
                name: "今日总人流量",
                value: 342543,
              },
              {
                name: "今日总访客",
                value: data.VisitorsToday,
              },
            ],
          },
        },
        {
          title: "园区产值",
          type: "TheParkOutputVal",
          datas: {
            optionName: [
              "新能源",
              "新材料",
              "生物医药",
              "智能制造",
              "信息技术",
              "文化创意",
              "现代服务",
              "节能环保",
              "商家",
            ],
            datas: [24, 16, 13, 15, 15, 12, 2, 2, 1],
            data2: {
              value: 164,
              name: "税收总数",
              unit: "(亿元)",
            },
          },
        },
      ],
      // 右侧
      rightInfo: [
        {
          title: "能耗态势",
          type: "EnergyTrend",
          datas: {
            energyTrendData: [
              {
                unit: "kW.h",
                text: "电耗",
                todayPower: 12968,
                monthPower: this.$getDayNums("m") * 1296,
                yearPower: this.$getDayNums("y") * 1296,
              },
              {
                unit: "m³",
                text: "水耗",
                todayPower: 2056,
                monthPower: this.$getDayNums("m") * 205,
                yearPower: this.$getDayNums("y") * 205,
              },
            ],
          },
        },
        {
          title: "车行态势",
          type: "PedestrianPosture",
          datas: {
            smooth: true,
            names: ["进", "出"],
            unit: ["时间", "辆"],
            // xData: [
            //   "00:00",
            //   "02:00",
            //   "04:00",
            //   "06:00",
            //   "08:00",
            //   "10:00",
            //   "12:00",
            // ],
            xData: this.$timeRangeArr(),
            datas: [
              [
                7,
                9,
                3,
                14,
                9,
                36,
                23,
                14,
                9,
                36,
                23,
                14,
                9,
                36,
                23,
                14,
                9,
                36,
                14,
                9,
                36,
                14,
                9,
                36,
              ],
              [
                10,
                15,
                12,
                23,
                20,
                45,
                36,
                20,
                23,
                20,
                23,
                20,
                45,
                36,
                20,
                23,
                20,
                23,
                20,
                45,
                36,
                23,
                20,
                45,
              ],
            ],
            datas2: [
              {
                value: 2465,
                name: "总车位",
              },
              {
                value: 381,
                name: "剩余车位",
              },
              {
                value: 2084,
                name: "在场车辆",
              },
            ],
          },
        },
        {
          title: "设备态势",
          type: "equipmentSituation",
          datas: {
            equipmentSDatas: [
              {
                value: 1168,
                name: "安防",
              },
              {
                value: 936,
                name: "能耗",
              },
              {
                value: 1009,
                name: "网络",
              },
              {
                value: 1027,
                name: "消防",
              },
            ],
            names: ["正常", "故障"],
            xAxisName: ["安防", "能耗", "网络", "消防"],
            datas: [
              [1123, 924, 1000, 1014],
              [45, 12, 9, 13],
            ],
          },
        },
      ],
      isShowRIght: false,
      isShowTipBox: true,
      centerDatasList: [
        {
          name: "园区总人数",
          val: 32856,
        },
        {
          name: "剩余车位数",
          val: 381,
        },
        {
          name: "未处理告警数",
          val: this.$randomNumer(0, 9),
        },
        {
          name: "设备异常数",
          val: 16,
        },
      ],
      tipList: [
        {
          text: "告警！2021-04-30 15:00{李玲}在{公寓广场}发生了{黑名单告警}",
        },
      ],
      lang: null,
    };
  },
  computed: {
    lang() {
      return this.$store.state.comState.lang;
    },
  },
  watch: {
    "$store.state.comState.lang"(n, o) {
      // this.lang = this.$t("lg.name", n);
      // this.leftInfo = JSON.parse(
      //   this.$t("comprehensiveSituational.homePage")
      // ).leftInfo;
      // this.rightInfo = JSON.parse(
      //   this.$t(
      //     "comprehensiveSituational.homePage",
      //     this.$store.state.comState.lang
      //   )
      // ).rightInfo;
    },
  },
  created() {
    this.$store.dispatch("SET_CENTERDATAS", [true, this.centerDatasList]);
    // (this.leftInfo = homePage.leftInfo),
    //   (this.rightInfo = homePage.rightInfo)
  },
  mounted() {
    // aaa().then(r=>{
    //   console.log(r)
    // })
    // axios('/meun').then(req => {
    //   console.log('xxxxxxxxx', req)
    // })
    let _l = this.leftInfo[1].datas.xData.length;
    let _l2 = this.rightInfo[1].datas.xData.length;
    this.leftInfo[1].datas.datas[0] = this.leftInfo[1].datas.datas[0].slice(
      0,
      _l
    );
    this.rightInfo[1].datas.datas[0] = this.rightInfo[1].datas.datas[0].slice(
      0,
      _l2
    );
    this.rightInfo[1].datas.datas[1] = this.rightInfo[1].datas.datas[1].slice(
      0,
      _l2
    );
  },
  destroyed() {},
  methods: {
    showTipBoxHandle(val) {},
    clickSwitch(val) {
      this.inputVal = val;
      this.inputV = null;
      this.isShowRIght = !this.isShowRIght;
    },
    cgLang() {
      let a;
      if (localStorage.getItem("language") == "en" || i18n.locale == "en") {
        a = "zh";
      } else {
        a = "en";
      }
      this.$store.dispatch("SET_LANG", a);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.zhts_Home {
  // position: relative;
}
.cgLang {
  position: fixed;
  left: 0;
  top: 0;
}
.SearchBoxClass {
  padding-top: 1rem /* 80/80 */;
  width: 6.25rem /* 500/80 */;
}
</style>
