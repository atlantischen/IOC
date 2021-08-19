<template>
  <div class="environmentalSpaceAll">
    <div class="tittle">{{ title }}</div>
    <div class="environmentalSpace" :style="$paddingFun(datas.padding)">
      <div class="weather">
        <div class="weather_l x_c">
          <SvgIcon className="duoyun" :iconClass="returnIcon" />
          <span class="y_c du_right">
            <i>
              <b>{{ weatherDatas ? weatherDatas.wendu : '31' }}</b>
              <i class="dy_du">℃</i></i
            >
            <i>{{ weatherDatas ? weatherDatas.forecast[0].type : '多云' }}</i>
          </span>
        </div>
        <ul class="weather_r x_sa_rap">
          <li class="y_c">
            <span>60%</span>
            <i class="iconfont icon-icon-humidity"></i>
          </li>
          <li class="y_c">
            <span
              >{{
                weatherDatas ? weatherDatas.forecast[0].fengxiang : '西南风'
              }}（{{
                weatherDatas
                  ? weatherDatas.forecast[0].fengli
                      .split('CDATA[')[1]
                      .split(']]')[0]
                  : '2级'
              }}）</span
            >
            <i class="iconfont icon-fengxiang"></i>
          </li>
          <li class="y_c">
            <span>23</span>
            <i>PM2.5</i>
          </li>
          <li class="y_c">
            <span>0.9ppm</span>
            <i>CO</i>
          </li>
          <li class="y_c">
            <span>993</span>
            <i>Pa</i>
          </li>
          <li class="y_c">
            <span>0.06%</span>
            <i>CO²</i>
          </li>
        </ul>
      </div>
      <div class="environment_tip">
        空气质量指数AQI
        <i class="iconfont icon-wenti">
          <div class="AQI_info">
            <p>空气质量指数及相关信息说明</p>
            <table cellspacing="0" cellpadding="0" border="0">
              <tr>
                <th>空气质量指数</th>
                <th>空气质量指数级别</th>
                <th>空气类别及表示颜色</th>
                <th>对健康影响</th>
                <th>建议采取的措施</th>
              </tr>
              <tr v-for="(item, i) in AQIInfo" :key="i">
                <td class="t_bule">{{ item.numRange }}</td>
                <td>{{ item.level }}</td>
                <td class="t_twoSpan">
                  <span>{{ item.typeAcolor.typeText }}</span
                  ><span :style="'color:' + item.typeAcolor.color + ';'">{{
                    item.typeAcolor.text
                  }}</span>
                </td>
                <td class="t_wid">{{ item.affect }}</td>
                <td class="t_wid">{{ item.measure }}</td>
              </tr>
            </table>
          </div>
        </i>
      </div>
      <div
        :id="'airQualityEchart_' + ids"
        :ref="'airQualityEchart_' + ids"
      ></div>
      <span class="environment_tip">
        <span>温馨提示: </span>
        <p>空气质量很好，可以外出活动，呼吸新鲜空气，拥抱大自然。</p>
      </span>
    </div>
  </div>
</template>

