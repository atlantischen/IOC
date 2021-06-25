<template>
  <!-- 综合态势右侧搜索 -->
  <div class="rightContent">
    <LeftRight>
      <template #left>
        <SearchBox
          class="SearchBoxClass"
          :text="'搜园区建筑、搜企业、搜商家'"
          @_search="searchList"
        />
      </template>
      <template #center></template>
      <template #right></template>
    </LeftRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { redomEchart } from "@/utils/methods";
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
    searchList () {
      console.log('222')
      this.$emit('_c')
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.rightContent {
}
</style>
