<template>
  <div class="tableListAll">
    <div class="tittle">{{ title }}</div>
    <div
      class="tableList_a"
      :class="{ tableList2: datas.header.handle }"
      :style="[$paddingFun(datas.padding), $eHeightFun(datas.eHeight)]"
    >
      <table class="tableList">
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
              <span v-else-if="ii == 'handle'">
                <button class="hd_detail bt_df" @click="getDetailFun(item)">
                  详情
                </button>
              </span>
              <span v-else>{{ item[ii] || "-" }}</span>
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
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "tableListAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
      currentPage: 1,
      total: 1,
      tableData: [],
      s_timer: null
    }
  },
  created () {
  },
  mounted () {
    this.changeDatasFun()
    this.setAnmationF()
  },
  beforeDestroy () {
    clearInterval(this.s_timer)
  },
  methods: {
    getDetailFun (val) {
      console.log(val)
    },
    changeDatasFun () {
      if (this.datas.tabelD) {
        this.total = this.datas.tabelD.length
        let _data = JSON.parse(JSON.stringify(this.datas.tabelD))
        let _f = (this.currentPage - 1) * this.datas.pageSize
        this.tableData = _data.slice(_f, (_f + this.datas.pageSize))
      }
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      clearInterval(this.s_timer)
      this.currentPage = val
      this.changeDatasFun()
      this.setAnmationF()
    },
    setAnmationF () {
      this.s_timer = setInterval(() => {
        this.currentPage++
        if (this.currentPage > Math.ceil(this.total / this.datas.pageSize)) {
          this.currentPage = 1
        }
        this.changeDatasFun()
      }, 3000);
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
  .tableList {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
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
      padding: 0.125rem /* 10/80 */ 0;
    }
  }
  .tableList2 {
    td,
    th {
      padding: 0.1rem /* 8/80 */ 0;
    }
  }
  .hd_detail {
    font-size: 0.15rem /* 12/80 */;
    height: 0.25rem /* 20/80 */;
    line-height: 0.25rem /* 20/80 */;
  }
  .qx_pagination {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1875rem /* 15/80 */ 0 0 0;
  }
}
</style>
