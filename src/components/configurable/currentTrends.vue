<template>
  <div class="currentTrendsAll">
    <div class="tittle">{{ title }}</div>
    <div class="scrollTop" id="scrollTop">
      <ul
        class="currentTrends_ul"
        id="currentTrendsRef"
        :style="$paddingFun(datas.padding)"
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
      ids: this.$uuid(),
      timer: null,
      OutputValList: null,
      //
      speed: 0
    };
  },
  mounted () {
    this.OutputValList = this.datas.currentTrendsDatas;
    this.$nextTick(() => {
      this.getDatas();
    });
  },
  // beforeDestroy () {
  //   clearInterval(this.timer)
  // },
  methods: {
    getDatas () {
      // var box = document.getElementById("currentTrendsRef");
      // // var box = this.$refs.currentTrendsRef
      // console.log(box.children[0].offsetTop);
      // console.log(box.children[1].offsetTop);
      // var _s = 0;
      // this.timer = setInterval(scrol, 1000);
      // function scrol () {
      //   box.style.transform = `translateY(0)`;
      //   setTimeout(() => {
      //     _s += box.children[1].offsetTop - box.children[0].offsetTop
      //     box.appendChild(box.firstElementChild)
      //     box.style.transform = `translateY(-${_s}px)`;
      //     // box.children[0].remove()
      //   }, 1000);
      // }
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
    transition: all 0.5s ease;
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
</style>
