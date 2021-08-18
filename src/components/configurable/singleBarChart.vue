<template>
  <!-- 单条柱状图 -->
  <div class="singleBarChartAll">
    <div class="tittle">{{ title }}</div>
    <div class="singleBar_time" :style="$paddingFun(datas.padding)">
      <DropDown
        v-if="datas.yearsList"
        :list="datas.yearsList"
        name="label"
        @_cg="changePSYears"
      />
      <DropDown
        v-if="datas.momthsList"
        :list="momthsList"
        name="label"
        @_cg="changePSMonths"
      />
    </div>
    <div class="singleBarChart">
      <ul class="pp_top" v-show="datas.datas2">
        <li class="y_c" v-for="(item, i) in datas.datas2" :key="i">
          <span><NumCounter :value="item.value"></NumCounter></span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div
        :id="'singleBarChartEchart_' + ids"
        :ref="'singleBarChartEchart_' + ids"
        :style="$eHeightFun(datas.eHeight)"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'singleBarChart',
  props: {
    _data: {
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      momthsList: this._data.datas.yearsList
        ? this.$getYearMonth(this._data.datas.yearsList[0].value)
        : null,
      ids: this.$uuid(),
    }
  },
  created() {},
  mounted() {
    this.singleBarChartFun(this.datas)
    this.changePSMonths()
  },
  methods: {
    changePSMonths(val) {
      this.singleBarChartFun(this.datas)
    },
    changePSYears(val) {
      this.singleBarChartFun(this.datas)
      this.momthsList = this.$getYearMonth(val)
    },
    singleBarChartFun(val) {
      if (this.title == '热门服务TOP5') {
        this.datas.datas[0] = [
          this.$randomNumer(250, 280),
          this.$randomNumer(150, 200),
          this.$randomNumer(100, 150),
          this.$randomNumer(50, 100),
          this.$randomNumer(0, 50),
        ]
        this.datas.leftTip.value = this.$arrAdd(this.datas.datas[0])
      }
      let { xAxisD, datas, units, names, leftTip } = val
      var allD = [],
        showLb = {
          rotate: -(datas[0].length > 4 ? 20 : 50),
          padding: [40, 0, 0, -(datas[0].length > 4 ? 20 : 10)],
        },
        colorRange = [
          [
            { offset: 0, color: '#4396f3' },
            { offset: 1, color: 'rgb(67, 150, 243, .1)' },
          ],
          [
            { offset: 0, color: '#0ff' },
            { offset: 1, color: 'rgb(0, 255, 255, 0.1)' },
          ],
          [
            { offset: 0, color: 'rgba(205, 168, 87, 1)' },
            { offset: 1, color: 'rgba(205, 168, 87, 0.1)' },
          ],
          [
            { offset: 0, color: 'rgba(226, 28, 28, 1)' },
            { offset: 1, color: 'rgba(226, 28, 28, .1)' },
          ],
        ]
      if (names && names.indexOf('次要') != -1) {
        colorRange.splice(0, 1)
      }
      for (let i = 0; i < datas.length; i++) {
        allD[i] = {
          name: names ? names[i] : '',
          barWidth:
            14 / (datas.length > 1 ? (datas.length * 2) / 3 : datas.length),
          barGap: '0',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              colorRange[i]
            ),
          },
          data: datas[i],
        }
      }

      var option = {
        title: {
          show: leftTip,
          text: `{c|${leftTip ? leftTip.name : ''}}{a|${
            leftTip ? leftTip.value : ''
          }}{b|${leftTip ? leftTip.unit : ''}}`,
          link: '',
          target: null,
          subtext: '',
          sublink: '',
          subtarget: null,
          left: '1%',
          top: '0%',
          textAlign: 'left',
          itemGap: 6,
          textStyle: {
            rich: {
              c: {
                fontSize: 14,
                color: 'rgb(255,255,255,.7)',
              },
              a: {
                color: '#fff',
                fontFamily: 'BYfont',
                fontSize: 20,
              },
              b: {
                color: '#fff',
                padding: [0, 0, 8, 3],
                fontSize: 12,
              },
            },
          },
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              opacity: 0,
              show: false,
              type: 'dashed',
              width: 0.5,
              color: 'rgba(255,255,255,0.8)',
            },
          },
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          borderColor: '#4396f3',
          padding: [10, 15],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          textStyle: {
            color: '#fff',
          },
          formatter: (params) => {
            let dataStr = `<p style="font-weight:bold;font-size:.2rem;text-align:center;padding-bottom:.0625rem;">${params[0].name}</p>`
            params.forEach((item) => {
              dataStr += `<div>
                    <span style=" vertical-align: middle;margin-right:0.0625rem;width:0.15rem;height:0.12rem;border-radius:0.02rem;background:linear-gradient(to bottom, ${
                      item.color.colorStops[0].color
                    },${item.color.colorStops[1].color}"></span>
                    <span> ${
                      item.seriesName ? item.seriesName + ':' : item.seriesName
                    }  ${item.value}</span>
                  </div>`
            })
            return dataStr
          },
        },
        grid: {
          x: 10,
          y: leftTip ? 60 : 40,
          x2: 20,
          y2: -10,
          containLabel: true,
        },
        legend: {
          show: names,
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
            name: '{a|' + (units[0] ? units[0] : '') + '}',
            nameGap: 20,
            nameTextStyle: {
              rich: {
                a: {
                  padding: [-25, 0, 0, -40],
                  color: '#fff',
                },
              },
            },
            data: xAxisD,
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: 'rgb(255,255,255,0)',
              },
            },
            axisLabel: {
              interval: 0,
              margin: units && units[1] ? 25 : 20,
              // padding: [40, 0, 0, -(datas[0].length > 4 ? 20 : 10)],
              // padding: [40, 0, 0, -(xAxisD[0].length > 4 ? 20 : 10)],
              rotate: -(xAxisD[0].length > 4 ? 25 : 30),
              textStyle: {
                fontSize: 12,
                color: '#fff',
                align: 'center',
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
            name: units[1] ? units[1] : '',
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
        series: allD.map((e) => {
          return {
            type: 'bar',
            animationDuration: 3000,
            ...e,
          }
        }),
      }
      if (units && units[0]) {
        for (let key in showLb) {
          // option.xAxis[0].axisLabel[key] = showLb[key];
        }
      }
      this.$redomEchart(this.$refs['singleBarChartEchart_' + this.ids], option)
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/style/gl.less';
//
.singleBarChartAll {
  .singleBarChart {
    width: 100%;
  }
  #singleBarChartEchart_,
  [id^='singleBarChartEchart_'] {
    width: 100%;
    height: 2.5rem /* 200/80 */;
  }

  .singleBar_time {
    display: flex;
    justify-content: flex-end;
    padding-right: 0.225rem /* 18/80 */;
    .dropDown {
      margin-left: 0.375rem /* 30/80 */;
    }
  }
  .pp_top {
    width: 100%;
    display: flex;
    padding: 0.0625rem /* 5/80 */ 0.3125rem /* 25/80 */ 0.1875rem /* 15/80 */;
    li {
      flex: 1;
      span:nth-child(1) {
        .datas_s();
      }
      span:nth-child(2) {
        .text_s();
      }
    }
  }
}
</style>
