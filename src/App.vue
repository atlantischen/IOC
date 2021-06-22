<template>
  <router-view v-wechat-title="$route.meta.title"></router-view>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  created () {
    // console.log(this.$route)
  },
  mounted () {
    // window.addEventListener("message", function (e) {
    //     var action = e.data.action;
    //     //action = "dsfasdf"
    //     // showpage
    //     e.data.arg ="iochome";
    // });
  },
  watch: {
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
