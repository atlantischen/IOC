<template>
  <ul
    class="centerData_c x_c ioc_animated"
    :class="{ fadeInDownTop: isShow }"
    v-if="isShow"
  >
    <li v-for="(item, i) in centerlist" :key="i" class="y_c">
      <span><NumCounter :value="item.val"></NumCounter></span>
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "centerData",
  props: {
    list: {},
  },
  data() {
    return {
      isShow: false,
      centerlist: null,
    };
  },
  watch: {
    "$store.state.comState.showCenterDatas": function(n, o) {
      this.isShow = n;
    },
    list: function(n, o) {
      // console.log(n, o)
      this.centerlist = n;
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
@import "~@/style/gl.less";
.centerData_c {
  position: fixed;
  top: 1.625rem /* 130/80 */;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  min-width: 0;
  z-index: 200;
  li {
    padding: 0 0.5rem /* 40/80 */;
    span {
      white-space: nowrap;
      &:first-child {
        .datas_s(0.375rem /* 30/80 */) ;;
        color: #ffb400;
      }
      &:last-child {
        .text_s(0.175rem /* 14/80 */) ;;
      }
    }
  }
}
</style>
