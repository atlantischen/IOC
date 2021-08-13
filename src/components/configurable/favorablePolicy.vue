<template>
  <div class="favorablePolicyAll">
    <div class="tittle">{{ title }}</div>
    <div class="favorablePolicyList">
      <div
        :ref="'favorablePolicy_ul' + ids"
        :style="$paddingFun(datas.padding)"
      >
        <ul
          class="favorablePolicy_ul x_rap"
          v-for="(t, i) in fDatas"
          :key="i"
          :class="{ mover_TOP: isShowAn }"
        >
          <li
            class="favorablePolicy_li y_c"
            v-for="(tt, ii) in fDatas[i]"
            :key="ii"
          >
            <img :src="tt.src" alt="" />
            <span>{{ tt.title }}</span>
            <p class="Multi-lineBeyond">{{ tt.content }}</p>
          </li>
        </ul>
      </div>
    </div>
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
  data () {
    return {
      ...this._data,
      ids: this.$uuid(),
      fDatas: [],
      timer: null,
      isShowAn: false,
    };
  },
  watch: {
    datas: {
      handler (n, o) {
        let _l = Math.ceil(n.favorablePolicyDatas.length / 2)
        for (let i = 0; i < _l; i++) {
          this.fDatas[i] = n.favorablePolicyDatas.slice(i * 2, i * 2 + 2)
        }
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    // this.$ScrolAnimationTop('favorablePolicy_ul' + this.ids, 3)
    // this.fDatas = [...this.fDatas, ...this.fDatas]
    this.animationFun()
  },
  destroyed () {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    animationFun () {
      let count = 4000
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.isShowAn = true
          if (this.fDatas.length > 1) {
            if (this.fDatas && this.fDatas.length) {
              this.fDatas.push(this.fDatas[0])
            }
            setTimeout(() => {
              this.fDatas.splice(0, 1)
              this.isShowAn = false
            }, 500);
          }
        }, count)
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 优惠政策
.favorablePolicyAll {
  width: 100%;
  .favorablePolicyList {
    width: 100%;
    height: 3.25rem /* 260/80 */;
    overflow: hidden;
  }
  .favorablePolicy_ul {
    width: 100%;
    justify-content: space-between;
    .favorablePolicy_li {
      width: 47%;
      padding: 0.125rem /* 10/80 */;
      img {
        .ioc_img(0.625rem /* 50/80 */, 0.625rem /* 50/80 */, 50%);
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
.mover_TOP {
  animation: marquee 1s ease-in-out;
}

@keyframes marquee {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-160px);
  }
}
</style>
