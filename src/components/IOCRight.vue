<template>
  <div
    class="ioc_right ioc_animated"
    :class="fade ? 'fadeOutRight0' : 'fadeInRight0'"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IOCRight',
  props: {
    fade: {
      type: Boolean,  
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style lang='less' scoped>
.ioc_right {
  position: fixed;
  top: 50%;
  right: 0.575rem /* 46/80 */;
  width: 4.375rem ;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}
</style>