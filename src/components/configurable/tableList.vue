<template>
  <div
    class="tableListAll"
    @mouseover="hoverItem('in')"
    @mouseout="hoverItem('out')"
  >
    <div class="tittle">{{ title }}</div>
    <ul class="tableList_ul x_sb_rap" v-show="datas.selectList">
      <li
        v-for="(tt, i) in datas.selectList"
        :key="i"
        @click="selectLevelFun(tt.name)"
      >
        {{ tt.name }}
        <span
          :class="
            tt.name == '严重'
              ? 'y_red'
              : tt.name == '重要'
              ? 'y_yl'
              : tt.name == '次要'
              ? 'y_sblue'
              : ''
          "
          >({{ tt.value }})</span
        >
      </li>
    </ul>
    <div
      class="tableList_a"
      :style="[$paddingFun(datas.padding), $eHeightFun(datas.eHeight)]"
    >
      <table
        class="tableList"
        :class="datas.header.handle == '操作' ? 'tableList2' : ''"
      >
        <thead>
          <tr>
            <th v-for="(_t, i) in datas.header" :key="i">{{ _t }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in tableData" :key="i">
            <td v-for="(_t, ii) in datas.header" :key="ii">
              <span
                v-if="ii == 'state'"
                :style="
                  'color:' +
                  (item[ii] == '处理中'
                    ? '#0ff'
                    : item[ii] == '超时'
                    ? '#f00'
                    : '') +
                  ';'
                "
              >
                {{ item[ii] }}
              </span>
              <span v-else-if="ii == 'warnLevel'">
                <button
                  class="bt_round"
                  :class="
                    item[ii] == '严重'
                      ? 'y_bd_red'
                      : item[ii] == '重要'
                      ? 'y_bd_yl'
                      : 'y_bd_sblue'
                  "
                >
                  {{ item[ii] || "-" }}
                </button>
              </span>
              <span v-else-if="ii == 'handle'">
                <button
                  class="hd_detail bt_df"
                  @click="getDetailFun(_data, item, true)"
                >
                  详情
                </button>
              </span>
              <span class="LineBeyond" v-else>{{ item[ii] || "-" }}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <el-pagination
        small
        class="qx_pagination"
        :pager-count="2"
        layout="total,slot,prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        v-model:currentPage="currentPage"
        :page-size="datas.pageSize"
        :total="total"
        ><span class="page_slot"
          >{{ currentPage }}/{{ Math.ceil(total / datas.pageSize) }}</span
        ></el-pagination
      >
    </div>
    <WarnD :_data="WarnDDatas" :show="WarnDShow" @close="getDetailFun" />
    <WorkOrderD
      :_data="WorkOrderDDatas"
      :show="WorkOrderDShow"
      @close="getDetailFun"
    />
  </div>
</template>

<script>
import * as echarts from "echarts";
import WarnD from './tableList_c/warnD.vue'
import WorkOrderD from './tableList_c/workOrderD.vue'
export default {
  name: "tableListAll",
  props: {
    _data: {
      type: Object
    }
  },
  components: { WarnD, WorkOrderD },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
      currentPage: 1,
      total: 1,
      tableData: [],
      total_data: [],
      s_timer: null,
      // detail
      WarnDDatas: [],
      WarnDShow: false,
      WorkOrderDDatas: [],
      WorkOrderDShow: false,
    }
  },
  created () {
  },
  mounted () {
    this.total_data = JSON.parse(JSON.stringify(this.datas.tabelD))
    this.changeDatasFun()
    this.setAnmationF()
  },
  beforeDestroy () {
    clearInterval(this.s_timer)
  },
  methods: {
    // 选择级别
    selectLevelFun (val) {
      clearInterval(this.s_timer)
      this.currentPage = 1
      this.total_data = JSON.parse(JSON.stringify(this.datas.tabelD))
      switch (true) {
        case val == '严重' || val == '重要' || val == '次要':
          this.total_data = this.total_data.filter(e => {
            return e.warnLevel == val
          })
          this.changeDatasFun()
          break;
        default:
          this.changeDatasFun()
          break;
      }
      console.log(val)
    },
    getDetailFun (val, val2, bool) {
      console.log(val, val2)
      switch (val.title) {
        case '未解决告警':
          console.log('未解决告警')
          if (this.WarnDShow && bool) {
            this.$message.info('请先关闭告详情警窗口！')
            return
          }
          this.WarnDDatas = [val, val2]
          this.WarnDShow = bool
          break;
        case '工单汇总':
          console.log('工单汇总')
          if (this.WorkOrderDShow && bool) {
            this.$message.info('请先关闭工单详情窗口！')
            return
          }
          this.WorkOrderDDatas = [val, val2]
          this.WorkOrderDShow = bool
          break;
        default:
          this.WorkOrderDDatas = []
          break;
      }
    },
    changeDatasFun () {
      this.total = this.total_data.length
      let _f = (this.currentPage - 1) * this.datas.pageSize
      this.tableData = this.total_data.slice(_f, (_f + this.datas.pageSize))
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      clearInterval(this.s_timer)
      this.currentPage = val
      this.changeDatasFun()
      // this.setAnmationF()
    },
    setAnmationF () {
      this.s_timer = setInterval(() => {
        this.currentPage++
        if (this.currentPage > Math.ceil(this.total / this.datas.pageSize)) {
          this.currentPage = 1
        }
        this.changeDatasFun()
      }, 3000);
    },
    hoverItem (val) {
      switch (val) {
        case "in":
          this.changeDatasFun()
          break;
        default:
          clearInterval(this.s_timer)
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.tableListAll {
  .tableList_a {
    width: 100%;
    height: 4.625rem /* 370/80 */;
  }
  .tableList_ul {
    padding: 0.0625rem /* 5/80 */ 0;
    li {
      font-size: 0.175rem /* 14/80 */;
      text-align: center;
      width: 25%;
      cursor: pointer;
    }
  }
  .tableList {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    font-size: 0.175rem /* 14/80 */;
    thead {
      color: rgba(255, 255, 255, 0.7);
      tr {
      }
    }
    tr {
      &:nth-child(2n) {
        background: rgba(67, 149, 243, 0.2);
      }
    }
    td,
    th {
      padding: 0.125rem /* 10/80 */ 0.0625rem /* 5/80 */;
    }
    td {
      span {
        display: inline-block;
        max-width: 1.125rem /* 90/80 */;
      }
    }
  }
  .tableList2 {
    td,
    th {
      padding: 0.1rem /* 8/80 */ 0.0625rem /* 5/80 */;
    }
  }
  .hd_detail {
    font-size: 0.15rem /* 12/80 */;
    height: 0.25rem /* 20/80 */;
    line-height: 1;
  }
  .bt_round {
    font-size: 0.175rem /* 14/80 */;
  }
  .qx_pagination {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1875rem /* 15/80 */ 0 0 0;
  }
}
</style>
