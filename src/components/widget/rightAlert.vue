<template>
  <div
    class="rightAlert ioc_animated"
    :class="fade ? 'fadeInRight0' : outClass"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "rightAlert",
  props: {
    fade: {
      type: Boolean,
    },
  },
  data () {
    return {
      outClass: "fadeOutRight1",
    };
  },
  watch: {
    fade () {
      this.outClass = "fadeOutRight0";
    },
  },
  mounted () { },
};
</script>

<style lang="less" scoped>
.rightAlert {
  position: fixed;
  top: 50%;
  right: 0.575rem /* 46/80 */;
  width: 4.375rem /* 350/80 */;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  z-index: 101;
  opacity: 0;
}
.fadeOutRight1 {
  opacity: 0;
}
</style>
