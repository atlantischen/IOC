<template>
  <IOCLeft>
    <div class="lighting">
      <div class="tittle">照明一览</div>
      <div class="total">
        <ul>
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
        
        <ul class="CommonAreaControl">
          <li v-for="(_t,i) in CommonAreaDatas" :key="i">
            <div class="li_tp">
              <i v-if="_t.eqTypy=='dtj'" class="iconfont icon--diantijian"></i>
              <i v-else-if="_t.eqTypy=='ltj'" class="iconfont icon-loutijian"></i>
              <i v-else-if="_t.eqTypy=='zl'" class="iconfont icon-zoulang"></i>
              <i v-else-if="_t.eqTypy=='nwsj'" class="iconfont icon-nan"></i>
              <i v-else-if="_t.eqTypy=='nwsj2'" class="iconfont icon-nv"></i>
              <i v-else-if="_t.eqTypy=='dt'" class="iconfont icon-datang"></i>
              <i v-else-if="_t.eqTypy=='csj'" style="font-size:34px;" class="iconfont icon-chashui"></i>
              <i v-else>--</i>
              <div class="sliderBtn" :class="_t.states==1?'open ':'close'" @click="closeOpen('comArea', i)"></div>
            </div>
            <div class="li_bt">
              <span>{{_t.areaName}}</span>
              <span>照明回路:{{_t.circuit}}</span>
            </div>
          </li>
        </ul>
    </div>
  </IOCLeft>
  <IOCRight></IOCRight>
</template>

<script>
export default {
  data() {
    return {
      floorList: [
          {
            value: 12,
            label: 'F12',
          },
          {
            value: 13,
            label: 'F13',
          },
          {
            value: 14,
            label: 'F14',
          },
          {
            value: 15,
            label: 'F15',
          },
          {
            value: 16,
            label: 'F16',
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
  methods:{
      closeOpen(val, i) {
          if (val == 'comArea') {
            this.CommonAreaDatas[i].states = this.CommonAreaDatas[i].states == 1 ? 0 : 1
          } else if (val == 'open') {
            this.LightingSceneList[i].states = this.LightingSceneList[i].states == 1 ? 0 : 1
            console.log(this.LightingSceneList[i].states)
          }
        },
  }
};
</script>

<style lang="less" scoped>
 .select{
    // float: right;
    width: .8rem /* 64/80 */;
    height: .3625rem /* 29/80 */;
    .el-input{
      height: 100%;
      .el-input__inner{
        height: 100%;
        line-height: 0;
        background-color: transparent;
        border-color: #00ffff;
        border-radius: 10px;
        padding: 0;
        color: #00ffff;
        padding-left: 5px;

      }
    }
    .el-input__suffix{
      right: -2px;
      font-size: 12px;
    }
    .el-select__caret{
      color: #00ffff !important;

    }
   .el-input__icon{
      line-height: 0 !important;
      // width: 0;
    }
   .el-input__inner{
      border-color: #00ffff !important;
      
    }
   
   
    
   
  }
.lighting {
  .total {
    & > ul {
      display: flex;
      justify-content: space-around;
      margin: 0.25rem /* 20/80 */ 0;
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
.public{
// 空气一览
  .CommonAreaControl {
    display: flex;
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
      font-size: .15rem /* 12/80 */;
      border-radius: 3px;
      padding: .1875rem /* 15/80 */ .125rem /* 10/80 */;
      margin: .175rem /* 14/80 */ 0 0  .1875rem /* 15/80 */;
      &:nth-child(1),&:nth-child(2){
        margin-top: 0px;
      }
      span{
        white-space: nowrap;
        display: block;
      }
      .li_tp, .li_bt{
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .li_tp{
        i{
          font-size: .475rem /* 38/80 */;
          color: #4396F3;
        }
      }
      .li_bt{
        i{
          font-size: .175rem /* 14/80 */;
        }
      }
    }
  }
  
}
</style>