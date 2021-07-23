<template>
  <div class="is-full">
    <div id="video" class="video-content"></div>
  </div>
</template>

<script>
const CKplayer = window.ckplayer
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      player: null,
      videoObject: {
        container: '.video-content', // 容器的ID或className
        variable: 'player', // 播放函数名称
        autoplay: true, // 是否自动播放
        live: true // 是否是直播视频 true = 直播，false = 点播}
      }
    }
  },
  computed: {},
  watch: {},
  beforeCreate () { },
  created () { },
  beforeMount () { },
  mounted () {
    var videoObject = {
      ...this.videoObject,
      video: 'rtsp://admin:Admin8888@172.21.25.109', // 在线可用的rtmp源
      container: '#video'
    }
    this.player = new CKplayer(videoObject)
  },
  beforeUpdate () { },
  updated () { },
  activated () { },
  deactivated () { },
  beforeDestroy () { },
  destroyed () { },
  methods: {}
}
</script>

<style>
.video-content,.is-full {
  height: 6.25rem /* 500/80 */;
  width: 6.25rem /* 500/80 */;
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: red;
  transform: translate(-50%,-50%);
}
</style>
