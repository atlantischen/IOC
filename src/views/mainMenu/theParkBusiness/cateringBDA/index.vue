<template>
  <!-- 餐饮大数据分析 -->
  <div class="cateringBDA">
    <IOCLeft>
      <div class="restaurant">
        <div class="tittle">餐饮类型</div>
        <div
          id="distributionServicesEchart"
          ref="distributionServicesEchart"
        ></div>
      </div>
      <div class="distribution">
        <div class="tittle">餐饮分布</div>
        <div id="distribution" ref="distribution"></div>
      </div>
    </IOCLeft>
    <IOCRight>
      <div class="top">
        <div class="tittle">最受欢迎餐饮Top8</div>
        <ul>
          <li v-for="(item, index) in topList" :key="index">
            <span class="font_text">{{ ++index }} .</span>
            <img :src="item.src" alt="" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </IOCRight>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "cateringBDA",
  data() {
    return {
      topList: [
        {
          src: require("../../../../assets/img/qqsy_pic.png"),
          name: "优选自助称重快餐",
        },
        {
          src: require("../../../../assets/img/qqsy_pic1.png"),
          name: "嘉乐快餐",
        },
        {
          src: require("../../../../assets/img/qqsy_pic2.png"),
          name: "喜茶",
        },
        {
          src: require("../../../../assets/img/qqsy_pic4.png"),
          name: "奈雪的茶",
        },
        {
          src: require("../../../../assets/img/qqsy_pic5.png"),
          name: "醉鲜居酒屋",
        },
        {
          src: require("../../../../assets/img/qqsy_pic6.png"),
          name: "点都德",
        },
        {
          src: require("../../../../assets/img/qqsy_pic7.png"),
          name: "遇见小面",
        },
        {
          src: require("../../../../assets/img/qqsy_pic8.png"),
          name: "红掌柜（湘）",
        },
      ],
    };
  },
  components: {},
  methods: {
    // 各服务办理分布
    distributionServicesFun() {
      var j = 0,
        colors = ["#00ffff", "#4695ED", "#95D3FF", "#4367F3", "#CDA857"];
      var optionName = ["中餐", "西餐", "料理", "烧烤", "自助餐"],
        datas = [30, 28, 22, 15, 5];
      var option = {
        grid: {
          containLabel: true,
        },
        legend: {
          selectedMode: false,
          show: false,
          orient: "vertical", // 'horizontal'
          left: "50%",
          y: "center",
          data: optionName,
          formatter: function(name) {
            return "{a|" + name + "}" + datas[j++] + "%";
          },
          textStyle: {
            color: "#fff",
            fontSize: 12,
            padding: [0, 15, 0, 0],
            rich: {
              a: {
                width: 40,
                color: "rgb(255,255,255,.7)",
              },
            },
          },
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 18,
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "55%"],
            center: ["50%", "50%"],
            // avoidLabelOverlap: true,
            startAngle: 160,
            label: {
              // padding: [0, -40, 0, -55],
               position: "outside", //默认'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区
              formatter: '{a|{b}}\n{c|{d}%}', //格式展示{a|{b}\n{d}%}
              backgroundColor: "auto", //圆点颜色，auto：映射的系列色
               height: 0,
              width: 0,
              lineHeight: 0,
              // radius和padding为圆点大小，圆点半径为几radius和padding各项数值就为几如：圆点半径为1
              // borderRadius: 4,
              // padding: [4, -4, 4, -4],
              borderRadius: 2.5,
              padding: [2.5, -2.5, 2.5, -2.5],
              // formatter: "{a|{c}%}\n{b|{b}}\n{hr|}",
              formatter: "{a|{c}%}\n{b|{b}}",
              rich: {
                a: {
                  // width: 100,
                  fontSize: 12,
                  verticalAlign: 'bottom',
                  padding: [5, -30, -15, -30],
                  color: "rgb(255,255,255,.7)",
                },
                b: {
                  // width: 100,
                  fontSize: 12,
                  padding: [5, -30, 5, -30],
                  verticalAlign: 'top',
                  color: "rgb(255,255,255,.7)",
                },

              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 70,
              },
            },
            data: [],
          },
          {
            type: "pie",
            animation: false,
            radius: ["0", "40%"],
            data: [100],
            label: { show: false },
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: "#0e1c36",
            },
          },
        ],
      };
      option.series[0].data = [];
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data.push(
          {
            value: datas[i],
            name: optionName[i],
            selected: i == optionName.length - 1,
            itemStyle: {
              color: colors[i],
            },
          },
          {
            value: 2,
            itemStyle: {
              color: "#ffffff00",
            },
            label: { show: false },
          }
        );
      }
      this.$redomEchart(this.$refs["distributionServicesEchart"], option);
    },
    distribution() {
      var dom = this.$refs["distribution"];

      var option = {
        tooltip: {
          // show:false,
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "none",
          },
        },
        legend: {
          data: ["中餐", "西餐", "料理", "烧烤", "自助餐"],
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度
          itemGap: 15, // 设置间距
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
          width: "45%",
          right: 0,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          splitLine: { show: false }, // 坐标轴在 grid 区域中的分隔线
          axisLabel: { show: false }, // 坐标轴刻度标签
          axisTick: { show: false }, // 坐标轴刻度
          axisLine: { show: false }, // 坐标轴轴线
        },
        yAxis: {
          type: "category",
          data: ["2栋B座", "2栋A座", "1栋B座", "1栋A座"],

          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            textStyle: {
              color: "#ffffff",
            },
          },
        },
        series: [
          {
            name: "中餐",
            type: "bar",
            stack: "total",
            barWidth: 24, //宽度
            label: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#4367F3",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "西餐",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#4695ED",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "料理",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#95D3FF",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "烧烤",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#08E2FF",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "自助餐",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: "#CDA857",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
  },
  mounted() {
    this.distributionServicesFun();
    this.distribution();
  },
};
</script>

<style lang="less" scoped>
.cateringBDA {
  .restaurant {
    #distributionServicesEchart {
      width: 100%;
      height: 3rem /* 240/80 */;
    }
  }
  .distribution {
    #distribution {
      width: 100%;
      height: 3.75rem /* 300/80 */;
    }
  }
  .top {
    & > ul {
      & > li {
        display: flex;
        align-items: center;
        padding-left: 0.15rem /* 12/80 */;
        img {
          width: 0.6rem /* 48/80 */;
          height: 0.6rem /* 48/80 */;
          margin: 0 0.275rem /* 22/80 */ 0 0.225rem /* 18/80 */;
        }
        span:first-child {
          font-size: 0.25rem /* 20/80 */;
          white-space: nowrap;
        }
        span:last-child {
          font-size: 0.175rem /* 14/80 */ /* 0.14/80 */ /* 20/80 */;
        }
      }
      & > li:nth-child(-n + 7) {
        margin-bottom: 0.375rem /* 30/80 */;
      }
    }
  }
}
</style>
