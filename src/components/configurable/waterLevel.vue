<template>
  <!-- 单条柱状图 -->
  <div class="waterLevelAll">
    <div class="tittle">{{ title }}</div>
    <p class="waterLeve_tp">
      <span class="w_name">{{ datas.tipD.name }}</span>
      <span class="w_value">{{ datas.tipD.value }}</span>
      <span class="w_unit">{{ datas.tipD.unit }}</span>
      <span class="w_other">{{ datas.tipD.other }}</span>
    </p>
    <div class="waterLevel x_c">
      <div
        v-for="(item, i) in datas.data"
        :key="i"
        :id="'waterLevelEchart_' + i + ids"
        :ref="'waterLevelEchart_' + i + ids"
        :style="'height:' + datas.eHeight / 80 + 'rem;'"
      ></div>
    </div>
  </div>
</template>

<script>
import 'echarts-liquidfill';
import * as echarts from 'echarts';
export default {
  name: 'waterLevel',
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
  created() {},
  mounted() {
    this.waterLevelFun(this.datas);
  },
  methods: {
    waterLevelFun(val) {
      let { data, tipD } = val;
      var _color = ['#0ff', '#cda857', '#cf1b1b'];
      const createColorStops = (rgbColorString) => {
        const opacity = [0.9, 0.8, 0.4, 0.3, 0.2, 0.3, 0.4, 0.8, 0.9];
        let colorStops = [];
        for (let i = 0; i < 9; i++) {
          colorStops.push({
            offset: i / 8,
            color: 'rgba(' + rgbColorString + ',' + opacity[i] + ')',
          });
        }
        return colorStops;
      };

      for (let i = 0; i < data.length; i++) {
        var svgPath =
          'path://M 11 7 L 11 7 L 11 1 C 11 0 12 0 12 0 L 12 0 C 12 0 12 0 12 0 Q 13 0 13 1 L 13 7 L 13 7 C 13 8 12 8 12 8 C 12 8 11 8 11 7 Z';
        var option = {
          grid: {
            top: 0,
            left: 0,
            right: 10,
            bottom: 0,
            containLabel: true,
          },
          title: {
            show: true,
            text: data[i].value,
            subtext: data[i].name,
            color: 'rgb(255,255,255,.7)',
            textStyle: {
              fontSize: 14,
              fontWeight: '500',
              color: '#fff',
            },
            subtextStyle: {
              fontSize: 12,
            },
            top: '20',
            x: 'center',
            itemGap: 140,
          },
          tooltip: {
            show: false,
            backgroundColor: 'rgba(0,0,0,0.8)',
            borderWidth: 1,
            borderColor: '#4396f3',
            padding: [5, 10],
            extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
            textStyle: {
              color: '#fff',
            },
            transitionDuration: 0.8,
            formatter: function(item) {
              return parseInt(item.value * parseInt(tipD.value));
            },
          },
          series: [
            {
              name: '',
              type: 'liquidFill',
              shape: svgPath,
              center: ['50%', '50%'],
              radius: '120%',
              amplitude: 5,
              waveLength: '50%',
              phase: 0,
              direction: 'left',
              waveAnimation: true,
              animationEasing: 'linear',
              animationEasingUpdate: 'quarticInOut',
              animationDuration: 1000,
              animationDurationUpdate: 200,
              data: [
                {
                  name: '',
                  value: parseInt(data[i].value) / parseInt(tipD.value),
                },
              ],
              label: {
                show: false,
                normal: {
                  formatter: '',
                },
              },
              outline: {
                show: true,
                borderDistance: 0,
                itemStyle: {
                  borderColor: _color[i],
                  borderWidth: 1.5,
                  shadowBlur: 8,
                  shadowColor: _color[i],
                  shadowOffsetY: 4,
                },
              },
              backgroundStyle: {
                color: 'transparent',
                shadowColor: _color[i],
                shadowOffsetY: 4,
                // color: {
                //   type: 'linear',
                //   x: 0,
                //   y: 0,
                //   x2: 1,
                //   y2: 0,
                //   colorStops: createColorStops('60,136,198')
                // }
              },
              color: [
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: _color[i],
                  },
                  {
                    offset: 1,
                    color: _color[i],
                  },
                ]),
              ],
              itemStyle: {
                opacity: 0.9,
                shadowBlur: 10,
                shadowColor: _color[i],
              },
              emphasis: {
                itemStyle: {
                  opacity: 1, //鼠标经过波浪颜色的透明度
                },
              },
            },
          ],
        };
        this.$redomEchart(
          this.$refs['waterLevelEchart_' + i + this.ids],
          option
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/style/gl.less';
//
.waterLevelAll {
  .waterLevel {
    display: flex;
    width: 100%;
  }
  .waterLeve_tp {
    padding-left: 0.125rem /* 10/80 */;
    color: rgba(255, 255, 255, 0.7);
    .w_name {
      font-size: 0.175rem /* 14/80 */;
    }
    .w_value {
      .datas_s(0.25rem /* 20/80 */) ;;
      padding: 0 0.1rem /* 8/80 */;
    }
    .w_unit {
      color: #fff;
      padding: 0 0.0625rem /* 5/80 */ 0 0;
    }
  }
  #waterLevelEchart_,
  [id^='waterLevelEchart_'] {
    width: 28%;
    height: 2.625rem /* 210/80 */;
  }
}
</style>
