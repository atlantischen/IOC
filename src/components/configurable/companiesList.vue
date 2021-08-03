<template>
  <div class="companiesListAll">
    <div class="tittle">{{ title }}</div>
    <div class="companiesList">
      <div class="selectBuilding" v-if="datas.buldingList">
        <span> 栋座： </span>
        <div>
          <ul class="x_sa_rap">
            <li
              v-for="(t, i) in datas.buldingList"
              :key="i"
              :class="{ actived: datas.selectedNum == t.id }"
              @click.stop="selectBuldingFun('B', t.id)"
            >
              {{ t.bulding }}
            </li>
          </ul>
          <ul class="x_sa_rap">
            <li
              v-for="(t, ii) in datas.buldingList[datas.selectedNum - 1].nums"
              :key="ii"
              :class="{ actived: datas.selectedNum2 == ii }"
              @click.stop="selectBuldingFun('', ii)"
            >
              {{ t.name }}
            </li>
          </ul>
        </div>
      </div>
      <ul
        v-if="!datas.buldingList"
        class="companiesImgsList"
        :class="[
          datas.buldingList ? '' : 'companiesImgsList' + datas.listCols,
          !datas.buldingList && datas.companiesImgsListDatas.length > 6
            ? 'mniBar'
            : 'companiesImgsList_over',
        ]"
      >
        <li class="x_fs_rap" :ref="'companiesImgsListRef_' + ids">
          <a v-for="(t, i) in datas.companiesImgsListDatas" :key="i">
            <img
              :src="t.src"
              :alt="t.name"
              @mouseenter="hoverItemFun($event, i)"
              @mouseleave="leaveItemFun()"
            />
            <div class="litInfo" :style="returnStyle" v-if="showItem == i">
              <div class="litInfo_title x_c">
                <img class="litInfo_img" :key="i" :src="t.src" :alt="t.name" />
                <span>{{ t.name }}</span>
              </div>
              <div class="litInfo_content">
                <p>
                  <span>公司类型： </span
                  ><span>
                    {{ t.comType || "-" }}
                  </span>
                </p>
                <p>
                  <span>进驻日期：</span
                  ><span>
                    {{ t.inDate || "-" }}
                  </span>
                </p>
                <p><span>公司简介：</span> <i v-html="t.comInfo"></i></p>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <ul
        v-else
        class="companiesImgsList"
        :class="[
          datas.buldingList ? '' : 'companiesImgsList' + datas.listCols,
          'mniBar',
        ]"
      >
        <li class="x_fs_rap" :ref="'companiesImgsListRef_' + ids">
          <a v-for="(t, i) in datas.buldingList[datas.selectedNum - 1].nums[datas.selectedNum2].buildings" :key="i">
            <img
              :src="t.src"
              :alt="t.name"
              @mouseenter="hoverItemFun($event, i)"
              @mouseleave="leaveItemFun()"
            />
            <div class="litInfo" :style="returnStyle" v-if="showItem == i">
              <div class="litInfo_title x_c">
                <img class="litInfo_img" :key="i" :src="t.src" :alt="t.name" />
                <span>{{ t.name }}</span>
              </div>
              <div class="litInfo_content">
                <p>
                  <span>公司类型： </span
                  ><span>
                    {{ t.comType || "-" }}
                  </span>
                </p>
                <p>
                  <span>进驻日期：</span
                  ><span>
                    {{ t.inDate || "-" }}
                  </span>
                </p>
                <p><span>公司简介：</span> <i v-html="t.comInfo"></i></p>
              </div>
            </div>
          </a>
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
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      ids: this.$uuid(),
      showItem: null,
      returnStyle: "",
    };
  },
  mounted() {
    // document.onclick = function() {
    //   this.leaveItemFun();
    // };
    if (!this.datas.buldingList) {
      this.$nextTick(() => {
        this.getDatas();
      });
    }
  },
  methods: {
    selectBuldingFun(key, val) {
      this.leaveItemFun();
      switch (key) {
        case "B":
          this.datas.selectedNum = val;
          break;
        default:
          this.datas.selectedNum2 = val;
          break;
      }
    },
    hoverItemFun(e, i) {
      this.showItem = i;
      this.returnStyle = `right:${window.screen.width -
        e.clientX}px;top:${e.clientY - 300}px`;
    },
    leaveItemFun() {
      this.showItem = null;
    },
    getDatas() {
      // this.$ScrolAnimationTop('companiesImgsListRef_' + this.ids, 3)
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
// 企业列表
.companiesListAll {
  .companiesList {
    font-size: 0.2rem /* 16/80 */;
    .selectBuilding > span {
      width: 20%;
    }
    .selectBuilding > div {
      width: 80%;
    }
    .selectBuilding {
      display: flex;
      padding: 0 0.25rem /* 20/80 */;
      ul {
        display: flex;
        padding: 0 0 0.125rem /* 10/80 */ 0;
        li {
          min-width: 0.6875rem /* 55/80 */;
          background: rgba(30, 57, 87, 0.5);
          border-radius: 0.0625rem /* 5/80 */;
          padding: 0.0375rem /* 3/80 */ 0.125rem /* 10/80 */;
          text-align: center;
          cursor: pointer;
        }
        .actived {
          border: 0.0125rem /* 1/80 */ solid #4396f3;
        }
      }
    }
    .companiesImgsList {
      width: 100%;
      height: 2.25rem /* 180/80 */;
      overflow-y: auto;
      li {
        width: 100%;
      }
      .litInfo {
        position: fixed;
        top: 0;
        right: 0;
        width: 3.8125rem /* 305/80 */;
        min-height: 0.375rem /* 30/80 */;
        background: #0f2033;
        opacity: 0.9;
        border-radius: 6px;
        padding: 0.25rem /* 20/80 */;
        box-shadow: inset 0 1px 10px 0.1px rgba(67, 149, 243, 0.1);
        -moz-box-shadow: inset 0 1px 10px 0.1px rgb(67, 149, 243, 0.1);
        -webkit-box-shadow: inset 0 1px 10px 0.1px rgb(67, 149, 243, 0.1);
        z-index: 20;
        .litInfo_title {
          justify-content: flex-start;
        }
        .litInfo_content {
          padding-top: 0.125rem /* 10/80 */;
          p {
            line-height: 1.6;
          }
          span {
            vertical-align: text-top;
            &:nth-child(1) {
              min-width: 0.375rem /* 30/80 */;
              padding-right: 0.0625rem /* 5/80 */;
            }
            &:nth-child(2) {
              min-width: 1.25rem /* 100/80 */;
              white-space: normal;
            }
          }
        }
        .litInfo_img {
          .ioc_img(0.625rem /* 50/80 */, 0.625rem /* 50/80 */, 50%) ;;
          object-fit: cover;
          margin-right: 0.25rem /* 20/80 */;
        }
      }
      li > a {
        width: 1.875rem /* 150/80 */;
        height: 1rem /* 80/80 */;
        margin: 0 0.125rem /* 10/80 */ 0.125rem /* 10/80 */;
        cursor: pointer;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.0625rem /* 5/80 */;
      }
    }
    .companiesImgsList3 {
      height: 3.375rem /* 270/80 */;
    }
    .companiesImgsList4 {
      height: 4.5rem /* 360/80 */;
    }
    .companiesImgsList_over {
      overflow: hidden;
    }
  }
}
</style>
