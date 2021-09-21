<template>
  <!-- 告警详情 -->
  <div class="warnDetail" v-if="showBox">
    <div class="minDiaolg">
      <i class="el-icon-close" @click="closeDialog(false)"></i>
      <div class="minDiaolg_t">告警详情</div>
      <div class="minDiaolg_c bigBar">
        <p>
          <span>报警类型：</span><span>{{ _data[1].warnDetail || "--" }}</span>
        </p>
        <p>
          <span>报警地点：</span><span>{{ _data[1].warnLocal || "--" }}</span>
        </p>
        <p>
          <span>报警内容：</span><span>{{ _data[1].warnDetail || "--" }}</span>
        </p>
        <p>
          <span>报警设备：</span><span>{{ _data[1].warnDevice || "--" }}</span>
        </p>
        <p>
          <span>报警编号：</span><span>{{ _data[1].deviceNum || "--" }}</span>
        </p>
        <p>
          <span>报警值：</span><span>{{ _data[1].warnVal || "--" }}</span>
        </p>
        <p>
          <span>报警时间：</span><span>{{ _data[1].warningTime || "--" }}</span>
        </p>
        <p>
          <span>抓拍图片：</span
          ><span
            ><img
              class="pp_img"
              v-if="_data[1].ppImg"
              :src="_data[1].ppImg"
              alt=""
            />
            <i class="pp_img" v-else>-</i></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "theParkOutputValAll",
  props: {
    _data: {
      type: Object
    },
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      showBox: false
    }
  },
  watch: {
    show: {
      handler (n, o) {
        this.showBox = n
      },
      deep: true
    }
  },
  mounted () {
  },
  methods: {
    closeDialog (val) {
      this.showBox = val
      this.$emit('close', this._data[0], this._data[1], val)
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
@import "~@/style/animation.less";
.warnDetail {
  position: fixed;
  left: 0;
  top: 1.875rem /* 150/80 */;
  .toShow(0.5s, 0s);
  .minDiaolg {
    width: 3.325rem /* 266/80 */;
    height: 4.6625rem /* 373/80 */;
    background: url("~@/assets/img/datas/dialog_bg.png") no-repeat;
    background-size: contain;
    padding: 0.15rem /* 12/80 */ 0.25rem /* 20/80 */ 0.375rem /* 30/80 */;
    .el-icon-close {
      position: absolute;
      top: 0.1875rem /* 15/80 */;
      right: 0.1875rem /* 15/80 */;
      font-size: 0.3rem /* 24/80 */;
      float: right;
      color: rgba(255, 255, 255, 0.3);
      vertical-align: middle;
      cursor: pointer;
    }
    .minDiaolg_t {
      height: 0.275rem /* 22/80 */;
      font-size: 0.2rem /* 16/80 */;
      color: #4396f3;
      text-align: center;
    }
    .minDiaolg_c {
      height: 3.875rem /* 310/80 */;
      font-size: 0.15rem /* 12/80 */;
      overflow-y: auto;
      p {
        display: flex;
        line-height: 0.225rem /* 18/80 */;
        padding-top: 0.1rem /* 8/80 */;
        span {
          &:first-child {
            display: inline-block;
            white-space: nowrap;
            min-width: 0.75rem /* 60/80 */;
            text-align: justify;
            text-align-last: justify;
            padding-right: 0.0625rem /* 5/80 */;
          }
          &:nth-child(2) {
            vertical-align: text-top;
          }
          .pp_img {
            width: 1rem /* 80/80 */;
            height: 1rem /* 80/80 */;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
