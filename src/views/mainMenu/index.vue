<template>
  <div id="MainMenu">
    <iframe
      id="iframe3D"
      src="http://172.21.70.246:8110/"
      allowfullscreen="true"
      frameborder="0"
    ></iframe>
    <router-view class="comEntry"></router-view>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data () {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
#MainMenu {
  position: relative;
  width: 100%;
  height: 100%;
}
#iframe3D {
  position: absolute;
  width: 100%;
  height: 100%;
}
.comEntry {
  // position: absolute;
  // background: #000;
}
</style>
