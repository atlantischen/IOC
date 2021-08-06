<template>
  <!-- 园区服务home -->
  <div class="homePage">
    <ServiceSystem />
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
  name: "homePage",
  data() {
    return {
      leftInfo: [
        {
          title: "服务办理概况",
          type: "ServiceOverview",
          datas: {
            eHeight: null,
            padding: null,
            header: ["预定", "受理", "完成"],
            tabList: [
              {
                name: "本月",
                data: [390, 478, 300],
              },
              {
                name: "上月",
                data: [268, 292, 568],
              },
            ],
            return: [
              {
                state: "up",
                data: this.$randomNumer(1, 5, 2) + "%",
              },
              {
                state: "up",
                data: this.$randomNumer(1, 5, 2) + "%",
              },
              {
                state: "down",
                data: this.$randomNumer(1, 5, 2) + "%",
              },
            ],
          },
        },
        {
          title: "热门服务TOP5",
          type: "SingleBarChart",
          datas: {
            eHeight: 240,
            padding: null,
            xAxisD: [
              "车位申请",
              "会议室预定",
              "报事报修",
              "园区导航",
              "意见反馈",
            ],
            units: ["", "个"],
            datas: [
              [
                this.$randomNumer(250, 280),
                this.$randomNumer(150, 200),
                this.$randomNumer(100, 150),
                this.$randomNumer(50, 100),
                this.$randomNumer(0, 50),
              ],
            ],
            leftTip: {
              name: "服务单合计：",
              value: 436,
              unit: "单",
            },
            yearsList: [
              {
                label: "2021",
                value: 2021,
              },
              {
                label: "2020",
                value: 2020,
              },
              {
                label: "2019",
                value: 2019,
              },
            ],
            momthsList: [
              {
                label: "12月",
                value: 12,
              },
              {
                label: "11月",
                value: 11,
              },
              {
                label: "10月",
                value: 10,
              },
              {
                label: "9月",
                value: 9,
              },
              {
                label: "8月",
                value: 8,
              },
              {
                label: "7月",
                value: 7,
              },
              {
                label: "6月",
                value: 6,
              },
              {
                label: "5月",
                value: 5,
              },
              {
                label: "4月",
                value: 4,
              },
              {
                label: "3月",
                value: 3,
              },
              {
                label: "2月",
                value: 2,
              },
              {
                label: "1月",
                value: 1,
              },
            ],
          },
        },
      ],
      rightInfo: [
        {
          title: "服务办理总数",
          type: "PedestrianPosture",
          datas: {
            eHeight: 240,
            padding: null,
            unit: ["", "单"],
            // xData: [
            //   "1月",
            //   "2月",
            //   "3月",
            //   "4月",
            //   "5月",
            //   "6月",
            //   "7月",
            //   "8月",
            //   "9月",
            //   "10月",
            //   "11月",
            //   "12月",
            // ],
            xData: this.$monthRangeArr(true),
            // datas: [
            //   [119, 120, 130, 140, 143, 154, 160, 162, 169, 170, 190, 200],
            // ],
            datas: [
              [
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
                this.$randomNumer(400, 700),
              ],
            ],
            leftTip: {
              name: "服务单合计：",
              value: 436,
              unit: "单",
            },
            yearsList: [
              {
                label: "2021",
                value: 2021,
              },
              {
                label: "2020",
                value: 2020,
              },
              {
                label: "2019",
                value: 2019,
              },
            ],
          },
        },
        {
          title: "各服务办理分布",
          type: "DistributionService",
          datas: {
            eHeight: null,
            padding: null,
            optionName: ["个人服务", "基础服务", "企业服务", "党群服务"],
            datas: [26.79, 47.35, 20.45, 5.41],
          },
        },
      ],
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
</style>
