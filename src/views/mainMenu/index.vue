<template>
  <div id="MainMenu">
    <iframe
      id="iframe3D"
      ref="iframe"
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
      isShow: false,
      url: ''
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
        this.$router.push(res.action);
      } else {
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
      let res = JSON.parse(event.data)
      this.$store.commit("setData", res);
      if (res.data === "IOCHOME") {
        this.isShow = true;
      } else if (res.action === "hide") {
        // this.$routr.push('/empty')
        this.isShow = false;
      }
    });
    if (this.getQueryString('debug')) {
      console.log('我是debug!!');
      this.url = '';
      // console.log(window.debug,'debug');
      window.debug = true;
    } else {
      this.url = "http://172.21.70.246:8110";
    }
    // console.log("123");
  },
  mounted () {
    window.iframe = this.$refs.iframe

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
        console.log(event.data);
        let res = JSON.parse(event.data);
        this.$store.commit("setData", res)
        if (res && res.lenght != 0) {
          if (res.action == "hide") {
            this.isShow = false;
          } else {
            this.isShow = true;
          }
          // if(res.action === "hide"){
          //   console.log('我是测试~~~~·');
          //   // this.$routr.push('/empty')
          //      this.isShow = false;
          // }
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
}
</style>
