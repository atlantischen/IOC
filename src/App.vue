<template>
  <router-view v-wechat-title="$route.meta.title"></router-view>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "App",
  data: function () {
    return {};
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
      if ((typeof event.data == 'string' && event.data.indexOf('data') != -1) || (typeof event.data == 'object' && event.data.data != undefined)) {
        let res = JSON.parse(event.data)
        if (res.action == "fullscreen") {
          this.handleFullScreen();
        }
      }
    },
  },

  // beforeCreate () {
  //   if (process.env.NODE_ENV == "production")
  //     this.$router.push("/comprehensiveSituational/homePage");
  // },
  mounted () {
    window.addEventListener("message", this.event, true);
    
  },
  beforeDestory () {
    window.removeEventListener("message", this.event, true);
  },
  watch: {
    route: {},
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
