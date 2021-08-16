<template>
  <!-- 公共广播 -->
  <div class="publicBroadcast">
    <IOCLeft style="top:35%">
      <div class="play">
        <div class="tittle">实时采播</div>
        <div class="btn">
          <div
            class="item"
            :class="activeIndex === 1 ? 'active' : ''"
            @click="handleClick(1)"
          >
            开始采播
          </div>
          <div
            class="item"
            :class="activeIndex === 2 ? 'active' : ''"
            @click="handleClick(2)"
          >
            停止采播
          </div>
        </div>
        <span class="desc" style="padding-left: 25px;">(通过耳麦等拾音设备实时采集音频数据，传输至音箱、音柱等终端，进行广播)</span>
      </div>
      <div class="file">
        <div class="tittle">文件广播</div>
        <div class="outline">
          <audio
            class="dn"
            src="./忐忑-龚琳娜.mp3"
            ref="audio"
            id="video_id"
            :preload="audio.preload"
            @play="onPlay"
            @error="onError"
            @waiting="onWaiting"
            @pause="onPause"
            @timeupdate="onTimeupdate"
            @loadedmetadata="onLoadedmetadata"
          ></audio>
          <div class="audio_box">
            <div class="tips">{{ transPlayPause }}</div>
            <div class="slider">
              <el-slider
                v-model="sliderTime"
                :format-tooltip="formatProcessToolTip"
                @change="changeCurrentTime"
              ></el-slider>
            </div>
            <div class="control">
              <span @click="startPlayOrPause">
                <img
                  :src="
                    audio.playing
                      ? require('../../../../assets/img/bfz_pic.png')
                      : require('../../../../assets/img/bf_pic.png')
                  "
                  alt=""
                />
              </span>
              <span @click="handleStop">
                <img src="../../../../assets/img/ds_pic.png" alt="" /> </span
              ><span>
                <img src="../../../../assets/img/kj_pic.png" alt="" />
              </span>
              <span>
                <img src="../../../../assets/img/yb_pic.png" alt="" />
              </span>
              <span>
                <img src="../../../../assets/img/sy_pic.png" alt="" />
              </span>
              <div class="volume">
                <el-slider
                  v-model="volume"
                  :format-tooltip="formatVolumeToolTip"
                  @change="changeVolume"
                ></el-slider>
              </div>
            </div>
          </div>
          <div class="file_selection">
            <span>{{ text }}</span>
            <div class="file_btn">
              <input type="file" id="file" @change="onInputFileChange()" />
              选择文件
            </div>
          </div>
          <div class="btn">
             <button @click="handleStar">开始播放</button>
          <button @click="handleStop">停止播放</button>
          <button @click="handleSuspend">暂停播放</button>
          <button @click="handleSContinue">继续播放</button>
          </div>
         
        <span class="desc">(将MP3等音频文件传输至音箱、音柱等终端，进行播放)</span>

        </div>
      </div>
    </IOCLeft>
    <!-- <IOCRight style="right:0; width:auto">
      <div class="box">
          <div class="box_t">显示设备</div>
          <i class="el-icon-close close"></i>
          <ul class="sb_list">
            <li v-for="item in equipmentList" :key="item">
              <img :src="item.url" alt="">
            </li>
          </ul>
        <div class="btn">
          <div>全部显示</div>
          <div>全部隐藏</div>
        </div>
      </div>
    </IOCRight> -->
  </div>
     <!-- 设备管理 -->
    <Device
      v-show="deviceShow"
      :_fade="_fade"
      :idArry="idArry"
      :disabled="disabled"
      @chageFade="chageFade($event)"
    ></Device>
  <div class="mask" @mouseenter="deviceChangeShow"></div>

</template>