<script>
import BMap from 'BMap';
import * as echarts from 'echarts';
import { getWeather } from '@/api/com';
var nowCity = new BMap.LocalCity();
export default {
  name: 'theParkIsAll',
  props: {
    _data: {
      type: Object,
    },
  },
  data() {
    return {
      ...this._data,
      ids: this.$uuid(),
      weatherDatas: null,
      returnIcon: null,
      AQIInfo: [
        {
          numRange: '0-50',
          level: '一级',
          typeAcolor: {
            typeText: '优',
            color: '#0ff',
            text: '绿色',
          },
          affect: '空气质量令人满意，基本无空气污染',
          measure: '各类人群可正常活动',
        },
        {
          numRange: '51-100',
          level: '二级',
          typeAcolor: {
            typeText: '良',
            color: 'yellow',
            text: '黄色',
          },
          affect:
            '空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱的影响',
          measure: '极少数异常敏感人群应减少户外活动',
        },
        {
          numRange: '101-150',
          level: '三级',
          typeAcolor: {
            typeText: '轻度污染',
            color: 'orange',
            text: '橙色',
          },
          affect: '易敏感人群症状有轻度加剧，健康人群出现刺激症状',
          measure:
            '儿童、老年人及心脏病、呼吸系统疾病患者减少长时间、高强度的户外锻炼',
        },
        {
          numRange: '151-200',
          level: '四级',
          typeAcolor: {
            typeText: '中度污染',
            color: 'red',
            text: '红色',
          },
          affect:
            '进一步加剧易感染人群症状，可能对健康人群心脏、呼吸系统有影响',
          measure:
            '儿童、老年人及心脏病、呼吸系统疾病患者减少长时间、高强度的户外锻炼，一般人群适量减少户外运动',
        },
        {
          numRange: '201-300',
          level: '五级',
          typeAcolor: {
            typeText: '重度污染',
            color: '#eb2b97',
            text: '紫色',
          },
          affect:
            '心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状',
          measure:
            '儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动',
        },
        {
          numRange: '>300',
          level: '六级',
          typeAcolor: {
            typeText: '严重污染',
            color: '#ff0051',
            text: '褐红色',
          },
          affect: '健康人群运动耐受力减低，有明显强烈症状，提前出现某些疾病',
          measure: '儿童、老年人及心脏病应当留在室内，一般人群应避免户外运动',
        },
      ],
    };
  },
  created() {
    let cityName = '';
    nowCity.get(bdGetPosition);
    var _that = this;
    function bdGetPosition(d) {
      getWeather({ city: d.name }).then((r) => {
        _that.weatherDatas = r.data.data;
        _that.returnIconFun(r.data.data.forecast[0].type);
      });
    }
  },
  mounted() {
    this.environmentalSpaceFun(this.datas);
  },
  methods: {
    returnIconFun(val) {
      let _r;
      function istrue(arr, i) {
        if (val.indexOf(arr[i]) != -1) {
          return true;
        }
      }
      switch (true) {
        case ['晴'].some(istrue):
          _r = 'qing';
          break;
        case ['多云'].some(istrue):
          _r = 'duoyun';
          break;
        case ['阴'].some(istrue):
          _r = 'yin';
          break;
        case ['雷阵雨'].some(istrue):
          _r = 'leizhenyu';
          break;
        case ['阵雨'].some(istrue):
          _r = 'zhenyu';
          break;
        case ['特大暴雨'].some(istrue):
          _r = 'tedabaoyu';
          break;
        case ['大暴雨'].some(istrue):
          _r = 'dabaoyu';
          break;
        case ['暴雨'].some(istrue):
          _r = 'baoyu';
          break;
        case ['大雨'].some(istrue):
          _r = 'dayu';
          break;
        case ['小雨'].some(istrue):
          _r = 'xiaoyu';
          break;
        case ['中雨'].some(istrue):
          _r = 'zhongyu';
          break;
        case ['冻雨'].some(istrue):
          _r = 'dongyu';
          break;
        case ['冰雹', '雷阵雨'].some(istrue):
          _r = 'leizhenyubanyoubingbao';
          break;
        case ['尘'].some(istrue):
          _r = 'fuchen';
          break;
        case ['雾'].some(istrue):
          _r = 'wu';
          break;
        case ['霾'].some(istrue):
          _r = 'mai';
          break;
        case ['扬沙'].some(istrue):
          _r = 'yangsha';
          break;
        case ['强沙尘暴'].some(istrue):
          _r = 'qiangshachenbao';
          break;
        case ['沙尘暴'].some(istrue):
          _r = 'shachenbao';
          break;
        case ['暴雪'].some(istrue):
          _r = 'baoxue';
          break;
        case ['大雪'].some(istrue):
          _r = 'daxue';
          break;
        case ['中雪'].some(istrue):
          _r = 'zhongxue';
          break;
        case ['小雪'].some(istrue):
          _r = 'xiaoxue';
          break;
        case ['雨夹雪'].some(istrue):
          _r = 'yujiaxue';
          break;
        default:
          _r = 'duoyun';
          break;
      }
      this.returnIcon = _r;
    },
    environmentalSpaceFun(val) {
      var datas = [53, 300],
        colors = ['#00ffff', 'yellow', 'orange', 'red', '#eb2b97', '#ff0051'],
        selectedColor = '';
      datas[0] = this.$randomNumer(40, 70);
      switch (true) {
        case datas[0] < (datas[1] / 6) * 1:
          selectedColor = colors[0];
          break;
        case datas[0] < (datas[1] / 6) * 2:
          selectedColor = colors[1];
          break;
        case datas[0] < (datas[1] / 6) * 3:
          selectedColor = colors[2];
          break;
        case datas[0] < (datas[1] / 6) * 4:
          selectedColor = colors[3];
          break;
        case datas[0] < (datas[1] / 6) * 5:
          selectedColor = colors[4];
          break;
        default:
          selectedColor = colors[5];
          break;
      }
      var option = {
        grid: {
          left: '0',
          top: '30',
          right: '0',
          bottom: '0',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          max: datas[1],
          min: 0,
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: 'category',
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            name: '条',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            // barCategoryGap: "100%",
            data: [datas[0]],
            itemStyle: {
              normal: {
                color: '#ffffff00',
                // color: "pink",
              },
            },
            label: {
              show: true,
              position: 'right',
              fontSize: 14,
              offset: [-25, -25],
              formatter: '{a| {c}}\n{b| }',
              rich: {
                a: {
                  width: 40,
                  height: 15,
                  padding: [3, 3, 5, 0],
                  align: 'center',
                  color: '#000',
                  borderRadius: 5,
                  backgroundColor: selectedColor,
                },
                b: {
                  width: 1,
                  height: 2,
                  padding: [0.5, 0],
                  // borderWidth: 1,
                  // borderColor: selectedColor,
                  align: 'center',
                  backgroundColor: selectedColor,
                },
              },
            },
            z: 1,
          },
          {
            name: '背景',
            stack: '背景',
            type: 'bar',
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                barBorderRadius: [10, 0, 0, 10],
                color: '#00ffff',
              },
            },
            z: 0,
          },
          {
            name: '',
            stack: '背景',
            type: 'bar',
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: 'yellow',
              },
            },
            z: 0,
          },
          {
            name: '',
            stack: '背景',
            type: 'bar',
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: 'orange',
              },
            },
            z: 0,
          },
          {
            name: '',
            stack: '背景',
            type: 'bar',
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: 'red',
              },
            },
            z: 0,
          },
          {
            name: '',
            stack: '背景',
            type: 'bar',
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                color: '#eb2b97',
              },
            },
            z: 0,
          },
          {
            name: '',
            stack: '背景',
            type: 'bar',
            animation: false,
            barWidth: 10,
            data: [datas[1] / 6],
            itemStyle: {
              normal: {
                barBorderRadius: [0, 10, 10, 0],
                color: '#ff0051',
              },
            },
            z: 0,
          },
          // {
          //   name: "背景",
          //   stack: '广告',
          //   type: "bar",
          //   stack: "one",
          //   // barGap: "-100%",
          //   barWidth: 10,
          //   data: [datas[1]],
          //   itemStyle: {
          //     normal: {
          //       barBorderRadius: 10,
          //       color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          //         { offset: 0, color: "#00ffff" },
          //         { offset: 0.2, color: "yellow" },
          //         { offset: 0.4, color: "orange" },
          //         { offset: 0.6, color: "red" },
          //         { offset: 0.8, color: "#eb2b97" },
          //         { offset: 1, color: "#ff0051" },
          //       ]),
          //     },
          //   },
          // },
        ],
      };
      this.$redomEchart(this.$refs['airQualityEchart_' + this.ids], option);
    },
    // 查看空气质量指数AQI
    lookAQI() {},
  },
};
</script>

