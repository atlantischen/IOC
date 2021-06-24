<template>
  <div class="currentTrendsAll">
    <div class="tittle">{{ title }}</div>
    <ul class="currentTrends_ul">
      <li
        class="currentTrends_li"
        v-for="(t, i) in datas.currentTrendsDatas"
        :key="i"
      >
        <span class="LineBeyond x_c">{{ t.title }}</span>
        <span class="Multi-lineBeyond">{{ t.content }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { redomEchart, uuid } from "@/utils/methods";
export default {
  name: "theParkOutputValAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: uuid()
    }
  },
  mounted () {
    // this.energyTrendFun(this.datas)
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 前言动态
.currentTrendsAll {
  width: 100%;
  .currentTrends_ul {
    padding: 0 15px;
  }
  li {
    display: flex;
    margin-bottom: 10px;
    span {
      padding: 10px 5px;
      &:first-child {
        width: 30%;
        background: #4396f3;
        border-radius: 5px 0 0 5px;
        font-size: 18px;
      }
      &:nth-child(2) {
        width: 70%;
        .text_s();
        .gradient(right, #1e3957, #ffffff00);
      }
    }
    &:last-child {
      margin: 0;
    }
  }
}
</style>
