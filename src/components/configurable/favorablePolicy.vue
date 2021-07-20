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
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  mounted() {
    // this.energyTrendFun(this.datas)
  },
  methods: {},
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
      padding: 0.125rem /* 10/80 */ ;
      img {
        .ioc_img(0.625rem /* 50/80 */, 0.625rem /* 50/80 */, 50%) ;;
        background: rgba(204, 204, 204, 0.5);
      }
      span {
        font-size: 0.2rem /* 16/80 */;
        padding: 0.0625rem /* 5/80 */ 0 0.05rem /* 4/80 */;
      }
      p {
        .text_s();
        line-height: 0.2rem /* 16/80 */;
      }
    }
  }
}
</style>
