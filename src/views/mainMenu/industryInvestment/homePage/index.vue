<template>
  <!-- 产业招商home -->
  <LeftRight>
    <template #left>
      <div class="tittle">房屋租售情况</div>
      <div id="rentalAndSaleEchart"></div>
      <div class="favorablePolicyAll">
        <div class="tittle">优惠政策</div>
        <ul class="favorablePolicy_ul x_rap">
          <li
            class="favorablePolicy_li y_c"
            v-for="(t, i) in favorablePolicyDatas"
            :key="i"
          >
            <img :src="t.src" alt="" />
            <span>{{ t.title }}</span>
            <p class="Multi-lineBeyond">{{ t.content }}</p>
          </li>
        </ul>
      </div>
      <div class="currentTrendsAll">
        <div class="tittle">前沿动态</div>
        <ul class="currentTrends_ul">
          <li
            class="currentTrends_li"
            v-for="(t, i) in currentTrendsDatas"
            :key="i"
          >
            <span class="LineBeyond x_c">{{ t.title }}</span>
            <span class="Multi-lineBeyond">{{ t.content }}</span>
          </li>
        </ul>
      </div>
    </template>
    <template #right>
      <div class="FocusIndustryAll">
        <div class="tittle">聚焦产业</div>
        <div id="focusIndustryEchart"></div>
      </div>
      <div class="companiesListAll">
        <div class="tittle">企业列表</div>
        <div class="companiesList">
          <div class="selectBuilding">
            <span> 栋座： </span>
            <div>
              <ul class="x_sa_rap">
                <li
                  v-for="(t, i) in buldingList"
                  :key="i"
                  :class="{ actived: selectedNum == t.id }"
                  @click.stop="selectBuldingFun('B', t.id)"
                >
                  {{ t.bulding }}
                </li>
              </ul>
              <ul class="x_sa_rap">
                <li
                  v-for="(t, i) in buldingList[selectedNum - 1].nums"
                  :key="i"
                  :class="{ actived: selectedNum2 == t.name }"
                  @click.stop="selectBuldingFun('', t.name)"
                >
                  {{ t.name }}座
                </li>
              </ul>
            </div>
          </div>
          <div class="companiesImgsList x_fs_rap">
            <img
              v-for="(t, i) in companiesImgsListDatas"
              :key="i"
              :src="t.src"
              alt=""
            />
            <img
              v-for="(t, i) in companiesImgsListDatas"
              :key="i"
              :src="t.src"
              alt=""
            />
            <img
              v-for="(t, i) in companiesImgsListDatas"
              :key="i"
              :src="t.src"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="enterprisesSettled">
        <div class="tittle">待入驻企业</div>
        <div class="enterprisesList x_fs_rap">
          <img
            v-for="(t, i) in enterprisesListDatas"
            :key="i"
            :src="t.src"
            alt=""
          />
        </div>
      </div>
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
          src: require('@/assets/img/datas/zc_lh.png'),
          title: '落户奖励政策',
          content: '对国家评审认定的科技产业园区和建筑产业园区平台,...'
        },
        {
          src: require('@/assets/img/datas/zc_fybt.png'),
          title: '费用补贴扶持',
          content: '引入世界500强、全国100强，细分行业20强和上市'
        },
        {
          src: require('@/assets/img/datas/zc_zctz.png'),
          title: '资产投资奖励',
          content: '引入上述企业二级集团公司，三级公司的分别给予...'
        },
        {
          src: require('@/assets/img/datas/zc_rcfc.png'),
          title: '人才扶持政策',
          content: '行业年会长期落户我区的，对主办方单位分别给予...'
        },
      ],
      currentTrendsDatas: [
        {
          title: '国家产业',
          content: '工信部：积极考虑集成电路纳入“十四五”国家专项规划'
        },
        {
          title: '园区招商',
          content: '庆贺星巴克等6家企业即将入驻园区'
        },
        {
          title: '产业新闻',
          content: '恭喜奇信股份连续8年荣获国家鲁班奖'
        }
      ],
      selectedNum: 1,
      selectedNum2: 'A',
      buldingList: [
        {
          bulding: '1栋',
          id: 1,
          nums: [
            {
              name: 'A'
            },
            {
              name: 'B'
            },
            {
              name: 'C'
            },
          ]
        },
        {
          bulding: '2栋',
          id: 2,
          nums: [
            {
              name: 'A'
            },
            {
              name: 'B'
            }
          ]
        },
        {
          bulding: '3栋',
          id: 3,
          nums: [
            {
              name: 'A'
            },
            {
              name: 'B'
            },
            {
              name: 'C'
            },
            {
              name: 'D'
            },
          ]
        }
      ],
      companiesImgsListDatas: [
        {
          name: '升华集团',
          src: require('@/assets/img/datas/qy_shjt.png'),
        },
        {
          name: '一博科技',
          src: require('@/assets/img/datas/qy_ybkj.png'),
        },
        {
          name: '华夏视科集团',
          src: require('@/assets/img/datas/qy_hx.png'),
        },
        {
          name: '中国建设银行',
          src: require('@/assets/img/datas/qy_zgjsyh.png'),
        },
      ],
      enterprisesListDatas: [
        {
          name: '氪空间',
          src: require('@/assets/img/datas/drz_kkj.png'),
        },
        {
          name: '威信科技',
          src: require('@/assets/img/datas/drz_wxkj.png'),
        },
        {
          name: '卓然睿和自动化',
          src: require('@/assets/img/datas/drz_zr.png'),
        },
        {
          name: 'EOPLE',
          src: require('@/assets/img/datas/drz_eople.png'),
        },
        {
          name: '格瑞智慧能源',
          src: require('@/assets/img/datas/drz_gr.png'),
        },
        {
          name: '思码软件',
          src: require('@/assets/img/datas/drz_smrj.png'),
        }
      ]
    }
  },
  components: {},
  mounted () {
    this.rentalAndSaleFun()
    this.FocusIndustryFun()
  },
  methods: {
    selectBuldingFun (key, val) {
      switch (key) {
        case 'B':
          this.selectedNum = val
          break;
        default:
          this.selectedNum2 = val
          break;
      }
    },
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
    FocusIndustryFun () {
      var j = 0
      var optionName = ['商家', '信息技术', '智能制造', '新材料', '新能源', '文化创意', '现代服务', '节能环保', '生物医药'],
        datas = [32.05, 19.23, 12.82, 9.62, 6.41, 8.33, 5.13, 3.20, 3.21]
      var option = {
        title: {
          show: true,
          text: 2483,
          link: '',
          target: null,
          subtext: '企业合计(家)',
          sublink: '',
          subtarget: null,
          left: '48%',
          bottom: '38%',
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
          show: false,
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
          '#4396f3',
          '#97c8ff',
          '#456af3',
          '#00ffff',
          '#1e3957',
          '#c7d392',
          '#9a866a',
          '#c9a555',
          '#fff',
        ],
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: true,
            maxAngle: 145,
            label: {
              // minMargin: 10,
              // alignTo: 'edge',
              // edgeDistance: 10,
              // lineHeight: 10,
              formatter: '{a|{c}%}\n{b|{b}}',
              padding: [0, -45, 0, 0],
              rich: {
                a: {
                  width: 100,
                  fontSize: 12,
                  // padding: [2, 0],
                  color: 'rgb(255,255,255,.7)',
                },
                b: {
                  width: 100,
                  fontSize: 12,
                  lineHeight: 14,
                  // padding: [1, 0],
                  color: 'rgb(255,255,255,.7)',
                },
              },
            },
            labelLine: {
              length: 20,
              length2: 45,
              // maxSurfaceAngle: 80
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
      redomEchart('focusIndustryEchart', option)
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
#focusIndustryEchart {
  width: 100%;
  height: 190px;
}
.favorablePolicyAll {
  width: 100%;
  .favorablePolicy_ul {
    width: 100%;
    height: 250px;
    li {
      width: 47%;
      padding: 0 10px;
      img {
        .ioc_img(50px,50px, 50%);
        background: rgba(204, 204, 204, 0.5);
      }
      span {
        font-size: 16px;
        padding: 5px 0 4px;
      }
      p {
        .text_s();
        line-height: 16px;
      }
    }
  }
}
.currentTrendsAll {
  width: 100%;
  height: 200px;
  .currentTrends_ul {
    padding: 0 15px;
  }
  li {
    display: flex;
    margin-bottom: 10px;
    span {
      padding: 10px 5px;
      &:first-child {
        width: 30%;
        background: #4396f3;
        border-radius: 5px 0 0 5px;
        font-size: 18px;
      }
      &:nth-child(2) {
        width: 70%;
        .text_s();
        .gradient(right,#1e3957,#ffffff00);
      }
    }
    &:last-child {
      margin: 0;
    }
  }
}
.companiesListAll {
  .companiesList {
    font-size: 16px;
    .selectBuilding > span {
      width: 20%;
    }
    .selectBuilding > div {
      width: 80%;
    }
    .selectBuilding {
      display: flex;
      padding: 0 20px;
      ul {
        display: flex;
        padding: 0 0 10px 0;
        li {
          min-width: 55px;
          background: rgba(30, 57, 87, 0.5);
          border-radius: 5px;
          padding: 3px 10px;
          text-align: center;
        }
        .actived {
          border: 1px solid #4396f3;
        }
      }
    }
    .companiesImgsList {
      width: 100%;
      height: 180px;
      overflow-y: auto;
      img {
        .ioc_img(150px,80px, 5px);
        margin: 0 5px 10px;
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }
}
.enterprisesSettled {
  .enterprisesList {
    width: 100%;
    height: 145px;
    img {
      .ioc_img(100px,64px, 5px);
      margin: 0 5px 10px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:nth-child(n-3) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