<script>
function realFormatSecond(second) {
  var secondType = typeof second;
  if (secondType === "number" || secondType === "string") {
    second = parseInt(second);
    var hours = Math.floor(second / 3600);
    second = second - hours * 3600;
    var mimute = Math.floor(second / 60);
    second = second - mimute * 60;
    return (
      hours + ":" + ("0" + mimute).slice(-2) + ":" + ("0" + second).slice(-2)
    );
  } else {
    return "0:00:00";
  }
}
export default {
  name: "publicBroadcast",
  data() {
    return {
      disabled:false,
       deviceShow: false,
      _fade:false,
      idArry:[5],
      activeIndex: null,
      text: "",
      audio: {
        currentTime: 0,
        maxTime: 0,
        playing: false,
        muted: false,
        speed: 1,
        waiting: true,
        preload: "auto",
      },

      sliderTime: 0,
      volume: 100,
      speeds: this.theSpeeds,
      controlList: {
        // 不显示下载
        noDownload: false,
        // 不显示静音
        noMuted: false,
        // 不显示音量条
        noVolume: false,
        // 不显示进度条
        noProcess: false,
        // 只能播放一个
        onlyOnePlaying: false,
        // 不要快进按钮
        noSpeed: false,
      },
     
    };
  },
  components: {},
  methods: {
      chageFade (val) {
      this._fade = val;
    },
    deviceChangeShow(){
      console.log('进入！');
      this.deviceShow=true
       this._fade=false
    },
    handleClick(i) {
      this.activeIndex = i;
      this.$message({ message: "该功能暂时不支持!", type: "error"});
    },
    onInputFileChange() {
      var file = document.getElementById("file").files[0];
      var url = URL.createObjectURL(file);
      this.text = document.getElementById("file").files[0].name;
      document.getElementById("video_id").src = url;
      document.getElementById("video_id").play();
    },
    fileClick() {
      this.onInputFileChange();
    },
    handleStar1() {
      this.startPlay();
    },
    handleStop() {
      this.$refs.audio.currentTime = 0;
      this.pausePlay();
    },
    handleSuspend() {
      this.pausePlay();
    },
    handleSContinue() {
      this.startPlay();
    },
    setControlList() {
      let controlList = this.theControlList.split(" ");
      controlList.forEach((item) => {
        if (this.controlList[item] !== undefined) {
          this.controlList[item] = true;
        }
      });
    },
    changeSpeed() {
      let index = this.speeds.indexOf(this.audio.speed) + 1;
      this.audio.speed = this.speeds[index % this.speeds.length];
      this.$refs.audio.playbackRate = this.audio.speed;
    },
    startMutedOrNot() {
      this.$refs.audio.muted = !this.$refs.audio.muted;
      this.audio.muted = this.$refs.audio.muted;
    },
    // 音量条toolTip
    formatVolumeToolTip(index) {
      return "音量条: " + index;
    },
    // 进度条toolTip
    formatProcessToolTip(index = 0) {
      index = parseInt((this.audio.maxTime / 100) * index);
      return "进度条: " + realFormatSecond(index);
    },
    // 音量改变
    changeVolume(index = 0) {
      this.$refs.audio.volume = index / 100;
      this.volume = index;
    },
    // 播放跳转
    changeCurrentTime(index) {
      this.$refs.audio.currentTime = parseInt(
        (index / 100) * this.audio.maxTime
      );
    },
    startPlayOrPause() {
      return this.audio.playing ? this.pausePlay() : this.startPlay();
    },
    // 开始播放
    startPlay() {
      this.$refs.audio.play();
    },
    // 暂停
    pausePlay() {
      this.$refs.audio.pause();
    },
    // 当音频暂停
    onPause() {
      this.audio.playing = false;
    },
    // 当发生错误, 就出现loading状态
    onError() {
      this.audio.waiting = true;
    },
    // 当音频开始等待
    onWaiting(res) {
      console.log(res);
    },
    // 当音频开始播放
    onPlay(res) {
      console.log(res);
      this.audio.playing = true;
      this.audio.loading = false;
      if (!this.controlList.onlyOnePlaying) {
        return;
      }

      let target = res.target;

      let audios = document.getElementsByTagName("audio");

      [...audios].forEach((item) => {
        if (item !== target) {
          item.pause();
        }
      });
    },
    // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
    onTimeupdate(res) {
      // console.log('timeupdate')
      // console.log(res)
      this.audio.currentTime = res.target.currentTime;
      this.sliderTime = parseInt(
        (this.audio.currentTime / this.audio.maxTime) * 100
      );
    },
    // 当加载语音流元数据完成后，会触发该事件的回调函数
    // 语音元数据主要是语音的长度之类的数据
    onLoadedmetadata(res) {
      console.log("loadedmetadata");
      console.log(res);
      this.audio.waiting = false;
      this.audio.maxTime = parseInt(res.target.duration);
    },
  },
  computed: {
    transPlayPause() {
      return !this.audio.playing
        ? "已停止" + realFormatSecond(this.audio.currentTime)
        : "播放中" + realFormatSecond(this.audio.currentTime);
    },
  },
  created(){
       this.$SendMessageToUnity("ShowIoTDevice_IOCMap",{strList:'5'});
  }
};
</script>

