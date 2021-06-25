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
              v-for="(t, i) in datas.buldingList[datas.selectedNum - 1].nums"
              :key="i"
              :class="{ actived: datas.selectedNum2 == t.name }"
              @click.stop="selectBuldingFun('', t.name)"
            >
              {{ t.name }}座
            </li>
          </ul>
        </div>
      </div>
      <ul
        class="companiesImgsList mniBar"
        :class="datas.buldingList ? '' : 'companiesImgsList' + datas.listCols"
      >
        <li class="x_fs_rap">
          <img
            v-for="(t, i) in datas.companiesImgsListDatas"
            :key="i"
            :src="t.src"
            :alt="t.name"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { redomEchart, uuid } from "@/utils/methods";
export default {
  name: "theParkOutputValAll",
  props: {
    _data: {
      type: Object
    }
  },
  data () {
    return {
      ...this._data,
      ids: uuid()
    }
  },
  mounted () {
    // this.energyTrendFun(this.datas)
  },
  methods: {
    selectBuldingFun (key, val) {
      switch (key) {
        case "B":
          this.datas.selectedNum = val;
          break;
        default:
          this.datas.selectedNum2 = val;
          break;
      }
    },
  }
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
      img {
        .ioc_img(1.875rem /* 150/80 */, 1rem /* 80/80 */, .0625rem /* 5/80 */);
        margin: 0 0.125rem /* 10/80 */ 0.125rem /* 10/80 */;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
    .companiesImgsList3 {
      height: 3.375rem /* 270/80 */;
    }
    .companiesImgsList4 {
      height: 4.5rem /* 360/80 */;
    }
  }
}
</style>
