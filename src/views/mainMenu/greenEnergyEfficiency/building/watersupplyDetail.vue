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
    <div id="coldSAndWaterSDetail" class="coldSAndWaterSDetail">
      <div class="tittle">冷源系统</div>
      <ul class="sysConfig">
        <li class="sysStatus">
          <span>系统状态</span>
          <span id="caw_status" :class="[systemType == 0 ? '_blue' : '_red']">{{
            systemData.systemState
          }}</span>
        </li>
        <li class="sysControl">
          <span>系统控制</span>
          <span class="btnGrounp">
            <a
              :class="[systemType == 0 ? 'bg_blue' : 'bg_grey']"
              @click="handleChange(0)"
              >启动</a
            >
            <a
              :class="[systemType == 0 ? 'bg_grey' : 'bg_red']"
              @click="handleChange(1)"
              >停止</a
            >
          </span>
        </li>
      </ul>
      <div class="tittle">手自动切换</div>
      <ul class="AutomaticSwitch">
        <li v-for="(item, index) in systemList" :key="index">
          <span class="LineBeyond">{{ item.name }}</span>
          <span
            ><div
              class="sliderBtn4"
              :class="[item.status == '1' ? 'open' : 'close']"
              @click="selectChange(index)"
            ></div
          ></span>
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
      // imgCdnUrl:require('../../../../assets/img/ly_bj.png'),
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
      systemList: [
        {
          name: "1#冷却塔风机",
          status: 1,
        },
        {
          name: "2#冷却塔风机",
          status: 0,
        },
        {
          name: "3#冷却塔风机",
          status: 1,
        },
        {
          name: "4#冷却塔风机",
          status: 1,
        },
        {
          name: "1#冷水机组",
          status: 0,
        },
        {
          name: "2#冷水机组",
          status: 1,
        },
        {
          name: "1#冷却水循环泵",
          status: 1,
        },
        {
          name: "2#冷却水循环泵",
          status: 0,
        },
        {
          name: "2#冷却水循环泵",
          status: 1,
        },
        {
          name: "3#冷冻水循环泵",
          status: 1,
        },
        {
          name: "2#冷冻水循环泵",
          status: 1,
        },
        {
          name: "3#冷冻水循环泵",
          status: 1,
        },
      ],
      systemType: 0,
      systemData: { systemState: "停止中" },
    };
  },
  methods: {
      handleChange(val){
            if(val ===0){
              this.systemData.systemState='运行中'
            }else{
              this.systemData.systemState='已停止'
            }
              this.systemType=val
          },
          selectChange(i){
             this.systemList= this.systemList.map((item,index)=>{
              if(index == i){
                if(item.status==1){
                  item.status=0
                }else if(item.status==0){
                  item.status=1
                }
              }
              return item
            })
          }
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
.coldSAndWaterSDetail {
  width: 4.375rem /* 350/80 */;
  color: #fff;
}
._blue {
  color: #4396f3;
}
._red {
  color: #e21c1c;
}
.bg_red {
  background: #ff4901;
  color: #fff;
}

.bg_blue {
  background: #4396F3;
  color: #fff;
}

.bg_grey {
  background: grey;
  color: #fff;
}

.sysConfig,
.AutomaticSwitch {
  padding-left: 40px;
}

.sysConfig li {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  font-size: 14px;
}

.sysConfig li span {
  display: flex;
  justify-content: space-between;
  width: 170px;
}

.sysConfig li span:nth-child(2) {
  width: 130px;
}

.sysConfig li:nth-child(1) span:nth-child(2) {
  text-align: left;
}

.btnGrounp a {
  width: 56px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 6px;
  margin-right: 5px;
}

.AutomaticSwitch li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
}

.AutomaticSwitch li span:nth-child(1) {
  width: 200px;
}

.AutomaticSwitch li span:nth-child(2) {
  width: 96px;
}
#caw_status {
  font-weight: bold;
}
</style>
