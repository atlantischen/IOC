<template>
  <!-- 综合态势home -->
  <div class="zhts_Home">
    <RightContent v-show="isShowRIght" :inputVal="inputV" @_c="clickSwitch" />
    <LeftRight v-show="!isShowRIght">
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center>
        <CenterDatas :list="centerDatasList" v-show="false" />
        <SearchBox
          class="SearchBoxClass"
          :text="'搜园区建筑、搜企业、搜商家'"
          :inputV="inputVal"
          @_search="clickSwitch"
          @_input="clickSwitch"
        />
        <TipBox :_data="tipList" />
      </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
    <AlarmAck />
  </div>
</template>

<script>
import AlarmAck from "@/views/mainMenu/comprehensiveSituational/homePage/components/alarmAck.vue";
import RightContent from "./components/rightContent.vue";
import * as echarts from "echarts";
// import { aaa } from "@/api/mockApi";
// import axios from "axios";
export default {
  components: { RightContent, AlarmAck },
  name: "zhts",
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
                  data: [28],
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
              datas: [23, 34, 45],
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
            names: ["办公人员", "访客"],
            xData: ["05:00", "06:00", "07:00", "08:00", "09:00", "10:00"],
            datas: [
              [23, 12, 43, 32, 21, 43],
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
            datas: [43, 34, 32, 34, 35, 32, 20, 20, 8],
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
                value: 3200,
                name: "总车位",
              },
              {
                value: 218,
                name: "剩余车位",
              },
              {
                value: 2954,
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
            datas: [12530, 23440, 24520, 23440],
          },
        },
      ],
      isShowRIght: false,
      isShowTipBox: true,
      centerDatasList: [
        {
          name: "园区总人数",
          val: 328556,
        },
        {
          name: "剩余车位数",
          val: 1241,
        },
        {
          name: "未处理告警数",
          val: 39,
        },
        {
          name: "设备异常数",
          val: 16,
        },
      ],
      tipList: [
        {
          text: "告警！2021-04-30 15:00{李玲}在{公寓广场}发生了{黑名单告警}",
        }
      ],
    };
  },
  created () {
  },
  mounted () {
    this.$SendMessageToUnity("PopUpWarningNoticesBar", { isOpen: true });
    console.log("=================PopUpWarningNoticesBar, { isOpen: true })")
    // aaa().then(r=>{
    //   console.log(r)
    // })
    // axios('/meun').then(req => {
    //   console.log('xxxxxxxxx', req)
    // })
  },
  destroyed () {
  },
  methods: {
    showTipBoxHandle (val) { },
    clickSwitch (val) {
      this.inputVal = val
      this.inputV = null
      this.isShowRIght = !this.isShowRIght;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.zhts_Home {
  // position: relative;
}
.SearchBoxClass {
  width: 6.25rem /* 500/80 */;
}
</style>
