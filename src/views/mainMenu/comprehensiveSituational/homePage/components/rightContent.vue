<template>
  <!-- 综合态势右侧搜索 -->
  <div class="rightContent">
    <SearchBox
      class="SearchBoxClass"
      :text="'搜园区建筑、搜企业、搜商家'"
      @search="clickSwitch"
    />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { redomEchart } from "@/utils/methods";
import { aaa } from "@/api/mockApi";
import axios from "axios";
export default {
  name: "rightContent",
  data () {
    return {
    };
  },
  components: {},
  mounted () {
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
</style>
