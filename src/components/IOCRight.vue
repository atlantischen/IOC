<template>
  <div class="ioc_right animate__animated" :class="fade?'animate__fadeOutRight':'animate__fadeInRight'">

  </div>
</template>

<script>
export default {
    name:'IOCRight',
    props:{
         fade: {
            type: Boolean
        },
    }
}
</script>

<style lang='less' scoped>
 .ioc_right{
        width: 449px;
        height: 100%;
        background-color:green;
        position: absolute;
        right: 0;
        top: 0;

    }
</style>