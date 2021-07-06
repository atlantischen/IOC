<template>
  <div class="favorablePolicyAll">
    <div class="tittle">{{ title }}</div>
    <ul class="favorablePolicy_ul x_rap" :style="$paddingFun(datas.padding)">
      <li
        class="favorablePolicy_li y_c"
        v-for="(t, i) in datas.favorablePolicyDatas"
        :key="i"
      >
        <img :src="t.src" alt="" />
        <span>{{ t.title }}</span>
        <p class="Multi-lineBeyond">{{ t.content }}</p>
      </li>
    </ul>
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
    // this.energyTrendFun(this.datas)
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 优惠政策
.favorablePolicyAll {
  width: 100%;
  .favorablePolicy_ul {
    width: 100%;
    justify-content: space-between;
    .favorablePolicy_li {
      width: 47%;
      padding: 10px;
      img {
        .ioc_img(50px, 50px, 50%);
        background: rgba(204, 204, 204, 0.5);
      }
      span {
        font-size: 16px;
        padding: 5px 0 4px;
      }
      p {
        .text_s();
        line-height: 16px;
      }
    }
  }
}
</style>
