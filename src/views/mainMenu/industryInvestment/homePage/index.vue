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
  data() {
    return {
      // 左侧组件info
      leftInfo: [
        {
          title: "房屋租售情况",
          type: "pieChart2",
          datas: {
            eHeight: null,
            padding: null,
            optionName: ["已售", "已租", "开放"],
            datas: [63.2, 21.5, 15.3],
            keyD: {
              value: 2483,
              name: "房源合计(套)",
            },
          },
        },
        {
          title: "优惠政策",
          type: "favorablePolicy",
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
              },
            ],
          },
        },
        {
          title: "前沿动态",
          type: "currentTrends",
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
          },
        },
      ],
      rightInfo: [
        {
          title: "聚焦产业",
          type: "FocusIndustry",
          datas: {
            eHeight: null,
            padding: null,
            keyD: {
              name: "企业合计(家)",
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
            datas: [32.05, 19.23, 12.82, 9.62, 6.41, 8.33, 5.13, 3.2, 3.21],
          },
        },
        {
          title: "企业列表",
          type: "companiesList",
          datas: {
            selectedNum: 1,
            selectedNum2: "A",
            buldingList: [
              {
                bulding: "1期",
                id: 1,
                nums: [
                  {
                    name: "A座",
                  },
                  {
                    name: "B座",
                  },
                  {
                    name: "C座",
                  },
                ],
              },
              {
                bulding: "2期",
                id: 2,
                nums: [
                  {
                    name: "A座",
                  },
                  {
                    name: "B座",
                  },
                  {
                    name: "C座",
                  },
                ],
              },
              {
                bulding: "3期",
                id: 3,
                nums: [
                  {
                    name: "A座",
                  },
                  {
                    name: "B座",
                  },
                  {
                    name: "C座",
                  },
                ],
              },
            ],
            companiesImgsListDatas: [
              {
                name: "升华集团",
                comType: "制造业",
                inDate: "2021年4月12日",
                comInfo:
                  "升华集团是一家集智能制造、物贸流通、金融科技、矿业开发、股权投资等五大支柱型产业板块的国家级大型控股企业集团",
                src: require("@/assets/img/datas/qy_shjt.png"),
              },
              {
                name: "一博科技",
                comType: "智能硬件",
                inDate: "2021年5月23日",
                comInfo:
                  "一博科技是一家专注于高速PCB设计、PCB制板、SMT焊接加工、元器件供应等服务的企业 ",
                src: require("@/assets/img/datas/qy_ybkj.png"),
              },
              {
                name: "华夏视科集团",
                comType: "生物科技",
                inDate: "2021年2月02日",
                comInfo:
                  "公司于2013年05月10日成立。法定代表人魏俊华，公司经营范围包括：一般经营项目是：从事电子科技、信息科技、通信技术等领域内的技术开发、技术咨询；汽车用品、汽摩配件、电子设备及产品、计算机、软件及辅助设备、通信设备的销售；互联网技术的研发、咨询；应用软件开发；动漫动画设计；经营电子商务；从事广告业务；文化活动策划；国内贸易等。",
                src: require("@/assets/img/datas/qy_hx.png"),
              },
              {
                name: "中国建设银行",
                comType: "生物科技",
                inDate: "2021年3月13日",
                comInfo:
                  "成立于1954年10月1日的中国人民建设银行（后于1996年3月26日正式更名为中国建设银行）。总行位于北京金融大街25号，是中央管理的大型国有银行，国家副部级单位。 中国建设银行主要经营领域包括公司银行业务、个人银行业务和资金业务，在29个国家和地区设有分支机构及子公司，拥有基金、租赁、信托、人寿、财险、投行、期货、养老金等多个行业的子公司。",
                src: require("@/assets/img/datas/qy_zgjsyh.png"),
              },
              {
                name: "升华集团",
                comType: "制造业",
                inDate: "2021年4月12日",
                comInfo:
                  "升华集团是一家集智能制造、物贸流通、金融科技、矿业开发、股权投资等五大支柱型产业板块的国家级大型控股企业集团",
                src: require("@/assets/img/datas/qy_shjt.png"),
              },
              {
                name: "一博科技",
                comType: "智能硬件",
                inDate: "2021年5月23日",
                comInfo:
                  "一博科技是一家专注于高速PCB设计、PCB制板、SMT焊接加工、元器件供应等服务的企业 ",
                src: require("@/assets/img/datas/qy_ybkj.png"),
              },
              {
                name: "华夏视科集团",
                comType: "生物科技",
                inDate: "2021年2月02日",
                comInfo:
                  "公司于2013年05月10日成立。法定代表人魏俊华，公司经营范围包括：一般经营项目是：从事电子科技、信息科技、通信技术等领域内的技术开发、技术咨询；汽车用品、汽摩配件、电子设备及产品、计算机、软件及辅助设备、通信设备的销售；互联网技术的研发、咨询；应用软件开发；动漫动画设计；经营电子商务；从事广告业务；文化活动策划；国内贸易等。",
                src: require("@/assets/img/datas/qy_hx.png"),
              },
              {
                name: "中国建设银行",
                comType: "生物科技",
                inDate: "2021年3月13日",
                comInfo:
                  "成立于1954年10月1日的中国人民建设银行（后于1996年3月26日正式更名为中国建设银行）。总行位于北京金融大街25号，是中央管理的大型国有银行，国家副部级单位。 中国建设银行主要经营领域包括公司银行业务、个人银行业务和资金业务，在29个国家和地区设有分支机构及子公司，拥有基金、租赁、信托、人寿、财险、投行、期货、养老金等多个行业的子公司。",
                src: require("@/assets/img/datas/qy_zgjsyh.png"),
              },
            ],
          },
        },
        {
          title: "待入驻企业",
          type: "enterprisesSettled",
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
          },
        },
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
  created() {
    this.$store.commit("SET_CENTERDATAS", [true, this.centerDatasList]);
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
</style>
