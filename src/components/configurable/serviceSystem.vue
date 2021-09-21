

<template>
  <!-- 综合服务体系 -->
  <div
    class="serviceSystemAll"
    v-show="showSystem"
    :class="{ toShow: showSystem }"
  >
    <div class="serviceSystem_bg">
      <ul class="serviceSystem_content">
        <div class="center_text p_xy_c x_c">
          {{ serviceSystemDatas.name }}
        </div>
        <li
          class="serviceSystem_box x_c"
          v-for="(item, i) in serviceSystemDatas.list"
          :class="['_box_' + i, { actived: actvedNum == i + 1 }]"
          :key="i"
          @mouseover="hoverItem('hover', i + 1)"
          @mouseout="hoverItem('', i + 1)"
        >
          <img class="ss_img" :src="item.src" alt="" />
          <span class="ss_name">{{ item.name }}</span>
          <ul
            class="min_box"
            v-show="actvedNum == i + 1"
            :class="
              i < serviceSystemDatas.list.length / 2 ? 'min_box_l' : 'min_box_r'
            "
          >
            <li v-for="(_t, ii) in item.childs" :key="ii">
              {{ _t.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serviceSystem',
  data () {
    return {
      ssTimer: null,
      actvedNum: 8,
      showSystem: false,
      serviceSystemDatas: {
        name: "综合服务体系",
        list: [
          {
            name: "入驻服务",
            src: require("@/assets/img/datas/zh_rzfw.png"),
            childs: [
              {
                name: "装修服务",
              },
              {
                name: "IT基础设施",
              },
            ],
          },
          {
            name: "政务服务",
            src: require("@/assets/img/datas/zh_zwfw.png"),
            childs: [
              {
                name: "落户奖励政策",
              },
              {
                name: "费用补贴政策",
              },
              {
                name: "资产投资政策",
              },
              {
                name: "人才扶持政策",
              },
            ],
          },
          {
            name: "企业服务",
            src: require("@/assets/img/datas/zh_qyfw.png"),
            childs: [
              {
                name: "入驻办理",
              },
              {
                name: "物业缴费",
              },
              {
                name: "财税咨询",
              },
              {
                name: "法律服务",
              },
            ],
          },
          {
            name: "党群服务",
            src: require("@/assets/img/datas/zh_dqfw.png"),
            childs: [
              {
                name: "入党申请",
              },
              {
                name: "党费缴纳",
              },
            ],
          },
          {
            name: "办公采购",
            src: require("@/assets/img/datas/zh_bgcg.png"),
            childs: [
              {
                name: "企业定制水",
              },
              {
                name: "桶装水预订",
              },
              {
                name: "办公用品采购",
              },
            ],
          },
          {
            name: "人才关爱",
            src: require("@/assets/img/datas/zh_rcga.png"),
            childs: [
              {
                name: "园区美食",
              },
              {
                name: "专车租赁",
              },
              {
                name: "智慧食堂",
              },
              {
                name: "商家推介",
              },
            ],
          },
          {
            name: "共享服务",
            src: require("@/assets/img/datas/zh_gxfw.png"),
            childs: [
              {
                name: "园区导航",
              },
              {
                name: "会议服务",
              },
              {
                name: "参观预约",
              },
              {
                name: "场地预订",
              },
              {
                name: "广告位申请",
              },
            ],
          },
          {
            name: "物业服务",
            src: require("@/assets/img/datas/zh_wyfw.png"),
            childs: [
              {
                name: "智慧停车",
              },
              {
                name: "报事报修",
              },
              {
                name: "物品放行",
              },
            ],
          },
        ],
      },
    }
  },
  components: {},
  created () {
    this.showSystem = true
  },
  mounted () {
    this.setIntervalFun();
  },
  beforeDestroy () {
    this.clearIntervalfun();
  },
  methods: {
    clearIntervalfun () {
      clearInterval(this.ssTimer);
      this.ssTimer = null;
    },
    setIntervalFun () {
      this.ssTimer = setInterval(() => {
        this.actvedNum--;
        if (this.actvedNum == 0) {
          this.actvedNum = this.serviceSystemDatas.list.length;
        }
      }, 5000);
    },
    hoverItem (val, i) {
      switch (val) {
        case "hover":
          this.clearIntervalfun();
          this.actvedNum = i;
          break;
        default:
          this.setIntervalFun();
          break;
      }
    },
  }
}
</script>

<style lang='less' scoped>
@import "~@/style/gl.less";
@import "~@/style/animation.less";
.serviceSystemAll {
  min-width: 50px;
  position: fixed;
  // top: 0.375rem /* 30/80 */;
  left: 50%;
  bottom: 2.75rem /* 220/80 */;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  .serviceSystem_bg {
    width: 9.275rem /* 742/80 */;
    height: 7.2rem /* 576/80 */;
    background: url("~@/assets/img/datas/zh_bg.png") center no-repeat;
    background-size: cover;
    .serviceSystem_content {
      position: relative;
      .center_text {
        width: 2.5rem /* 200/80 */;
        height: 2.5rem /* 200/80 */;
        position: absolute;
        top: 1.25rem /* 100/80 */;
        left: 3.5625rem /* 285/80 */;
        font-family: "BYfont";
        text-align: center;
        font-size: 0.5375rem /* 43/80 */;
        &::after {
          .turnAround(5s);
          content: "";
          top: -2.9rem /* 232/80 */;
          left: -1.625rem /* 130/80 */;
          position: absolute;
          width: 5.6875rem /* 455/80 */;
          height: 5.6875rem /* 455/80 */;
          background: url("~@/assets/img/datas/zh_line.png") bottom no-repeat;
          background-size: 65%;
        }
      }
      .serviceSystem_box {
        position: absolute;
        width: 2.15rem /* 172/80 */;
        height: 0.85rem /* 68/80 */;
        background: url("~@/assets/img/datas/zh_box1.png") no-repeat;
        background-size: contain;
        padding: 0 10px;
        cursor: pointer;
        &.actived {
          background: url("~@/assets/img/datas/zh_box2.png") no-repeat;
          background-size: contain;
        }
        .ss_img {
          .ioc_img(50px, 50px, 50%);
        }
        .ss_name {
          white-space: nowrap;
          font-size: 22px;
          font-family: "BYfont";
          color: "#fff";
          margin: 0 5px;
        }
        .min_box {
          position: absolute;
          top: 50%;
          transform: translate(0%, -50%);
          -webkit-transform: translate(0%, -50%);
          z-index: 50;
          li {
            white-space: nowrap;
            min-width: 1rem /* 80/80 */;
            line-height: 0.4rem /* 32/80 */;
            background: #000;
            padding: 0 0.125rem /* 10/80 */;
            border-radius: 0.05rem /* 4/80 */;
            background: rgba(67, 150, 243, 0.2);
            border: 0.0125rem /* 1/80 */ solid #3f8ee5;
            margin: 0.0625rem /* 5/80 */;
            font-size: 14px;
            text-align: center;
            color: #fff;
          }
        }
        .min_box_l {
          right: 2.1875rem /* 175/80 */;
        }
        .min_box_r {
          left: 2.1875rem /* 175/80 */;
        }
      }
      ._box_0 {
        top: -0.0625rem /* 5/80 */;
        left: -0.3125rem /* 25/80 */;
      }
      ._box_1 {
        top: 1.5rem /* 120/80 */;
        left: -0.65rem /* 52/80 */;
      }
      ._box_2 {
        top: 3.125rem /* 250/80 */;
        left: -0.65rem /* 52/80 */;
      }
      ._box_3 {
        top: 4.625rem /* 370/80 */;
        left: -0.375rem /* 30/80 */;
      }
      ._box_7 {
        top: 0rem /* 0/80 */;
        right: -0.625rem /* 50/80 */;
      }
      ._box_6 {
        top: 1.625rem /* 130/80 */;
        right: -1rem /* 80/80 */;
      }
      ._box_5 {
        top: 3.125rem /* 250/80 */;
        right: -1rem /* 80/80 */;
      }
      ._box_4 {
        top: 4.625rem /* 370/80 */;
        right: -0.75rem /* 60/80 */;
      }
    }
  }
}
</style>
