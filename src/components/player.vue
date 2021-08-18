<template>
  <div
    class="myVideo-video"
    :style="'width:' + width + '%'"
    v-for="item in monitorList"
    :key="item.id"
  >
    <video
      muted
      controls
      disablePictureInPicture
      :style="'height:' + height + 'px'"
      class="video"
      :id="'videoElement' + item.id"
    ></video>
  </div>
</template>
<script>
import flvjs from "flv.js";
export default {
  data () {
    return {
      flvPlayer: null,
      arrList: [],
    };
  },
  props: {
    monitorList: {
      type: Object,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
    },
    dialogShow: {
      type: Boolean,
    },
 
  },
  methods: {
    createVideo () {
      this.monitorList.forEach((item) => {
        if (flvjs.isSupported()) {
          var videoElement = document.getElementById("videoElement" + item.id);
          let flvPlayer = flvjs.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            url: item.url,
          },
           {
            enableWorker: false, //不启用分离线程
            enableStashBuffer: false, //关闭IO隐藏缓冲区
            reuseRedirectedURL: true, //重用301/302重定向url，用于随后的请求，如查找、重新连接等。
            autoCleanupSourceBuffer: true //自动清除缓存
          }
          )
          this.arrList.push(flvPlayer);
          flvPlayer.attachMediaElement(videoElement);
          flvPlayer.load();
          flvPlayer.play();
          //    this.flvPlayer.on('error', err => {
          //   console.log('err', err);
          // });

          // flvPlayer.on(
          //   flvjs.Events.ERROR,
          //   (errorType, errorDetail, errorInfo) => {
          //     //视频出错后销毁重新创建
          //     if (flvPlayer) {
          //      flvPlayer.pause();
          //       flvPlayer.unload();
          //       flvPlayer.detachMediaElement();
          //       flvPlayer.destroy();
          //       flvPlayer = null;
          //       flvjs.createPlayer(videoElement, item.url);
          //     }
          //   }
          // );
        }
      });
    },
    play () {
      this.flvPlayer.play();
    },
    destoryVideo () {
      this.arrList.forEach((item) => {
        item.pause();
        item.unload();
        item.detachMediaElement();
        item.destroy();
        item = null;
      });
       this.arrList=[]
    },
    handleClick() {
      // this.destoryVideo()
    },
  },
  watch: {
    dialogShow: {
      immediate: true,
      handler(n) {
        if (n) {
          this.$nextTick(() => {
            this.createVideo();
          });
        } else {
          this.destoryVideo();
        }
      },
    },
  },

  mounted() {
    console.log(this.dialogShow,'dialogShow');
    // setTimeout(() => {
    //   this.createVideo();
    // }, 3000);
  },
  onUnmounted() {
    // this.destoryVideo();
  },

  // computed: {
  //   player() {
  //     return this.$refs.videoPlayer.player;
  //   },
  // },
};
</script>
<style>
.myVideo-video {
  /* width: 49%; */
  margin-bottom: 0.0625rem 5/80;

  /* height:100%;
      width: 4.375rem; */
}
.video {
  object-fit: fill;
  width: 100%;
  height: 1.375rem;
  /* width: 49%; */
  /* height:110px136/80156/80; */
}
</style>
