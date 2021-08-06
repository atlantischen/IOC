<template>

    <div class="myVideo-video" v-for="item in monitorList" :key="item.id">
      <video
      muted
      controls
      height="500" 
      class="video"
      :id="'videoElement'+item.id"
    ></video>
    </div>
</template>
<script>
import flvjs from "flv.js";
export default {
  data() {
    return {
      flvPlayer: null,
    };
      
  },
  props:{
    monitorList:{
      type:Object,
      required:true
    },
    
  },
  methods: {
   createVideo() {
      this.monitorList.forEach(item => {
           if (flvjs.isSupported()) {
        var videoElement = document.getElementById("videoElement"+item.id);
        this.flvPlayer = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          hasAudio: false,
          url:item.url,
        },
        {
            cors: true, // 是否跨域
            enableWorker: true, // 是否多线程工作
            enableStashBuffer: false, // 是否启用缓存
            stashInitialSize: 128, // 缓存大小(kb)  默认384kb
            autoCleanupSourceBuffer: true // 是否自动清理缓存
        }
        );
        this.flvPlayer.attachMediaElement(videoElement);
        this.flvPlayer.load();
        this.flvPlayer.play();
      }
      // this.flvPlayer.on(flvjs.Events.ERROR, (errorType, errorDetail, errorInfo) => {
		  //   console.log("errorType:", errorType);
      //   console.log("errorDetail:", errorDetail);
      //   console.log("errorInfo:", errorInfo);
      //   // this.loadStatus=true
      //   // this.statusMsg="正在重连。。。"
      //   //视频出错后销毁重新创建
      //    if (this.flvPlayer) {
      //     this.flvPlayer.pause();
      //     this.flvPlayer.unload();
      //     this.flvPlayer.detachMediaElement();
      //     this.flvPlayer.destroy();
      //     this.flvPlayer= null;
      //   }
      //     this.createVideo();
      // });

      });
      //  this.timerId = setInterval(() => {
      //     if (this.videoElement.buffered.length > 0) {
      //       const end = this.videoElement.buffered.end(0);  // 视频结尾时间
      //       const current = this.videoElement.currentTime;  //  视频当前时间
      //       const diff = end - current;// 相差时间
      //       console.log(diff);
      //       const diffCritical = 4; // 这里设定了超过4秒以上就进行跳转
      //       const diffSpeedUp = 1; // 这里设置了超过1秒以上则进行视频加速播放
      //       const maxPlaybackRate = 4;// 自定义设置允许的最大播放速度
      //       let playbackRate = 1.0; // 播放速度
      //       if (diff > diffCritical) {
      //         console.log("相差超过4秒，进行跳转");
      //         this.videoElement.currentTime = end - 1.5;
      //         playbackRate = Math.max(1, Math.min(diffCritical, 16));
      //       } else if (diff > diffSpeedUp) {
      //         console.log("相差超过1秒，进行加速");
      //         playbackRate = Math.max(1, Math.min(diff, maxPlaybackRate, 16))
      //       }
      //       this.videoElement.playbackRate = playbackRate;
      //       if (this.videoElement.paused) {
      //         this.flvPlayer.play()
      //       }
      //     }
      //   }, 1000);

     
    },
    play() {
      this.flvPlayer.play();
    },
    destoryVideo() {
      this.flvPlayer.pause();
      this.flvPlayer.unload();
      this.flvPlayer.detachMediaElement();
      this.flvPlayer.destroy();
      this.flvPlayer = null;
    },
     
    reloadVideo(flvPlayer) {
      this.destoryVideo(flvPlayer);
      this.createVideo();
    },
  },
      
  mounted() {

    this.$nextTick(() => {
      this.createVideo();
    });
    setInterval(() => {
      if (this.flvPlayer.buffered.length) {
        let end = this.flvPlayer.buffered.end(0);//获取当前buffered值
        let diff = end - this.flvPlayer.currentTime;//获取buffered与currentTime的差值
        if (diff >= 0.5) {//如果差值大于等于0.5 手动跳帧 这里可根据自身需求来定
          this.flvPlayer.currentTime = this.flvPlayer.buffered.end(0);//手动跳帧
       }
      }
    }, 1000); //2000毫秒执行一次  

  },

  destroyed () {
    this.destoryVideo();
    this.reloadVideo(flvPlayer)
  },

  // computed: {
  //   player() {
  //     return this.$refs.videoPlayer.player;
  //   },
  // },
};
</script>
<style>
.myVideo-video{
  /* width: 49%; */
  margin-bottom: .0625rem /* 5/80 */;
  
      /* height:100%;
      width: 4.375rem; */
}
.video{
  object-fit: fill;
  height: 1.375rem /* 110/80 *//* 126/80 */;
  /* width: 49%; */
  /* height:110px136/80156/80; */
}
</style>
