<template>
  <router-view v-wechat-title="$route.meta.title"></router-view>
</template>

<script>
import screenfull from 'screenfull';
export default {
  name: 'App',
  data: function() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    event(event) {
      if (
        (typeof event.data == 'string' && event.data.indexOf('data') != -1) ||
        (typeof event.data == 'object' && event.data.data != undefined)
      ) {
        let res = JSON.parse(event.data);
        if (res.action == 'fullscreen') {
          this.$handleFullScreen();
        }
      }
    },
    KeyDown(event) {
      var event = event || window.event;
      if (event.keyCode === 122) {
        console.log('returnValue');
        //禁用f11
        event.returnValue = false;
        //触发全屏的按钮
        this.$handleFullScreen();
      }
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change);
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change);
      }
    },
  },
  created() {},
  mounted() {
    this.init();
    window.addEventListener('message', this.event, true);
    window.addEventListener('message', this.KeyDown, true);
  },
  destroyed() {
    window.removeEventListener('message', this.event, true);
    window.removeEventListener('keydown', this.KeyDown, true);
    this.destroy();
  },
  watch: {
    route: {},
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
