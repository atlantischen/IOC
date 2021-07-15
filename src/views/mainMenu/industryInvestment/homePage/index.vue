<template>
  <!-- 产业招商home -->
  <LeftRight>
    <template #left>
      <Allcom :_Info="leftInfo" />
    </template>
    <template #center> </template>
    <template #right>
      <Allcom :_Info="rightInfo" />
    </template>
  </LeftRight>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "homePage",
  data () {
    return {
      // 左侧组件info
      leftInfo: [
        {
          title: '房屋租售情况',
          type: 'pieChart2',
          datas: {
            eHeight: null,
            padding: null,
            optionName: ["已售", "已租", "开放"],
            datas: [63.2, 21.5, 15.3],
            keyD: {
              value: 2483,
              name: '房源合计(套)'
            }
          }
        },
        {
          title: '优惠政策',
          type: 'favorablePolicy',
          datas: {
            padding: null,
            favorablePolicyDatas: [
              {
                src: require("@/assets/img/datas/zc_lh.png"),
                title: "落户奖励政策",
                content: "对国家评审认定的科技产业园区和建筑产业园区平台,...",
              },
              {
                src: require("@/assets/img/datas/zc_fybt.png"),
                title: "费用补贴扶持",
                content: "引入世界500强、全国100强，细分行业20强和上市",
              },
              {
                src: require("@/assets/img/datas/zc_zctz.png"),
                title: "资产投资奖励",
                content: "引入上述企业二级集团公司，三级公司的分别给予...",
              },
              {
                src: require("@/assets/img/datas/zc_rcfc.png"),
                title: "人才扶持政策",
                content: "行业年会长期落户我区的，对主办方单位分别给予...",
              }
            ],
          }
        },
        {
          title: '前沿动态',
          type: 'currentTrends',
          datas: {
            padding: null,
            currentTrendsDatas: [
              {
                title: "国家产业",
                content: "工信部：积极考虑集成电路纳入“十四五”国家专项规划",
              },
              {
                title: "园区招商",
                content: "庆贺星巴克等6家企业即将入驻园区",
              },
              {
                title: "产业新闻",
                content: "恭喜奇信股份连续8年荣获国家鲁班奖",
              },
            ],
          }
        }
      ],
      rightInfo: [
        {
          title: '聚焦产业',
          type: 'FocusIndustry',
          datas: {
            eHeight: null,
            padding: null,
            keyD: {
              name: '企业合计(家)',
              value: 2483,
            },
            optionName: [
              "商家",
              "信息技术",
              "智能制造",
              "新材料",
              "新能源",
              "文化创意",
              "现代服务",
              "节能环保",
              "生物医药",
            ],
            datas: [32.05, 19.23, 12.82, 9.62, 6.41, 8.33, 5.13, 3.2, 3.21]
          }
        },
        {
          title: '企业列表',
          type: 'companiesList',
          datas: {
            selectedNum: 1,
            selectedNum2: "A",
            buldingList: [
              {
                bulding: "1期",
                id: 1,
                nums: [
                  {
                    name: "A",
                  },
                  {
                    name: "B",
                  },
                  {
                    name: "C",
                  },
                ],
              },
              {
                bulding: "2期",
                id: 2,
                nums: [
                  {
                    name: "A",
                  },
                  {
                    name: "B",
                  },
                ],
              },
              {
                bulding: "3期",
                id: 3,
                nums: [
                  {
                    name: "A",
                  },
                  {
                    name: "B",
                  },
                  {
                    name: "C",
                  },
                  {
                    name: "D",
                  },
                ],
              },
            ],
            companiesImgsListDatas: [
              {
                name: "升华集团",
                src: require("@/assets/img/datas/qy_shjt.png"),
              },
              {
                name: "一博科技",
                src: require("@/assets/img/datas/qy_ybkj.png"),
              },
              {
                name: "华夏视科集团",
                src: require("@/assets/img/datas/qy_hx.png"),
              },
              {
                name: "中国建设银行",
                src: require("@/assets/img/datas/qy_zgjsyh.png"),
              },
              {
                name: "升华集团",
                src: require("@/assets/img/datas/qy_shjt.png"),
              },
              {
                name: "一博科技",
                src: require("@/assets/img/datas/qy_ybkj.png"),
              },
              {
                name: "华夏视科集团",
                src: require("@/assets/img/datas/qy_hx.png"),
              },
              {
                name: "中国建设银行",
                src: require("@/assets/img/datas/qy_zgjsyh.png"),
              },
            ],
          }
        },
        {
          title: '待入驻企业',
          type: 'enterprisesSettled',
          datas: {
            enterprisesListDatas: [
              {
                name: "氪空间",
                src: require("@/assets/img/datas/drz_kkj.png"),
              },
              {
                name: "威信科技",
                src: require("@/assets/img/datas/drz_wxkj.png"),
              },
              {
                name: "卓然睿和自动化",
                src: require("@/assets/img/datas/drz_zr.png"),
              },
              {
                name: "EOPLE",
                src: require("@/assets/img/datas/drz_eople.png"),
              },
              {
                name: "格瑞智慧能源",
                src: require("@/assets/img/datas/drz_gr.png"),
              },
              {
                name: "思码软件",
                src: require("@/assets/img/datas/drz_smrj.png"),
              },
              {
                name: "氪空间",
                src: require("@/assets/img/datas/drz_kkj.png"),
              },
              {
                name: "威信科技",
                src: require("@/assets/img/datas/drz_wxkj.png"),
              },
              {
                name: "卓然睿和自动化",
                src: require("@/assets/img/datas/drz_zr.png"),
              },
              {
                name: "EOPLE",
                src: require("@/assets/img/datas/drz_eople.png"),
              },
              {
                name: "格瑞智慧能源",
                src: require("@/assets/img/datas/drz_gr.png"),
              },
              {
                name: "思码软件",
                src: require("@/assets/img/datas/drz_smrj.png"),
              },
            ],
          }
        }
      ],
      centerDatasList: [
        {
          name: "企业总数",
          val: 1368,
        },
        {
          name: "商家总数",
          val: 196,
        },
        {
          name: "员工总数",
          val: 32856,
        },
        {
          name: "访客总数",
          val: 289,
        },
      ],
    };
  },
  components: {},
  created () {
    this.$store.commit('SET_CENTERDATAS', [true, JSON.stringify(this.centerDatasList)])
  },
  mounted () {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
</style>
