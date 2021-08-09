<template>
  <div class="myVideo-video" :style=" 'width:'+width+'%'" v-for="item in monitorList" :key="item.id">
    <video
      muted
      controls
     
      :style=" 'height:'+height+'px'"
      class="video"
      :id="'videoElement' + item.id"
    ></video>
  </div>
</template>
<script>
import flvjs from "../utils/flv/flv.js";
export default {
  data() {
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
    width:{
         type: String,
      required: true,
    },
      height:{
         type: String,
 
    }
  },
  methods: {
    createVideo() {
      this.monitorList.forEach((item) => {
        if (flvjs.isSupported()) {
          var videoElement = document.getElementById("videoElement" + item.id);
          let flvPlayer = flvjs.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            url: item.url,
          });
          this.arrList.push(flvPlayer);
          flvPlayer.attachMediaElement(videoElement);
          flvPlayer.load();
          flvPlayer.play();
          //    this.flvPlayer.on('error', err => {
          //   console.log('err', err);
          // });
          flvPlayer.on(flvjs.Events.ERROR, (errorType, errorDetail, errorInfo) => {
                // alert('wwwwwwwwwwwwwwwwwww')
            //视频出错后销毁重新创建
             if (this.flvPlayer) {
              this.flvPlayer.pause();
              this.flvPlayer.unload();
              this.flvPlayer.detachMediaElement();
              this.flvPlayer.destroy();
              this.flvPlayer= null;
              this.createPlayer(videoElement, item.url);
            }
          });
        }
      });
    },
    play() {
      this.flvPlayer.play();
    },
    destoryVideo() {
      this.arrList.forEach((item) => {
        item.pause();
        item.unload();
        item.detachMediaElement();
        item.destroy();
        item = null;
      });
    },
    handleClick(){
      // this.destoryVideo()
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.createVideo();
    });
  },
  onUnmounted() {
    this.destoryVideo();
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
  height: 1.375rem ;
  /* width: 49%; */
  /* height:110px136/80156/80; */
}
</style>
