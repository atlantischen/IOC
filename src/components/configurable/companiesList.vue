<template>
  <div class="companiesListAll">
    <div class="tittle">{{ title }}</div>
    <div class="companiesList">
      <div class="selectBuilding">
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
      <div class="companiesImgsList x_fs_rap">
        <img
          v-for="(t, i) in datas.companiesImgsListDatas"
          :key="i"
          :src="t.src"
          alt=""
        />
        <img
          v-for="(t, i) in datas.companiesImgsListDatas"
          :key="i"
          :src="t.src"
          alt=""
        />
        <img
          v-for="(t, i) in datas.companiesImgsListDatas"
          :key="i"
          :src="t.src"
          alt=""
        />
      </div>
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
    font-size: 16px;
    .selectBuilding > span {
      width: 20%;
    }
    .selectBuilding > div {
      width: 80%;
    }
    .selectBuilding {
      display: flex;
      padding: 0 20px;
      ul {
        display: flex;
        padding: 0 0 10px 0;
        li {
          min-width: 55px;
          background: rgba(30, 57, 87, 0.5);
          border-radius: 5px;
          padding: 3px 10px;
          text-align: center;
        }
        .actived {
          border: 1px solid #4396f3;
        }
      }
    }
    .companiesImgsList {
      width: 100%;
      height: 180px;
      overflow-y: auto;
      img {
        .ioc_img(150px, 80px, 5px);
        margin: 0 5px 10px;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
