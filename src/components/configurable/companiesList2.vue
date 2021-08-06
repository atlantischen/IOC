<template>
  <div class="companiesListAll">
    <div class="tittle">{{ title }}</div>
    <div class="companiesList" ref="companiesListRef">
      <!-- <el-carousel
        class="enterprisesCarousel"
        :interval="4000"
        arrow="never"
        indicator-position="none"
      >
        <el-carousel-item
          v-for="(tt, ii) in Math.ceil(datas.companiesImgsListDatas.length / 8)"
          :key="ii"
        > -->
          <ul
            class="companiesImgsList companiesImgsList4 companiesImgsList_over" 
          v-for="(tt, ii) in Math.ceil(datas.companiesImgsListDatas.length / 8)"
          :key="ii"
          >
            <li class="x_fs_rap">
              <a
                v-for="(t, i) in datas.companiesImgsListDatas.slice(
                  ii * 8,
                  ii * 8 + 8
                )"
                :key="i"
              >
                <img
                  :src="t.src"
                  :alt="t.name"
                  @mouseenter="hoverItemFun($event, (ii + 1) * (ii * 8 + i))"
                  @mouseleave="leaveItemFun()"
                />
                <div
                  class="litInfo"
                  :style="returnStyle"
                  v-if="showItem == (ii + 1) * (ii * 8 + i)"
                >
                  <div class="litInfo_title x_c">
                    <img
                      class="litInfo_img"
                      :key="i"
                      :src="t.src"
                      :alt="t.name"
                    />
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
        <!-- </el-carousel-item>
      </el-carousel> -->
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
    // this.$ScrolLeftARight("companiesListRef", 4);
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
      console.log(i);
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
:deep(.enterprisesCarousel) {
  width: 100%;
  height: 4.5rem /* 360/80 */;
  .el-carousel__container {
    height: 100%;
  }
  overflow: hidden;
}
.companiesListAll {
  .companiesList {
    display: flex;
    width: 4.3rem /* 344/80 */;
    // height: 4.5rem /* 360/80 */;
    font-size: 0.2rem /* 16/80 */;
    overflow: hidden;
    .companiesImgsList {
      white-space: nowrap;
      flex-shrink: 0;
      width: 100%;
      height: 2.25rem /* 180/80 */;
      li {
        width: 100%;
      }
      .litInfo {
        white-space: pre-wrap;
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
        z-index: 3000;
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
      // overflow: hidden;
    }
  }
}
</style>
