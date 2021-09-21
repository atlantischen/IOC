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
          @click="clicks"
        ></i>
      </section>
      <section></section>
    </div>
  </transition>
</template>
<script>
import { formatHm, formatYMDHms } from '@/utils/methods'
export default {
  name: 'playBack',
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
      isShowBox: false,
      timeout: 0,
      recordedBlobs: [],
      fileName: '',
      txt: '点击开始录制',
      status: false,
      stream: null,
      options: {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 4500000,
        mimeType: 'video/webm'
      },
      startTime: 0,
      timeLong: '00:00',
      timeLongs: null,
      endTime: 0
    }
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
    closeBox (bool) {
      this.isShowBox = bool
      if (!bool) {
        this.closeHandle()
      }
      this.$emit('close')
    },
    closeHandle () {
      if (this.stream) stopReset()
      this.status = false
      clearInterval(this.timesLongs)
    },
    clicks () {
      if (this.status) {
        this.closeHandle()
      } else {
        this.startScreen()
      }
    },
    cauTime () {
      this.timeLongs = setInterval(() => {
        this.timeLong = formatHm(new Date().getTime() - this.startTime)
      }, 200)
    },
    stopReset () {
      this.stream.getTracks().forEach((track) => track.stop())
      this.recordedBlobs = []
    },
    startScreen () {
      console.log(navigator.mediaDevices)
      navigator.mediaDevices.getDisplayMedia({ video: true, audio: false }).then(
        (stream) => {
          this.status = !this.status
          console.log('开始录制')
          this.startTime = new Date().getTime()
          console.log(this.startTime)
          this.cauTime()
          this.stream = stream
          const mediaRecorder = new MediaRecorder(stream, this.options)
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              this.closeHandle()
              this.recordedBlobs.push(event.data)
              this.download()
            }
          }
          mediaRecorder.start()
        },
        (error) => console.log(error)
      )
    },
    download () {
      const blob = new Blob(this.recordedBlobs, { type: 'video/mp4' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      document.body.appendChild(a)
      a.style.display = 'none'
      a.href = url
      this.fileName = this._data.deviceName
      a.download = formatYMDHms(new Date()) + this.fileName + '监控录像' + '.mp4'
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }
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
