<template>
  <!-- 安保大数据分析 -->
  <div class="securityBDA">
    <el-tabs
      class="securityBDA_tabs"
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
    >
      <el-tab-pane label="数据模式" name="dataMode">
        <template #label>
          <span><i class="iconfont icon-shuju"></i> 数据模式</span>
        </template>
      </el-tab-pane>
      <el-tab-pane label="视频模式" name="videoMode">
        <template #label>
          <span><i class="iconfont icon-shipin-tianchong"></i> 视频模式</span>
        </template>
      </el-tab-pane>
    </el-tabs>
    <!-- <DataMode v-if="activeName == 'first'" />
    <VideoMode v-else /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import DataMode from './components/dataMode.vue'
import VideoMode from './components/videoMode.vue'
export default {
  name: 'securityBDA',
  
  components: { DataMode, VideoMode },
  data () {
    return {
      activeName: 'dataMode'
    }
  },
  created () {
    if (this.$route.name == this.activeName) { return }
    this.activeName = this.$route.name
  },
  methods: {
    handleClick (a) {
      this.activeName = a.props.name
      this.$router.push('/theParkService/securityBDA/' + this.activeName)
    }
  }
}
</script>

<style lang='less' scoped>
.securityBDA {
  :deep(.securityBDA_tabs) {
    position: fixed;
    top: 1.5625rem /* 125/80 */;
    left: 50%;
    transform: translate(-50%, 0%);
    -webkit-transform: translate(-50%, 0%);
    z-index: 109;
    color: #fff;
    height: 0.5rem /* 40/80 */;
    background: rgba(16, 31, 50, 0.8);
    border: 1px solid rgba(70, 149, 239, 0.3);
    border-radius: 0.0625rem /* 5/80 */;
    .iconfont {
      font-size: 0.3125rem /* 25/80 */;
      vertical-align: bottom;
      font-weight: normal;
      margin-right: 0.075rem /* 6/80 */;
    }
    .el-tabs__header,
    .el-tabs__header .el-tabs__nav {
      margin-top: -0.025rem /* 2/80 */;
      border: 0;
    }
    .el-tabs__nav {
    }
    .el-tabs__item.is-active {
      color: #fff;
    }
    .el-tabs__item {
      width: 2.475rem /* 198/80 */;
      height: 0.575rem /* 46/80 */;
      font-weight: bold;
      font-size: 0.2rem /* 16/80 */;
      text-align: center;
      color: #4696ef;
      border: none;
      &:first-child {
        &.is-active {
          background: url("~@/assets/img/datas/tab_actived.png") no-repeat;
          background-size: 102% 100%;
        }
      }
      &:last-child {
        &.is-active {
          position: relative;
          &::before {
            position: absolute;
            left: 0;
            top: 0;
            content: "";
            width: 100%;
            height: 100%;
            transform: rotate(180deg);
            background: url("~@/assets/img/datas/tab_actived.png") no-repeat;
            background-size: 102% 100%;
            z-index: -1;
          }
        }
      }
    }
    .el-tabs__content {
      position: relative;
    }
  }
}
</style>
