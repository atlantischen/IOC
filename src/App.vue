<template>
  <router-view  v-wechat-title="$route.meta.title"></router-view>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  created() {
    // console.log(this.$route)
  },
  mounted() {
    
  },
  watch: {
  }
}
</script>

<style>

#app {
  width: 100%;
  height: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
