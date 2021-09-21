<template>
  <div
    class="tipBox ioc_animated"
    :class="isShow ? 'fadeInDownTop' : 'fadeOutDownTop'"
    v-show="isShow"
    @click="clickItem"
  >
    <div class="tipBox_text x_c" :class="'tipBox_warn'">
      <div id="pList" ref="pList">
        <!--  class="text_animate" -->
        <ul id="pList_c" ref="pList_c">
          <li v-for="(item, i) in tipDataList" :key="i">
            告警！{{ item.AlarmTime }} {{ item.AlarmLocation }}
          </li>
        </ul>
      </div>
      <i class="el-icon-circle-close" @click.stop="closeTip"></i>
    </div>
    <audio loop controls style="opacity: 0" ref="playMusic" id="playMusic">
      <source :src="audioSrc" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
// import audioSrc2 from '@/assets/mp3/消防警报.mp3';
import audioSrc2 from '@/assets/mp3/叮叮警报.mp3';

export default {
  name: 'tipBox',
  props: {
    _data: {
      typeof: Array,
    },
    show: {
      type: Object,
    },
  },
  data() {
    return {
      timer: null,
      timer2: null,
      timerOut: null,
      isShow: this.$store.state.comState.showWarnTip,
      audioSrc: audioSrc2,
    };
  },
  watch: {
    '$store.state.comState.showWarnTip': {
      handler(n) {
        let timer;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        this.isShow = n;
        if (this.isShow) {
          // this.openWran();
          timer = setTimeout(() => {
            if (this.timer) {
              clearInterval(this.timer);
              this.timer = null;
            }
            this.moveLeft();
            this.onPlay();
          }, 500);
          this.$SendMessageToUnity('PopUpWarningNoticesBar', { isOpen: true });
          console.log(
            '=================PopUpWarningNoticesBar, { isOpen: true })'
          );
        } else {
          this.onPause();
        }
      },
    },
    _data: {
      handler(n) {
        if (n) {
          this.tipDataList = [n, n, n];
        }
      },
      immediate: true,
    },
  },
  components: {},
  created() {},
  mounted() {},
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    // 警告框滑动
    moveLeft() {
      var _w = document.getElementById('pList').children[0],
        _w = this.$refs.pList.children[0],
        _d = 0;
      var _wc = _w.children;
      var _l = _wc.length;
      _w.appendChild(_wc[0]);
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = setInterval(() => {
        _d--;
        if (-_d >= _w.getBoundingClientRect().width) {
          _d = 10;
          _w.insertBefore(_wc[_l - 1], _wc[0]);
        }
        // _w[0].style.transform = 'translateX(-' + _d + 'px)'
        _w.style.left = _d + 'px';
      }, 25);
    },

    // 点击警告框3D出现警告位置
    clickItem() {
      this.$SendMessageToUnity('OnWarningNoticesBarClick', {
        mSerial: this._data.SerialNum,
      });
      console.log(
        '=================OnWarningNoticesBarClick===' + this._data.SerialNum
      );
    },
    // 关闭警告
    closeTip() {
      this.isShow = false;
      // this.onPause();
      this.$store.dispatch('SET_SHOWWARNTIP', this.isShow);
      this.$SendMessageToUnity('PopUpWarningNoticesBar', {
        isOpen: this.isShow,
      });
      console.log(
        '=================PopUpWarningNoticesBar, { isOpen: false })'
      );
      // this.$emit("close", this.isShow);
    },
    onPlay() {
      this.$nextTick(() => {
        let dom = document.getElementById('playMusic');
        if (dom && dom.paused) {
          dom.volume = 1;
          dom.play();
          console.log('====音乐播放');
        }
      });
    },
    onPause() {
      this.$nextTick(() => {
        let dom = document.getElementById('playMusic');
        if (dom && !dom.paused) {
          dom.pause();
          console.log('pause===');
        }
      });
    },
    openWran() {
      if (this.timerOut) {
        clearInterval(this.timerOut);
        this.timerOut = null;
      }
      this.timer2 = setInterval(() => {
        this.onPlay();
        this.timerOut = setTimeout(() => {
          if (this.timer2) {
            clearInterval(this.timer2);
            this.timer2 = null;
          }
          this.onPause();
          clearTimeout(this.timerOut);
          this.timerOut = null;
          this.openWran();
        }, 30000);
      }, 300000);
    },
  },
};
</script>

<style lang="less">
@import '~@/style/gl.less';
.tipBox {
  position: fixed;
  top: 0.75rem /* 60/80 */;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  // min-width: 8.125rem /* 650/80 */;
  width: 8.75rem /* 700/80 */;
  height: 0.5rem /* 40/80 */;
  line-height: 0.5rem /* 40/80 */;
  font-size: 0.225rem /* 18/80 */;
  margin: 0.25rem /* 20/80 */ 0;
  cursor: pointer;
  z-index: 500;
  .tipBox_text {
    white-space: nowrap;
    padding: 0 0.4375rem /* 35/80 */;
    width: 100%;
    background: url('~@/assets/img/tip_warn.png') center no-repeat;
    background-size: 100% 100%;
    #pList {
      width: 100%;
      overflow: hidden;
      ul {
        position: relative;
        // transform: translateX(-30px);
        // top: 0;
        // left: 0;
      }
      li {
        display: inline;
        padding: 0 10px;
      }
      ul {
        // animation: 15s wordsLoop linear infinite normal;
      }
    }
    p {
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .el-icon-circle-close {
    font-size: 0.3rem /* 24/80 */;
    margin: 0 0.125rem /* 10/80 */;
  }
}
.tipBox_warn {
  color: #e5181e;
}
#playMusic {
  position: fixed;
  width: 0;
  height: 0;
  left: 30%;
  top: 30%;
  z-index: -1;
}
</style>
