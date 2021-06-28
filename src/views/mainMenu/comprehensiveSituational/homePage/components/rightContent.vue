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
            class="SearchBoxList stretch_all"
            :class="{ SearchBoxList0: isShowList }"
          >
            <ul>
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
    };
  },
  watch: {
    inputV() {
      return this.inputVal;
    },
  },
  mounted() {},
  methods: {
    searchList() {
      this.isShowList = !this.isShowList;
      console.log("222");
    },
    searchOneItem(val) {
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
      overflow-y: auto;
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
}
</style>
