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
            <span>关闭数</span>
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
              @click="closeOpen('comArea', i)"
            ></div>
          </div>
          <div class="li_bt">
            <span>{{ _t.areaName }}</span>
            <span>照明回路:{{ _t.circuit }}</span>
          </div>
        </li>
      </ul>
    </div>
  </IOCLeft>
  <IOCRight>
    <div class="useKWH">
      <div class="tittle">照明用电</div>
      <div class="btn">
        <div
          id="ElectricityStatistics"
          :ref="'ElectricityStatistics' + ids"
        ></div>
      </div>
    </div>
    <div class="scene">
      <div class="tittle">照明场景配置</div>
      <div class="add" @click="dialogShowChange(true, 'Add')">
        <i class="iconfont icon-tianjia"></i>
        <span>添加通行用户</span>
      </div>
      <ul class="LightingScene ">
        <li class="light_list" v-for="(_it, i) in LightingSceneList" :key="i">
          <div class="light_set">
            <i class="iconfont icon-naozhong"></i>
            <div
              class="sliderBtn2"
              :class="_it.states == 1 ? 'open ' : 'close'"
              @click="closeOpen('open', i)"
            ></div>
          </div>
          <ul class="light_setInfo">
            <li>{{ _it.p1 }}</li>
            <li>{{ _it.p2 }}</li>
          </ul>
          <a class="light_edit" @click="dialogShowChange(true, 'Edit')">编辑</a>
        </li>
      </ul>
    </div>
  </IOCRight>
  <AddScene
    :dialogShow="dialogShow"
    :formData="formData"
    @dialogShowChange="dialogShowChange"
    @formDataClick="formDataClick"
  ></AddScene>
</template>

