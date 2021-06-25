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
  </div>
</template>

<script>
export default {
  name: "leftRightPart",
  data () {
    return {
      fade: false,
    };
  },
  components: {},
  mounted () {
    // console.log(this.$store)
    // document.onclick = function() {
    //   this.handleClick();
    // };
  },
  methods: {
    handleClick () {
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
.leftRightPart {
  color: #fff;
  .com_() {
    position: fixed;
    z-index: 100;
  }
  .com_ {
    .com_();
    top: 50%;
    width: 4.3rem /* 344/80 */;
    min-height: 6.25rem /* 500/80 */;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    // background: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }
  .z_left {
    left: 0.575rem /* 46/80 */;
  }
  .y_right {
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
