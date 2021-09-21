<template>
  <el-dialog
    title="墨 点 白"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    v-dialogDrag
    width="75%"
  >
    <div style="color: darkorange; font-size: 64px">墨 点 白</div>
  </el-dialog>
</template>

<script>
import { nextTick } from '@vue/runtime-core';
export default {
  name: "LookVideo",
  props: {
    _data: {
      type: Object
    },
    title: {
      type: String
    },
    Visible: {
      type: Boolean
    },
    d_style: {
      type: String
    }
  },
  data () {
    return {
      dialogVisible: false,
      isFullscreen: false,
      timer: null
    };
  },
  components: {},
  watch: {
    Visible: {
      handler (newVal, oldVal) {
        this.dialogVisible = newVal
      },
      deep: true
    }
  },
  mounted () {
    this.currentD()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    currentD () {
      this.timer = setInterval(() => {
        if (!this.$refs.currentTimeRef) {
          return
        }
        this.$refs.currentTimeRef.innerHTML = this.$currentDate()
      }, 1000);
    },
    openClose (val) {
      this.dialogVisible = val
      this.$emit('off', val)
    },
    fullScreenFun () {
      this.$Fullscreen(this.$refs.videoBoxRef, this.isFullscreen)
      this.isFullscreen = !this.isFullscreen
    }
  },
};
</script>

<style scoped lang="less">
.LookVideo {
  :deep(.qDialog) {
    .el-dialog {
      width: 17.4rem /* 1392/80 */ !important;
      height: 9.65rem /* 772/80 */ !important;
      .el-dialog__body {
        padding: 0.125rem /* 10/80 */ 0.3625rem /* 29/80 */ 0.375rem /* 30/80 */;
      }
      .el-dialog__footer {
        padding: 0;
      }
    }
    .videoBox {
      position: relative;
      text-align: center;
      width: 16.675rem /* 1334/80 */;
      height: 8.425rem /* 674/80 */;
      video {
        width: 100%;
        height: 100%;
      }
      .videoSet {
        i {
          position: absolute;
          color: #fff;
          &.actived {
            color: #0ff;
          }
          cursor: pointer;
        }
        .currentTime {
          font-size: 0.375rem /* 30/80 */;
          top: 0.5rem /* 40/80 */;
          left: 0.25rem /* 20/80 */;
        }
        .videoLocal {
          font-size: 0.375rem /* 30/80 */;
          bottom: 0.5rem /* 40/80 */;
          right: 0.25rem /* 20/80 */;
        }
        .vs_bg {
          width: 0.85rem /* 68/80 */;
          height: 0.85rem /* 68/80 */;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
        }
        .vs_full {
          font-size: 0.525rem /* 42/80 */;
          top: 0.625rem /* 50/80 */;
          right: 0.25rem /* 20/80 */;
        }
        .icon-luxiang {
          font-size: 0.5625rem /* 45/80 */;
          top: 1.75rem /* 140/80 */;
          right: 0.25rem /* 20/80 */;
        }
      }
    }
  }
}
</style>
