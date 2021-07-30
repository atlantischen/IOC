<template>
  <router-view v-wechat-title="$route.meta.title"></router-view>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {};
  },
  methods: {
    event (event) {
      if ((typeof event.data == 'string' && event.data.indexOf('data') != -1) || (typeof event.data == 'object' && event.data.data != undefined)) {
        let res = JSON.parse(event.data)
        if (res.action == "fullscreen") {
          this.$handleFullScreen();
        }
      }
    },
  },

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
