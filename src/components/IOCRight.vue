<template>
  <div class="ioc_right ioc_animated"  :class="fade?'fadeOutRight0':'fadeInRight0'">
      <slot></slot>
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
        // width: 3.75rem /* 300/80 */;
        // // height: 500px;
        // // background-color:green;
        // position: absolute;
        // right: .575rem /* 46/80 */;
        // top: 1.5875rem /* 127/80 */;
        position: fixed;
        top: 50%;
        right: .575rem /* 46/80 */;
        width: 4.375rem /* 350/80 */ /* 380/80 */ /* 300/80 */ /* 350/80 */ /* 380/80 */ /* 300/80 */;
        // min-height: 500px;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        
    }

 
</style>