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
  data() {
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
              datas: [35, 15, 15, 13, 8, 2],
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
              datas: [35, 15, 15, 13, 8, 2, 3],
            },
          },
        },
        {
          title: "今日会议时段",
          type: "singleBarChart",
          datas: {
            eheight: 220,
            xAxisD: [
              "08:00",
              "09:00",
              "10:00",
              "11:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
            ],
            units: ["", "个"],
            datas: [28, 55, 69, 32, 18, 36, 51, 52, 38, 25],
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
                value: 128,
                unit: "",
              },
              {
                name: "今日会议室预约数",
                value: 97,
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
              "08:00",
              "10:00",
              "12:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
            ],
            yRange: [
              "08:00~9:00",
              "10:00~11:00",
              "11:00~12:00",
              "12:00~15:00",
              "15:00~16:00",
              "16:00~17:00",
              "18:00~19:00",
              "19:00~20:00",
            ],
            data: [
              [0, 1, 3],
              [0, 3, 4],
              [0, 6, 6],
              [0, 7, 8],
              [1, 0, 2],
              [1, 3, 2],
              [1, 5, 10],
              [2, 3, 3],
              [2, 5, 5],
              [3, 4, 1],
              [3, 2, 3],
              [4, 3, 6],
              [4, 4, 1],
              [4, 5, 4],
              [5, 1, 10],
              [5, 2, 5],
              [6, 1, 5],
              [6, 2, 5],
              [6, 5, 7],
            ],
          },
        },
      ],
    };
  },
  components: {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
