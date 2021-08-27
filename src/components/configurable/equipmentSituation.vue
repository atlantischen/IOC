<template>
  <div class="equipmentSituationAll">
    <div class="tittle">{{ title }}</div>
    <div class="equipmentSituation">
      <ul class="equipmentSituation_datas">
        <li class="y_c" v-for="(item, i) in datas.equipmentSDatas" :key="i">
          <span class="LineBeyond"
            ><NumCounter :value="item.value"></NumCounter
          ></span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div
        :id="'equipmentSituationEchart_' + ids"
        :ref="'equipmentSituationEchart_' + ids"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'theParkOutputValAll',
  props: {
    _data: {
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      ids: this.$uuid(),
    };
  },
  mounted() {
    this.equipmentSituationFun(this.datas);
  },
  methods: {
    // 设备态势
    equipmentSituationFun(val) {
      const { names, xAxisName, datas } = val;
      var option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'line',
            lineStyle: {
              type: 'dashed',
              width: 0.5,
              color: 'rgba(255,255,255,0.8)',
            },
          },
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          borderColor: '#4396f3',
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          textStyle: {
            color: '#fff',
          },
          formatter: (params) => {
            let dataStr = `<p style="font-weight:bold;font-size:.2rem;text-align:center;padding-bottom:.0625rem;">${params.name}</p>`;
            dataStr += `<div>
                  <span style=" vertical-align: middle;margin-right:0.0625rem;width:0.15rem;height:0.12rem;border-radius:0.02rem;background:linear-gradient(to bottom, ${params.color.colorStops[0].color},${params.color.colorStops[1].color}"></span>
                  <span> ${params.seriesName}: ${params.value}</span>
                </div>`;
            return dataStr;
          },
        },
        grid: {
          x: 10,
          y: 30,
          x2: 30,
          y2: 10,
          containLabel: true,
        },
        legend: {
          right: 20,
          top: 0,
          data: names,
          textStyle: {
            color: '#fff',
            fontSize: 12,
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 20,
        },
        xAxis: [
          {
            type: 'category',
            data: xAxisName,
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: 'rgb(255,255,255,0)',
              },
            },
            axisLabel: {
              fontSize: 12,
              margin: 10,
              textStyle: {
                color: '#fff',
              },
            },
            axisline: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '个',
            nameTextStyle: {
              padding: [5, 0, 0, -30],
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: 'rgb(255,255,255,.5)',
                width: 0.5,
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff',
                type: 'dashed',
              },
            },
          },
        ],
        series: [
          {
            name: names[0],
            type: 'bar',
            barWidth: 14,
            animationDuration: 1000,
            animationEasing: 'linear',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#4396f3' },
                { offset: 1, color: 'rgb(67, 150, 243, .1)' },
              ]),
            },
            data: datas[0],
          },
          {
            name: names[1],
            type: 'bar',
            barWidth: 14,
            animationDuration: 1000,
            animationEasing: 'linear',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#97C8FF' },
                { offset: 1, color: 'rgb(151, 200, 255, .1)' },
              ]),
            },
            data: datas[1],
          },
        ],
      };
      this.$redomEchart(
        this.$refs['equipmentSituationEchart_' + this.ids],
        option
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/style/gl.less';

// 设备态势
.equipmentSituationAll {
  #equipmentSituationEchart_,
  [id^='equipmentSituationEchart_'] {
    width: 100%;
    height: 2rem /* 160/80 */;
  }
  .equipmentSituation {
    width: 100%;
    .equipmentSituation_datas {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-bottom: 0.25rem /* 20/80 */;
      li {
        width: 0.8125rem /* 65/80 */;
        height: 0.8125rem /* 65/80 */;
        margin: 0 0.125rem /* 10/80 */;
        border: 0.0125rem /* 1/80 */ solid rgba(67, 149, 243, 0.4);
        border-radius: 50%;
        background: rgba(30, 57, 87, 0.5);
        span:nth-child(1) {
          .datas_s();
        }
        span:nth-child(2) {
          .text_s();
        }
      }
    }
  }
}
</style>
