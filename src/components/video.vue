<template>
  <div class="container">
    <div class="warper">
      <el-dialog
        center
        :title="videoTitle"
        v-model="dialogVideoVisible"
        :destroy-on-close="true"
        @close="closeDialog"
      >
        <div class="box">
          <video
            class="video"
            ref="myVideo"
            :src="videoTitle=='视频回放_1号梯轿厢_2020年12月18日'?url1:url2"
            @timeupdate="timeupdate"
            @canplay="getTotal"
        
          ></video>
          <div class="controls">
            <div class="play_btn" @click="play()">
              <img
                :src="
                  isPaused
                    ? require('../assets/img/bfz_pic.png')
                    : require('../assets/img/bf_pic.png')
                "
                alt=""
              />
            </div>
            <span class="time">{{ currentTime }} / {{ totalTime }}</span>
            <div class="progress">
              <el-slider
                v-model="currentTimeVal"
                :max="durationProgress"
                :show-tooltip="false"
                @change="getNewTime"
              >
              </el-slider>
            </div>
            <div class="download" @click="downlad">
              <i class="iconfont icon-xiazai"></i>
              <span class="font_text">下载</span>
            </div>
            <div class="playSpeed">
              <el-select @change="changePlaySpeed" v-model="initPlaySpeed">
                <el-option
                  v-for="_t in speedList"
                  :key="_t.val"
                  :value="_t.val"
                  :label="_t.label"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVideoVisible: this.videoShow,
      myvideo: "",
      isPaused: false,
      currentTimeVal: 0, // 进度条当前播放时间，
      durationProgress: 0, // 进度条的最大值
      currentTime: "00:00", //当前播放时间
      totalTime: "00:00", //总时长
      speedList: [
        {
          val: 0.5,
          label: "0.5X",
        },
        {
          val: 0.75,
          label: "0.75X",
        },
        {
          val: 1.0,
          label: "1.0X",
        },
        {
          val: 1.25,
          label: "1.25X",
        },
        {
          val: 1.5,
          label: "1.5X",
        },
        {
          val: 2.0,
          label: "2.0X",
        },
        {
          val: 3.0,
          label: "3.0X",
        },
      ], // 倍速设置
      initPlaySpeed: 1.0,
      url1:require('@/assets/video/轿厢内视频2.mp4'),
      url2:require('@/assets/video/楼梯间视频1.mp4')
    };
  },
  props: {
    videoTitle: {
      type: String,
      default: "",
    },
    videoShow: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    videoShow(val) {
      this.dialogVideoVisible = val;
    },
  },
  created() {
   
  },
  mounted() {},
  updated() {
    this.myvideo = this.$refs.myVideo;
  },
  methods: {
    closeDialog() {
      this.$emit("videoShowChange", false);
      this.isPaused=false;
      this.myvideo.currentTime=0
    },
    play() {
      //修改当前的播放状态
      this.isPaused = !this.isPaused;
      console.log(this.myvideo, "myvideo");
      if (this.isPaused) {
        this.myvideo.play();
      } else {
        this.myvideo.pause();
      }
    },
    // 进度条拖动时间
    getNewTime(val) {
      console.log(val);
      this.myvideo.currentTime = val;
    },
    //获取总时长
    getTotal() {
      this.totalTime = this.timeFormat(this.myvideo.duration);
      this.durationProgress = this.myvideo.duration;
    },
    //获取当前视频播放到的时间
    timeupdate() {
      if (this.myvideo.currentTime == this.myvideo.duration) {
        this.isPaused = !this.isPaused;
        this.myvideo.pause();
      }
      this.currentTime = this.timeFormat(this.myvideo.currentTime);
      this.currentTimeVal = this.myvideo.currentTime;
    },
    timeFormat(time) {
      let minute = Math.floor((time % 3600) / 60);
      let second = Math.floor(time % 60);
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return `${minute}:${second}`;
    },
    // 倍速播放
    changePlaySpeed(val) {
      
      this.myvideo.initPlaySpeed = this.myvideo.playbackRate = val;
      
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  :deep(.warper) {
    .el-dialog {
      width: 1255px /* 1331/80 */ /* 1744/80 */ /* 1392/80 */ !important;
      height: 9.05rem /* 724/80 */ /* 920/80 */ /* 750/80 */ /* 772/80 */ !important;
      margin-top: 15vh !important;
      background-image: url("../assets/img/dtjk_pic.png");
            background-size: 100% 100%;

      background-repeat: no-repeat;
      background-color: transparent;
    }
    .el-overlay {
      overflow: hidden;
    }
    .el-dialog__body {
      padding-top: 0.125rem /* 10/80 */;
    }
    .el-dialog__headerbtn .el-dialog__close {
      font-size: 0.375rem /* 30/80 */ /* 20/80 */;
      color: #fff;
    }
    .el-dialog__title {
      color: #fff;
      font-size: 0.3rem /* 24/80 */;
    }
    .el-dialog__header {
      padding: 0.266667rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .el-carousel__container {
      height: 7.3125rem !important /* 585/80 */;
    }
    .box {
      .video {
        width: 12.7rem /* 1016/80 */;
        height: 6.675rem /* 534/80 */ /* 554/80 */;
        object-fit: fill;
        background-color: rgba(20, 34, 47, 1);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .controls {
        width: 12.7rem /* 1016/80 */;
        height: 0.65rem /* 52/80 */;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 7.7625rem;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        padding: 0 0.25rem /* 20/80 */;
        .play_btn {
          width: 0.4875rem /* 39/80 */;
          height: 0.475rem /* 38/80 */;
          & > img {
            width: 100% /* 39/80 */;
            height: 100% /* 38/80 */;
          }
        }
        .time {
          margin: 0 0.25rem /* 20/80 */;
        }
        .progress {
          width: 7.925rem /* 634/80 */;
        }
        .download {
          font-size: 0.2rem /* 16/80 */;
          margin-left: 0.25rem /* 20/80 */;
          & > span {
            margin-left: 0.125rem /* 10/80 */;
          }
        }
        :deep(.playSpeed) {
          width: 0.9rem !important /* 72/80 */;
          height: 0.35rem !important /* 28/80 */;
          // margin-right: 20px;
          .el-input__inner {
            // text-align: center;
            // color: #4f6380;
            // background: transparent !important;
            // width: 100%;
            // height: 30px;
            // border: 0.5px solid #4f6380;
            // border-radius: 8px;
            // padding: 5px;
          }
          .el-select__caret,
          .el-input--suffix {
            // line-height: 30px;
            // color: #4f6380;
          }
        }
      }
    }
  }
  :deep(.playSpeed) {
    width: 1rem /* 80/80 */ /* 72/80 */;
    height: 0.35rem /* 28/80 */;
    margin-left: 0.125rem /* 10/80 */;
    font-size: 0.15rem /* 12/80 */;
    .el-input__inner {
      text-align: center;
      color: #4f6380;
      background: transparent !important;
      width: 100%;
      height: 30px;
      border: 0.5px solid #4f6380;
      border-radius: 8px;
      padding-left: 0 !important;
      padding-right: 0.375rem /* 30/80 */ /* 20/80 */ /* 10/80 */;
      margin-bottom: 0;
    }
    .el-select__caret,
    .el-input--suffix {
      line-height: 30px;
      color: #4f6380;
    }
  }
}
.el-popper {
  left: 1359px !important;
  top: 585px !important;
}

.el-select-dropdown__list > .el-select-dropdown__item {
  font-size: 0.186667rem;
  padding: 0 0.426667rem 0 0.266667rem;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 0.3125rem /* 25/80 */ /* 20/80 */ !important /* 10/80 */;
  line-height: 0.3125rem /* 25/80 */ /* 20/80 */ !important;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
