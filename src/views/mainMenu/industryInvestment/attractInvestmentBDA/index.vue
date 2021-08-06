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
          type: "companiesList2",
          datas: {
            listCols: 4,
            companiesImgsListDatas: [
              {
                name: "源生态",
                comType: "技术研发",
                inDate: "2021年3月25日",
                comInfo:
                  "广东源生态环保工程有限公司的主要业务为环保工程总承包、环保工程设计、建设项目环境影响评价、环境治理设施运营、环保技术研发，建设项目环保验收以及环保设备的研发、制作、销售。",
                src: require("@/assets/img/datas/qy_yst.png"),
              },
              {
                name: "泓枫科技",
                comType: "生产业",
                inDate: "2021年1月23日",
                comInfo:
                  "深圳市泓枫科技有限公司为客户提供好的产品和技术支持、健全的售后服务，我公司主要经营金属材料、钢材、板材、纸制品、纺织品、塑胶制品、包装材料、电脑及周边配件、通讯产品、机械设备的技术研发与销售；家用电器的销售。",
                src: require("@/assets/img/datas/qy_hfkj.png"),
              },
              {
                name: "康尼",
                comType: "铁路行业",
                inDate: "2021年2月26日",
                comInfo:
                  "康尼电子科技有限公司，从事工业自动化产品的研发与产业化。产品包括轨道车辆电子门控器和交流伺服系统等。具有完整的质量保证体系，通过了ISO-9001 质量管理体系认证、ISO-14001 环境管理体系认证、OHSAS-18001职业健康安全管理体系认证、IRIS 国际铁路行业标准认证、CMMI L3能力成熟度模型集成3级。",
                src: require("@/assets/img/datas/qy_kn.png"),
              },
              {
                name: "诺盾影视",
                comType: "开发制作",
                inDate: "2021年1月24日",
                comInfo:
                  "深圳市诺盾影视传媒有限公司是一家致力于开发制作和拥有出版级数字录音棚、原创音乐编曲、数字音频培训、摄影摄像、非线性视频编辑为一体的优质影音制作中心。公司拥有行业内顶级艺术总监、资深音乐人、摄像师、电台主持人、录音师、编曲及策划团队。 此外，在构建资源整合平台和实现出版级音乐作品产业化方面，也取得了长足的进展。随着影视艺术的爆发，以及国家政策对于文化事业的重视，丙D也以一种全新的运营模式进行着飞跃式的发展。",
                src: require("@/assets/img/datas/qy_ndys.png"),
              },
              {
                name: "钞惠算",
                comType: "金融",
                inDate: "2021年2月29日",
                comInfo:
                  "深圳钞惠算代理记账有限公司主要经营代理记账；工商登记代理服务；企业管理咨询；市场调查；企业形象策划；会议及展览服务；汽车租赁；房产中介服务；国内广告业务；批发、零售：电子产品、机械设备、办公用品、计算机、计算机软件及辅助设备。",
                src: require("@/assets/img/datas/qy_chs.png"),
              },
              {
                name: "果然鲜",
                comType: "食品",
                inDate: "2021年4月14日",
                comInfo:
                  "深圳市果然鲜果品有限公司是一家响应国家政策以农超对接为主的农副产品贸易公司，一家专业打造水果专卖的连锁经营企业，在国内拥有多个果品生产基地的水果专卖连锁奇特，公司以最新鲜的品质保证，无可比拟的价格优势，专业配送服务让果然鲜迅速遍布深圳市，以诚信展望未来，果然鲜始终把质量第一 作为公司的宗旨，使您在第一时间品尝到最优质最新鲜的水果。",
                src: require("@/assets/img/datas/qy_grx.png"),
              },
              {
                name: "金砖科贸",
                comType: "研发",
                inDate: "2020年8月26日",
                comInfo:
                  "金钻科贸有限公司 成立于2003年是专注于新妈妈的健康护理及儿童相关产品研究、开发、生产和销售的专业公司。公司专业从事新生儿至幼儿期多系列产品的研发与推广，以提高中国儿童的智力与体质为己任。儿童的健康是民族的健康、国家的健康，公司将在政府权威机构、儿童专业协会的支持和指导下，通过与多家国际儿童用品研发机构、儿童教育机构合作，密切关注国外儿童教育和儿童健康的相关动向，将符合中国儿童具体情况的先进理念和系列产品推荐上市。",
                src: require("@/assets/img/datas/qy_jzkm.png"),
              },
              {
                name: "裕鼎鲜",
                comType: "食品",
                inDate: "2020年12月04日",
                comInfo:
                  "裕鼎鲜餐饮文化有限公司于2015年05月28日成立。公司经营范围包括餐饮文化交流。中餐类制售。酒、饮料零售。食品加工技术咨询等。",
                src: require("@/assets/img/datas/qy_ydx.png"),
              },
              {
                name: "宋医生动物医院",
                comType: "生物科技",
                inDate: "2021年6月12日",
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
                comType: "旅游业",
                inDate: "2021年5月11日",
                comInfo:
                  "厦门夏商国际旅行社有限公司经营范围包括：国内旅游业务；入境旅游业务；出境旅游业务；代理销售保险产品；代理收取保险费；自有房地产经营活动；娱乐及体育设备出租；其他日用品出租",
                src: require("@/assets/img/datas/qy_xszg.png"),
              },
              {
                name: "拉佤布傣",
                comType: "制造业",
                inDate: "2021年7月04日",
                comInfo:
                  "拉佤布傣是丰华茶业于2008年注册的独立品牌，于2015年完成品牌升级，现由双江勐库丰华茶业厂部负责产品生产，昆明康乐茶文化城拉佤布傣全国营销中心负责营销运营",
                src: require("@/assets/img/datas/qy_lwbt.png"),
              },
              {
                name: "安吉快运",
                comType: "服务业",
                inDate: "2021年2月18日",
                comInfo:
                  "安吉快运有限公司是上汽安吉物流旗下的全资子公司，隶属于上汽集团。是从事中大票零担业务为主的网络型物流供应链一体化服务公司。",
                src: require("@/assets/img/datas/qy_ajky.png"),
              },
              {
                name: "可爱贴",
                comType: "技术研发",
                inDate: "2021年1月22日",
                comInfo:
                  "深圳市爱可贴科技有限公司成立于2003年，总部位于香港，是一家以高新技术开发为后盾，集设计、研发、生产、销售为一体的技术型公司。KO（可欧）为公司注册的品牌商标，产品包括MP5、游戏机、小音箱、MID平板电脑、视频扩音器、移动电源等，其中平板电脑为主打产品。公司从事数码产品的设计、研发、模具、结构、原料、贴片、组装和质检等业务。",
                src: require("@/assets/img/datas/qy_akt.png"),
              },
              {
                name: "江南城",
                comType: "房地产",
                inDate: "2021年4月28日",
                comInfo:
                  "江南城置业顾问有限公司成立于2014年11月04日，主要经营范围为房地产经纪、房屋租赁服务等业务。",
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
