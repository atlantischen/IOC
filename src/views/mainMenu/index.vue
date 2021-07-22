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
    <!-- 告警框 -->
    <TipBox :_data="tipList" />
    <!-- 右侧警告框 -->
    <AlarmAck />
    <!-- 中心数据 -->
    <CenterDatas :list="centerDatas" />
  </div>
</template>

<script>
import AlarmAck from "@/views/mainMenu/comprehensiveSituational/homePage/components/alarmAck.vue";
export default {
  name: "MainMenu",
  components: { AlarmAck },
  data() {
    return {
      isShow: false,
      url: "",
      warnTimer: null,
      tipList: null,
      centerDatas: [],
    };
  },
  computed: {
    getUnityData() {
      return this.$store.state.unitySendData;
    },
  },
  watch: {
    getUnityData(val) {
      // debugger;
      let res = val;
      console.log(res, "res");
      try {
        if (res.action.indexOf("/") === 0) {
          this.$router.push(res.action);
        } else {
        }
      } catch (e) {}
    },
    "$store.state.comState.centerDatas": {
      handler(n, o) {
        if (n) {
          this.centerDatas = n;
        }
      },
      immediate: true,
    },
    isShow: function(n, o) {
      if (n) {
        // 随机触发警告
        this.warnTimer = setInterval(() => {
          this.tipList = [
            {
              text: "告警！2021-05-11 15:41:47 3期C座5楼电梯间发生陌生人报警",
            },
          ];
          this.$store.dispatch("SET_SHOWWARNTIP", true);
        }, this.$randomNumer(5000, 300000));
      }
    },
  },
  beforeCreate() {
    this.$store.dispatch("SET_SHOWWARNTIP", false);
    if (process.env.NODE_ENV === "production") {
      this.$router.push("/comprehensiveSituational/homePage");
    }
  },
  created() {
    if (window.vuplex) {
      this.addMessageListener();
    } else {
      window.addEventListener("vuplexready", this.addMessageListener);
    }
    window.addEventListener("message", (event) => {
      if (
        (typeof event.data == "string" && event.data.indexOf("data") != -1) ||
        (typeof event.data == "object" && event.data.data != undefined)
      ) {
        let res = JSON.parse(event.data);
        this.$store.commit("setData", res);
        if (res.data === "IOCHOME") {
          this.isShow = true;
        } else if (res.action === "hide") {
          this.isShow = false;
        }
      }
    });
    if (this.getQueryString("debug")) {
      console.log("我是debug!!");
      this.url = "";
      window.debug = true;
    } else {
      this.url = process.env.VUE_APP_UNITY;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.iframe = this.$refs.iframe;
    });
  },
  beforeDestroy() {
    clearInterval(this.warnTimer);
  },
  methods: {
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    addMessageListener() {
      window.vuplex.addEventListener("message", (event) => {
        console.log(event.data);
        let res = JSON.parse(event.data);
        this.$store.commit("setData", res);
        if (res && res.lenght != 0) {
          if (res.action == "hide") {
            this.isShow = false;
          } else {
            this.isShow = true;
          }
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
  width: 100%;
  height: 100%;
}
.comEntry {
}
</style>
