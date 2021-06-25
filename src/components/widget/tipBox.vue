<template>
  <div class="p_x_c2 tipBox">
    <div class="tipBox_text x_c" :class="'tipBox_warn'">
      <p>告警！2021-04-30 15:00{李玲}在{公寓广场}发生了{黑名单告警}</p>
      <i class="el-icon-circle-close" @close="closeTip"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "tipBox",
  props: {
    text: {
      type: String,
      default: "请输入...",
    },
  },
  data () {
    return {};
  },
  components: {},
  mounted () { },
  methods: {
    closeTip () { },
  },
};
</script>

<style lang="less">
@import "~@/style/gl.less";
.tipBox {
  top: 0.875rem /* 70/80 */ !important;
  // min-width: 8.125rem /* 650/80 */;
  width: 8.75rem /* 700/80 */;
  height: 0.5rem /* 40/80 */;
  line-height: 0.5rem /* 40/80 */;
  font-size: 0.225rem /* 18/80 */;
  margin: 0.25rem /* 20/80 */ 0;
  .tipBox_text {
    white-space: nowrap;
    padding: 0 0.4375rem /* 35/80 */;
    width: 100%;
    background: url("~@/assets/img/tip_warn.png") center no-repeat;
    background-size: 100% 100%;
    p {
      width: 100%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .el-icon-circle-close {
    font-size: 0.3rem /* 24/80 */;
    margin: 0 0.125rem /* 10/80 */;
  }
}
.tipBox_warn {
  color: #e5181e;
}
</style>
