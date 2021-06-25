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
  name: 'rentBDA',
  data () {
    return {
      leftInfo: [
        {
          title: '各类型租用统计',
          type: 'shapeOfMountain',
          datas: {
            xData: ["零售商家", "信息技术", "新能源", "新材料", "生物医药", "智能制造", "文化创意", "现代服务", "节能环保"],
            datas: [1234, 1123, 934, 842, 734, 634, 522, 423, 365],
          }
        },
      ],
      rightInfo: [
        {
          title: '企业入驻概况',
          type: 'waterPolo',
          datas: {
            info: [
              {
                name: '已办公',
                value: '77%'
              },
              {
                name: '待入驻',
                value: '16%'
              },
              {
                name: '装修中',
                value: '10%'
              },
            ]
          }
        }
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
