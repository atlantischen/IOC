<template>
  <!-- 物业大数据分析 -->
  <div class="propertyBDA">
    <LeftRight>
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
  name: 'propertyBDA',
  data () {
    return {
      leftInfo: [
        {
          title: "今日设备统计",
          type: "horizontalBarChart",
          datas: {
            datas2: [
              {
                name: '设备总数',
                value: 10900
              }
            ],
            data: [
              {
                name: "在线",
                value: "9672",
              },
              {
                name: "离线",
                value: "523",
              },
              {
                name: "告警",
                value: "334",
              },
              {
                name: "故障",
                value: "371",
              },
            ],
          },
        },
        {
          title: "近七天工单统计",
          type: "singleBarChart",
          datas: {
            // eHeight: 220,
            xAxisD: [
              "6.26",
              "6.27",
              "6.28",
              "6.29",
              "6.30",
              "7.1",
              "7.2"
            ],
            datas2: [
              {
                name: '工单数',
                value: 1067
              },
              {
                name: '未处理工单数',
                value: 129
              },
            ],
            units: ["日期", "个"],
            datas: [[90, 190, 100, 70, 200, 100, 60]],
          },
        },
      ],
      // 右侧
      rightInfo: [
        // {
        //   title: "工单汇总",
        //   type: "PedestrianPosture",
        //   datas: {
        //     eHeight: null,
        //     padding: null,
        //     smooth: true,
        //     unit: ["日期", "人"],
        //     xData: [
        //       "4.13",
        //       "4.14",
        //       "4.15",
        //       "4.16",
        //       "4.17",
        //       "4.18",
        //       "4.19",
        //     ],
        //     datas: [
        //       [300, 390, 300, 210, 350, 450, 320],
        //     ],
        //   },
        // },
      ],
    }
  },
  components: {},
  methods: {
  }
}
</script>

<style lang='less' scoped>
</style>
