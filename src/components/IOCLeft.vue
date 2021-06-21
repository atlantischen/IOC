<template>
     <div class="ioc_left  ioc_animated" :class="fade?'fadeOutLeft0':'fadeInLeft0'">
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

        // width: 4.75rem /* 380/80 */; /* 400/80 */
        // // height: 500px;
        // position: absolute;
        // left: .575rem /* 46/80 */;
        // top: 1.5875rem /* 127/80 */;
        // // background-color:pink;
         .ioc_left {
        position: fixed;
        top: 50%;
        left: .575rem /* 46/80 */ /* 16/80 */;
        width: 4.75rem;
        // min-height: 500px;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);

  }

</style>