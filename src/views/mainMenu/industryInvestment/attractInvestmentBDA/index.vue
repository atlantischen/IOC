<template>
  <!-- 招商大数据分析 -->
  <div class="attractInvestmentBDA">
    <LeftRight>
      <template #left>
        <Allcom :_Info="leftInfo" />
      </template>
      <template #center> </template>
      <template #right>
        <Allcom :_Info="rightInfo" />
      </template>
    </LeftRight>
  </div>
</template>

<script>
export default {
  name: 'attractInvestmentBDA',
  components: {},
  data () {
    return {
      // 左侧组件info
      leftInfo: [
        {
          title: '招商类型',
          type: 'focusIndustry',
          datas: {
            eHeight: 280,
            keyD: {
              name: '园区租用率',
              value: '87%',
            },
            optionName: [
              "零售商家",
              "信息技术",
              "智能制造",
              "生物医药",
              "新材料",
              "新能源",
              "环保",
              "其他"
            ],
            datas: [32, 19, 12, 10, 8, 7, 5, 7]
          }
        },
        {
          title: '招商情况',
          type: 'InvestmentSituation',
          datas: {
            smooth: false,
            names: ["今年", "去年"],
            unit: ["", "个"],
            xData: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            datas: [
              [20, 22, 23, 30, 32, 35, 37, 40, 47, 48, 46, 42],
              [17, 17, 18, 19, 20, 22, 23, 25, 26, 27, 29, 32],
            ],
          }
        },
      ],
      rightInfo: [
        {
          title: '已入驻企业商家',
          type: 'companiesList',
          datas: {
            listCols: 4,
            companiesImgsListDatas: [
              {
                name: "宋医生动物医院",
                src: require("@/assets/img/datas/qy_sysdwyy.png"),
              },
              {
                name: "荣和堂",
                src: require("@/assets/img/datas/qy_rht.png"),
              },
              {
                name: "HUAWEI",
                src: require("@/assets/img/datas/qy_huawei.png"),
              },
              {
                name: "阿桂嫂",
                src: require("@/assets/img/datas/qy_ags.png"),
              },
              {
                name: "厨房里",
                src: require("@/assets/img/datas/qy_cfl.png"),
              },
              {
                name: "法诺",
                src: require("@/assets/img/datas/qy_fn.png"),
              },
              {
                name: "KFC",
                src: require("@/assets/img/datas/qy_kfc.png"),
              },
              {
                name: "朝延喜茶",
                src: require("@/assets/img/datas/qy_cyxc.png"),
              }
            ],
          }
        },
        {
          title: '待入驻企业商家',
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
              }
            ],
          }
        }
      ],
    }
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
</style>
