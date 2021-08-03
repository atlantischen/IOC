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
  name: "attractInvestmentBDA",
  components: {},
  data() {
    return {
      // 左侧组件info
      leftInfo: [
        {
          title: "招商类型",
          type: "focusIndustry",
          datas: {
            eHeight: 280,
            keyD: {
              name: "园区租用率",
              value: "87%",
            },
            optionName: [
              "零售商家",
              "信息技术",
              "智能制造",
              "生物医药",
              "新材料",
              "新能源",
              "环保",
              "其他",
            ],
            datas: [32, 19, 12, 10, 8, 7, 5, 7],
          },
        },
        {
          title: "招商情况",
          type: "InvestmentSituation",
          datas: {
            smooth: false,
            names: ["今年", "去年"],
            unit: ["", "个"],
            // xData: [
            //   "1月",
            //   "2月",
            //   "3月",
            //   "4月",
            //   "5月",
            //   "6月",
            //   "7月",
            //   "8月",
            //   "9月",
            //   "10月",
            //   "11月",
            //   "12月",
            // ],
            xData: this.$monthRangeArr(),
            datas: [
              [20, 22, 23, 30, 32, 35, 37, 40, 47, 48, 46, 42],
              [17, 17, 18, 19, 20, 22, 23, 25, 26, 27, 29, 32],
            ],
          },
        },
      ],
      rightInfo: [
        {
          title: "已入驻企业商家",
          type: "companiesList",
          datas: {
            listCols: 4,
            companiesImgsListDatas: [
              {
                name: "源生态",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_yst.png"),
              },
              {
                name: "泓枫科技",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_hfkj.png"),
              },
              {
                name: "康尼",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_kn.png"),
              },
              {
                name: "诺盾影视",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_ndys.png"),
              },
              {
                name: "钞惠算",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_chs.png"),
              },
              {
                name: "果然鲜",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_grx.png"),
              },
              {
                name: "金砖科贸",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_jzkm.png"),
              },
              {
                name: "裕鼎鲜",
                comType: "",
                inDate: "2021年4月14日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_ydx.png"),
              },
              {
                name: "宋医生动物医院",
                comType: "生物科技",
                inDate: "2021年3月13日",
                comInfo:
                  "宋医生动物医院早期创立于2009年10月，人员最齐，设备最先进，环境最好的综合性动物医院之一，提供宠物专家医师诊疗、美容洗澡SPA、萌宠活体销售、宠物健康食品用品、国内外全托式托运服务及宠物酒店式寄养等全天候全方位化服务。",
                src: require("@/assets/img/datas/qy_sysdwyy.png"),
              },
              {
                name: "荣和堂",
                comType: "食品制造",
                inDate: "2021年1月23日",
                comInfo:
                  "荣和堂健康食品(上海)有限公司成立于2005年02月02日，法定代表人为章荣伟。经营范围包括生产罐头（其他罐头）、水产加工品（干制水产品）、其他食品（燕窝），销售自产产品；食用农产品（粮食、棉花除外）、预包装食品（含冷冻冷藏，不含熟食卤味）批发（不涉及国营贸易管理商品，涉及配额许可证管理商品、专项规定管理的商品按国家有关规定办理）",
                src: require("@/assets/img/datas/qy_rht.png"),
              },
              {
                name: "华为技术有限公司",
                comType: "计算机、通信和其他电子设备制造业",
                inDate: "2021年5月12日",
                comInfo:
                  "华为技术有限公司成立于1987年09月15日，法定代表人为赵明路。经营范围包括一般经营项目是：程控交换机、传输设备、数据通信设备、宽带多媒体设备、电源、无线通信设备、微电子产品、软件、系统集成工程、计算机及配套设备、终端设备及相关通信信息产品、数据中心机房基础设施及配套产品（含供配电、空调制冷设备、智能管理监控等）的开发、生产、销售、技术服务、工程安装、维修、咨询、代理、租赁；信息系统设计、集成、运行维护；集成电路设计、研发；统一通信及协作类产品，服务器及配套软硬件产品，存储设备及相关软件的研发、生产、销售等。",
                src: require("@/assets/img/datas/qy_huawei.png"),
              },
              {
                name: "夏商国旅",
                comType: "",
                inDate: "2021年5月12日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_xszg.png"),
              },
              {
                name: "拉佤布傣",
                comType: "",
                inDate: "2021年5月12日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_lwbt.png"),
              },
              {
                name: "安吉快运",
                comType: "",
                inDate: "2021年5月12日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_ajky.png"),
              },
              {
                name: "可爱贴",
                comType: "",
                inDate: "2021年5月12日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_akt.png"),
              },
              {
                name: "江南城",
                comType: "",
                inDate: "2021年5月12日",
                comInfo: "",
                src: require("@/assets/img/datas/qy_jnc.png"),
              },
              // {
              //   name: "阿桂嫂",
              //   comType: "餐饮业",
              //   inDate: "2021年2月11日",
              //   comInfo:
              //     "阿桂嫂米线店成立于2021年01月08日，法定代表人为陈根娣。经营范围包括许可项目：餐饮服务；食品经营",
              //   src: require("@/assets/img/datas/qy_ags.png"),
              // },
              // {
              //   name: "厨房里",
              //   comType: "餐饮业",
              //   inDate: "2021年3月10日",
              //   comInfo:
              //     "创立于2009年10月，许可经营项目：小吃店服务，不含凉菜、不含裱花蛋糕、不含生食海产品。",
              //   src: require("@/assets/img/datas/qy_cfl.png"),
              // },
              // {
              //   name: "法诺食品有限公司",
              //   comType: "批发业",
              //   inDate: "2021年4月17日",
              //   comInfo:
              //     "法诺食品有限公司成立于2020年09月10日,法定代表人为周红霞。经营范围包括许可项目：食品经营（销售预包装食品）；食品互联网销售（销售预包装食品）；食品互联网销售；进出口代理；食品经营（销售散装食品）（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准） 一般项目：互联网销售（除销售需要许可的商品）；日用品销售；日用百货销售；电子产品销售；化妆品批发；化妆品零售；日用杂品销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；信息技术咨询服务；机械设备销售；包装材料及制品销售",
              //   src: require("@/assets/img/datas/qy_fn.png"),
              // },
              // {
              //   name: "肯德基有限公司",
              //   comType: "餐饮业",
              //   inDate: "2021年6月12日",
              //   comInfo:
              //     "成立于1987年02月06日，法定代表人为屈翠容。经营范围包括中西餐饮服务；制作餐厅食品和冷热饮料；销售食品。",
              //   src: require("@/assets/img/datas/qy_kfc.png"),
              // },
              // {
              //   name: "朝延喜茶",
              //   comType: "商务服务业",
              //   inDate: "2021年4月14日",
              //   comInfo:
              //     "朝延喜茶成立于2021年2月28日，法定代表人为聂云宸。经营范围包括一般经营项目是：为餐饮企业提供管理服务（不含直接经营餐饮项目）。",
              //   src: require("@/assets/img/datas/qy_cyxc.png"),
              // },
            ],
          },
        },
        {
          title: "待入驻企业商家",
          type: "enterprisesSettled",
          datas: {
            enterprisesListDatas: [
              {
                name: "家集美",
                src: require("@/assets/img/datas/drz_jjm.png"),
              },
              {
                name: "易宝养生",
                src: require("@/assets/img/datas/drz_ybys.png"),
              },
              {
                name: "梦科科技",
                src: require("@/assets/img/datas/drz_mkkj.png"),
              },
              {
                name: "王先生",
                src: require("@/assets/img/datas/drz_wxs.png"),
              },
              {
                name: "GYMNIC",
                src: require("@/assets/img/datas/drz_gymnic.png"),
              },
              {
                name: "护理工作室",
                src: require("@/assets/img/datas/drz_seso.png"),
              },
              {
                name: "mos",
                src: require("@/assets/img/datas/drz_mos.png"),
              },
              {
                name: "碧尔",
                src: require("@/assets/img/datas/drz_br.png"),
              },
              {
                name: "发阳",
                src: require("@/assets/img/datas/drz_fy.png"),
              },
              {
                name: "syonix",
                src: require("@/assets/img/datas/drz_syonix.png"),
              },
              {
                name: "Hiknow",
                src: require("@/assets/img/datas/drz_hknow.png"),
              },
              {
                name: "趣生活",
                src: require("@/assets/img/datas/drz_qsh.png"),
              },
              //
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
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
