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
    <AlarmAck :_isFade="showAlarmAck" @close="closeOpenItem" />
    <!-- 中心数据 -->
    <CenterDatas :list="centerDatas" />

    <!-- 查看所有告警 -->
    <AllAlert
      :Visible="showAllAlert"
      :_data="allAlertDatas"
      @off="closeOpenItem"
    />
  </div>
</template>

<script>
import AllAlert from "@/components/widget/allAlert.vue";
import AlarmAck from "@/views/mainMenu/comprehensiveSituational/homePage/components/alarmAck.vue";
export default {
  name: "MainMenu",
  components: { AlarmAck, AllAlert },
  data() {
    return {
      isShow: false,
      showAlarmAck: false,
      showAllAlert: false,
      showEscHandler: false,
      allAlertDatas: null,
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
      try {
        if (res.action.indexOf("/") === 0) {
          if (res.action === "/greenEnergyEfficiency/building/codesource") {
            this.$store.commit("setActiveIndex", 0);
          }
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
    isShow: {
      handler(n, o) {
        if (n) {
          this.warnTimeFun();
        }
      },
      immediate: true,
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
        console.log(res, "resShow");
        this.$store.commit("setData", res);
        if (res.data === "IOCHOME") {
          this.isShow = true;
        } else if (res.action === "hide") {
          this.clearWarnTimeFun();
          this.isShow = false;
          this.hideGlobal(false);
        } else if (res.action === "ShowUserInterface") {
          // 设备
          // this.fade = false;
          // this.deviceShow = true;
        } else if (res.action === "OnAlarmProcessingBtnClick") {
          // 确认报警
          this.showAlarmAck = true;
        } else if (res.action === "OpenWarningMessagePage") {
          // 报警列表
          this.showAllAlert = true;
          this.allAlertDatas = res.data.Datas;
        } else if (res.action === "Enter3DFullScreen") {
          // 3D全屏
          this.clearWarnTimeFun();
          this.$handleFullScreen();
          this.hideGlobal(false);
          this.isShow = false;
          this.showEscHandler = true;
        } else if (res.data === "esc") {
          // 退出3D全屏
          // this.Exit3DFullScreen()
        }
      }
    });
    if (this.getQueryString("debug")) {
      this.url = "";
      window.debug = true;
    } else {
      this.url = process.env.VUE_APP_UNITY;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.iframe = this.$refs.iframe;
      var _that = this;
      window.addEventListener("resize", function() {
        var isFull =
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement;
        if (isFull == undefined) isFull = false;
        console.log(!isFull, _that.showEscHandler);
        if (!isFull && _that.showEscHandler) {
          // 全屏下按键esc
          _that.Exit3DFullScreen();
        }
      });
    });
  },
  beforeDestroy() {
    this.clearWarnTimeFun();
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

    hideGlobal(bool) {
      // this.fade = bool;
      // this.deviceShow = bool;
      this.showAllAlert = bool;
      this.showAlarmAck = bool;
      this.$store.dispatch("SET_SHOWWARNTIP", bool);
      this.$store.commit("SET_CENTERDATAS", [bool, null]);
    },
    closeOpenItem(name, bool) {
      switch (name) {
        case "allAlarm":
          this.showAllAlert = bool;
          break;
        case "AlarmAck":
          this.showAlarmAck = bool;
          break;
        default:
          this.hideGlobal(false);
          break;
      }
    },
    // 退出3D全屏
    Exit3DFullScreen() {
      this.clearWarnTimeFun();
      this.isShow = true;
      this.$SendMessageToUnity("Exit3DFullScreen", {});
      this.showEscHandler = false;
    },
    // 随机触发警告
    warnTimeFun() {
      // this.warnTimer = setInterval(() => {
      this.tipList = [
        {
          text: "告警！2021-05-11 15:41:47 3期C座5楼电梯间发生陌生人报警",
        },
      ];
      // {
      //   SerialNum: 0,
      //   EquipmentNum: "534080",
      //   AlarmLocation: "实验车间",
      //   AlarmType: "火警",
      //   AlarmTime: "2021-05-27 15:28:30",
      // }
      this.$store.dispatch("SET_SHOWWARNTIP", true);
      // }, this.$randomNumer(3000, 30000));
    },
    clearWarnTimeFun() {
      // clearInterval(this.warnTimer);
      // this.warnTimer = null;
      // this.$store.dispatch("SET_SHOWWARNTIP", false);
    },
    //监测是否按下esc键
    checkFull() {
      var isFull =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;
      if (isFull == undefined) isFull = false;
      return isFull;
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
  // background-color: #CCC;
}
#iframe3D {
  width: 100%;
  height: 100%;
}
.comEntry {
}
</style>
