<template>
  <div class="container">
    <IOCLeft>
      <div class="store_type">
        <div class="tittle">商家类型占比</div>
        <div id="store" ref="store"></div>
      </div>
      <div class="store_top">
        <div class="tittle">热门商家TOP5</div>
        <div class="select">
          <DropDown :list="yearsList" name="label" @_cg="changePSYears" />
          <DropDown
            style="margin-right:30px"
            :list="flag ? momthsList : nowMomthsList"
            name="label"
            @_cg="changePSMonths"
          />
        </div>
        <div id="store_top" ref="store_top"></div>
      </div>
      <div class="store_discount">
        <div class="tittle">商家优惠信息</div>
        <div class="box">
          <ul class="outer" :class="{ 'animate-up': animateUp }">
            <li v-for="(item, index) in businessList" :key="index">
              <img :src="item.src" alt="" />
              <div class="content">
                <div class="head">【{{ item.title }}】</div>
                <div class="describe">
                  {{ item.desc }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </IOCLeft>
    <!-- <div class="box"> eqweqe</div> -->
    <IOCRight>
      <div class="store_list">
        <div class="tittle">商家列表</div>
        <div class="type">
          <span>类型：</span>
          <ul>
            <li
              class="item"
              :class="activeTypeIndex === index ? 'active' : ''"
              v-for="(item, index) in listType"
              :key="index"
              @click="typeClick('type', index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="building">
          <span>栋座：</span>
          <div>
            <ul>
              <li
                class="item"
                :class="activeBulidIndex === index ? 'active' : ''"
                v-for="(item, index) in listBuilding"
                :key="index"
                @click="typeClick('build', index)"
              >
                {{ item }}
              </li>
            </ul>
            <ul>
              <li
                class="item"
                :class="activeSeatIndex === index ? 'active' : ''"
                v-for="(item, index) in listSeat[activeBulidIndex]"
                :key="index"
                @click="typeClick('seat', index)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="store_img">
        <ul :class="{ 'animate-up': ImganimateUp }">
          <li v-for="(item, index) in imgList" :key="index">
            <img
              :src="item.imgT"
              alt=""
              @mouseenter="
                hoverItemFun($event, index, item.imgT, item.imgTDesc)
              "
              @mouseleave="leaveItemFun()"
            />
            <img
              :src="item.imgB"
              alt=""
              @mouseenter="
                hoverItemFun($event, index, item.imgB, item.imgBDesc)
              "
              @mouseleave="leaveItemFun()"
            />
          </li>
        </ul>
        <div class="litInfo" :style="returnStyle" v-if="showItem">
          <div class="litInfo_title x_c">
            <img class="litInfo_img" :src="img_src" />
            <span>{{ imgDesc.name }}</span>
          </div>
          <div class="litInfo_content">
            <p>
              <span>公司类型： </span
              ><span>
                {{ imgDesc.type }}
              </span>
            </p>
            <p>
              <span>进驻日期：</span
              ><span>
                {{ imgDesc.time }}
              </span>
            </p>
            <p>
              <span>公司简介：</span> <i>{{ imgDesc.describe }}</i>
            </p>
          </div>
        </div>
      </div>
      <div class="store_wait">
        <div class="tittle" @click="handleFullScreen">待入驻商家</div>
        <el-carousel class="swiper" indicator-position="none" :interval="3000">
          <el-carousel-item v-for="item in 4" :loop="true" :key="item">
            <ul v-show="item == 1 || item == 3">
              <li v-for="(item, index) in waitList.slice(0, 6)" :key="index">
                <img :src="item" alt="" />
              </li>
            </ul>
            <ul v-show="item == 2 || item == 4">
              <li v-for="(item, index) in waitList.slice(6, 12)" :key="index">
                <img :src="item" alt="" />
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
        <!-- <ul>

          <li v-for="(item, index) in waitList" :key="index">
            <img :src="item" alt="" />
          </li>
        </ul> -->
      </div>
    </IOCRight>
  </div>
</template>

<script>
import * as echarts from 'echarts';
// import { EleResize } from "assets/js/echarts";
export default {
  name: 'HomePage',
  data() {
    return {
      //   isShow:true,
      flag: false,
      fade: false,
      animateUp: false,
      ImganimateUp: false,
      timer: null,
      Imgtimer: null,
      businessList: [
        {
          src: require('../../../../assets/img/zgf.png'),
          title: '真功夫',
          desc: '2021.06.01-2021.08.31期间，所有菜品8折优惠。',
        },
        {
          src: require('../../../../assets/img/xbk.png'),
          title: '星巴克',
          desc:
            ' 2021年星巴克春季买一送一活动，活动时间：2021.5.12-6.15每天！下午！3:00!',
        },
        {
          src: require('../../../../assets/img/mdw.png'),
          title: '面点王',
          desc:
            '回馈新老用户，凡是在本店消费满99元可赠送20元代金券，2021.04.31前有效！',
        },
      ],
      listType: ['餐饮', '娱乐', '文化', '健康', '教育', '购物'],
      listBuilding: ['1期', '2期', '3期'],
      listSeat: [
        ['A座', 'B座', 'C座'],
        ['A座', 'B座'],
        ['A座', 'B座', 'C座', 'D座'],
      ],
      imgList: [
        {
          imgT: require('../../../../assets/img/94.png'),
          imgTDesc: {
            name: '潮煮艺',
            time: '2015年',
            type: '餐饮',
            describe:
              '广州三潮煮艺餐饮管理有限责任公司是一家通过国家AAA企业信用认证，集产品研发、生产、销售、品牌输出为一体的综合服务性餐饮企业。本着“始于客户需求，终于客户满意”的服务理念，践行“昌美食、启潮流”的理想、不断提升线上线下一体化的核心竞争力，为客户提供多元化精品创业项目。',
          },

          imgB: require('../../../../assets/img/95.png'),
          imgBDesc: {
            name: '创味来',

            time: '2016年',
            type: '餐饮',
            describe:
              '创味来烘焙餐饮有限公司为客户提供好的产品和技术支持、健全的售后服务，我公司主要经营服务：烘焙技术咨询；销售：烘焙模具；持有效审批证件从事食品流通；',
          },
        },
        {
          imgT: require('../../../../assets/img/96.png'),
          imgB: require('../../../../assets/img/97.png'),
          imgTDesc: {
            name: '椒叔先生',

            time: '2009年11月',
            type: '餐饮',
            describe:
              '椒叔先生餐饮管理有限公司以发展年轻西餐路线的餐厅，我们专注于符合广州大众化消费西餐领域，在产品、服务、餐厅风格等方面都受到广泛的认可。其产品包含七大系列：汉堡系列、炸(烤)鸡系列、披萨系列、中式快餐系列、小吃系列、时尚饮品、冰激凌系列。',
          },
          imgBDesc: {
            name: '阿桂嫂',

            time: '2009年3月',
            type: '餐饮',
            describe:
              '阿桂嫂米线也是云南米线的知名品牌，提供的多样美食产品非常具有地方特色，美味健康的同时，价格也非常实惠。',
          },
        },
        {
          imgT: require('../../../../assets/img/98.png'),
          imgB: require('../../../../assets/img/99.png'),
          imgTDesc: {
            name: '厨房里',

            time: '2016年',
            type: '餐饮',
            describe:
              '厨房里餐饮管理服务有限公司是一家专业从事食堂承包，以及粮油、副食品、农产品批发配送业务的综合性服务机构，公司经过多年的摸索与实践，不断稳步发展、改革创新，突破了传统的饭堂模式，建立了规范化、标准化的连锁经营的膳食管理服务网络。',
          },
          imgBDesc: {
            name: '法诺',

            time: '2020年',
            type: '餐饮',
            describe:
              '法诺餐饮的特点是选料广泛（如蜗牛、鹅肝都是法式菜肴中的美味）；加工精细；烹调考究，滋味有浓有淡，花色品种多。',
          },
        },
        {
          imgT: require('../../../../assets/img/100.png'),
          imgB: require('../../../../assets/img/101.png'),
          imgTDesc: {
            name: '肯德基',

            time: '2008年',
            type: '餐饮',
            describe:
              '肯德基（Kentucky Fried Chicken，肯塔基州炸鸡，简称KFC），总部美国，也是世界第二大速食及最大炸鸡连锁企业，1952年由创始人哈兰·山德士（Colonel Harland Sanders）创建， [1]  主要出售炸鸡、汉堡、薯条、盖饭、蛋挞、汽水等高热量快餐食品。',
          },
          imgBDesc: {
            name: '朝廷喜茶',

            time: '2020年',
            type: '餐饮',
            describe:
              '朝廷喜茶餐厅是食全酒美餐饮暨一尊皇牛、鲍鱼公主、潮宫、古山之后的又一新餐饮品牌，食全酒美一贯以传达健康饮食为使命，旗下所有餐厅一直采用优质食材，在烹饪过程中不使用色素和食品添加剂，为打造放心的公众餐厅尽一己之力',
          },
        },
        {
          imgT: require('../../../../assets/img/yqsy_pic1.png'),
          imgB: require('../../../../assets/img/yqsy_pic2.png'),
          imgTDesc: {
            name: '新辣道鱼火锅',

            time: '2016年',
            type: '餐饮',
            describe:
              '新辣道鱼火锅餐饮坚持以绿色、健康、营养之路，以鲜、香、嫩、爽、滑为特点的新派的鱼王锅，其味通老少，宜南北，食不上火，肯有美容养颜，开胃健脾，明目益智等功效。七秒鱼一经推出，便在餐饮界引起轰动；',
          },
          imgBDesc: {
            name: '杨记拉面',

            time: '2003年',
            type: '餐饮',
            describe:
              '杨记拉面是一种荤、素、汤、菜、饭兼而有之的传统风味小吃，以味道鲜美，经济实惠而 享誉中原，在2005年4月荣获“中原风味名吃”荣誉称号，97年12月又摘取“中华名小吃”桂冠。',
          },
        },
        {
          imgT: require('../../../../assets/img/yqsy_pic3.png'),
          imgB: require('../../../../assets/img/yqsy_pic4.png'),
          imgTDesc: {
            name: '味多美',

            time: '1996年',
            type: '餐饮',
            describe:
              '多美公司是国内著名烘焙连锁食品企业，主要经营产品包括蛋糕、面包、咖啡、中西式点心、月饼、粽子等。2010—2011年相继落户上海、河北、包头等地味多美公司旗下的“味多美”品牌定位于中高端消费者，以丰富的、高品质的产品，平民化的价格，亲切友善的服务，便利的连锁店铺，赢得了消费者的青睐。',
          },
          imgBDesc: {
            name: '稻香村',

            time: '1994年',
            type: '餐饮',
            describe:
              '稻香村糕点生产历史悠久，是传统手工糕点制作的典型代表，以色香味美闻名于世，有“南味坊”之称，是保定糕点文化、技艺与传承的集大成者。手工工序的细腻程度和要求之高，是其他糕点生产难以比拟的。这些手工技艺是保定稻香村糕点技师百年的智慧结晶，且难以为现代技术所替代。“沉浸浓郁、含英咀华”为其精髓内核。保定稻香村将文人读书之道用于产品制作，体现出保定稻香村产品品位和格调之高。',
          },
        },
        {
          imgT: require('../../../../assets/img/yqsy_pic15.png'),
          imgB: require('../../../../assets/img/yqsy_pic6.png'),
          imgTDesc: {
            name: '正一味',

            time: '1999年',
            type: '餐饮',
            describe:
              '正一味快餐管理有限公司。作为目前大陆地区领先的韩式餐饮连锁品牌，始终坚持着“健康,诚信”的经营理念，以美味高品质的产品，稳定优质的服务、时尚休闲的就餐环境,全心全意为顾客营造全新的用餐体验。',
          },
          imgBDesc: {
            name: '皇城老妈',

            time: '1986年',
            type: '餐饮',
            describe:
              '皇城老妈是四川火锅的著名品牌，开业十余年来，以浓郁的川蜀文化风韵、优质的服务、精美丰盛的菜品和勇于创新的文化经营个性，赢得了顾客的青睐。皇城老妈吸取蜀汉遗韵和川中浓郁的民间风貌，以现代手法，整合、营造出精美大气而别具特色的文化氛围。收藏往昔美好，追忆似水流年，凸现出更具时代特色的就餐空间。',
          },
        },
        {
          imgT: require('../../../../assets/img/yqsy_pic7.png'),
          imgB: require('../../../../assets/img/yqsy_pic8.png'),
          imgTDesc: {
            name: '小尾羊',

            time: '2012年3月',
            type: '餐饮',
            describe:
              '深圳小尾羊食品有限公司是内蒙古小尾羊牧业科技股份有限公司下属的全资子公司。公司主营肉食品加工、调味品生产、物流配送、市场销售、肉业直营店连锁等业务。',
          },
          imgBDesc: {
            name: '辣舌',

            time: '2005年',
            type: '餐饮',
            describe:
              '辣舌餐饮是一家以绿色、健康、营养之路，以家乡特色菜为主的餐厅',
          },
        },
      ],
      imgDesc: '',
      waitList: [
        require('../../../../assets/img/r1.png'),
        require('../../../../assets/img/r2.png'),
        require('../../../../assets/img/r3.png'),
        require('../../../../assets/img/r4.png'),
        require('../../../../assets/img/r5.png'),
        require('../../../../assets/img/r6.png'),
        require('../../../../assets/img/yqsy_pic9.png'),
        require('../../../../assets/img/yqsy_pic10.png'),
        require('../../../../assets/img/yqsy_pic11.png'),
        require('../../../../assets/img/yqsy_pic12.png'),
        require('../../../../assets/img/yqsy_pic13.png'),
        require('../../../../assets/img/yqsy_pic14.png'),
      ],
      yearsList: [
        {
          label: '2021',
          value: 2021,
        },
        {
          label: '2020',
          value: 2020,
        },
        {
          label: '2019',
          value: 2019,
        },
      ],
      momthsList: [
        {
          label: '12月',
          value: 12,
        },
        {
          label: '11月',
          value: 11,
        },
        {
          label: '10月',
          value: 10,
        },
        {
          label: '9月',
          value: 9,
        },
        {
          label: '8月',
          value: 8,
        },
        {
          label: '7月',
          value: 7,
        },
        {
          label: '6月',
          value: 6,
        },
        {
          label: '5月',
          value: 5,
        },
        {
          label: '4月',
          value: 4,
        },
        {
          label: '3月',
          value: 3,
        },
        {
          label: '2月',
          value: 2,
        },
        {
          label: '1月',
          value: 1,
        },
      ],
      nowMomthsList: this.$monthRangeArrList(),
      activeTypeIndex: 0,
      activeBulidIndex: 0,
      activeSeatIndex: 0,
      returnStyle: '',
      showItem: false,
      img_src: '',
    };
  },

  methods: {
    typeClick(type, i) {
      if (type == 'type') {
        this.activeTypeIndex = i;
      } else if (type == 'build') {
        this.activeBulidIndex = i;
      } else {
        this.activeSeatIndex = i;
      }
    },
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.businessList.push(this.businessList[0]);
        this.businessList.shift();
        this.animateUp = false;
      }, 500);
    },
    scrollAnimateImg() {
      this.ImganimateUp = true;
      setTimeout(() => {
        this.imgList.push(this.imgList[0]);
        this.imgList.shift();
        this.ImganimateUp = false;
      }, 500);
    },
    changePSMonths(val) {
      switch (val) {
        case 12:
          this.AssetsAndEquipment({
            max: 30000,
            data: [20200, 19400, 21000, 22300, 23600],
          });
          break;
        case 11:
          this.AssetsAndEquipment({
            max: 25000,
            data: [19400, 18400, 17400, 16400, 15400],
          });
          break;
        case 10:
          this.AssetsAndEquipment({
            max: 20000,
            data: [16500, 14300, 15500, 13600, 14600],
          });
        case 9:
          this.AssetsAndEquipment({
            max: 30000,
            data: [20200, 19400, 21000, 22300, 23600],
          });
          break;
        case 8:
          this.AssetsAndEquipment({
            max: 25000,
            data: [9400, 6400, 7400, 5400, 9400],
          });
          break;
        case 7:
          this.AssetsAndEquipment({
            max: 20000,
            data: [16500, 14300, 15500, 13600, 14600],
          });
        case 6:
          this.AssetsAndEquipment({
            max: 20000,
            data: [16500, 14300, 15500, 13600, 14600],
          });
        case 5:
          this.AssetsAndEquipment({
            max: 30000,
            data: [20200, 19400, 21000, 22300, 23600],
          });
          break;
        case 4:
          this.AssetsAndEquipment({
            max: 25000,
            data: [19400, 18400, 17400, 16400, 15400],
          });
          break;
        case 3:
          this.AssetsAndEquipment({
            max: 20000,
            data: [16500, 14300, 15500, 13600, 14600],
          });
        case 2:
          this.AssetsAndEquipment({
            max: 30000,
            data: [20200, 19400, 21000, 22300, 23600],
          });
          break;
        case 1:
          this.AssetsAndEquipment({
            max: 25000,
            data: [19400, 18400, 17400, 16400, 15400],
          });
          break;
        default:
          break;
      }
    },
    changePSYears(val) {
      switch (val) {
        case 2021:
          this.AssetsAndEquipment({
            max: 30000,
            data: [20200, 19400, 21000, 22300, 23600],
          });
          this.flag = false;
          break;
        case 2020:
          this.AssetsAndEquipment({
            max: 25000,
            data: [19400, 18400, 17400, 16400, 15400],
          });
          this.flag = true;

          break;
        case 2019:
          this.AssetsAndEquipment({
            max: 20000,
            data: [16500, 14300, 15500, 13600, 14600],
          });
          this.flag = true;

          break;
        default:
          break;
      }
    },

    meetEchartInit() {
      var dom = this.$refs['store'];
      var data = [29.09, 12.73, 25.45, 14.55, 10.91, 7.27];
      var lable = ['餐饮', '健康', '娱乐', '教育', '文化', '购物'];
      var option = {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          borderColor: '#4396f3',
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          //  formatter:'{b} : {d}%',
          formatter: function(param) {
            return (
              param.marker + param.name + '：' + param.value / 100 + '%<br>'
            );
          },
        },
        labelLine: {
          show: false,
        },
        color: [
          '#457EF3',
          '#CED392',
          '#08E2FF',
          '#CD9A57',
          '#46BDEF',
          '#95C7FF',
        ],
        legend: {
          orient: 'horizontal',
          top: 28,
          color: '#fff',
          width: '60%',
          left: 150,
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 8,
          itemGap: 20,
          textStyle: {
            //图例文字的样式
            color: '#fff',
            fontSize: 12,
            opacity: 0.7,
          },
          formatter: function(name) {
            var i = 0;
            i += 1;
            return name + '  ' + data[lable.indexOf(name)] + '%';
          },
          data: lable,
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '80%',
            center: ['20%', '50%'],
            label: {
              normal: {
                position: 'inner',
                show: false,
              },
            },
            data: [
              { value: 2909, name: '餐饮' },
              { value: 1273, name: '健康' },
              { value: 2545, name: '娱乐' },
              { value: 1455, name: '教育' },
              { value: 1091, name: '文化' },
              { value: 727, name: '购物' },
            ],
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    AssetsAndEquipment(val) {
      const { max, data } = val;
      var dom = this.$refs['store_top'];
      var option = {
        title: {
          text: '',
          // subtext: '会议数',
          subtextStyle: {
            color: '#fff',
          },
          textStyle: {
            color: '#fff',
          },
        },
        grid: {
          top: '30',
          left: '30',
          right: '30',
          bottom: '-10',
          containLabel: true,
        },
        tooltip: {
          // show: false,
          trigger: 'axis',
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderWidth: 1,
          borderColor: '#4396f3',
          padding: [5, 10],
          extraCssText: 'box-shadow:inset 0 0 8px rgba(67, 149, 243, 0.6);',
          axisPointer: {
            lineStyle: {
              color: 'transparent',
            },
          },
        },
        xAxis: [
          {
            name: '',
            type: 'category',
            data: ['纵横影院', '嘉旺快餐', '星巴克', '麦当劳', '面点王'],
            axisLine: {
              lineStyle: {
                width: 0,
                color: '#fff',
              },
            },
            axisLabel: {
              interval: 0,
              // rotate: 40,
              textStyle: '#fff',
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              rotate: -30,
              padding: [30, 30, 0, -20],
            },
          },
        ],
        yAxis: [
          {
            name: '人次',
            nameTextStyle: {
              padding: [0, 0, 0, -35], // 四个数字分别为上右下左与原位置距离
            },
            min: 0,
            max: max,
            splitNumber: 4,
            interval: 5000,
            type: 'value',
            splitNumber: 2,
            axisLabel: {
              formatter: function(value) {
                return value;
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff',
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              lineStyle: {
                width: 0.5,
                type: 'dashed',
                color: 'rgb(255,255,255,1)',
              },
            },
          },
        ],
        series: [
          {
            // name: "其他",
            type: 'bar',
            barWidth: 14,
            color: '#0090FF',
            emphasis: {
              focus: 'series',
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0.2,
                      color: 'rgba(67, 149, 243, 0.2)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(67, 149, 243, 1)', // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
            data: data,
            animationDuration: 1000,
            animationEasing: 'linear',
          },
        ],
      };
      this.$redomEchart(dom, option);
    },
    hoverItemFun(e, i, src, desc) {
      this.showItem = true;
      this.img_src = src;
      this.imgDesc = desc;
      this.returnStyle = `right:${window.screen.width -
        e.clientX}px;top:${e.clientY - 250}px`;
      clearInterval(this.Imgtimer);
    },
    leaveItemFun() {
      this.showItem = false;
      this.Imgtimer = setInterval(this.scrollAnimateImg, 2000);
    },
  },
  created() {},
  destroyed() {
    clearInterval(this.timer);
    clearInterval(this.Imgtimer);
  },
  mounted() {
    this.meetEchartInit();
    this.AssetsAndEquipment({
      max: 30000,
      data: [9400, 6400, 7400, 5400, 9400],
    });
    this.timer = setInterval(this.scrollAnimate, 1500);
    this.Imgtimer = setInterval(this.scrollAnimateImg, 2000);

    //   console.log(event.data);
  },
};
</script>

<style lang="less" scoped>
@import '~@/style/gl.less';

.container {
  // overflow: hidden;
  /* width: 100%; */
  /* height: 100%; */
  /* position: absolute; */
  .store_type {
    width: 100%;
    #store {
      width: 100%;
      height: 1.575rem /* 126/80 */ /* 180/80 */;
    }
  }
  .store_top {
    #store_top {
      width: 100%;
      height: 2.5rem /* 200/80 */;
    }
  }
  .animate-up {
    transition: all 0.5s ease-in-out;
    transform: translateY(-1.0875rem /* 87/80 */ /* 87/80 */);
  }
  .store_discount {
    color: #ffffff;
    .box {
      height: 3.25rem /* 260/80 */;
      overflow: hidden;
      .outer {
        padding-left: 0.1625rem /* 13/80 */;
        margin-top: 0.25rem /* 20/80 */;

        & > li {
          display: flex;
          margin-top: 0.25rem /* 20/80 */;
          img {
            width: 0.675rem /* 54/80 */;
            height: 0.675rem /* 54/80 */;
          }
          .content {
            margin-left: 0.175rem /* 15/80 */;
            .head {
              font-size: 0.175rem /* 14/80 */ /* 15/80 */;
              opacity: 0.7;
            }
            .describe {
              width: 90%;
              //    width: 3.1rem /* 248/80 */;
              font-size: 0.175rem /* 14/80 */;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 0.3rem /* 24/80 */;
            }
          }
        }
      }
    }
  }
  .store_list {
    span {
      font-size: 0.2rem /* 16/80 */;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      line-height: 0.25rem /* 20/80 */;
      margin-left: 0.375rem /* 30/80 */ /* 40/80 */ /* 30/80 */;
      white-space: nowrap;
    }

    li {
      width: 0.5625rem /* 45/80 */;
      height: 0.3125rem /* 25/80 */ /* 29/80 */;
      // border: 1px solid #4696EF;
      border-radius: 0.05rem /* 4/80 */;
      background: #233d59;
      font-size: 0.175rem; /* 14/80 */
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin: 0 0.25rem /* 20/80 */ /* 18/80 */ /* 20/80 */ /* 24/80 */ 0.125rem
        /* 10/80 */ 0;
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
    .type {
      display: flex;
      margin-top: 0.25rem /* 20/80 */ /* 30/80 */;
      ul {
        display: flex;
        flex-wrap: wrap;
        margin-left: 0.25rem /* 20/80 */ /* 30/80 */;
        width: 60%;
      }
    }
    .building {
      display: flex;
      & > div > ul {
        display: flex;
        flex-wrap: wrap;
        margin-left: 0.25rem /* 20/80 */ /* 30/80 */;
        &:last-child {
          flex-wrap: nowrap;
        }
        &:last-child > li:nth-child(3n) {
          margin-right: 0.25rem;
          // margin-right:  .0625rem /* 5/80 */;
        }
      }
    }
    .active {
      border: 1px solid #4696ef;
    }
  }
  .store_img {
    margin-top: 0.3125rem /* 25/80 */ /* 29/80 */;
    overflow: hidden;
    ul {
      height: 4.15rem /* 332/80 */;
      width: 3.875rem /* 310/80 */ /* 330/80 */;
      margin: 0 auto;
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      overflow: hidden;
    }
    li {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 0.1625rem /* 13/80 */ /* 10/80 */;
    }

    img {
      width: 1.75rem /* 140/80 */ /* 145/80 */;
      height: 0.875rem;
    }

    .litInfo {
      position: fixed;
      top: 0;
      right: 0;
      width: 3.8125rem /* 305/80 */;
      min-height: 0.375rem /* 30/80 */;
      background: #0f2033;
      opacity: 0.9;
      border-radius: 6px;
      padding: 0.25rem /* 20/80 */;
      box-shadow: inset 0 1px 10px 0.1px rgba(67, 149, 243, 0.1);
      -moz-box-shadow: inset 0 1px 10px 0.1px rgb(67, 149, 243, 0.1);
      -webkit-box-shadow: inset 0 1px 10px 0.1px rgb(67, 149, 243, 0.1);
      z-index: 20;
      font-size: 0.175rem /* 14/80 */;
      .litInfo_title {
        justify-content: flex-start;
        font-size: 0.2rem /* 16/80 */;
      }
      .litInfo_content {
        padding-top: 0.125rem /* 10/80 */;
        p {
          line-height: 1.6;
        }
        span {
          vertical-align: text-top;
          &:nth-child(1) {
            min-width: 0.375rem /* 30/80 */;
            padding-right: 0.0625rem /* 5/80 */;
          }
          &:nth-child(2) {
            min-width: 1.25rem /* 100/80 */;
            white-space: normal;
          }
        }
      }
      .litInfo_img {
        .ioc_img(0.625rem /* 50/80 */, 0.625rem /* 50/80 */, 50%) ;;
        object-fit: cover;
        margin-right: 0.25rem /* 20/80 */;
      }
    }
  }
  .store_wait {
    .swiper {
      /deep/.el-carousel__container {
        height: 1.65rem /* 132/80 */ !important;
      }
    }
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 0.125rem /* 10/80 */;
      li {
        margin-right: 0.0625rem /* 5/80 */ /* 6/80 */ /* 8/80 */ /* 10/80 */;
        margin-bottom: 0.0625rem /* 10/80 */;
        img {
          width: 1.1875rem /* 95/80 */ /* 100/80 */;
          height: 0.725rem /* 58/80 */ /* 60/80 */;
        }
      }
    }
  }
}
</style>
