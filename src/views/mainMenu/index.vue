<template>
  <div id="MainMenu">
    <iframe
      id="iframe3D"
      :src="url"
      allowfullscreen="true"
      frameborder="0"
    ></iframe>
    <router-view v-if="isShow" class="comEntry"></router-view>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data () {
    return {
      isShow: true,
      url: "",
    };
  },
  computed: {
    getUnityData () {
      return this.$store.state.unitySendData;
    },
  },
  watch: {
    getUnityData (val) {
      // debugger;
      let res = val;
      if (res.action.indexOf("/") === 0) {
        console.log(res.action, "我进来了！！！");
        this.$router.push(res.action);
      }
    },
  },
  created () {
    if (window.vuplex) {
      this.addMessageListener();
    } else {
      window.addEventListener("vuplexready", this.addMessageListener);
    }
    window.addEventListener("message", (event) => {
      let res = JSON.parse(event.data);
      this.$store.commit("setData", res);
      if (res.data === "IOCHOME") {
        this.isShow = true;
      }
    });
    if (this.getQueryString("debug")) {
      this.url = "";
      window.debug = true;
      console.log("我是debug!!!!!!!!!!!");
    } else {
      this.url = "http://172.21.70.246:8110/";
    }
    console.log("123");
  },
  methods: {
    getQueryString (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    addMessageListener () {
      window.vuplex.addEventListener("message", (event) => {
        let res = JSON.parse(event.data);
        this.$store.commit("setData", res);
        if (res && res.lenght != 0) {
          this.isShow = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#MainMenu {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}
#iframe3D {
  // position: absolute;
  width: 100%;
  height: 100%;
}
.comEntry {
  // position: absolute;
  // color: red;
}
</style>
