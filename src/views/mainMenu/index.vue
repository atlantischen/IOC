<template>
  <div id="MainMenu">
    <iframe
      id="iframe3D"
      ref="iframe"
      :src="url"
      allowfullscreen="true"
      frameborder="0"
    ></iframe>
    <router-view v-if="isShow" name="aa" class="comEntry"></router-view>
    <router-view v-if="isShow" class="comEntry"></router-view>
    <!-- 告警框 -->
    <TipBox :_data="tipList" />
    <!-- 右侧警告框 -->
    <AlarmAck
      :_isFade="showAlarmAck"
      :_datas="tipList"
      @close="closeOpenItem"
    />
    <!-- 中心数据 -->
    <CenterDatas :list="centerDatas" />
    <!-- 查看所有告警 -->
    <AllAlert
      :Visible="showAllAlert"
      :_data="allAlertDatas"
      @off="closeOpenItem"
    />
    <!-- 监控  摄像头 -->
    <MonitorVideo
      :monitorVisible="monitorVisible"
      :dataList="videoList"
      @off="MonitorCloseDialog"
    />
  </div>
</template>

<script>
import falseD from '@/datas/falseDatas';
import AllAlert from '@/components/widget/allAlert.vue';
import AlarmAck from '@/views/mainMenu/comprehensiveSituational/homePage/components/alarmAck.vue';
export default {
  name: 'MainMenu',
  components: { AlarmAck, AllAlert },
  data() {
    return {
      isShow:false ,
      showAlarmAck: false,
      showAllAlert: false,
      showEscHandler: false,
      allAlertDatas: null,
      url: '',
      warnTimer: null,
      tipList: null,
      tipNum: 0,
      centerDatas: [],
      monitorVisible: false,
      videoList: [
        {
          id: this.$uuid(),
          url: '',
        },
      ],
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
      console.log(res,'路由');

      try {
        if (res.action.indexOf('/') === 0) {
          if (res.action === '/greenEnergyEfficiency/building/codesource') {
            this.$store.commit('setActiveIndex', 0);
          }
          this.$router.push(res.action);
        }
      } catch (e) {}
    },
    '$store.state.comState.centerDatas': {
      handler(n) {
        if (n) {
          this.centerDatas = n;
        }
      },
      immediate: true,
    },
    isShow: {
      handler(n) {
        if (n) {
          this.warnTimeFun();
        }
      },
      immediate: true,
    },
  },
  beforeCreate() {
    this.$store.dispatch('SET_SHOWWARNTIP', false);
    if (process.env.NODE_ENV === 'production') {
      this.$router.push('/comprehensiveSituational/homePage');
    }
  },
  created() {
    this.$store.commit('SET_CENTERDATAS', [false, null]);
    if (window.vuplex) {
      this.addMessageListener();
    } else {
      window.addEventListener('vuplexready', this.addMessageListener);
    }
    window.addEventListener('message', (event) => {
      if (
        (typeof event.data == 'string' && event.data.indexOf('data') != -1) ||
        (typeof event.data == 'object' && event.data.data != undefined)
      ) {
        let res = JSON.parse(event.data);
        console.log(res,'所有消息');
        this.$store.commit('setData', res);
        if (res.data === 'IOCHOME') {
          this.isShow = true;
        } else if (res.action === 'hide') {
          this.clearWarnTimeFun();
          this.isShow = false;
          this.hideGlobal(false);
        } else if (res.action === 'OpenMonitorOrCamera') {
          this.monitorVisible = true;
          this.videoList[0].url = res.data;
          console.log(this.monitorVisible, this.videoList, 'this.videoList');
          // 设备
          // this.fade = false;
          // this.deviceShow = true;
        } else if (res.action === 'OnAlarmProcessingBtnClick') {
          // 确认报警
          this.showAlarmAck = true;
        } else if (res.action === 'OpenWarningMessagePage') {
          // 报警列表
          this.showAllAlert = true;
          this.allAlertDatas = res.data.Datas;
        } else if (res.action === 'Enter3DFullScreen') {
          // 3D全屏
          this.showEscHandler = true;
          if (this.checkFull()) {
            this.hideGlobal(false);
            this.clearWarnTimeFun();
            this.isShow = false;
            return;
          }
          this.isShow = false;
          this.clearWarnTimeFun();
          this.$handleFullScreen();
          this.hideGlobal(false);
        } else if (res.data === 'esc') {
          // 退出3D全屏
          // this.Exit3DFullScreen()
        }
      }
    });
    if (this.getQueryString('debug')) {
      this.url = '';
      window.debug = true;
    } else {
      this.url = process.env.VUE_APP_UNITY;
      // this.url = 'http://172.21.70.246:8110';
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.iframe = this.$refs.iframe;
      var _that = this;
      window.addEventListener('resize', function() {
        // console.log('isFull', _that.checkFull());
        var isFull = _that.checkFull();
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
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    addMessageListener() {
      window.vuplex.addEventListener('message', (event) => {
        console.log(event.data);
        let res = JSON.parse(event.data);
        this.$store.commit('setData', res);
        console.log(res,'debug');
        if (res && res.lenght != 0) {
          if (res.action == 'hide') {
            this.isShow = false;
          } else if (res.action === 'Enter3DFullScreen') {
          // 3D全屏
          this.showEscHandler = true;
          if (this.checkFull()) {
            this.hideGlobal(false);
            this.clearWarnTimeFun();
            this.isShow = false;
            return;
          }
          this.isShow = false;
          this.clearWarnTimeFun();
          this.$handleFullScreen();
          this.hideGlobal(false);
        }else {
            this.isShow = true;
          }
        }
      });
    },

    hideGlobal(bool) {
      this.showAllAlert = bool;
      this.showAlarmAck = bool;
      this.$store.dispatch('SET_SHOWWARNTIP', bool);
      this.$store.commit('SET_CENTERDATAS', [bool, null]);
    },
    closeOpenItem(name, bool) {
      switch (name) {
        case 'allAlarm':
          this.showAllAlert = bool;
          break;
        case 'AlarmAck':
          this.showAlarmAck = bool;
          this.clearWarnTimeFun();
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
      this.$SendMessageToUnity('Exit3DFullScreen', {});
      this.showEscHandler = false;
    },
    // 随机触发警告
    warnTimeFun() {
      var timerOut;
      if (timerOut) {
        clearTimeout(timerOut);
        timerOut = null;
      }
      this.warnTimer = setInterval(() => {
        console.log(this.tipNum);
        this.tipNum = this.tipNum >= falseD.warnDatas.length ? 0 : this.tipNum;
        this.tipList = falseD.warnDatas[this.tipNum];
        this.$store.dispatch('SET_SHOWWARNTIP', true);
        this.tipNum++;
        timerOut = setTimeout(() => {
          this.clearWarnTimeFun();
          this.warnTimeFun();
        }, 30000);
      }, 600);
      // }, this.$randomNumer(3000, 30000))
    },
    clearWarnTimeFun() {
      clearInterval(this.warnTimer);
      this.warnTimer = null;
      this.$store.dispatch('SET_SHOWWARNTIP', false);
    },
    //监测是否按下esc键
    checkFull() {
      var isFull =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;
      if (isFull == undefined) isFull = false;
      if (isFull) isFull = true;
      return isFull;
    },
    MonitorCloseDialog(val) {
      this.monitorVisible = val;
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
