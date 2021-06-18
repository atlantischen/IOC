<template>
  <!-- 产业招商home -->
  <LeftRight>
    <template #left>
      <div class="tittle">房屋租售情况</div>
      <div id="rentalAndSaleEchart"></div>
      <div class="favorablePolicyAll">
        <div class="tittle">优惠政策</div>
        <ul class="favorablePolicy_ul x_rap">
          <li class="favorablePolicy_li y_c" v-for="t,i in favorablePolicyDatas" :key="i">
            <img :src="t.src" alt="">
            <span>{{t.title}}</span>
            <p class="Multi-lineBeyond">{{t.content}}</p>
          </li>
        </ul>
      </div>
      <div class="currentTrendsAll">
        <div class="tittle">前沿动态</div>
        <ul class="currentTrends_ul">
          <li class="currentTrends_li " v-for="t,i in currentTrendsDatas" :key="i">
            <span class="LineBeyond x_c">{{t.title}}</span>
            <span class="Multi-lineBeyond">{{t.content}}</span>
          </li>
        </ul>
      </div>
    </template>
    <template #right>
      <div class="tittle">聚焦产业</div>
      <div class="tittle">企业列表</div>
      <div class="tittle">待入驻企业</div>
    </template>
  </LeftRight>
</template>

<script>
import * as echarts from 'echarts'
import { redomEchart } from '@/utils/methods'
export default {
  name: 'homePage',
  data () {
    return {
      favorablePolicyDatas: [
        {
          src: '',
          title: '落户奖励政策',
          content: '对国家评审认定的科技产业园区和建筑产业园区平台,...'
        },
        {
          src: '',
          title: '费用补贴扶持',
          content: '引入世界500强、全国100强，细分行业20强和上市'
        },
        {
          src: '',
          title: '资产投资奖励',
          content: '引入上述企业二级集团公司，三级公司的分别给予...'
        },
        {
          src: '',
          title: '人才扶持政策',
          content: '行业年会长期落户我区的，对主办方单位分别给予...'
        },
      ],
      currentTrendsDatas: [
        {
          title: '国家产业',
          content: '对国家评审认定的科技产业园区和建筑产业园区平台,...'
        },
        {
          title: '园区招商',
          content: '引入世界500强、全国100强，细分行业20强和上市'
        },
        {
          title: '产业新闻',
          content: '引入上述企业二级集团公司，三级公司的分别给予...'
        }
      ],
    }
  },
  components: {},
  mounted () {
    this.rentalAndSaleFun()
  },
  methods: {
    rentalAndSaleFun () {
      var j = 0
      var optionName = ['已售', '已租', '开放'],
        datas = [63.2, 21.5, 15.3]
      var option = {
        title: {
          show: true,
          text: 2483,
          link: '',
          target: null,
          subtext: '房源合计(套)',
          sublink: '',
          subtarget: null,
          left: '22%',
          bottom: '32%',
          textAlign: 'center',
          // backgroundColor: 'rgba(0,0,0,0)',
          // borderColor: '#ccc',
          // borderWidth: 0,
          // padding: 5,
          itemGap: 6,
          textStyle: {
            fontFamily: 'BYfont',
            fontSize: 24,
            color: '#fff',
            fontWeight: 550,
          },
          subtextStyle: {
            fontSize: 12,
            color: 'rgb(255,255,255,.7)',
          },
        },
        legend: {
          selectedMode: false,
          show: true,
          orient: 'vertical', // 'horizontal'
          left: '50%',
          y: 'center',
          data: optionName,
          formatter: function (name) {
            return '{a|' + name + '}' + datas[j++] + '%'
          },
          textStyle: {
            color: '#fff',
            fontSize: 12,
            padding: [0, 15, 0, 2],
            rich: {
              a: {
                width: 40,
                color: 'rgb(255,255,255,.7)'
              },
            },
          },
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 18,
        },
        color: [
          '#ffdd8d',
          '#4396f3',
          '#1e3957',
        ],
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['62%', '80%'],
            center: ['23%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [],
          },
        ],
      }
      for (var i = 0; i < optionName.length; i++) {
        option.series[0].data[i] = {
          value: datas[i],
          name: optionName[i],
        }
      }
      redomEchart('rentalAndSaleEchart', option)
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
#rentalAndSaleEchart {
  width: 100%;
  height: 160px;
}
.favorablePolicyAll {
  width: 100%;
  .favorablePolicy_ul{
    width: 100%;
    height: 250px;
    li{
      width: 47%;
      padding: 0 10px;
      img{
        .ioc_img(50px, 50%);
        background: rgba(204, 204, 204, 0.5);
      }
      span{
        color: #fff;
        font-size: 16px;
        padding: 5px 0 4px;
      }
      p{
        .text_s();
        line-height: 16px;
      }
    }
  }
}
.currentTrendsAll{
  width: 100%;
  height: 200px;
  color: #fff;
  .currentTrends_ul{
    padding: 0 10px;
    li{
      display: flex;
      margin-bottom: 10px;
      span{
        display: none;
        padding: 10px 5px;
        &:nth-child(1){
          width: 120px;
          background: #4396f3;
        }
      }
    }
  }
}
</style>
