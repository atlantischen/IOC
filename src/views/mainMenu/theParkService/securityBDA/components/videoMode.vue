<template>
  <!-- 视频模式 -->
  <div class="videoMode">
    <ul class="videoMode_Box x_sb_rap">
      <!-- <li
        v-for="(item, i) in videoDatas"
        @mouseenter="mouseFun(true, i)"
        @mouseleave="mouseFun(false, i)"
        :key="i"
      >
        <div
          :class="['box_master', showMaster ? 'show_master' : 'close_master']"
          v-if="showMaster && masterIndex == i"
          @click="lookVideo(item)"
        ></div>
        <Vloading v-show="showIfame" />
        <iframe
          v-show="!showIfame"
          v-if="item.url"
          class="iframeVideo"
          :id="'iframeVideo' + i"
          :ref="'iframeVideo' + i"
          style="width: 100%; height: 100%"
          :src="item.url + '&iframe=yes'"
          allowfullscreen
          allow="autoplay; fullscreen"
        ></iframe>
        <Vloading v-show="item.url && is404" :text="'无信号'" />
      </li> -->
      <Player
        ref="player"
        :dialogShow="showVideo"
        :monitorList="videoDatas"
      ></Player>
    </ul>
    <LookVideo
      :Visible="Visible"
      :_data="videoD"
      :title="dialogTitle"
      @off="openCloseDialog"
    />
  </div>
</template>

<script>
import { urlArry } from "@/utils/flv_url.js";

export default {
  name: "videoMode",
  props: {
    _showVideo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showVideo: false,
      showIfame: true,
      Visible: false,
      is404: false,
      dialogTitle: "",
      showMaster: false,
      masterIndex: null,
      videoDatas: urlArry.theParkServiceList,
      videoD: {},
    };
  },

  // watch: {
  //   _showVideo: {
  //     handler (n, o) {
  //       this.showVideo = n
  //     },
  //     immediate: true
  //   }
  // },
  components: {},
  watch: {
    "$store.state.flag": function(n, o) {
      console.log(n, o);
    },
  },
  mounted() {
    if (!this.$store.state.dialogShow) {
      // this.$store.commit('setDialogShow', true)
      this.showVideo = true;
    }
    // this.showVideo = true
    // var IframeOnClick = {
    //   resolution: 200,
    //   iframes: [],
    //   interval: null,
    //   Iframe: function () {
    //     this.element = arguments[0];
    //     this.cb = arguments[1];
    //     this.hasTracked = false;
    //   },
    //   track: function (element, cb) {
    //     this.iframes.push(new this.Iframe(element, cb));
    //     if (!this.interval) {
    //       var _this = this
    //       this.interval = setInterval(function () { _this.checkClick(); }, this.resolution);
    //     }
    //   },
    //   checkClick: function () {
    //     if (document.activeElement) {
    //       var activeElement = document.activeElement;
    //       for (var i in this.iframes) {
    //         if (activeElement === this.iframes[i].element) {
    //           if (this.iframes[i].hasTracked == false) {
    //             this.iframes[i].cb.apply(window, []);
    //             this.iframes[i].hasTracked = true;
    //           }
    //         } else {
    //           this.iframes[i].hasTracked = false;
    //         }
    //       }
    //     }
    //   }
    // };
    // for (var i = 0; i < this.videoDatas.length; i++) {
    // IframeOnClick.track(document.getElementById("iframeVideo" + i), function (i) {
    //   this.lookVideo(this.videoDatas[i])
    // });
    // }
    // this.$afterIframeOnload('iframeVideo0', () => {
    //   this.showIfame = false
    // })
  },
  beforeDestroy() {},

  beforeRouteLeave(to, from, next) {
    if (to.path != from.path) {
      this.showVideo = false;
      //  this.$store.commit('setDialogShow', false)
    }
    next();
  },
  methods: {
    openCloseDialog(val) {
      this.Visible = val;
    },
    lookVideo(val) {
      this.dialogTitle = val.deviceName = val.local;
      this.videoD = val;
      console.log(val);
      this.openCloseDialog(true);
    },
    mouseFun(bool, i) {
      this.showMaster = bool;
      this.masterIndex = i;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/animation.less";
:deep(.videoMode_Box) {
  width: 20.45rem /* 1636/80 */;
  height: 8.55rem /* 684/80 */;
  position: fixed;
  top: 2.125rem /* 170/80 */;
  left: 50%;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  z-index: 108;
  .box_master {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 168px;
    background: rgba(0, 0, 0, 0.2);
  }
  .show_master {
    .toShow(0.2s, 0.1s);
  }
  .close_master {
    .toHide(5s, 5s);
  }
  li,
  .myVideo-video,
  video {
    position: relative;
    width: 5rem /* 400/80 */;
    height: 2.75rem /* 220/80 */;
    background: #111;
    border-radius: 0.0625rem /* 5/80 */;
    cursor: pointer;
  }
}
</style>
