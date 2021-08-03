<template>
  <!-- 租赁大数据分析 -->
  <div class="rentBDA">
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
  name: "rentBDA",
  data () {
    return {
      leftInfo: [
        {
          title: "租赁概况",
          type: "LeaseSummary",
          datas: {
            optionName: ["空置产业空间", "已租产业空间"],
            unit: '万平',
            xAxiasD: [10.985, 88.565],
            datas: {
              name: '园区总面积',
              value: 99.55
            }
          },
        },
        {
          title: "各类型租用统计",
          type: "shapeOfMountain",
          datas: {
            xData: [
              "零售商家",
              "信息技术",
              "新能源",
              "新材料",
              "生物医药",
              "智能制造",
              "文化创意",
              "现代服务",
              "节能环保",
            ],
            datas: [1234, 1123, 934, 842, 734, 634, 522, 423, 365],
            proportion: [45, 35, 26, 25, 13, 9, 7, 4, 2],
          },
        },
      ],
      rightInfo: [
        {
          title: "企业入驻概况",
          type: "waterPolo",
          datas: {
            info: [
              {
                name: "已办公",
                value: "77%",
              },
              {
                name: "待入驻",
                value: "13%",
              },
              {
                name: "装修中",
                value: "10%",
              },
            ],
          },
        },
        {
          title: "今年与去年各类型企业产值与税收",
          type: "ScatterDiagram",
          datas: {
            datas: [
              {
                name: "今年园区总产值",
                value: 324543233,
                unit: "元",
              },
              {
                name: "今年园区总税收值",
                value: 48543233,
                unit: "元",
              },
            ],
            units: ["万元", "万元"],
            names: ["今年", "去年"],
            title: "气泡大小：企业类型数量",
            xAsixD: [100, 200, 300, 400, 500, 600, 700],
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
