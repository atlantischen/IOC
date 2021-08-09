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
            selectedNum2: 0,
            buldingList: [
              {
                bulding: "1期",
                id: 1,
                nums: [
                  {
                    name: "A座",
                    buildings: [
                      {
                        name: "万劲科技",
                        comType: "批发和零售业",
                        inDate: "2021年1月23日",
                        comInfo:
                          "深圳市万劲科技有限公司，于2012-04-06在中国 广东 深圳注册成立，属于批发和零售业，主营行业为批发和零售业，我公司以生产加工的模式经营，加工方式为来料加工,OEM加工,来样加工,ODM加工,来料代工加工,来图加工,其他,手工加工，加工工艺为其他照明加工工艺，服务领域为电子; 通信; 礼品工艺品; 纺织皮革; 玩具; 数码家电; 其它，员工人数101 - 200 人，注册资本50万元。深圳市万劲科技有限公司办公地址为深圳市宝安区沙井街道西环路沙一新村82号2楼201（办公场所），如果您对我们的产品、技术或服务有兴趣，随时欢迎您的来电或上门咨询。",
                        src: require("@/assets/img/datas/qy_wjkj.png"),
                      },
                      {
                        name: "鹄跃电子",
                        comType: "制造业",
                        inDate: "2021年2月34日",
                        comInfo:
                          "鹄跃电子科技（深圳）有限公司是专门从事工业自动化控制产品的研发、生产和销售的高新技术企业，主要产品包括20V~60V低压交流伺服、220V交流伺服以及配套的永磁同步电机等。服务的行业涵盖了装备制造业、节能环保、新能源三大领域，产品广泛应用于物流、机床、电线、电缆、塑胶、印刷包装、纺织化纤、建材、冶金、煤矿、市政、汽车、医疗等行业。",
                        src: require("@/assets/img/datas/qy_hydz.png"),
                      },
                      {
                        name: "瑞晨环保",
                        comType: "制造业",
                        inDate: "2021年1月27日",
                        comInfo:
                          "深圳瑞晨环保科技股份有限公司是一家节能环保领域的高科技公司。公司专注于流体输送(水泵、风机)、精控燃烧、高效换热等领域的高新技术研发、节能产品设计、生产，并提供专业技术改造服务，为用户提供专业的综合节能解决方案。",
                        src: require("@/assets/img/datas/qy_rchb.png"),
                      },
                      {
                        name: "祥利科技",
                        comType: "制造业",
                        inDate: "2021年2月29日",
                        comInfo:
                          "祥利科技有限公司主要研发和生产:辐照交联低烟无卤阻燃聚烯烃、光伏用低烟无卤聚烯烃、硅烷交联低烟无卤阻燃聚烯烃、热塑性低烟无卤阻燃聚烯烃、UL标准PVC电缆料、PVC弹性体和丁腈复合物、PVC耐寒料等多个产品系列。可为电线电缆、通讯、轨道交通、船舶、汽车、风力和光伏等多个领域提供专业的改性塑料解决方案。多项产品符合ROHS、REACH、UL、FDA等相关要求。",
                        src: require("@/assets/img/datas/qy_xlkj.png"),
                      },
                    ],
                  },
                  {
                    name: "B座",
                    buildings: [
                      {
                        name: "升华集团",
                        comType: "制造业",
                        inDate: "2021年4月12日",
                        comInfo:
                          "升华集团是一家集智能制造、物贸流通、金融科技、矿业开发、股权投资等五大支柱型产业板块的国家级大型控股企业集团",
                        src: require("@/assets/img/datas/qy_shjt.png"),
                      }, {
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
                    ],
                  },
                  {
                    name: "C座",
                    buildings: [
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
                      }, {
                        name: "诺盾影视",
                        comType: "开发制作",
                        inDate: "2021年1月24日",
                        comInfo:
                          "深圳市诺盾影视传媒有限公司是一家致力于开发制作和拥有出版级数字录音棚、原创音乐编曲、数字音频培训、摄影摄像、非线性视频编辑为一体的优质影音制作中心。公司拥有行业内顶级艺术总监、资深音乐人、摄像师、电台主持人、录音师、编曲及策划团队。 此外，在构建资源整合平台和实现出版级音乐作品产业化方面，也取得了长足的进展。随着影视艺术的爆发，以及国家政策对于文化事业的重视，丙D也以一种全新的运营模式进行着飞跃式的发展。",
                        src: require("@/assets/img/datas/qy_ndys.png"),
                      },
                    ],
                  },
                ],
              },
              {
                bulding: "2期",
                id: 2,
                nums: [
                  {
                    name: "A座",
                    buildings: [{
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
                    ],
                  },
                  {
                    name: "B座",
                    buildings: [
              {
                name: "朝延喜茶",
                comType: "商务服务业",
                inDate: "2021年4月14日",
                comInfo:
                  "朝延喜茶成立于2021年2月28日，法定代表人为聂云宸。经营范围包括一般经营项目是：为餐饮企业提供管理服务（不含直接经营餐饮项目）。",
                src: require("@/assets/img/datas/qy_cyxc.png"),
              },
              //
              {
                name: "祥利科技",
                comType: "制造业",
                inDate: "2021年2月29日",
                comInfo:
                  "祥利科技有限公司主要研发和生产:辐照交联低烟无卤阻燃聚烯烃、光伏用低烟无卤聚烯烃、硅烷交联低烟无卤阻燃聚烯烃、热塑性低烟无卤阻燃聚烯烃、UL标准PVC电缆料、PVC弹性体和丁腈复合物、PVC耐寒料等多个产品系列。可为电线电缆、通讯、轨道交通、船舶、汽车、风力和光伏等多个领域提供专业的改性塑料解决方案。多项产品符合ROHS、REACH、UL、FDA等相关要求。",
                src: require("@/assets/img/datas/qy_xlkj.png"),
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
                    ],
                  },
                  {
                    name: "C座",
                    buildings: [
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
                    ],
                  },
                ],
              },
              {
                bulding: "3期",
                id: 3,
                nums: [
                  {
                    name: "A座",
                    buildings: [
                      {
                        name: "中国建设银行",
                        comType: "生物科技",
                        inDate: "2021年3月13日",
                        comInfo:
                          "成立于1954年10月1日的中国人民建设银行（后于1996年3月26日正式更名为中国建设银行）。总行位于北京金融大街25号，是中央管理的大型国有银行，国家副部级单位。 中国建设银行主要经营领域包括公司银行业务、个人银行业务和资金业务，在29个国家和地区设有分支机构及子公司，拥有基金、租赁、信托、人寿、财险、投行、期货、养老金等多个行业的子公司。",
                        src: require("@/assets/img/datas/qy_zgjsyh.png"),
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
                  {
                    name: "B座",
                    buildings: [
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
                    ],
                  },
                  {
                    name: "C座",
                    buildings: [
                      {
                        name: "阿桂嫂",
                        comType: "餐饮业",
                        inDate: "2021年2月11日",
                        comInfo:
                          "阿桂嫂米线店成立于2021年01月08日，法定代表人为陈根娣。经营范围包括许可项目：餐饮服务；食品经营",
                        src: require("@/assets/img/datas/qy_ags.png"),
                      },
                      {
                        name: "厨房里",
                        comType: "餐饮业",
                        inDate: "2021年3月10日",
                        comInfo:
                          "创立于2009年10月，许可经营项目：小吃店服务，不含凉菜、不含裱花蛋糕、不含生食海产品。",
                        src: require("@/assets/img/datas/qy_cfl.png"),
                      },
                      {
                        name: "法诺食品有限公司",
                        comType: "批发业",
                        inDate: "2021年4月17日",
                        comInfo:
                          "法诺食品有限公司成立于2020年09月10日,法定代表人为周红霞。经营范围包括许可项目：食品经营（销售预包装食品）；食品互联网销售（销售预包装食品）；食品互联网销售；进出口代理；食品经营（销售散装食品）（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准） 一般项目：互联网销售（除销售需要许可的商品）；日用品销售；日用百货销售；电子产品销售；化妆品批发；化妆品零售；日用杂品销售；技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；信息技术咨询服务；机械设备销售；包装材料及制品销售",
                        src: require("@/assets/img/datas/qy_fn.png"),
                      },
                      {
                        name: "肯德基有限公司",
                        comType: "餐饮业",
                        inDate: "2021年6月12日",
                        comInfo:
                          "成立于1987年02月06日，法定代表人为屈翠容。经营范围包括中西餐饮服务；制作餐厅食品和冷热饮料；销售食品。",
                        src: require("@/assets/img/datas/qy_kfc.png"),
                      },
                    ],
                  },
                ],
              },
            ],
            companiesImgsListDatas: [
              {
                name: "万劲科技",
                comType: "批发和零售业",
                inDate: "2021年1月23日",
                comInfo:
                  "深圳市万劲科技有限公司，于2012-04-06在中国 广东 深圳注册成立，属于批发和零售业，主营行业为批发和零售业，我公司以生产加工的模式经营，加工方式为来料加工,OEM加工,来样加工,ODM加工,来料代工加工,来图加工,其他,手工加工，加工工艺为其他照明加工工艺，服务领域为电子; 通信; 礼品工艺品; 纺织皮革; 玩具; 数码家电; 其它，员工人数101 - 200 人，注册资本50万元。深圳市万劲科技有限公司办公地址为深圳市宝安区沙井街道西环路沙一新村82号2楼201（办公场所），如果您对我们的产品、技术或服务有兴趣，随时欢迎您的来电或上门咨询。",
                src: require("@/assets/img/datas/qy_wjkj.png"),
              },
              {
                name: "鹄跃电子",
                comType: "制造业",
                inDate: "2021年2月34日",
                comInfo:
                  "鹄跃电子科技（深圳）有限公司是专门从事工业自动化控制产品的研发、生产和销售的高新技术企业，主要产品包括20V~60V低压交流伺服、220V交流伺服以及配套的永磁同步电机等。服务的行业涵盖了装备制造业、节能环保、新能源三大领域，产品广泛应用于物流、机床、电线、电缆、塑胶、印刷包装、纺织化纤、建材、冶金、煤矿、市政、汽车、医疗等行业。",
                src: require("@/assets/img/datas/qy_hydz.png"),
              },
              {
                name: "瑞晨环保",
                comType: "制造业",
                inDate: "2021年1月27日",
                comInfo:
                  "深圳瑞晨环保科技股份有限公司是一家节能环保领域的高科技公司。公司专注于流体输送(水泵、风机)、精控燃烧、高效换热等领域的高新技术研发、节能产品设计、生产，并提供专业技术改造服务，为用户提供专业的综合节能解决方案。",
                src: require("@/assets/img/datas/qy_rchb.png"),
              },
              {
                name: "祥利科技",
                comType: "制造业",
                inDate: "2021年2月29日",
                comInfo:
                  "祥利科技有限公司主要研发和生产:辐照交联低烟无卤阻燃聚烯烃、光伏用低烟无卤聚烯烃、硅烷交联低烟无卤阻燃聚烯烃、热塑性低烟无卤阻燃聚烯烃、UL标准PVC电缆料、PVC弹性体和丁腈复合物、PVC耐寒料等多个产品系列。可为电线电缆、通讯、轨道交通、船舶、汽车、风力和光伏等多个领域提供专业的改性塑料解决方案。多项产品符合ROHS、REACH、UL、FDA等相关要求。",
                src: require("@/assets/img/datas/qy_xlkj.png"),
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
            ],
          },
        },
        {
          title: "待入驻企业",
          type: "enterprisesSettled",
          datas: {
            enterprisesListDatas: [
              {
                name: "博雅",
                src: require("@/assets/img/datas/drz_by.png"),
                comInfo:
                  "博雅公司专注于储存器产品，SPI NOR FLASH自2014年以来批量应用于客户，迄今客户使用，出货量累计超10亿颗，品质稳定可靠，客户满意度优良。 产品广泛应用于各类嵌入式系统，包括消费电子，数码产品，电脑相关，网络通信等，性能参数完全兼容全球同类知名品牌SPANSION，WINBOND，MXIC，GD等，性价比优势明显。",
              },
              {
                name: "凯朗能源科技",
                src: require("@/assets/img/datas/drz_klnykj.png"),
                comInfo:
                  "凯朗能源科技公司，是一家基于合同能源管理机制运作的、以服务企业、服务社会目的的专业化能源技术服务公司。我司与能源消耗企业签订节能服务合同，向客户提供能源审计、可行性研究、节能项目规划设计、项目融资、设备和材料采购、工程施工、人员培训、节能量监测、改造系统的运行、维护和管理等服务。",
              },
              {
                name: "必智信息",
                src: require("@/assets/img/datas/drz_bzxx.png"),
                comInfo:
                  '必智信息科技基于律师行业信息化管理15年专注研究，结合现有的300多家知名律师事务所用户的管理经验，针对新的移动互联办公趋势，利用移动互联网优势、云计算以及大数据的优点设计出的一套传承经典，结合创新的云时代律师事务所核心业务协同办公平台，为未来虚拟化办公奠定坚实的基础。律师e通与传统的律师办公管理软件相比，"人为中心"，"案件为核心"的人性化一站式一体化的平台设计理念，横向解决律师执业中的各类问题，纵向满足律师事务所的管理需求，更安全、更稳定、更易用、更高效。',
              },
              {
                name: "蓝壳科技",
                src: require("@/assets/img/datas/drz_lkkj.png"),
                comInfo:
                  "蓝壳科技有限公司是一家以互联网领域O2O平台产品研发及配套服务为主，标准化管理、快速发展的高新技术企业，拥有一整套的O2O洗衣解决方案，研发出了包括有分配格架系统、掉标统计、附件管理、岗位管理等功能在内的工厂后台管理系统以及专门设计开发了整套门店使用的后台管理系统。不管是商户还是门店都有自己独立的运营管理后台，完美解决跨店消费问题，灵活管理会员、跟踪订单流程。",
              },
              {
                name: "迪海科技",
                src: require("@/assets/img/datas/drz_dhkj.png"),
                comInfo:
                  "广东迪海信息科技有限公司于2019年04月09日成立。公司经营范围包括：安防设备、计算机设备的租赁、销售；安防工程、弱电工程、网络工程、网络综合布线工程、建筑智能化工程的设计、施工；计算机信息科技领域内的技术开发、技术咨询、技术服务、技术转让；计算机系统集成；通讯设备、电子产品的销售、安装、维修；计算机软硬件、人工智能产品、机器人、教学设备的研发、销售；货物及技术的进出口业务；家用电器、办公用品、五金交电、机电设备的销售等",
              },
              {
                name: "穆嘉科技",
                src: require("@/assets/img/datas/drz_mjkj.png"),
                comInfo:
                  "穆嘉电子科技（深圳）有限公司，国内领先的IC代理分销商，致力于恩智浦（NXP）、飞思卡尔（FREESCALE）、意法半导体（ST）、美光（MICRON）、罗姆（ROHM）、瑞萨（RENESAS ）、爱特梅尔（ATMEL）等国际知名品牌的代理及应用推广，为汽车电子，仪表，安防监控，矿井安全，工业控制等终端领域厂商提供选型，方案参考，技术咨询等专业的技术服务",
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
      centerDatasList: [
        {
          name: "企业总数",
          val: 2483,
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
    this.$store.commit("SET_CENTERDATAS", [true, this.centerDatasList]);
  },
  mounted () { },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
</style>
