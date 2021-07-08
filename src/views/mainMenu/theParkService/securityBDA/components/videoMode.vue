<template>
  <!-- 视频模式 -->
  <div class="videoMode">
    <ul class="videoMode_Box x_sb_rap">
      <li v-for="i in 12" :key="i" @click="lookVideo(i)"></li>
    </ul>
    <QDialog :Visible="Visible" @off="openCloseDialog" />
  </div>
</template>

<script>
export default {
  name: 'videoMode',
  data () {
    return {
      Visible: false,
      videoDatas: [
        {
          id: 1,
          local: '16楼C区铭筑'
        },
        {
          id: 2,
          local: '14楼A区铭筑'
        },
        {
          id: 3,
          local: '15楼D区铭筑'
        },
        {
          id: 4,
          local: '16楼C区铭筑'
        },
        {
          id: 5,
          local: '16楼C区铭筑'
        },
        {
          id: 6,
          local: '16楼C区铭筑'
        },
        {
          id: 7,
          local: '16楼C区铭筑'
        },
        {
          id: 8,
          local: '16楼C区铭筑'
        },
        {
          id: 9,
          local: '16楼C区铭筑'
        },
        {
          id: 10,
          local: '16楼C区铭筑'
        },
        {
          id: 11,
          local: '16楼C区铭筑'
        },
        {
          id: 12,
          local: '16楼C区铭筑'
        },
        {
          id: 13,
          local: '16楼C区铭筑'
        },
        {
          id: 14,
          local: '16楼C区铭筑'
        },
        {
          id: 15,
          local: '16楼C区铭筑'
        },
        {
          id: 16,
          local: '16楼C区铭筑'
        },
        {
          id: 17,
          local: '16楼C区铭筑'
        },
        {
          id: 18,
          local: '16楼C区铭筑'
        },
      ]
    }
  },
  components: {},
  methods: {
    openCloseDialog (val) {
      this.Visible = val
    },
    lookVideo (val) {
      this.openCloseDialog(true)
    }
  }
}
</script>

<style lang='less' scoped>
.videoMode_Box {
  width: 20.45rem /* 1636/80 */;
  height: 8.55rem /* 684/80 */;
  position: fixed;
  top: 1.875rem /* 150/80 */;
  left: 50%;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  z-index: 108;
  li {
    width: 5rem /* 400/80 */;
    height: 2.75rem /* 220/80 */;
    background: #111;
    border-radius: 0.0625rem /* 5/80 */;
    cursor: pointer;
  }
}
</style>
