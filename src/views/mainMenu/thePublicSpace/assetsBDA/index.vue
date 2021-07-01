<template>
  <!-- 资产大数据分析 -->
  <div class="assetsBDA">
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
  name: "assetsBDA",
  data() {
    return {
      // 左侧组件info
      leftInfo: [
        {
          title: "IT资产使用概况",
          type: "PieChart",
          datas: {
            data: {
              name: "IT资产数",
              value: 2224,
            },
            optionName: ["领用出库", "在库", "入库中"],
            datas: [60, 24, 16],
            nums: [1334, 534, 336],
          },
        },
        {
          title: "资产设备统计",
          type: "UpBarChart",
          datas: {
            units: ["", "台"],
            names: ["使用中", "入库中", "离线中", "故障中"],
            xAxisData: [
              "摄像机",
              "照明",
              "空调",
              "BA",
              "大屏",
              "机房",
              "门禁",
              "打印机",
            ],
            yAxisData: [
              [2000, 2700, 1900, 1100, 800, , 2434, 2000, 1000],
              [400, 200, 500, 250, 100, 120, 430, 23],
              [400, 200, 500, 250, 100, 120, 430, 32],
              [220, 223, 243, 25, 223, 243, 12, 223],
            ],
          },
        },
      ],
      // 右侧
      rightInfo: [],
    };
  },
  components: {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
