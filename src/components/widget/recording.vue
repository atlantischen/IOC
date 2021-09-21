<template>
  <transition name="el-zoom-in-center">
    <div class="RecordVideo" v-show="Visible">
      <section class="itemTiem">
        <span class="itemTiem_txt">{{ txt }}</span>
        <!-- <span>文件名称:</span><input type="text" v-model.trim="fileName"/>-->
        <i class="el-icon-close" @click="closeBox(false)"></i>
      </section>
      <section class="itemTiem">
        <span class="itemTiem_time"
          ><i
            class="iconfont icon-yuandianzhong"
            :class="status ? '_red' : '_blue'"
          ></i
          >{{ timeLong }}</span
        >
        <i
          class="iconfont icon-tingzhi1"
          :class="status ? '_blue' : 'bd_wh'"
          :disabled="videoStart"
          @click="videoStart ? startRecording : stopRecording"
        ></i>
      </section>
      <section>
        <video
          controls
          autoplay
          playsinline
          ref="video"
          width="400"
          height="300"
        ></video>
      </section>
    </div>
  </transition>
</template>
<script>
import RecordRTC from 'recordrtc';
export default {
  name: "screenRecord",
  props: {
    Visible: {
      type: Boolean
    },
    _data: {
      type: Object
    }
  },
  data () {
    return {
      video: null,
      videoStart: false,
      recorder: null,
      isShowBox: false,
      startTime: 0,
      timeLong: '00:00',
      timeLongs: null,
      endTime: 0,
      fileName: '',
      txt: '点击开始录制',
      status: false,
    }
  },
  created () {
    if (!navigator.getDisplayMedia && !navigator.mediaDevices.getDisplayMedia) {
      let error = 'Your browser does NOT support the getDisplayMedia API.';
      throw new Error(error);
    }
  },
  mounted () {
    this.video = document.querySelector('video');
  },
  watch: {
    status: {
      handler (n, o) {
        if (n) {
          this.txt = '录像中...'
        } else {
          this.txt = '停止录制'
        }
        this.isShowBox = this.Visible
      },
    },
    immediate: true,
    deep: true
  },
  methods: {
    invokeGetDisplayMedia (success, error) {
      let displaymediastreamconstraints = {
        video: {
          displaySurface: 'monitor', // monitor, window, application, browser
          logicalSurface: true,
          cursor: 'always' // never, always, motion
        }
      };
      // above constraints are NOT supported YET
      // that's why overridnig them
      displaymediastreamconstraints = {
        video: true
      };
      if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
      }
      else {
        navigator.getDisplayMedia(displaymediastreamconstraints).then(success).catch(error);
      }
    },
    captureScreen (callback) {
      this.invokeGetDisplayMedia((screen) => {
        this.addStreamStopListener(screen, () => {
          //
        });
        callback(screen);
      }, function (error) {
        console.error(error);
        alert('Unable to capture your screen. Please check console logs.\n' + error);
      });
    },
    addStreamStopListener (stream, callback) {
      stream.addEventListener('ended', function () {
        callback();
        callback = function () { };
      }, false);
      stream.addEventListener('inactive', function () {
        callback();
        callback = function () { };
      }, false);
      stream.getTracks().forEach(function (track) {
        track.addEventListener('ended', function () {
          callback();
          callback = function () { };
        }, false);
        track.addEventListener('inactive', function () {
          callback();
          callback = function () { };
        }, false);
      });
    },
    startRecording () {
      this.captureScreen(screen => {
        this.video.srcObject = screen;
        this.recorder = RecordRTC(screen, {
          type: 'video'
        });
        this.recorder.startRecording();
        // release screen on stopRecording
        this.recorder.screen = screen;
        this.videoStart = true;
        this.cauTime()
      });
    },
    stopRecordingCallback () {
      this.video.src = this.video.srcObject = null;
      this.video.src = URL.createObjectURL(this.recorder.getBlob());
      this.recorder.screen.stop();
      this.recorder.destroy();
      this.recorder = null;
      this.videoStart = false;
    },
    stopRecording () {
      this.recorder.stopRecording(this.stopRecordingCallback);
    },
    closeBox (bool) {
      this.isShowBox = bool
      if (!bool) {
        this.closeHandle()
      }
      this.$emit('close')
    },
    cauTime () {
      this.timeLongs = setInterval(() => {
        this.timeLong = formatHm(new Date().getTime() - this.startTime)
      }, 200)
    },
    closeHandle () {
      if (this.stream) stopReset()
      this.status = false
      clearInterval(this.timesLongs)
    },
    stopReset () {
      this.stopRecording()
      // this.stream.getTracks().forEach((track) => track.stop())
      this.recordedBlobs = []
    },
  },
}
</script>
 
<style scoped lang="less">
.RecordVideo {
  position: absolute;
  top: 0.25rem /* 20/80 */;
  right: 1.125rem /* 90/80 */;
  width: 3.25rem /* 260/80 */;
  height: 1.5rem /* 120/80 */;
  border: 0.0125rem /* 1/80 */ solid rgba(255, 255, 255, 0.4);
  z-index: 2;
  border-radius: 0.0625rem /* 5/80 */;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    background-attachment: fixed;
    -webkit-filter: blur(0.125rem /* 10/80 */);
    filter: blur(0.125rem /* 10/80 */);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.2);
  }
}
.itemTiem {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  color: #fff;
  .itemTiem_txt {
    font-size: 0.2rem /* 16/80 */;
  }
  .itemTiem_time {
    color: #0ff;
  }
  &:nth-child(1) {
    background: #000;
    padding: 0.125rem /* 10/80 */ 0.25rem /* 20/80 */;
  }
  &:nth-child(2) {
    padding: 0.125rem /* 10/80 */ 0.25rem /* 20/80 */;
  }
}
.el-icon-close {
  font-size: 0.325rem /* 26/80 */;
  cursor: pointer;
}
.icon-tingzhi1 {
  font-size: 0.525rem /* 42/80 */;
  cursor: pointer;
}
.icon-yuandianzhong {
  font-size: 0.375rem /* 30/80 */;
  vertical-align: middle;
}
.item input[type="text"] {
  width: 2.25rem /* 180/80 */;
}
.item input[type="number"] {
  width: 1rem /* 80/80 */;
}
</style>