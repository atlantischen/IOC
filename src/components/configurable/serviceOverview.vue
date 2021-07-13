<template>
  <div class="serviceOverviewAll">
    <div class="tittle">{{ title }}</div>
    <div
      class="serviceOverviewList"
      :style="[$paddingFun(datas.padding), $eHeightFun(datas.eHeight)]"
    >
      <table class="table_style" border="0">
        <tr>
          <th></th>
          <th v-for="(item, i) in datas.header" :key="i">{{ item }}</th>
        </tr>
        <tr v-for="(item, i) in datas.tabList" :key="i">
          <td class="tb_bg">{{ item.name }}</td>
          <td v-for="(t, ii) in item.data" :key="ii">
            <NumCounter :value="t"></NumCounter>
          </td>
        </tr>
        <tr>
          <td></td>
          <td v-for="(item, i) in datas.return" :key="i">
            <i
              class="tb_arrows"
              :class="item.state == 'up' ? 'arrows_up' : 'arrows_down'"
            ></i
            >{{ item.data }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "theParkIsAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
    }
  },
  mounted () {
    this.serviceOverviewFun(this.datas)
  },
  methods: {
    serviceOverviewFun (val) {

    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.serviceOverviewAll {
  .serviceOverviewList {
    .table_style {
      width: 100%;
      text-align: center;
      tr {
        td {
          margin-bottom: 0.25rem /* 20/80 */;
          padding: 0 0.15rem /* 12/80 */;
        }
        &:nth-last-child(2) {
          td {
            margin: 0;
          }
        }
        &:nth-last-child(1) {
          td {
            padding-bottom: 0.125rem /* 10/80 */;
          }
        }
      }
      th {
        .text_s(.175rem /* 14/80 */);
        padding-bottom: 0.25rem /* 20/80 */;
      }
      td {
        .datas_s(.25rem /* 20/80 */);
        font-size: 0.225rem /* 18/80 */;
      }
      .tb_arrows {
        display: block;
        width: 100%;
        height: 0.3375rem /* 27/80 */;
        &.arrows_up {
          background: url("~@/assets/img/arrows_up.png") center no-repeat;
          background-size: contain;
        }
        &.arrows_down {
          background: url("~@/assets/img/arrows_down.png") center no-repeat;
          background-size: contain;
        }
      }
      .num {
        display: inline-block;
      }
      .tb_bg {
        .x_left();
        padding: 0 0.1875rem /* 15/80 */;
        width: 1.175rem /* 94/80 */;
        height: 1rem /* 80/80 */;
        font-size: 0.3rem /* 24/80 */;
        font-weight: 600;
        font-family: "Microsoft YaHei";
        .gradient(right, #4396f3, #ffffff00);
        border-radius: 3px 0 0 3px;
      }
    }
  }
}
</style>
