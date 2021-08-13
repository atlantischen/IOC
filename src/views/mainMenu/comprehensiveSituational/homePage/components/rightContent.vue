<template>
  <!-- 综合态势右侧搜索 -->
  <!-- <transition name="el-zoom-in-left"> -->
  <div class="rightContent">
    <LeftRight :_show="showLeftRight">
      <template #rPage>
        <div class="leftSearch">
          <i class="iconfont icon-fanhui" @click="back"></i>
          <div class="theSearchPath y_c">
            <el-upload
              class="upload-demo uploadPhoto"
              action="#"
              drag
              :show-file-list="false"
              :auto-upload="false"
              :on-change="changeFile"
              multiple
            >
              <img
                v-if="!imageUrl"
                class="upload_av"
                src="~@/assets/img/datas/sc_av.png"
              />
              <img
                v-if="!imageUrl"
                class="upload_up"
                src="~@/assets/img/datas/sc_up.png"
              />
              <img v-else :src="imageUrl" class="avatar" />
            </el-upload>
            <button :class="{ m_disabled: !imageUrl }" @click="SearchPath()">
              搜寻轨迹
            </button>
          </div>
          <SearchBox
            class="SearchBoxClass"
            :text="'搜园区建筑、搜企业、搜商家'"
            :inputV="inputV"
            @_search="searchList"
          >
            <div
              class="SearchBoxList stretch_all"
              :class="{ SearchBoxList0: isShowList }"
            >
              <ul class="bigBar" v-if="slist && slist.length > 0">
                <li
                  class="x_left"
                  v-for="(item, i) in slist"
                  :key="i"
                  @click="searchOneItem(i)"
                >
                  <div
                    class="s_img"
                    :style="
                      item.src
                        ? 'background: url(' +
                          item.src +
                          ') center #fff no-repeat; '
                        : 'background-color:#fff;'
                    "
                  ></div>
                  <div class="y_sa_rap">
                    <p class="LineBeyond">
                      {{ item.name || "-" }}{{ item.phone ? "-" : ""
                      }}{{ item.phone }}
                    </p>
                    <p class="LineBeyond">{{ item.info || "-" }}</p>
                  </div>
                </li>
              </ul>
              <NoT :_text="`无关键字'${inputV}'的相关结果`" />
              <p class="resultNum">
                共搜索到{{ slist ? slist.length : 0 }}条结果
              </p>
            </div>
          </SearchBox>
        </div>
      </template>
    </LeftRight>
    <!-- 黑名单 -->
    <div class="rightBtn" v-show="!isFade" @click="showBlackListFun"></div>
    <RightAlert :fade="isFade" class="rightblacklist">
      <div class="allBlacklist bigBar">
        <i class="rightArrow el-icon-arrow-right" @click="showBlackListFun"></i>
        <el-table
          v-if="isFade"
          class="BlacklistTable"
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{ 'text-align': 'center' }"
          :cell-style="{ 'text-align': 'center' }"
        >
          <el-table-column
            prop="date"
            label="姓名"
            width="60"
            show-overflow-tooltip
          >
            <template #header>
              <!-- <i class="el-icon-arrow-right" @click="showBlackListFun"></i> -->
              <span> 照片</span>
            </template>
            <template #default="scope">
              <div
                class="blacklist_img"
                :style="[
                  scope.row
                    ? 'background: url(' +
                      scope.row.src +
                      ') center #000 no-repeat;'
                    : 'background-color:#fff;',
                  'background-size: 100%;',
                ]"
              ></div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="info" label="拉黑事由" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="" label="操作">
            <template #default="scope">
              <button
                class="bt_df zhuizong"
                @click="zhuizongFun(scope.row, scope.$index)"
              >
                追踪
              </button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          class="qx_pagination"
          layout="prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          v-model:currentPage="currentPage"
          :page-size="10"
          :total="total"
        ></el-pagination>
      </div>
    </RightAlert>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: "rightContent",
  props: {
    inputVal: {
      type: String,
    },
    _show: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      showLeftRight: false,
      currentPage: 1,
      total: 1,
      isFade: false,
      imageUrl: null,
      inputV: "",
      isShowList: false,
      slist: null,
      slist2: [
        {
          name: "阿桂嫂",
          phone: "",
          info: "梅龙路与金龙路交汇处",
          src: require("@/assets/img/datas/qy_ags.png"),
          srcName: 'qy_ags.png'
        },
        {
          name: "麦丹劳",
          phone: "",
          info: "2栋B座1088号商铺",
          src: require("@/assets/img/datas/qy_kfc.png"),
          srcName: 'qy_kfc.png'
        },
        {
          name: "真功夫",
          phone: "",
          info: "1栋A座3014号商铺",
          src: require("@/assets/img/datas/qy_zgf.png"),
          srcName: 'qy_zgf.png'
        },
        {
          name: "深圳奇信智能科技有限公司",
          phone: "",
          info: "海纳百川B座16F",
          src: require("@/assets/img/datas/qy_qx.png"),
          srcName: 'qy_qx.png'
        },
      ],
      tableData: [],
      tableData2: [
        {
          src: require("@/assets/img/datas/p_1.png"),
          srcName: 'p_1.png',
          name: "李玲",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/p_2.png"),
          srcName: 'p_2.png',
          name: "陈新",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/p_3.png"),
          srcName: 'p_3.png',
          name: "韦孟",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/p_4.png"),
          srcName: 'p_4.png',
          name: "李建华",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/p_5.png"),
          srcName: 'p_5.png',
          name: "肖海辉",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/p_6.png"),
          srcName: 'p_6.png',
          name: "徐高鹏",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/p_7.png"),
          srcName: 'p_7.png',
          name: "韦炳佐",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/p_8.png"),
          srcName: 'p_8.png',
          name: "瞿德志",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/p_9.png"),
          srcName: 'p_9.png',
          name: "陈荣",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/p_10.png"),
          srcName: 'p_10.png',
          name: "周志军",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/p_11.png"),
          srcName: 'p_11.png',
          name: "张颖",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/p_12.png"),
          srcName: 'p_12.png',
          name: "杨靓",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/p_13.png"),
          srcName: 'p_13.png',
          name: "徐清",
          info: "涉嫌诈骗",
        },
        {
          src: require("@/assets/img/datas/p_14.png"),
          srcName: 'p_14.png',
          name: "方明",
          info: "逃避缴费",
        },
        {
          src: require("@/assets/img/datas/p_15.png"),
          srcName: 'p_15.png',
          name: "李景",
          info: "从事传销活动",
        },
        {
          src: require("@/assets/img/datas/p_16.png"),
          srcName: 'p_16.png',
          name: "廖明",
          info: "散播谣言",
        },
        {
          src: require("@/assets/img/datas/p_17.png"),
          srcName: 'p_17.png',
          name: "顾宇",
          info: "从事传销活动",
        },
      ],
    };
  },
  watch: {
    inputVal: {
      handler (n, o) {
        this.inputV = n;
      },
      deep: true,
    },
    _show: {
      handler (n) {
        this.showLeftRight = n;
        console.log(this.showLeftRight);
      },
    },
  },
  mounted () {
    this.total = this.tableData2.length;
    this.changeDatasFun();
  },
  methods: {
    // 上传头像
    changeFile (file, fileList) {
      var _that = this;
      if (!file || !window.FileReader) return;
      var reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function (e) {
        _that.imageUrl = reader.result;
      };
    },
    //
    showBlackListFun () {
      this.isFade = !this.isFade;
    },
    searchList (val) {
      this.inputV = val;
      // if (!val) {
      //   return this.$message.error("请输入关键词！")
      // } else {
      this.slist = this.slist2;
      // }
      this.isShowList = !this.isShowList;
    },
    // 搜索轨迹
    SearchPath () {
      if (this.imageUrl) {
        let _a = {
          src: this.imageUrl
        }
        this.$SendMessageToUnity("ShowLocationPin", {
          searchType: 'people',
          ..._a
        });
        console.log("ShowLocationPin---搜寻轨迹------------");
      } else {
        this.$message.info('请传入搜寻对象图片！');
      }
    },
    searchOneItem (val) {
      let _a = JSON.parse(JSON.stringify(this.slist2[val]))
      _a.src = _a.srcName
      // console.log(_a)
      this.$SendMessageToUnity("ShowLocationPin", {
        Serial: val,
        searchType: 'shops',
        ..._a
      });
      console.log("ShowLocationPin--商家、企业------------", val);
    },
    zhuizongFun (val, i) {
      let _a = JSON.parse(JSON.stringify(val))
      _a.src = _a.srcName
      console.log(this.currentPage > 1 ? (this.currentPage - 1) * 10 + i : i);
      this.$SendMessageToUnity("ShowLocationPin", {
        Serial: this.currentPage > 1 ? (this.currentPage - 1) * 10 + i : i,
        ..._a
      });
      console.log("ShowLocationPin-----跟踪------------");
    },
    back () {
      this.$emit("_c", null);
    },
    // 模拟分页
    changeDatasFun () {
      let _data = JSON.parse(JSON.stringify(this.tableData2));
      let _first = (this.currentPage - 1) * 10;
      this.tableData = _data.slice(_first, _first + 10);
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.changeDatasFun();
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.rightContent {
  .leftSearch {
    width: 4.15rem /* 332/80 */;
    position: fixed;
    top: 1.125rem /* 90/80 */;
    left: 0.575rem /* 46/80 */;
    z-index: 101;
    .icon-fanhui {
      font-size: 0.3125rem /* 25/80 */;
    }
  }
  :deep(.theSearchPath) {
    width: 2.875rem /* 230/80 */;
    height: 3.75rem /* 300/80 */;
    background: #0f2033;
    padding: 0.35rem /* 28/80 */ 0.5875rem /* 47/80 */;
    margin: 0 auto;
    border: 0.0125rem /* 1/80 */ solid #4396f3;
    border-radius: 0 0 0.075rem /* 6/80 */ 0.075rem /* 6/80 */;
    .uploadPhoto {
      position: relative;
      width: 136px;
      height: 190px;
      background: #244f80;
      margin-bottom: 0.25rem /* 20/80 */;
      border: 1px solid #4396f3;
      .el-upload {
        width: 100%;
        height: 100%;
        .el-upload-dragger {
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: 0;
        }
        .el-upload__text {
        }
      }
      .avatar {
        position: absolute;
        top: 0;
        left: 0;
        width: 136px;
        height: 190px;
        object-fit: contain;
        background: #000;
      }
      .upload_av {
        width: 83px;
        height: 89px;
        margin-top: 20%;
      }
      .upload_up {
        position: absolute;
        bottom: 0.0125rem /* 1/80 */;
        right: 0.0125rem /* 1/80 */;
        width: 34px;
        height: 34px;
      }
    }
    button {
      width: 1.625rem /* 130/80 */;
      height: 0.45rem /* 36/80 */;
      color: #fff;
      background: #4396f3;
      border-radius: 0.05rem /* 4/80 */;
    }
  }
  :deep(.SearchBoxClass) {
    position: relative;
    .searchInput {
      // width: 4.175rem /* 334/80 */;
      border-radius: 6px 6px 6px 0px;
      margin: 0;
    }
    .el-input__inner {
      background: #0e1e30;
      // border: 1px solid #4396f3;
    }
    .el-input-group__append {
      position: relative;
      width: 0.45rem /* 36/80 */;
      height: 100%;
      // padding: 0;
      .el-button {
        position: absolute;
        top: 0.1375rem /* 11/80 */;
        width: 100%;
        padding: 0;
      }
    }
  }
  .SearchBoxList {
    width: calc(100% - 0.55rem /* 44/80 */);
    position: relative;
    left: 0;
    // top: 0.8rem /* 64/80 */;
    top: 0;
    height: 0;
    overflow: hidden;
    background: #0f2033;
    opacity: 0.9;
    border-radius: 0px 0px 6px 6px;
    box-shadow: inset 0 5px 15px 0.1px rgba(67, 149, 243, 0.1);
    -moz-box-shadow: inset 0 5px 15px 0.1px rgb(67, 149, 243, 0.1);
    -webkit-box-shadow: inset 0 5px 15px 0.1px rgb(67, 149, 243, 0.1);
    z-index: 0;
    ul {
      min-height: 0.625rem /* 50/80 */;
      max-height: 3.5rem /* 280/80 */;
      overflow-x: hidden;
      .s_img {
        width: 0.675rem /* 54/80 */;
        height: 0.675rem /* 54/80 */;
        border-radius: 20%;
      }
      li {
        display: flex;
        flex-wrap: nowrap;
        padding: 0.1875rem /* 15/80 */ 0.25rem /* 20/80 */;
        border-bottom: 1px solid rgba(67, 149, 243, 0.5);
        cursor: pointer;
        & > div {
          padding-left: 0.25rem /* 20/80 */;
          &:nth-child(2) {
            width: 2.3125rem /* 185/80 */;
            p {
              width: 100%;
            }
          }
        }
        p {
          white-space: nowrap;
          font-size: 0.175rem /* 14/80 */;
          line-height: 0.375rem /* 30/80 */;
          &:first-child {
            font-weight: bold;
          }
          &:nth-child(2) {
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
    .resultNum {
      width: 100%;
      position: absolute;
      bottom: 0;
      // border-top: 1px solid rgba(67, 149, 243, 0.5);
      padding: 0.1875rem /* 15/80 */ 0;
      text-align: center;
    }
  }
  .SearchBoxList0 {
    height: 4rem /* 320/80 */;
    border: 1px solid #4396f3;
    border-top: none;
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
    height: 6.25rem /* 500/80 */;
    overflow-y: auto;
    background: #0f2033;
    border: 1px solid #4396f3;
    border-radius: 10px 0px 0px 10px;
    padding: 20px;
    .blacklist_img {
      width: 0.375rem /* 30/80 */;
      height: 0.375rem /* 30/80 */;
      border-radius: 50%;
    }
    .el-icon-arrow-right {
      font-size: 0.2rem /* 16/80 */;
      cursor: pointer;
    }
    .rightArrow {
      position: absolute;
      top: 30px;
      left: 12px;
      z-index: 1;
      color: #fff;
      padding: 0.0375rem /* 3/80 */ 0;
      background: #4396f3;
    }
    :deep(.BlacklistTable) {
      font-size: 12px;
      background-color: transparent;
      th,
      tr,
      .el-table__expanded-cell {
        color: #fff;
        background-color: transparent;
      }
      th {
        color: rgba(255, 255, 255, 0.7);
      }
      td,
      th {
        padding: 0.1rem /* 8/80 */ 0;
      }
      td {
        padding: 0.05rem /* 4/80 */ 0;
        border: none;
      }
      .el-table__empty-block .el-table__empty-text {
        color: #fff;
      }
      .el-table__row > td {
        border: none;
      }
      td,
      th.is-leaf {
        border-bottom: none;
      }
      tbody {
        tr {
          &:nth-child(odd) {
            background: rgba(30, 57, 87, 0.5);
          }
        }
        .el-table__row {
          &:hover {
            background-color: rgba(30, 57, 87, 1);
            td {
              background-color: transparent;
              background-color: rgba(30, 57, 87, 1);
            }
          }
        }
      }
      .cell {
        white-space: nowrap;
      }
      .zhuizong {
        padding: 0 8px;
      }
    }
    .el-table--border::after,
    .el-table--group::after,
    .el-table::before {
      background: transparent;
    }
    :deep(.qx_pagination) {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
