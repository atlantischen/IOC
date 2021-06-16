<template>
  <div class="ioc_left animate__animated"  :class="fade?'animate__fadeOutLeft':'animate__fadeInLeft'">
     <slot></slot>
  </div>
</template>

<script>
export default {
    name:'IOCLeft',
    props:{
         fade: {
            type: Boolean
        },
    }
}
</script>

<style lang='less' scoped>
    .ioc_left{
        width: 447px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color:pink;
        padding-top: 126px;
        padding-left: 46px;
        box-sizing: border-box;

    }
</style>