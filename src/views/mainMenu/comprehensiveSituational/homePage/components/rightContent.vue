<template>
  <!-- 综合态势右侧搜索 -->
  <div class="rightContent">
    <LeftRight>
      <template #left>
        <button @click="back">back</button>
        <SearchBox
          class="SearchBoxClass"
          :text="'搜园区建筑、搜企业、搜商家'"
          :inputV="inputV"
          @_search="searchList"
        >
          <div
            class="SearchBoxList stretch_all "
            :class="{ SearchBoxList0: isShowList }"
          >
            <ul class="bigBar">
              <li
                class="x_left"
                v-for="(item, i) in slist"
                :key="i"
                @click="searchOneItem(item)"
              >
                <div
                  class="s_img"
                  :style="
                    item.src
                      ? 'background: url(' + item.src + ') center #fff;'
                      : 'background-color:#fff;'
                  "
                ></div>
                <div class="y_sa_rap">
                  <p>
                    {{ item.name || "-" }}{{ item.phone ? "-" : ""
                    }}{{ item.phone }}
                  </p>
                  <p>{{ item.info }}</p>
                  <p></p>
                </div>
              </li>
            </ul>
            <p class="resultNum">共搜索到{{ slist.length || 0 }}条结果</p>
          </div>
        </SearchBox>
      </template>
      <template #center></template>
      <template #right></template>
    </LeftRight>
    <!-- 黑名单 -->
    <div class="rightBtn" v-show="!isFade" @click="showBlackListFun"></div>
    <RightAlert :fade="isFade" class="rightblacklist">
      <div class="allBlacklist">
        <el-table
          class="BlacklistTable"
          :data="tableData"
          style="width:100%;"
          :header-cell-style="{ 'text-align': 'center' }"
          :cell-style="{ 'text-align': 'center' }"
          border
        >
          <el-table-column
            prop="date"
            label="姓名"
            width="60"
            show-overflow-tooltip
          >
            <template #header>
              <i class="el-icon-arrow-right" @click="showBlackListFun"></i>
            </template>
            <template #default="{row}">
              <div
                class="blacklist_img"
                :style="
                  row.src
                    ? 'background: url(' + row.src + ') center #000;'
                    : 'background-color:#fff;'
                "
              ></div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="info" label="拉黑事由" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="" label="操作">
            <template #default="scope">
              <span class="zhuizong" @click="zhuizongFun(scope.row)">追踪</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          class="qx_pagination"
          layout="prev, pager, next"
          :total="50"
        ></el-pagination>
      </div>
    </RightAlert>
  </div>
</template>

<script>
export default {
  name: "rightContent",
  props: {
    inputVal: String,
  },
  data() {
    return {
      isFade: false,
      inputV: "",
      isShowList: false,
      slist: [
        {
          name: "陈新",
          phone: "15912345678",
          info: "逃避缴费",
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
        },
        {
          name: "深圳奇信智能科技有限公司",
          phone: "",
          info: "海纳百川B座16F",
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
        },
        {
          name: "公寓综合楼",
          phone: "",
          info: "梅龙路与金龙路交汇处",
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
        },
        {
          name: "麦丹劳",
          phone: "",
          info: "2栋B座1088号商铺",
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
        },
        {
          name: "麦丹劳",
          phone: "",
          info: "2栋B座1088号商铺",
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
        },
      ],
      tableData: [
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "李玲",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "陈新",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "韦孟",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "李建华",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "肖海辉",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "徐高鹏",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "韦炳佐",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "瞿德志",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "陈荣",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "周志军",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "张颖",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "杨靓",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "徐清",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "方明",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "李景",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "廖明",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/qy_sysdwyy.png"),
          name: "顾宇",
          info: "从事传销活动",
        },
      ],
    };
  },
  watch: {
    inputV() {
      return this.inputVal;
    },
  },
  mounted() {},
  methods: {
    showBlackListFun() {
      this.isFade = !this.isFade;
    },
    searchList() {
      this.isShowList = !this.isShowList;
      console.log("222");
    },
    searchOneItem(val) {
      console.log(val);
    },
    zhuizongFun(val) {
      console.log(val);
    },
    back() {
      this.$emit("_c");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.rightContent {
  .SearchBoxClass {
    position: relative;
  }
  .SearchBoxList {
    width: 100%;
    position: absolute;
    left: 0;
    top: 1rem /* 80/80 */;
    height: 0;
    overflow: hidden;
    ul {
      height: 5.5rem /* 440/80 */;
      // overflow-y: auto;
      .s_img {
        width: 1rem /* 80/80 */;
        height: 1rem /* 80/80 */;
        border-radius: 50%;
        background-size: contain;
      }
      li {
        display: flex;
        padding: 0.0625rem /* 5/80 */ 0.25rem /* 20/80 */;
        margin-bottom: 0.25rem /* 20/80 */;
        background: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        & > div {
          padding-left: 0.25rem /* 20/80 */;
        }
        p {
          white-space: nowrap;
          line-height: 0.5rem /* 40/80 */;
          &:first-child {
            font-weight: bold;
            font-size: 0.175rem /* 14/80 */;
          }
        }
      }
    }
    .resultNum {
      text-align: center;
    }
  }
  .SearchBoxList0 {
    height: 6.25rem /* 500/80 */;
  }
  .rightBtn {
    position: fixed;
    right: 0;
    top: 30%;
    width: 0.125rem /* 10/80 */;
    height: 2.5rem /* 200/80 */;
    background: rgba(0, 0, 0, 0.2);
    z-index: 103;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
  .rightblacklist {
    width: 4.5rem /* 360/80 */;
    right: 0;
    z-index: 102;
  }
  .allBlacklist {
    width: 100%;
    height: 9.375rem /* 750/80 */;
    background: #fff;
    .blacklist_img {
      width: 0.375rem /* 30/80 */;
      height: 0.375rem /* 30/80 */;
      border-radius: 50%;
    }
    .el-icon-arrow-right {
      font-size: 0.25rem /* 20/80 */;
      cursor: pointer;
    }
    :deep(.BlacklistTable) {
      font-size: 12px;
      background-color: transparent;
      th,
      tr,
      .el-table__expanded-cell {
        background-color: transparent;
      }
      td,
      th {
        padding: 0.1rem /* 8/80 */ 0;
      }
      td {
        padding: 0.05rem /* 4/80 */ 0;
      }
      .zhuizong {
        color: #031ef9;
        cursor: pointer;
      }
    }
    :deep(.qx_pagination) {
      float: right;
      padding: 0.0625rem /* 5/80 */ 0;
      .el-pager li,
      .btn-next,
      .btn-prev {
        background-color: transparent;
      }
    }
  }
}
</style>
