<template>
  <div class="tableListAll">
    <div class="tittle">{{ title }}</div>
    <table
      class="tableList"
      :style="($paddingFun(datas.padding), $eHeightFun(datas.eHeight))"
    >
      <thead>
        <tr>
          <th v-for="(_t, i) in datas.header" :key="i">{{ _t }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in tableData" :key="i">
          <td>{{ item.licence }}</td>
          <td>{{ item.ownerName }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.time }}</td>
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
      :page-size="pageSize"
      :total="total"
      ><span class="page_slot">{{ currentPage }}/4</span></el-pagination
    >
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
      pageSize: 8,
      tableData: [],
      s_timer: null
    }
  },
  created () {
  },
  mounted () {
    this.total = this.datas.tabelD.length
    this.changeDatasFun()
    this.setAnmationF()
  },
  beforeDestroy () {
    clearInterval(this.s_timer)
  },
  methods: {
    changeDatasFun () {
      let _data = JSON.parse(JSON.stringify(this.datas.tabelD))
      let _f = (this.currentPage - 1) * this.pageSize
      this.tableData = _data.slice(_f, (_f + this.pageSize))
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
        if (this.currentPage > Math.ceil(this.total / this.pageSize)) {
          this.currentPage = 1
        }
        this.changeDatasFun()
      }, 2500);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.tableListAll {
  height: 5rem /* 400/80 */;
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
  .qx_pagination {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1875rem /* 15/80 */ 0 0 0;
  }
}
</style>
