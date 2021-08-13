<template>
  <!-- 会议大数据分析 -->
  <div class="meetingBDA">
    <LeftRight v-show="!isShowRIght">
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center> </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
  </div>
</template>

<script>
export default {
  name: "meetingBDA",
  data () {
    return {
      // 左侧组件info
      leftInfo: [
        {
          title: "场所类型占比",
          type: "ProportionOfSiteType",
          datas: {
            hys: {
              name: "会议室占比",
              optionName: [
                "小会议室",
                "中会议室",
                "大会议室",
                "VIP会议室",
                "豪华会议室",
              ],
              datas: [38, 18, 18, 16, 10],
            },
            cd: {
              name: "场地占比",
              optionName: [
                "多媒体演播厅",
                "云平台广场",
                "篮球场",
                "排球场",
                "游泳馆",
                "展馆",
                "礼堂",
              ],
              datas: [36, 17, 16, 15, 9, 3, 4],
            },
          },
        },
        {
          title: "今日会议时段",
          type: "SingleBarChart",
          datas: {
            eHeight: 200,
            xAxisD: [
              "09:00",
              "10:00",
              "11:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00",
            ],
            units: ["", "次"],
            datas: [[28, 55, 69, 32, 18, 36, 51, 52, 38, 25]],
          },
        },
      ],
      // 右侧
      rightInfo: [
        {
          title: "今日会议室概况",
          type: "horizontalBarChart",
          datas: {
            data: [
              {
                name: "使用中",
                value: "48%",
              },
              {
                name: "已使用",
                value: "32%",
              },
              {
                name: "空闲中",
                value: "20%",
              },
            ],
          },
        },
        {
          title: "今日会议排期",
          type: "scatterDiagram2",
          datas: {
            datas: [
              {
                name: "今日会议预约数",
                value: this.$randomNumer(50, 90),
                unit: "",
              },
              {
                name: "本月会议预约数",
                value: this.$randomNumer(50, 90),
                unit: "",
              },
            ],
            units: [],
            names: [],
            title: "气泡大小：该时间段预约的会议数量",
            xAxisD: [
              "1栋A座",
              "1栋B座",
              "2栋A座",
              "2栋B座",
              "3栋A座",
              "3栋B座",
            ],
            yAxisD: [
              "09:00",
              "11:00",
              "14:00",
              "16:00",
              "18:00",
              "19:00",
            ],
            yRange: [
              "09:00~10:00",
              "10:00~11:00",
              "14:00~15:00",
              "15:00~16:00",
              "16:00~17:00",
              "18:00~19:00",
              "19:00~20:00",
            ],
            data: [
              [0, 1, this.$randomNumer(3, 5)],
              [0, 3, this.$randomNumer(3, 5)],
              [1, 2, this.$randomNumer(3, 5)],
              [1, 3, this.$randomNumer(3, 5)],
              [3, 0, this.$randomNumer(3, 5)],
              [3, 3, this.$randomNumer(3, 5)],
              [3, 5, this.$randomNumer(3, 5)],
              [2, 3, this.$randomNumer(3, 5)],
              [2, 5, this.$randomNumer(3, 5)],
              [3, 4, this.$randomNumer(3, 5)],
              [3, 2, this.$randomNumer(3, 5)],
              [4, 3, this.$randomNumer(3, 5)],
              [4, 4, this.$randomNumer(3, 5)],
              [4, 5, this.$randomNumer(3, 5)],
              [5, 3, this.$randomNumer(3, 5)],
              [5, 2, this.$randomNumer(3, 5)],
              [6, 3, this.$randomNumer(3, 5)],
              [6, 2, this.$randomNumer(3, 5)],
              [6, 5, this.$randomNumer(3, 5)],
            ],
          },
        },
      ],
    };
  },
  created () {
    this.rightInfo[1].datas.datas[1].value = this.rightInfo[1].datas.datas[0].value * this.$getDayNums('m')
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
