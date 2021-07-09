<template>
  <!-- 餐饮大数据分析 -->
  <div class="cateringBDA">
    <IOCLeft>
      <div class="restaurant">
        <div class="tittle">商家类型占比</div>
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
        <div class="tittle">最受欢迎文娱Top8</div>
        <ul>
          <li v-for="(item,index) in topList" :key="index">
            <span class="font_text">{{++index}} .</span>
            <img :src="item.src" alt="">
            <span>{{item.name}}</span>
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
      topList:[
        {
          src:require('../../../../assets/img/wy_pic.png'),
          name:'ZERO健身俱乐部'
        }, {
          src:require('../../../../assets/img/wy_pic1.png'),
          name:'明星俱乐部'
        }, {
          src:require('../../../../assets/img/wy_pic3.png'),
          name:'The Dockers工人码头 Champagne Cocktail'
        } ,{
          src:require('../../../../assets/img/wy_pic4.png'),
          name:'宫廷采耳阁'
        } ,{
          src:require('../../../../assets/img/wy_pic5.png'),
          name:'魔方CUBE剧情密室逃脱'
        }, {
          src:require('../../../../assets/img/wy_pic6.png'),
          name:'非凡KTV会所'
        },{
          src:require('../../../../assets/img/wy_pic7.png'),
          name:'白梧桐· 高端派对·团建轰趴'
        }, {
          src:require('../../../../assets/img/wy_pic8.png'),
          name:'白梧桐· 高端派对·团建轰趴'
        }
      ]
    };
  },
  components: {},
  methods: {
    // 各服务办理分布
    distributionServicesFun() {
     var data = [36, 17, 28, 9, 10];
      var lable = ['娱乐', '书吧', '文化', '影院', '健身'];
      var option = {
        tooltip: {
          trigger: "item",
        },
        labelLine: {
          show: false,
        },
        color: [
          "#CDA857",
          "#4467E7",
          "#4695ED",
          "#14D8E1",
          "#95D3FF",
        ],
        legend: {
          orient: "horizontal",
          top: '30%',
          color: "#fff",
          width: "55%",
          left: 200,
          icon: "circle",
          itemWidth: 6,
          itemHeight: 8,
          itemGap: 20,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
            opacity: 0.7,
          },
          formatter: function (name) {
            var i = 0;
            i += 1;
            return name + " " + data[lable.indexOf(name)]+'%';
          },
          data: lable
        },
        series: [
          {
            // name: "访问来源",
            type: "pie",
            radius: "60%",
            center: ["30%", "50%"],
            label: {
              normal: {
                position: "inner",
                show: false,
              },
            },
            data: [
              { value: 36, name: "娱乐" },
              { value: 17, name: "书吧" },
              { value: 28, name: "文化" },
              { value: 9, name: "影院" },
              { value: 10, name: "健身" },
             
            ],
          },
        ],
      };
      this.$redomEchart(this.$refs["distributionServicesEchart"], option);
    },
    distribution() {
      var dom = this.$refs["distribution"];

      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          data: [
            "娱乐",
            "健身",
            "书吧",
            "文化",
            "影院",
          ],
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度
          itemGap: 15, // 设置间距
           textStyle:{//图例文字的样式
            color:'#fff',
            fontSize:12
        },
        width: "45%",
        right:0
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
            name: "娱乐",
            type: "bar",
            stack: "total",
            barWidth: 24, //宽度
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
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "健身",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
              itemStyle: {
              normal: {
                color: "#14D8E1",
              },
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "书吧",
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
            name: "文化",
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
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "影院",
            type: "bar",
            stack: "total",
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
  .top{
    &>ul{
      &>li{
        display: flex;
        align-items: center;
        padding-left: .15rem /* 12/80 */;
        img{
          width: .6rem /* 48/80 */;
          height: .6rem /* 48/80 */;
          margin: 0 .275rem /* 22/80 */ 0 .225rem /* 18/80 */;
        }
        span:first-child{
          font-size:.25rem /* 20/80 */ ;
          white-space: nowrap;

        }
        span:last-child{
          font-size:.175rem /* 14/80 *//* 0.14/80 */ /* 20/80 */ ;
        }
      }
      &>li:nth-child(-n+7){
        margin-bottom: .375rem /* 30/80 */;
      }

    }
  }
}
</style>
