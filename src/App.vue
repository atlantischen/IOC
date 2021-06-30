<template>
  <router-view v-wechat-title="$route.meta.title"></router-view>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: 'App',
  data: function () {
    return {

    }
  },
  methods: {
    handleFullScreen () {
      if (!screenfull.isEnabled) {
        this.$message.info("您的浏览器版本过低，不支持全屏浏览");
        return false;
      }
      screenfull.toggle();
    },
    event (event) {
      let res
      if (event) res = JSON.parse(event.data)
      if (res.action == "fullscreen") {
        this.handleFullScreen()
      }
    },
  },

    beforeCreate() { 
        this.$router.push('/comprehensiveSituational/homePage')
    },
  mounted () {
     window.addEventListener("message", this.event, true);
  },
  beforeDestory () {
    window.removeEventListener("message", this.event, true);

  },
  watch: {
    'route':{
      
    }
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: "Microsoft YaHei", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
