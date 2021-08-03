<template>
  <div class="leftRightPart">
    <div
      class="z_left com_ ioc_animated"
      :class="fade ? 'fadeOutLeft0' : 'fadeInLeft0'"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="c_center ioc_animated"
      :class="fade ? 'fadeOutDownTop' : 'fadeInDownTop'"
    >
      <slot name="center"></slot>
    </div>
    <div
      class="y_right com_ ioc_animated"
      :class="fade ? 'fadeOutRight0' : 'fadeInRight0'"
    >
      <slot name="right"></slot>
    </div>
    <div class="otherModel ioc_animated" :class="fade ? 'fadeInRight2' : ''">
      <slot name="rPage"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "leftRightPart",
  props: {
    _show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fade: false,
    };
  },
  watch: {
    _show: {
      handler(n) {
        this.fade = n;
      },
    },
  },
  components: {},
  mounted() {
    // console.log(this.$store)
    // document.onclick = function() {
    //   this.handleClick();
    // };
  },
  methods: {
    handleClick() {
      this.fade = !this.fade;
    },
  },
};
</script>

<style lang="less">
@import "~@/style/gl.less";
.tittle {
  margin: 0.1875rem /* 15/80 */ 0;
}
.otherModel {
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
}
.leftRightPart {
  color: #fff;
  .com_() {
    position: fixed;
    z-index: 100;
  }
  .com_ {
    .com_();
    width: 4.3rem /* 344/80 */;
    min-height: 6.25rem /* 500/80 */;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    // background: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }
  .z_left {
    left: 0.575rem /* 46/80 */;
  }
  .y_right {
    .allcom {
      width: 100%;
      float: right;
    }
    right: 0.575rem /* 46/80 */;
  }
  .c_center {
    .com_();
    top: 1.5625rem /* 125/80 */;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    min-width: 0;
    min-height: 0;
  }
}
</style>
