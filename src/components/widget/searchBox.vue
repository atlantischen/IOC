<template>
  <div class="searchBox p_x_c">
    <el-input class="searchInput" :placeholder="text" v-model="input2">
      <template #append>
        <span v-show="!ishowIcon">{{ bt_text }}</span>
        <el-button
          v-show="ishowIcon"
          :icon="icon"
          @click="clickHandle"
        ></el-button>
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "searchBox",
  props: {
    text: {
      type: String,
      default: "请输入...",
    },
    bt_text: {
      type: String,
    },
    icon: {
      type: String,
      default: "el-icon-search",
    },
    ishowIcon: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {};
  },
  components: {},
  mounted () { },
  methods: {
    clickHandle (val) {
      emit('search')
    },
  },
};
</script>

<style lang="less">
@import "~@/style/gl.less";
.searchBox {
  width: 100%;
  padding: 0.25rem /* 20/80 */ 0;
  .searchInput {
    // width: 5.1625rem /* 413/80 */;
    width: 100%;
    height: 0.45rem /* 36/80 */;
    font-size: 0.175rem /* 14/80 */;
    background: rgba(34, 48, 69, 0.5);
    border: 0.0125rem /* 1/80 */ solid #4396f3;
    border-radius: 6px;
    overflow: hidden;
    .el-input__inner {
      background: transparent;
      border: none;
      &::placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    .el-input-group__append {
      background: transparent;
      border: 0;
      .el-button {
        background: #4396f3;
        border-radius: 0;
        border: 0.0125rem /* 1/80 */ solid #4396f3;
        color: #fff;
        font-size: 0.25rem /* 20/80 */;
      }
    }
  }
}
</style>