<style lang="less" scoped>
@import '~@/style/gl.less';
#airQualityEchart_,
[id^='airQualityEchart_'] {
  width: 100%;
  height: 0.625rem /* 50/80 */;
  margin: 0.125rem /* 10/80 */ 0;
}
.environmentalSpace {
  padding: 0 0.125rem /* 10/80 */;
  .weather {
    display: flex;
    padding: 0 0 0.125rem /* 10/80 */ 0;
    .weather_l {
      width: 30%;
      display: flex;
      align-items: flex-start;
      border-right: 0.0125rem /* 1/80 */ solid rgba(255, 255, 255, 0.3);
      .duoyun {
        font-size: 0.5rem /* 40/80 */;
        width: 0.5rem /* 40/80 */;
        height: 0.5rem /* 40/80 */;
      }
      span {
        position: relative;
        width: 0.4375rem /* 35/80 */;
        margin: 0 0.1rem /* 8/80 */;
        align-items: flex-start;
        i {
          white-space: nowrap;
          &:first-child {
            b {
              .datas_s(0.2rem /* 16/80 */) ;;
              font-weight: 500;
            }
            .dy_du {
              position: absolute;
              right: 0;
              top: 0;
            }
          }
          .text_s();
          font-size: 0.125rem /* 10/80 */;
        }
      }
    }
    .weather_r {
      width: 70%;
      li {
        width: 33%;
        font-size: 0.175rem /* 14/80 */;
        span:first-child {
          white-space: nowrap;
          padding: 0 0 0.0625rem /* 5/80 */ 0;
          .text_s();
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: 0.15rem /* 12/80 */;
        }
      }
      .iconfont {
        font-size: 0.225rem /* 18/80 */;
      }
      li:nth-child(2) .iconfont {
        font-size: 0.3rem /* 24/80 */;
      }
    }
  }
  .environment_tip {
    display: flex;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.9);
    .icon-wenti {
      font-size: 16px;
      color: #ffb400;
      cursor: pointer;
      &:hover {
        .AQI_info {
          display: inline-block;
        }
      }
    }
    span {
      white-space: nowrap;
      .text_s();
      font-size: 12px;
      padding-right: 5px;
    }
    p {
      line-height: 1.4;
    }
  }

  .AQI_info {
    display: none;
    position: fixed;
    right: 350px;
    top: 100px;
    min-width: 300px;
    min-height: 200px;
    color: #fff;
    background: rgba(50, 50, 51, 0.95);
    padding: 0.1875rem /* 15/80 */;
    border-radius: 0.0625rem /* 5/80 */;
    z-index: 400;
    p {
      text-align: center;
      font-size: 0.2rem /* 16/80 */;
      padding: 0.125rem /* 10/80 */ 0 0.25rem /* 20/80 */;
    }
    table {
      font-size: 0.1625rem /* 13/80 */;
      th {
        white-space: nowrap;
      }
      td,
      th {
        padding: 0.1875rem /* 15/80 */ 0.125rem /* 10/80 */;
        text-align: center;
      }
      td {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      tr {
        &:first-child {
          background: rgba(41, 41, 41, 0.9);
        }
        &:last-child {
          td {
            border: unset;
          }
        }
      }

      .t_wid {
        min-width: 3.5rem /* 280/80 */;
      }
      .t_bule {
        color: #0b8ad1;
      }
      .t_twoSpan {
        span {
          &:first-child {
            min-width: 0.625rem /* 50/80 */;
            margin-right: 0.125rem /* 10/80 */;
          }
        }
      }
    }
  }
}
</style>
