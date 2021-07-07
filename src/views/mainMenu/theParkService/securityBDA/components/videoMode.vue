<template>
  <!-- 视频模式 -->
  <div class="videoMode">
    <LeftRight>
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center> </template>
      <template #right> </template>
    </LeftRight>
  </div>
</template>

<script>
export default {
  name: 'videoMode',
  data () {
    return {
      activeName: 'first',
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
