<template>
  <!-- 公共空间home -->
  <div class="homePage">
    <LeftRight>
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center>
        <CenterDatas :list="centerDatasList" />
      </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "homePage",
  data () {
    return {
      leftInfo: [
        {
          title: "产业空间",
          type: "IndustrySpace",
          datas: {
            optionName: ["200平以下", "200~500平", "500~1000平", "1000平以上"],
            datas: [
              {
                name: '空间占比',
                d: [76.16, 9.62, 5.93, 8.29]
              },
              {
                name: '空间租售',
                d: [5.93, 8.29, 76.16, 9.62]
              }
            ]
          },
        },
        {
          title: "产业空间分布",
          type: "IndustrySpace2",
          datas: {
            optionName: [
              "新能源、新材料",
              "智能制造",
              "信息技术",
              "生物医药",
              "文化创意",
              "现代服务",
              "节能环保",
            ],
            datas: [23.46, 24.29, 32.26, 1.2, 12.8, 3.25, 2.74]
          },
        },
        {
          title: "场地使用TOP5",
          type: "singleBarChart",
          datas: {
            eHeight: 220,
            xAxisD: [
              "14F会议室",
              "14F演播室",
              "16F小会议室",
              "16F大会议室",
              "天平台广场",
            ],
            names: null,
            units: ["", "个"],
            datas: [
              [78, 60, 55, 38, 27]
            ],
          },
        },
      ],
      rightInfo: [
        {
          title: "场地空间",
          type: "FloorSpace",
          datas: {
            optionName: ["多功能演播厅", "云平台广场", "会议室", "运动中心"],
            datas: [59.6, 21.43, 10.37, 8.6],
            data2: [
              {
                name: '今日预定次数',
                value: 12
              },
              {
                name: '累计预定次数',
                value: 284
              },
            ]
          },
        },
        {
          title: "环境空间",
          type: "EnvironmentalSpace",
          datas: {
          },
        },
        {
          title: "今日气温趋势",
          type: "PedestrianPosture",
          datas: {
            smooth: true,
            unit: ["", "℃"],
            rightTip: {
              name: '体感温度：',
              value: '26℃'
            },
            xData: [
              "0h",
              "2h",
              "4h",
              "6h",
              "8h",
              "10h",
              "12h",
              "14h",
              "16h",
              "18h",
              "20h",
              "22h",
              "24h",],
            datas: [
              [15, 17, 16, 17, 19, 20, 22, 25, 23, 22, 21, 17, 14]
            ],
          },
        },
      ],
      centerDatasList: [
        {
          name: "多功能演播厅",
          val: 15,
        },
        {
          name: "云平台广场",
          val: 8,
        },
        {
          name: "会议室",
          val: 45,
        },
      ],
    };
  },
  components: {},
  mounted () {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
</style>