<script>
export default {
  data() {
    return {
      ids: this.$uuid(),
      activeIndex: 1,
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
          areaName: '茶水间-左',
          states: 1,
          circuit: 1,
          eqTypy: 'csj',
        },
        {
          areaName: '电梯间',
          states: 0,
          circuit: 48,
          eqTypy: 'dtj',
        },
        {
          areaName: '楼梯间',
          states: 0,
          circuit: 26,
          eqTypy: 'ltj',
        },
        {
          areaName: '茶水间-右',
          states: 0,
          circuit: 2,
          eqTypy: 'csj',
        },
        {
          areaName: '男卫生间',
          states: 0,
          circuit: 2,
          eqTypy: 'nwsj',
        },
        {
          areaName: '女卫生间',
          states: 0,
          circuit: 2,
          eqTypy: 'nwsj2',
        },
        {
          areaName: '大堂',
          states: 0,
          circuit: 6,
          eqTypy: 'dt',
        },
        {
          areaName: '走廊',
          states: 1,
          circuit: 67,
          eqTypy: 'zl',
        },
      ],
      LightingSceneList: [
        {
          states: 1,
          p1: '当07:00-工作日时',
          p2: '大堂-开启照明',
        },
        {
          states: 0,
          p1: '当08:00-工作日时',
          p2: '大堂-流明400',
        },
        {
          states: 0,
          p1: '当10:00-工作日时',
          p2: '大堂-关闭照明',
        },
        {
          states: 0,
          p1: '当23:00-工作日时',
          p2: '茶水间-关闭照明',
        },
      ],
      dialogShow: false,
      formData: {},
    };
  },
  methods: {
    dialogShowChange(val, t) {
      if (t === 'Add') {
        this.formData = {
          title: '添加场景',
          region: '',
          date: '',
          type: [],
          type1: [],
          resource: '照明回路',
        };
      } else if (t === 'Edit') {
        this.formData = {
          title: '编辑场景',
          region: '',
          date: '123262',
          type: ['法定节假日'],
          type1: ['楼梯间'],
          resource: '开关回路',
        };
      }
      this.dialogShow = val;
    },
    formDataClick(val) {
      this.formData = val;
    },
    closeOpen(val, i) {
      if (val == 'comArea') {
        this.CommonAreaDatas[i].states =
          this.CommonAreaDatas[i].states == 1 ? 0 : 1;
      } else if (val == 'open') {
        this.LightingSceneList[i].states =
          this.LightingSceneList[i].states == 1 ? 0 : 1;
      }
    },

    ElectricityStatistics(data, data1) {
      var dom = this.$refs['ElectricityStatistics' + this.ids];
      var option = {
        title: {
          text: '',
          // subtext: '会议数',
          subtextStyle: {
            color: '#fff',
          },
          textStyle: {
            color: '#fff',
          },
        },
        grid: {
          top: '60',
          left: '10',
          right: '0',
          bottom: '15',
          containLabel: true,
        },
        tooltip: {
          // show: false,
          // trigger: 'item',
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: 'transparent',
            },
          },
        },
        legend: {
          right: 0,
          top: 10,
          data: ['公共区', '办公区', '停车场', '设备层'],
          itemWidth: 10, // 图例的宽度
          itemHeight: 10, // 图例的高度
          icon: 'circle',
          textStyle: {
            color: '#fff',
            fontSize: 12,
          },
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 15,
        },
        calculable: true,
        xAxis: [
          {
            name: '',
            type: 'category',
            data: data,
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgb(255,255,255,.5)',
              },
            },
            axisLabel: {
              fontSize: 12,
              interval: 0,
              rotate: 40,
              textStyle: {
                color: '#fff',
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            name: 'kw',
            type: 'value',
            min: 0,
            max: 12,
            interval: 3,
            splitNumber: 4,
            axisLabel: {
              formatter: function(value) {
                // return value / 1000 + (value != 0 ? "k" : "");
                return value + 'k';
              },
            },
            // data: ['5', '10', '15'],
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff',
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                width: 0.5,
                type: 'dashed',
                color: 'rgb(255,255,255,1)',
              },
            },
          },
        ],
        series: [
          {
            animationDuration: 1000,
            animationEasing:'linear',

            name: '公共区',
            type: 'bar',
            barWidth: 12,
            stack: 'a',
            color: '#4396F3',
            emphasis: {
              focus: 'series',
            },
            data: data1[1],
          },
          {
            animationDuration: 1000,
            animationEasing:'linear',

            name: '办公区',
            type: 'bar',
            barWidth: 12,
            stack: 'a',
            color: '#08E2FF',
            data: data1[0],
          },
          {
            animationDuration: 1000,
            animationEasing:'linear',
            name: "停车场",
            type: "bar",
            barWidth: 12,
            stack: 'a',
            color: '#CDA857',
            emphasis: {
              focus: 'series',
            },
            data: data1[2],
          },
          {
            animationDuration: 1000,
            animationEasing:'linear',
            name: "设备层",
            type: "bar",
            barWidth: 12,
            color: '#95C7FF',
            stack: 'a',
            emphasis: {
              focus: 'series',
            },
            data: data1[3],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.ElectricityStatistics(this.$fun_date(), [
        [2, 2, 0.6, 0.8, 1, 2, 3],
        [1, 3, 0.3, 0.5, 1, 1, 0.8],
        [2, 0.8, 3, 3, 2, 0.5, 0.6],
        [0.5, 0.5, 1, 2, 0.7, 1, 0.2],
      ]);
    });
  },
};
</script>

<style lang="less" scoped>
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
.useKWH {
  #ElectricityStatistics {
    width: 4.375rem /* 350/80 */;
    height: 3.75rem /* 300/80 */ /* 250/80 */;
  }
}
.scene {
  .add {
    color: #4396f3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    i {
      font-size: 0.275rem /* 22/80 */;
      margin-right: 0.1625rem /* 13/80 */;
    }
    span {
      font-size: 0.2rem /* 16/80 */;
    }
  }
  // 照明场景配置
  .LightingScene {
    color: #fff;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.125rem /* 10/80 */;
    .light_list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 2rem /* 160/80 */ /* 156/80 */;
      height: 1.3375rem /* 107/80 */;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      padding: 10px;
      margin: 0.1875rem /* 15/80 */ 0 0 0.1875rem /* 15/80 */;
      &:nth-child(1),
      &:nth-child(2) {
        margin-top: 0px;
      }
      .iconfont {
        font-size: 26px;
        color: #4396f3;
      }
      .light_set {
        display: flex;
        justify-content: space-between;
      }
      .light_setInfo {
        width: 100%;
        padding-left: 0.25rem /* 20/80 */;
        li {
          list-style: disc;
        }
      }
      .light_edit {
        text-align: right;
        color: #4396f3;
        font-size: 0.175rem /* 14/80 */;
      }
    }
  }
}
</style>
