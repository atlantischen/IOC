<template>
  <!-- 公共广播 -->
  <div class="publicBroadcast">
    <IOCLeft class="position">
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
      </div>
      <div class="file">
        <div class="tittle">文件广播</div>
        <audio
          src="./忐忑-龚琳娜.mp3"
          ref="audio"
          id="video_id"
          controls="controls"
        ></audio>
        <div class="file_selection">
          <span>{{text}}</span>
        <div class="file_btn">
          <input type="file" id="file" @change="onInputFileChange()" />
          选择文件
        </div>
        </div>
      
        <button @click="handleStar1">开始播放</button>
        <button @click="handleStar2">停止播放</button>
        <button @click="handleStar3">暂停播放</button>
        <button @click="handleStar4">继续播放</button>
      </div>
    </IOCLeft>
  </div>
</template>

<script>
export default {
  name: "publicBroadcast",
  data() {
    return {
      activeIndex: null,
      text:'',
    };
  },
  components: {},
  methods: {
    handleClick(i) {
      this.activeIndex = i;
    },
    onInputFileChange() {
      var file = document.getElementById("file").files[0];
      var url = URL.createObjectURL(file);
      this.text=document.getElementById("file").files[0].name
      document.getElementById("video_id").src = url;
      document.getElementById("video_id").play();
    },
    fileClick() {
      this.onInputFileChange();
    },
    handleStar1() {
      this.$refs.audio.play();
    },
    handleStar2() {
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.pause();
    },
    handleStar3() {
      this.$refs.audio.pause();
    },
    handleStar4() {
      this.$refs.audio.play();
    },
  },
};
</script>

<style lang="less" scoped>
.position {
  // top: 2.25rem /* 180/80 */;
}
.play {
  .btn {
    display: flex;
    justify-content: space-around;
    .item {
      width: 1.7625rem /* 141/80 */;
      height: 0.7125rem /* 57/80 */;
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
  .file_selection{
  display: flex;
  margin: 0.1875rem /* 15/80 */ 0;
  align-items: flex-end;
  justify-content: flex-end;
  span{
    margin-right: .1rem /* 8/80 */;
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
  button {
    width: 0.95rem /* 76/80 */;
    height: 0.4rem /* 32/80 */;
    background: #101f32;
    border: 0px solid #4396f3;
    border-radius: 0.05rem /* 4/80 */;
    color: #fff;
    margin-right: 0.075rem /* 6/80 */;
  }
}
</style>
