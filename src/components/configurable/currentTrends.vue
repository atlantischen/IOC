<template>
  <div class="currentTrendsAll">
    <div class="tittle">{{ title }}</div>
    <div class="scrollTop" id="scrollTop">
      <ul
        class="currentTrends_ul"
        :id="'currentTrendsRef_' + ids"
        :ref="'currentTrendsRef_' + ids"
        :style="$paddingFun(datas.padding)"
        :class="{ mover_Top: isShowAn }"
      >
        <li class="currentTrends_li" v-for="(t, i) in OutputValList" :key="i">
          <span class="LineBeyond x_c">{{ t.title }}</span>
          <span>
            <p class="Multi-lineBeyond">{{ t.content }}</p>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
      ids: this.$uuid(),
      OutputValList: null,
      timer: null,
      isShowAn: false,
    };
  },
  mounted () {
    this.OutputValList = this.datas.currentTrendsDatas
    this.$nextTick(() => {
      // this.getDatas();
      this.animationFun()
    });
  },
  destroyed () {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    getDatas () {
      this.$ScrolAnimationTop('currentTrendsRef_' + this.ids, 2)
    },
    animationFun () {
      let count = 3000
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.isShowAn = true
          if (this.OutputValList.length > 1) {
            if (this.OutputValList && this.OutputValList.length) {
              this.OutputValList.push(this.OutputValList[0])
            }
            setTimeout(() => {
              this.OutputValList.splice(0, 1)
              this.isShowAn = false
            }, 500);
          }
        }, count)
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 前沿动态
.currentTrendsAll {
  width: 100%;
  .currentTrends_ul {
    // height: 2.25rem /* 180/80 */;
    padding: 0 0.1875rem /* 15/80 */;
    // overflow: hidden;
  }
  .scrollTop {
    height: 2.25rem /* 180/80 */;
    overflow: hidden;
  }
  .currentTrends_li {
    display: flex;
    height: 0.625rem /* 50/80 */;
    margin-bottom: 0.125rem /* 10/80 */;
    span {
      padding: 0.125rem /* 10/80 */ 0.0625rem /* 5/80 */;
      &:first-child {
        width: 30%;
        background: #4396f3;
        border-radius: 0.0625rem /* 5/80 */ 0 0 0.0625rem /* 5/80 */;
        font-size: 0.225rem /* 18/80 */;
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
.mover_Top {
  animation: marquee 0.5s ease-in-out;
}

@keyframes marquee {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-55px);
  }
}
</style>
