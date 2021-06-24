<template>
  <div class="enterprisesSettled">
    <div class="tittle">{{ title }}</div>
    <div class="enterprisesList x_fs_rap">
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
// 待入驻企业
.enterprisesSettled {
  .enterprisesList {
    width: 100%;
    height: 145px;
    img {
      .ioc_img(100px, 64px, 5px);
      margin: 0 5px 10px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(n-3) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
