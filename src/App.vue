<template>
  <router-view    v-wechat-title="$route.meta.title"></router-view>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'App',
  data: function () {
    return {

    }
  },
  methods:{
       handleFullScreen() {
            if (!screenfull.isEnabled) {
                this.$message.info("您的浏览器版本过低，不支持全屏浏览");
                return false;
            }
            screenfull.toggle();
       },
       event(event){
          if(event.data.action == "fullscreen") {
              this.handleFullScreen()
          }
       }

  },
  created() {

  },
  mounted() {
      window.addEventListener("message", this.event,true);

    
     
  },
  beforeDestory(){
    window.removeEventListener("message", this.event,true);
  },
  watch: {
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100% /* 1920/80 */;
  height: 100% /* 1080/80 */;
}
</style>
