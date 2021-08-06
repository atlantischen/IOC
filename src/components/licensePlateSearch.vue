<template>
  <div  class="container " >
    <el-select
      class="drop_down "
      v-model="searchData.region"
      placeholder="请选择"
      popper-class="select_item"
      :popper-append-to-body="false"
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
      popper-class="select_item1"
      :popper-append-to-body="false"
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
        v-model="searchData.number"
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
          value: "京",
          label: "京",
        },
        {
          value: "浙",
          label: "浙",
        },
        {
          value: "津",
          label: "津",
        },
        {
          value: "皖",
          label: "皖",
        },
        {
          value: "沪",
          label: "沪",
        },
        {
          value: "闽",
          label: "闽",
        },
        {
          value: "渝",
          label: "渝",
        },
        {
          value: "赣",
          label: "赣",
        },
        {
          value: "港",
          label: "港",
        },
        {
          value: "鲁",
          label: "鲁",
        },
        {
          value: "澳",
          label: "澳",
        },
        {
          value: "豫",
          label: "豫",
        },
        {
          value: "蒙",
          label: "蒙",
        },
        {
          value: "鄂",
          label: "鄂",
        },
        {
          value: "新",
          label: "新",
        },
        {
          value: "湘",
          label: "湘",
        },
        {
          value: "宁",
          label: "宁",
        },
        {
          value: "藏",
          label: "藏",
        },
        {
          value: "琼",
          label: "琼",
        },
        {
          value: "桂",
          label: "桂",
        },
        {
          value: "川",
          label: "川",
        },
        {
          value: "冀",
          label: "冀",
        },
        {
          value: "贵",
          label: "贵",
        },
      ],
      letter: [
        {
          value: "A",
          label: "A",
        },
        {
          value: "B",
          label: "B",
        },
        {
          value: "C",
          label: "C",
        },
        {
          value: "D",
          label: "D",
        },
        {
          value: "E",
          label: "E",
        },

        {
          value: "F",
          label: "F",
        },
        {
          value: "G",
          label: "G",
        },
        {
          value: "H",
          label: "H",
        },
        {
          value: "I",
          label: "I",
        },

        {
          value: "J",
          label: "J",
        },
        {
          value: "K",
          label: "K",
        },
        {
          value: "L",
          label: "L",
        },

        {
          value: "M",
          label: "M",
        },
        {
          value: "N",
          label: "N",
        },
        {
          value: "O",
          label: "O",
        },

        {
          value: "P",
          label: "P",
        },

        {
          value: "Q",
          label: "Q",
        },
        {
          value: "R",
          label: "R",
        },
        {
          value: "S",
          label: "S",
        },

        {
          value: "T",
          label: "T",
        },
        {
          value: "U",
          label: "U",
        },

        {
          value: "V",
          label: "V",
        },

        {
          value: "W",
          label: "W",
        },
        {
          value: "X",
          label: "X",
        },
        {
          value: "Y",
          label: "Y",
        },

        {
          value: "Z",
          label: "Z",
        },
      ],
      // flag: false,
      // flag1: false,
      input: "",
      letterVal: "",
    };
  },
  props: {
    searchData: {
      type: Object,
      default: {},
    },
    posationTop:{
      type: String,
    }
  },
  methods: {
    handleClick() {
      this.$emit("search", this.searchData);
    },
    // searchClickRegion() {
    //   this.flag = !this.flag;
    // },
    // searchClickLetter() {
    //   this.flag1 = !this.flag1;
    // },

    // setClickRegion(val) {
    //   this.input = val;
    // },
    // setClickLetter(val) {
    //   this.letterVal = val;
    // },
  },
  created() {
    document.addEventListener("click", (e) => {
      if (this.$refs.showPanel) {
        let isSelf = this.$refs.showPanel.contains(e.target);
        if (!isSelf) {
          this.flag = false;
        }
      }
    });
    document.addEventListener("click", (e) => {
      if (this.$refs.showPanel1) {
        let isSelf = this.$refs.showPanel1.contains(e.target);
        if (!isSelf) {
          this.flag1 = false;
        }
      }
    });
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
   vertical-align: bottom !important;

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
    cursor: pointer;
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
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.705);
    font-size: 0.175rem /* 14/80 */ /* 12/80 */;
  }

  display: flex;
  align-items: center;
  height: 0.45rem /* 36/80 */ /* 34/80 */ /* 36/80 */;
  .search {
    height: 0.45rem;
    // border: 1px solid #4396f3;
    border-radius: 0.075rem;
    margin-right: 0.125rem /* 10/80 */;
    position: relative;
    ._input {
      background-color: #0e1e30;
      outline: none;
      border: 1px solid #4396f3;
      height: 100%;
      border-radius: 0.075rem /* 6/80 */;
      caret-color: transparent;
      padding-left: 0.125rem /* 10/80 */ /* 5/80 */;
      cursor: pointer;
      color: #fff;
      width: 1rem /* 80/80 */ /* 70/80 */ /* 50/80 */ /* 80/80 */ /* 60/80 */
        /* 30/80 */ /* 50/80 */;
    }
    .seach_icon {
      position: absolute;
      right: 0.0625rem /* 5/80 */ /* 10/80 */ /* 5/80 */;
      top: 0.1625rem /* 13/80 */ /* 12/80 */;
      width: 0.175rem /* 14/80 */;
      height: 0.1rem /* 8/80 */;
      background-image: url("../assets/img/tc_pic.png");
      transition: 0.5s all;
      transform-origin: center 50%;
    }
    .roate {
      transform: rotate(180deg);
    }
    .list {
      position: absolute;
      left: 0;
      top: 0.5rem /* 40/80 */;
      display: none;
      & > ul {
        width: 3.375rem /* 270/80 */ /* 268/80 */;
        background: #0e1e30;
        border: 1px solid #4396f3;
        opacity: 0.9;
        border-radius: 0px 0px 6px 6px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        & > li {
          padding: 0.1rem /* 10/80 */ /* 12/80 */ /* 8/80 */ /* 11/80 */
            /* 10/80 */;
          // margin: 0 .225rem /* 18/80 */ /* 10/80 */ /* 8/80 */ /* 10/80 */ .225rem /* 18/80 */ /* 10/80 */ 0;
          font-size: 0.175rem /* 14/80 */ /* 18/80 */ /* 20/80 */;
        }
        .active {
          color: #4396f3;
        }
      }
    }
    .isShow {
      //  height: 1.25rem /* 100/80 */;
      display: block;
    }
    input:focus {
      // border: none;
    }
  }
}
:deep(.select_item) {
  .el-select-dropdown__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.125rem 10/80;
  }
  .el-select-dropdown {
    width: 3.3rem !important ;
    background-color: rgba(14, 30, 48, 0.9);
  }
  .el-select-dropdown__item {
    padding: 0 0.11rem;
    // color: #fff;
  }
  
}
:deep(.select_item1) {
  .el-select-dropdown__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0.125rem;
  }
  .el-select-dropdown {
    width: 3.3rem !important ;
    background-color: rgba(14, 30, 48, 0.9);
  }
}
</style>
