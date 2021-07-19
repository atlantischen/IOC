<template>
  <IOCLeft>
    <ul class="title">
      <li
        :class="activeIndex === index ? 'active' : ''"
        v-for="(item, index) in list"
        :key="index"
        @click="handleClick(item.path, index, item.name)"
      >
        {{ item.name }}
      </li>
    </ul>
  </IOCLeft>
  <IOCRight>
     <div class="lighting">
      <div class="tittle">照明一览</div>
      <div class="total">
        <ul>
          <li>
            <i class="iconfont icon-zhaoming"></i>
          </li>
          <li>
            <span class="font_text">350</span>
            <span>照明回路</span>
          </li>
          <li>
            <span class="font_text">267</span>
            <span>开启数</span>
          </li>
          <li>
            <span class="font_text">70</span>
            <span>开启数</span>
          </li>
          <li>
            <span class="font_text">13</span>
            <span>故障数</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="public">
      <div class="tittle">公共区域控制</div>
      <div class="select_i">
        <select name="" id="">
          <option v-for="(item, index) in floorList" :key="index">
            {{ item.label }}
          </option>
        </select>
      </div>

      <ul class="CommonAreaControl">
        <li v-for="(_t, i) in CommonAreaDatas" :key="i">
          <div class="li_tp">
            <i v-if="_t.eqTypy == 'dtj'" class="iconfont icon--diantijian"></i>
            <i
              v-else-if="_t.eqTypy == 'ltj'"
              class="iconfont icon-loutijian"
            ></i>
            <i v-else-if="_t.eqTypy == 'zl'" class="iconfont icon-zoulang"></i>
            <i v-else-if="_t.eqTypy == 'nwsj'" class="iconfont icon-nan"></i>
            <i v-else-if="_t.eqTypy == 'nwsj2'" class="iconfont icon-nv"></i>
            <i v-else-if="_t.eqTypy == 'dt'" class="iconfont icon-datang"></i>
            <i
              v-else-if="_t.eqTypy == 'csj'"
              style="font-size: 34px"
              class="iconfont icon-chashui"
            ></i>
            <i v-else>--</i>
            <div
              class="sliderBtn"
              :class="_t.states == 1 ? 'open ' : 'close'"
              @click="closeOpen(i)"
            ></div>
          </div>
          <div class="li_bt">
            <span>{{ _t.areaName }}</span>
            <span>照明回路:{{ _t.circuit }}</span>
          </div>
        </li>
      </ul>
    </div>
  </IOCRight>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      list: [
        {
          path: "/greenEnergyEfficiency/building/codesource",
          name: "冷源",
        },
        {
          path: "/greenEnergyEfficiency/building/airConditioner",
          name: "空调",
        },
        {
          path: "/greenEnergyEfficiency/building/elevator",
          name: "电梯",
        },
        {
          path: "/greenEnergyEfficiency/building/lighting",
          name: "照明",
        },
        {
          path: "/greenEnergyEfficiency/building/primaryAirSystem",
          name: "新风",
        },
        {
          path: "/greenEnergyEfficiency/building/watersupply",
          name: "给排水",
        },
      ],
     
      floorList: [
        {
          value: 12,
          label: "F12",
        },
        {
          value: 13,
          label: "F13",
        },
        {
          value: 14,
          label: "F14",
        },
        {
          value: 15,
          label: "F15",
        },
        {
          value: 16,
          label: "F16",
        },
      ],
      CommonAreaDatas: [
        {
          areaName: "茶水间-左",
          states: 1,
          circuit: 1,
          eqTypy: "csj",
        },
        {
          areaName: "电梯间",
          states: 0,
          circuit: 48,
          eqTypy: "dtj",
        },
        {
          areaName: "楼梯间",
          states: 0,
          circuit: 26,
          eqTypy: "ltj",
        },
        {
          areaName: "茶水间-右",
          states: 0,
          circuit: 2,
          eqTypy: "csj",
        },
        {
          areaName: "男卫生间",
          states: 0,
          circuit: 2,
          eqTypy: "nwsj",
        },
        {
          areaName: "女卫生间",
          states: 0,
          circuit: 2,
          eqTypy: "nwsj2",
        },
        {
          areaName: "大堂",
          states: 0,
          circuit: 6,
          eqTypy: "dt",
        },
        {
          areaName: "走廊",
          states: 1,
          circuit: 67,
          eqTypy: "zl",
        },
      ],
    
    };
  },
  methods: {
     handleClick(path,index,name){
      this.activeIndex=index
      this.$router.push(path)
      this.$SendMessageToUnity("OnChangePage", {"name":name});
     
    },
     closeOpen(i) {
        this.CommonAreaDatas[i].states =
          this.CommonAreaDatas[i].states == 1 ? 0 : 1;
    
    },
    
  },
};
</script>

<style lang="less" scoped>
.title {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50% /* 80/80 */;
  left: 1rem /* 490/80 */ /* 500/80 */;
  transform: translateY(-50%);
  li {
    width: 1.025rem /* 82/80 */;
    height: 0.4625rem /* 37/80 */;
    margin-bottom: 0.375rem /* 30/80 */;
    background-image: url("../../../../assets/img/ly_bj1.png");
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 0.4625rem;
    font-size: 0.175rem /* 14/80 */ /* 20/80 */;
    color: #fff;
  }
  li:last-child {
    margin-bottom: 0;
  }
  .active {
    background-image: url("../../../../assets/img/ly_bj.png");
    background-size: contain;
  }
}
.lighting {
  .total {
    & > ul {
      display: flex;
      justify-content: space-around;
      margin: 0.25rem /* 20/80 */ 0;
      .icon-zhaoming{
        font-size: .5rem /* 40/80 */;
        color: #4396F3;
      }
      & > li {
        display: flex;
        flex-direction: column;
        text-align: center;
        span:first-child {
          font-size: 0.25rem /* 20/80 */;
          margin-bottom: 0.125rem /* 10/80 */;
        }
        span:last-child {
          font-size: 0.15rem /* 12/80 */;
        }
      }
    }
  }
}
.public {
  // 空气一览
  .CommonAreaControl {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // width: 173px;
      width: 1.95rem /* 156/80 */;
      height: 1.3375rem /* 107/80 */;
      background: rgba(255, 255, 255, 0.1);
      font-size: 0.15rem /* 12/80 */;
      border-radius: 3px;
      padding: 0.1875rem /* 15/80 */ 0.125rem /* 10/80 */;
      margin: 0.175rem /* 14/80 */ 0 0 0.1875rem /* 15/80 */;
      &:nth-child(1),
      &:nth-child(2) {
        margin-top: 0px;
      }
      span {
        white-space: nowrap;
        display: block;
      }
      .li_tp,
      .li_bt {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .li_tp {
        i {
          font-size: 0.475rem /* 38/80 */;
          color: #4396f3;
        }
      }
      .li_bt {
        i {
          font-size: 0.175rem /* 14/80 */;
        }
      }
    }
  }
}

</style>
