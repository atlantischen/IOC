<template>
  <div class="leftRightPart">
    <div @click="handleClick ()" class="z_left com_  ioc_animated" :class="fade?'fadeOutLeft0':'fadeInLeft0'" >
      <slot name="left"></slot>
    </div>
    <div @click="handleClick ()" class="y_right com_ ioc_animated "  :class="fade?'fadeOutRight0':'fadeInRight0'">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftRightPart',
  data () {
    return {
      fade: false
    }
  },
  components: {},
  mounted() {
    // console.log(this.$store)
    document.onclick = function () { this.handleClick() }
  },
  methods: {
    handleClick () {
      this.fade = !this.fade
    }
  }
}
</script>

<style lang='less'>
@import "~@/style/gl.less";
.tittle {
  margin: 15px 0;
}
.leftRightPart {
  .com_ {
    position: fixed;
    top: 50%;
    width: 344px;
    min-height: 500px;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    z-index: 100;
  }
  .z_left {
    left: 46px;
  }
  .y_right {
    right: 46px;
  }
}
</style>
