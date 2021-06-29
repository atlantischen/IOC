<template>
  <div class="p_x_c2 tipBox" v-if="isShow" @click="clickItem">
    <div class="tipBox_text x_c" :class="'tipBox_warn'">
      <div class="pList">
        <p v-for="(item, i) in _data" :key="i">{{ item.text }}</p>
      </div>
      <i class="el-icon-circle-close" @click.stop="closeTip"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "tipBox",
  props: {
    _data: {
      typeof: Array,
    },
    show: {
      type: Object,
    },
  },
  data () {
    return {
      isShow: true,
    };
  },
  watch () {
    this.isShow = this.show;
  },
  components: {},
  mounted () { },
  methods: {
    // 点击警告框3D出现警告位置
    clickItem () {
      this.$SendMessageToUnity("OnWarningNoticesBarClick", {});
      console.log("=================OnWarningNoticesBarClick")
    },
    // 关闭警告
    closeTip () {
      this.isShow = !this.isShow;
      this.$SendMessageToUnity("PopUpWarningNoticesBar", { isOpen: false });
      console.log("=================PopUpWarningNoticesBar, { isOpen: false })")
      // this.$emit("close", this.isShow);
    },
  },
};
</script>

<style lang="less">
@import "~@/style/gl.less";
.tipBox {
  position: relative;
  top: 0.875rem /* 70/80 */ !important;
  // min-width: 8.125rem /* 650/80 */;
  width: 8.75rem /* 700/80 */;
  height: 0.5rem /* 40/80 */;
  line-height: 0.5rem /* 40/80 */;
  font-size: 0.225rem /* 18/80 */;
  margin: 0.25rem /* 20/80 */ 0;
  cursor: pointer;
  .tipBox_text {
    white-space: nowrap;
    padding: 0 0.4375rem /* 35/80 */;
    width: 100%;
    background: url("~@/assets/img/tip_warn.png") center no-repeat;
    background-size: 100% 100%;
    .pList {
      width: 100%;
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
</style>
