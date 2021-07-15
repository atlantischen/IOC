<template>
  <div class="container">
    <el-select
      class="drop_down "
      v-model="searchData.region"
      placeholder="请选择"
    >
      <el-option
        v-for="item in region"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-select
      class="drop_down"
      v-model="searchData.letter"
      placeholder="请选择"
    >
      <el-option
        v-for="item in letter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="serch_i">
      <el-input
        v-model="searchData.input"
        placeholder="请输入车牌号码"
      ></el-input>
      <div class="item" @click="handleClick">
        <i class="el-icon-search"></i>
        寻车
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: [
        {
          value: "粤",
          label: "粤",
        },
        {
          value: "鄂",
          label: "鄂",
        },
        {
          value: "赣",
          label: "赣",
        },
        {
          value: "川",
          label: "川",
        },
      ],
      letter: [
        {
          value: "B",
          label: "B",
        },
        {
          value: "E",
          label: "E",
        },
        {
          value: "C",
          label: "C",
        },
        {
          value: "F",
          label: "F",
        },
      ],
      input:''
    };
  },
  props: {
    searchData: {
      type: Object,
      default: {
        
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit("search",this.searchData);
    },
  },
};
</script>

<style lang="less" scoped>
:deep(.drop_down) {
  width: 0.875rem /* 70/80 */;
  height: 0.45rem /* 36/80 */;
  font-size: 0.175rem /* 14/80 */;
  margin-right: 0.15rem /* 12/80 */;
  .el-input__inner {
    border-color: #43aaf3;
    background-color: #0e1e30;
    color: #fff;
    height: 0.45rem /* 36/80 */;
    &:focus {
      border-color: #43aaf3;
    }
  }
  .el-input__icon,
  .el-select,
  .el-input {
    line-height: 0.45rem;
  }
}
:deep(.serch_i) {
  display: flex;
  align-items: center;
  width: 2.5rem /* 200/80 */ /* 80/80 */;
  .el-input {
    line-height: 0;
  }
  .el-input__inner {
    border-color: #43aaf3;
    background-color: #0e1e30;
    color: #fff;
    height: 0.45rem /* 36/80 */;
    overflow: hidden;
    &:focus {
  
      border-color: #43aaf3;
    }
  }
  .item {
    width: 0.875rem /* 70/80 */ /* 68/80 */;
    height: 0.45rem /* 36/80 */;
    white-space: nowrap;
    padding: 0 0.0625rem /* 5/80 */;
    background: #4396f3;
    border: 1px solid #4396f3;
    border-radius: 0px 6px 6px 0px;
    font-size: 0.175rem /* 14/80 */;
    line-height: 0.45rem;
    z-index: 1;
    margin-left: -0.0625rem /* 5/80 */;
  }
}
.container {
  display: flex;
  align-items: center;
  height: .45rem /* 36/80 */;
}
</style>
