<template>
  <!-- 充电桩 -->
  <div class="chargingPile">
    <IOCLeft>
      <div class="building">
        <div class="tittle">楼栋分布</div>
        <div id="equipment" ref="equipment"></div>
      </div>
      <div class="online">
        <div class="tittle">在线情况</div>
        <ul class="list">
          <li>
            <span class="font_text">64</span>
            <span>总数量</span>
          </li>
          <li>
            <span class="font_text">60</span>
            <span>在线</span>
          </li>
          <li>
            <span class="font_text">2</span>
            <span>离线</span>
          </li>
          <li>
            <span class="font_text">2</span>
            <span>故障</span>
          </li>
        </ul>
        <div id="online" ref="online"></div>
      </div>
    </IOCLeft>
    <IOCRight>
      <div class="use">
        <div class="tittle">使用情况</div>
        <ul class="list">
          <li>
            <span class="font_text">64</span>
            <span>总数量</span>
          </li>
          <li>
            <span class="font_text">36</span>
            <span>正在使用</span>
          </li>
          <li>
            <span class="font_text">24</span>
            <span>闲置</span>
          </li>
          <li>
            <span class="font_text">4</span>
            <span>报损</span>
          </li>
        </ul>
        <div id="use" ref="use"></div>
      </div>
      <div class="use_kwh">
        <div class="tittle">用电情况</div>
        <div id="use_kwh" ref="use_kwh"></div>


      </div>
    </IOCRight>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "chargingPile",
  data() {
    return {};
  },
  components: {},
  methods: {
    equipmentInit() {
      var dom = this.$refs["equipment"];
      var option = {
        grid: {
          x: 10,
          y: 50,
          x2: 10,
          y2: 0,
          containLabel: true,
        },
          tooltip: {
          // show: false,
          // trigger: 'item',  
          trigger: 'axis',
          axisPointer:{
            lineStyle:{
            color:'transparent'
          }
          }
        
        },
        xAxis: [
          {
            name: "",
            type: "category",
            data: ["生产区", "商业区", "停车场"],
            axisLine: {
              lineStyle: {
                width: 0,
                color: "#fff",
              },
            },
            axisLabel: {
              interval: 0,
              // rotate: 40,
              textStyle: "#fff",
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              // rotate: -30,
              // padding: [15, 0, 0, -10],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 50,
            splitNumber: 4,
            interval: 10,
            name: "个",
            nameTextStyle: {
              align: "right",
            },
            //               nameTextStyle: {
            //     padding: [-10, 0, 0, -10]    // 四个数字分别为上右下左与原位置距离
            // },
            type: "value",
            splitNumber: 2,
            axisLabel: {
              formatter: function(value) {
                return value;
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                width: 1,
                type: "dashed",
                color: "rgb(255,255,255,.5)",
              },
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 14,
            color: "#0090FF",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0.2,
                      color: "rgba(67, 149, 243, 0.2)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(67, 149, 243, 1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            data: [40, 30, 10],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    online() {
      var dom = this.$refs["online"];
      var option = {
        tooltip: {
          trigger: "item",
          show:false
        },
        legend: {
          orient: "horizontal",
          bottom: "0",
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },

        series: [
          {
            type: "pie",
            radius: "50%",
            itemStyle: {
              normal: {
                label: {
                  show: false, //隐藏标示文字
                },
                labelLine: {
                  show: false, //隐藏标示线
                },
              },
            },
            color: ["#4695ED", "#05E3FF", "#CD8C57"],
            data: [
              { value: 60, name: "在线 93.75%" },
              { value: 2, name: "离线 3.13%" },
              { value: 2, name: "故障 3.12%" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    use() {
      var dom = this.$refs["use"];
      var option = {
        legend: {
          top: "35%",
          left: "65%",
          orient: "vertical",
          icon: "circle",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },

        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [40, 100],
            center: ["30%", "50%"],
            roseType: "area",
            itemStyle: {
              normal: {
                label: {
                  show: false, //隐藏标示文字
                },
                labelLine: {
                  show: false, //隐藏标示线
                },
              },
            },
            color: ["#4695ED", "#05E3FF", "#CD8C57"],

            data: [
              { value: 36, name: "正在使用   56.25%" },
              { value: 24, name: "闲置   40.63%" },
              { value: 4, name: "报损   3.13%" },
            ],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    use_kwh() {
      var dom = this.$refs["use_kwh"];
      var option = {
        grid: {
          x: 10,
          y: 50,
          x2: 10,
          y2: 0,
          containLabel: true,
        },
         tooltip: {
          // show: false,
          // trigger: 'item',  
          trigger: 'axis',
          axisPointer:{
            lineStyle:{
            color:'transparent'
          }
          }
        
        },
        xAxis: [
          {
            name: "",
            type: "category",
            data: ["生产区", "商业区", "停车场"],
            axisLine: {
              lineStyle: {
                width: 0,
                color: "#fff",
              },
            },
            axisLabel: {
              interval: 0,
              // rotate: 40,
              textStyle: "#fff",
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              // rotate: -30,
              // padding: [15, 0, 0, -10],
              // align:'right',
            },
          },
        ],
        yAxis: [
          {
            min: 0,
            max: 18000,
            splitNumber: 4,
            interval: 3000,
            name: "kwh",
            nameTextStyle: {
              align: "right",
            },
            //               nameTextStyle: {
            //     padding: [-10, 0, 0, -10]    // 四个数字分别为上右下左与原位置距离
            // },
            type: "value",
            splitNumber: 2,
            axisLabel: {
              formatter: function(value) {
                return value;
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                width: 1,
                type: "dashed",
                color: "rgb(255,255,255,.5)",
              },
            },
          },
        ],
        series: [
          {
            // name: "其他",
            type: "bar",
            barWidth: 14,
            color: "#0090FF",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0.2,
                      color: "rgba(67, 149, 243, 0.2)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(67, 149, 243, 1)", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            data: [14000, 10000, 8000],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
  },
  mounted() {
    this.equipmentInit();
    this.online();
    this.use();
    this.use_kwh();
  },
};
</script>

<style lang="less" scoped>
.chargingPile {
  .list {
    display: flex;
    justify-content: space-around;
    & > li {
      display: flex;
      flex-direction: column;
      text-align: center;
      span:nth-child(1) {
        font-size: 0.25rem /* 20/80 */;
      }
    }
  }
  .building {
    #equipment {
      width: 100%;
      height: 3.75rem /* 300/80 */ /* 250/80 */ /* 220/80 */;
    }
  }
  .online {
    #online {
      width: 100%;
      height: 3.125rem /* 250/80 */ /* 300/80 */;
    }
  }
  .use {
    #use {
      width: 100%;
      height: 3.125rem;
    }
  }
  .use_kwh{
    #use_kwh {
      width: 100%;
      height: 3.75rem /* 300/80 *//* 250/80 */ /* 300/80 */;
    }
  }
}
</style>
