<template>
  <div class="searchBox p_x_c">
    <el-input
      class="searchInput"
      @input="inputFun"
      :placeholder="text"
      v-model="inputVal"
    >
      <template #append>
        <span v-show="!ishowIcon">{{ bt_text }}</span>
        <el-button
          v-show="ishowIcon"
          :icon="icon"
          @click="clickHandle"
        ></el-button>
      </template>
    </el-input>
    <slot></slot>
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
    inputV: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      inputVal: "",
    };
  },
  watch: {
    inputVal() {
      return this.inputV;
    },
  },
  mounted() {},
  methods: {
    clickHandle() {
      this.$emit("_search", this.inputVal);
    },
    inputFun() {
      this.$emit("_input", this.inputVal);
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
      color: rgba(255, 255, 255, 1);
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
