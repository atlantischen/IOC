<template>
  <!-- 工单汇总 -->
  <div class="workOrderDetail" v-if="showBox">
    <div class="minDiaolg">
      <i class="el-icon-close" @click="closeDialog(false)"></i>
      <div class="minDiaolg_t">工单详情</div>
      <ul class="minDiaolg_c bigBar">
        <li>
          <div class="li_title">工单信息</div>
          <p>
            <span>工单编号：</span
            ><span>{{ _data[1].workOrderNum || "-" }}</span>
          </p>
          <p>
            <span>工单类型：</span><span>{{ _data[1].orderType || "-" }}</span>
          </p>
          <p>
            <span>创建时间：</span><span>{{ _data[1].creatTime || "-" }}</span>
          </p>
          <p>
            <span>工单内容：</span
            ><span>{{ _data[1].workOrderInfo || "-" }}</span>
          </p>
          <p>
            <span>图片预览：</span
            ><span
              ><img
                class="pp_img"
                v-if="_data[1].workOrderImg"
                :src="_data[1].workOrderImg"
                alt=""
              />
              <i class="pp_img" v-else>-</i>
            </span>
          </p>
          <p>
            <span>附件下载：</span
            ><span
              >{{ _data[1].workOrderFile || "-"
              }}<i
                v-if="_data[1].workOrderFile"
                class="iconfont icon-download"
              ></i
            ></span>
          </p>
        </li>
        <li>
          <div class="li_title">处理进度</div>
          <p>
            <span>处理时间：</span>{{ _data[1].hdTime || "-" }}<span></span>
          </p>
          <p>
            <span>处理人员：</span><span>{{ _data[1].hdPeople || "-" }}</span>
          </p>
          <p>
            <span>工单状态：</span
            ><span
              :style="
                'color:' +
                (_data[1].state == '处理中'
                  ? '#0ff'
                  : _data[1].state == '超时'
                  ? '#f00'
                  : '') +
                ';'
              "
              >{{ _data[1].state }}</span
            >
          </p>
          <p>
            <span>处理说明：</span><span>{{ _data[1].hdInfo || "-" }}</span>
          </p>
          <p>
            <span>处理照片：</span
            ><span
              ><img
                class="pp_img"
                v-if="_data[1].hdImg"
                :src="_data[1].hdImg"
                alt=""
              />
              <i class="pp_img" v-else>-</i>
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "theParkOutputValAll",
  props: {
    _data: {
      type: Object
    },
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      showBox: false
    }
  },
  watch: {
    show: {
      handler (n, o) {
        this.showBox = n
      },
      deep: true
    }
  },
  mounted () {
  },
  methods: {
    closeDialog (val) {
      this.showBox = val
      this.$emit('close', this._data[0], this._data[1], val)
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
@import "~@/style/animation.less";
.workOrderDetail {
  position: fixed;
  right: 1rem /* 80/80 */;
  top: 1.5rem /* 120/80 */;
  .toShow(0.5s, 0s);
  .minDiaolg {
    width: 6.275rem /* 502/80 */;
    height: 4.25rem /* 340/80 */;
    background: url("~@/assets/img/datas/dialog_bg2.png") no-repeat;
    background-size: 100% 100%;
    padding: 0.15rem /* 12/80 */ 0.25rem /* 20/80 */ 0.375rem /* 30/80 */;
    .el-icon-close {
      position: absolute;
      top: 0.1875rem /* 15/80 */;
      right: 0.1875rem /* 15/80 */;
      font-size: 0.3rem /* 24/80 */;
      float: right;
      color: rgba(255, 255, 255, 0.3);
      vertical-align: middle;
      cursor: pointer;
    }
    .minDiaolg_t {
      height: 0.275rem /* 22/80 */;
      font-size: 0.2rem /* 16/80 */;
      color: #4396f3;
    }
    .minDiaolg_c {
      display: flex;
      justify-content: space-between;
      height: 3.625rem /* 290/80 */;
      font-size: 0.15rem /* 12/80 */;
      overflow-y: auto;
      .icon-download {
        color: #4396f3;
        padding-left: 0.125rem /* 10/80 */;
      }
      .li_title {
        width: 100%;
        padding: 0.0375rem /* 3/80 */ 0 0.0375rem /* 3/80 */ 0.125rem
          /* 10/80 */;
        .gradient(right, #2c64a5, #4396f300);
        margin-top: 0.125rem /* 10/80 */;
      }
      li {
        width: 48%;
      }
      p {
        display: flex;
        line-height: 0.225rem /* 18/80 */;
        padding: 0.1rem /* 8/80 */ 0 0 0.125rem /* 10/80 */;
        span {
          &:first-child {
            display: inline-block;
            white-space: nowrap;
            min-width: 0.75rem /* 60/80 */;
            text-align: justify;
            text-align-last: justify;
            padding-right: 0.0625rem /* 5/80 */;
          }
          &:nth-child(2) {
            vertical-align: text-top;
          }
          .pp_img {
            display: inline-block;
            width: 1.5rem /* 120/80 */;
            height: 1rem /* 80/80 */;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
