<template>
  <div class="enterprisesSettled">
    <div class="tittle">{{ title }}</div>
    <div class="enterprisesList x_fs_rap" :ref="'enterprisesListRef_' + ids">
      <img
        v-for="(t, i) in datas.enterprisesListDatas"
        :key="i"
        :src="t.src"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
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
      ids: this.$uuid()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getDatas();
    });
  },
  methods: {
    getDatas () {
      this.$ScrolLeftARight('enterprisesListRef_' + this.ids, 3)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 待入驻企业
.enterprisesSettled {
  .enterprisesList {
    width: 100%;
    height: 1.8125rem /* 145/80 */;
    overflow: hidden;
    img {
      .ioc_img(1.25rem /* 100/80 */, .8rem /* 64/80 */, .0625rem /* 5/80 */);
      margin: 0 0.0625rem /* 5/80 */ 0.125rem /* 10/80 */;
      &:nth-child(3n) {
        // margin-right: 0;
      }
      &:nth-child(n-3) {
        // margin-bottom: 0;
      }
    }
  }
}
</style>
