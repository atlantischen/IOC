<template>
    <IOCLeft :fade='fade'>
      <div id="IocLeftPart" class="IocLeftPart">
        <div class="tittle">园区情况</div>
        <div class="box"></div>
      </div>
   
    </IOCLeft>
    <IOCRight :fade='fade'>
      <div>右边</div>
    </IOCRight>

  
</template>

<script>
// import '../assets/css/iocPage.less'
import * as echarts from 'echarts';
export default {
  components: {  },
    data(){
        return{
          fade:false
        }
    },
    methods:{
  
    
    },
    created(){

    },
    mounted(){

        

    }
}
</script>

<style lang='less' scoped>
.IocLeftPart{
  position: relative;
 
}
</style>
