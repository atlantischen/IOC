<template>
  <!-- 综合态势home -->
  <div class="zhts_Home">
    <!-- <button @click="cgLang" class="cgLang">{{ $t("lg.name", lang) }}</button> -->
    <RightContent v-show="isShowRIght" :inputVal="inputV" @_c="clickSwitch" />
    <LeftRight v-show="!isShowRIght">
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center>
        <SearchBox
          class="SearchBoxClass"
          :text="'搜园区建筑、搜企业、搜商家'"
          :inputV="inputVal"
          @_search="clickSwitch"
          @_input="clickSwitch"
        />
      </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
  </div>
</template>

<script>
import { homePage } from "@/lang/data/comprehensiveSituational/index";
import i18n from "@/lang/index";
import RightContent from "./components/rightContent.vue";
import * as echarts from "echarts";
// import { aaa } from "@/api/mockApi";
// import axios from "axios";
export default {
  components: { RightContent },
  // name: "zhts",
  data () {
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
                  data: [158],
                  name: "待入驻企业",
                },
                {
                  data: [234],
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
            // names: ["办公人员", "访客"],
            names: ["访客"],
            xData: ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00"],
            // datas: [
            //   [23, 12, 43, 32, 21, 43],
            //   [34, 2, 32, 32, 32, 23],
            // ],
            datas: [
              [34, 2, 32, 32, 32, 23],
            ],
            datas2: [
              {
                name: "今日总人流量",
                value: 28264,
              },
              {
                name: "今日总访客",
                value: 289,
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
            datas2: [
              {
                name: "今日总人流量",
                value: 28264,
              },
              {
                name: "今日总访客",
                value: 289,
              },
            ],
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
                todayPower: 632,
                monthPower: 15752,
                yearPower: 200163,
              },
              {
                unit: "m³",
                text: "水耗",
                todayPower: 205,
                monthPower: 5380,
                yearPower: 62583,
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
            xData: [
              "00:00",
              "02:00",
              "04:00",
              "06:00",
              "08:00",
              "10:00",
              "12:00",
            ],
            datas: [
              [7, 9, 3, 14, 9, 36, 23],
              [10, 15, 12, 23, 20, 45, 36],
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
            datas: [[1023, 824, 1000, 1014], [35, 32, 53, 82]],
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
    lang () {
      return this.$store.state.comState.lang;
    },
  },
  watch: {
    "$store.state.comState.lang" (n, o) {
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
  created () {
    this.$store.dispatch('SET_CENTERDATAS', [true, this.centerDatasList])
    // (this.leftInfo = homePage.leftInfo),
    //   (this.rightInfo = homePage.rightInfo)
  },
  mounted () {
    console.log(this.$timeRangeArr('00:00', '11:00'))
    // aaa().then(r=>{
    //   console.log(r)
    // })
    // axios('/meun').then(req => {
    //   console.log('xxxxxxxxx', req)
    // })
  },
  destroyed () { },
  methods: {
    showTipBoxHandle (val) { },
    clickSwitch (val) {
      this.inputVal = val;
      this.inputV = null;
      this.isShowRIght = !this.isShowRIght;
    },
    cgLang () {
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