<style lang="less" scoped>
.el-slider {
  width: 80%;
  margin: 0 auto;
  /deep/.el-slider__button {
    width: 0.266667rem;
    height: 0.166667rem;
    border: 0.026667rem solid #fff;
    background-color: #4396f3;
    border-radius: 30%;
  }
}
.play {
  .btn {
    display: flex;
    justify-content: space-around;
    .item {
      width: 1.7625rem /* 141/80 */;
      height: 0.7125rem /* 57/80 */;
      background-color: #192939;
      border: 1px solid #4396f3;
      border-radius: 0.0625rem /* 5/80 */;
      padding: 0 0.25rem /* 20/80 */;
      text-align: right;
      font-size: 0.2rem /* 16/80 */;
      line-height: 0.7125rem /* 57/80 */;
      background-image: url("../../../../assets/img/kscb_pic.png");
      background-repeat: no-repeat;
      background-position: 16% 55%;
      background-size: 0.325rem /* 26/80 */ 0.325rem /* 26/80 */;
    }
    .item:last-child {
      background-image: url("../../../../assets/img/tzcb_pic.png");
    }
    .active {
      background-color: #4396f3;
    }
  }
}
.file {
  .outline {
    padding: 0.1875rem /* 15/80 */ /* 20/80 */;
  }
  .dn {
    display: none;
  }
  .audio_box {
    width: 4.375rem /* 350/80 */ /* 322/80 */;
    height: 1.525rem /* 122/80 */;
    background: #192939;
    border: 1px solid #4396f3;
    margin: 0 auto;
    .tips {
      height: 0.475rem /* 38/80 */;
      width: 100%;
      background: #283649;
      padding-left: 0.1875rem /* 15/80 */;
      line-height: 0.475rem;
    }
    .slider {
      position: relative;
      display: flex;
      align-items: center;
    }
    .slider::before {
      content: "";
      width: 0.1625rem /* 13/80 */;
      height: 0.075rem /* 6/80 */;
      position: absolute;
      left: 0.0625rem /* 5/80 */;
      background-image: url("../../../../assets/img/zb_pic.png");
    }
    .slider::after {
      content: "";
      width: 0.1625rem /* 13/80 */;
      height: 0.075rem /* 6/80 */;
      position: absolute;
      right: 0.0625rem /* 5/80 */;
      background-image: url("../../../../assets/img/ybtb_pic.png");
    }
    .control {
      display: flex;
      align-items: center;
      height: 0.525rem /* 42/80 */;
      padding: 0 0.0625rem;
      span {
        margin-right: 0.25rem /* 20/80 */;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      span:nth-child(1) {
        img {
          width: 0.475rem /* 38/80 */;
          height: 0.475rem /* 38/80 */;
        }
      }
      span:nth-child(2) {
        img {
          width: 0.1125rem /* 9/80 */ /* 38/80 */;
          height: 0.1125rem /* 38/80 */;
        }
      }
      span:nth-child(3),
      span:nth-child(4) {
        img {
          width: 0.1rem /* 8/80 */ /* 9/80 */ /* 38/80 */;
          height: 0.1rem /* 38/80 */;
        }
      }
      span:nth-child(5) {
        img {
          width: 0.175rem /* 14/80 */ /* 9/80 */ /* 38/80 */;
          height: 0.1375rem /* 11/80 */ /* 38/80 */;
        }
      }
      .volume {
        width: 1.25rem /* 100/80 */ /* 30/80 */;
      }
    }
  }
  .file_selection {
    display: flex;
    margin: 0.1875rem /* 15/80 */ 0;
    align-items: flex-end;
    justify-content: flex-end;
    span {
      margin-right: 0.1rem /* 8/80 */;
    }
    .file_btn {
      width: 1rem /* 80/80 */;
      height: 0.4rem /* 32/80 */;
      text-align: center;
      line-height: 0.4rem /* 32/80 */;
      background: #4396f3;
      border-radius: 4px;
      position: relative;

      #file {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        outline: none;
        background-color: transparent;
        opacity: 0;
      }
    }
  }
  .btn{
    width: 100%;
    display: flex;
    justify-content: space-between;
     button {
    width: 24%/* 76/80 */;
    height: 0.4rem /* 32/80 */;
    background: #101f32;
    border: 0px solid #4396f3;
    border-radius: 0.05rem /* 4/80 */;
    color: #fff;
  }
  }
 
}
.mask{
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: .75rem /* 60/80 */ /* 100/80 */ /* 300/80 */;
    height: 6.25rem /* 500/80 */ /* 300/80 */;
    // background-color: red;
  }

.desc{
  margin-top: .1875rem /* 15/80 */;
  color: #FFC659;
}
</style>
