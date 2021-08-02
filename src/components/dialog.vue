<template>
  <div class="container">
    <div class="warper">
      <el-dialog
        center
        :title="title"
        v-model="dialogVideoVisible"
        @close="closeDialog"
      >
        <el-carousel height="150px" :autoplay="false" indicator-position="none">
          <!-- <el-carousel-item v-for="item in 1" :key="item"> -->
            <div class="box">
              <ul>
                <li
                  v-for="(item, index) in videoDatas"
                  :key="index"
                  @click="lookVideo(`${++index}号客梯`)"
                >
                  <!-- <Vloading v-show="showIfame" /> -->
                  <iframe
                    v-if="item.url"
                    class="iframeVideo"
                    id="iframeVideo"
                    ref="iframeVideo"
                    style="width: 100%; height: 100%"
                    :src="item.url + '&protocol=FLV&iframe=yes'"
                    allowfullscreen
                    allow="autoplay; fullscreen"
                  ></iframe>
                </li>
              </ul>
            </div>
          <!-- </el-carousel-item> -->
        </el-carousel>

        <div class="slideshowBtn">
          <el-radio-group class="radio_check" v-model="selectCheck">
            <el-radio :label="1" @click.prevent="changeIscarousel(selectCheck)"
              >轮播选择</el-radio
            >
          </el-radio-group>
          <el-slider
            :disabled="selectCheck !== 1"
            v-model="value"
            :step="33"
            :marks="marks"
            :show-tooltip="false"
            @change="selectTime(value)"
          >
          </el-slider>
        </div>
      </el-dialog>
    </div>
    <LookVideo :Visible="Visible" :title="dialogTitle" @off="openCloseDialog" />
  </div>
</template>
<script>
export default {
  data() {
    return {

      Visible: false,
      dialogTitle: "",
      active: 0,
      value: "",
      selectCheck: 1,
      checkedTime: 5,
      marks: {
        0: "5S",
        33: "10S",
        66: "15S",
        99: "20S",
      },
      videoDatas: [
        {
          local: "16楼C区铭筑",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=1&protocol=WS_FLV",
        },
        {
          local: "16层C区女厕",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=2&protocol=WS_FLV",
        },
        {
          local: "16楼前台",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=3&protocol=WS_FLV",
        },
        {
          local: "16楼A区铭筑男厕",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=4&protocol=WS_FLV",
        },
        {
          local: "16楼A区会议室",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=5&protocol=WS_FLV",
        },
        {
          local: "14楼A区铭筑",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=6&protocol=WS_FLV",
        },
        {
          local: "14楼D区吧台",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=7&protocol=WS_FLV",
        },
        {
          local: "14楼C区女厕",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=8&protocol=WS_FLV",
        },
        {
          local: "14楼A区大事记",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=9&protocol=WS_FLV",
        },
        {
          local: "14层B区男厕",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=10&protocol=WS_FLV",
        },
        {
          local: "14楼贵宾会议室外",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=11&protocol=WS_FLV",
        },
        {
          local: "14楼B区机房外",
          url:
            "http://47.119.172.151:10810/play.html?device=LiveNVR001&channel=12&protocol=WS_FLV",
        },
      ],
      dialogVideoVisible: this.dialogShow,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    dialogShow: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    dialogShow(val) {
      this.dialogVideoVisible = val;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("dialogShowChange", false);
    },
    changeIscarousel(val) {
      console.log(val);
      this.selectCheck = val == 1 ? null : 1;
    },
    selectTime(val) {
      this.checkedTime =
        val == 0 ? "5" : val == 33 ? "10" : val == 66 ? "15" : "20";
    },
    lookVideo(val) {
      this.dialogTitle = val;
      this.openCloseDialog(true);
    },
    openCloseDialog(val) {
      this.Visible = val;
    },
  },
  mounted() {

	// 处理兼容行问题
	// if (iframe.attachEvent) {
	// 	iframe.attachEvent('onload', function () {
	// 		console.log('iframe已加载完毕')
	// 		_this.showIfame = true;
  //       })
  //   } else {
  //       iframe.onload = function () {
  //           console.log('iframe已加载完毕')
  //           _this.showIfame = true;
  //       }
  //   }

    //  this.$afterIframeOnload('iframeVideo0', () => {
    //   this.showIfame = false 
    // })
  },

  created() {},
};
</script>

<style lang="less" scoped>
.container {
  :deep(.warper) {
    .el-dialog {
      width: 1255px /* 1331/80 */ /* 1744/80 */ /* 1392/80 */ !important;
      height: 9.05rem /* 724/80 */ /* 920/80 */ /* 750/80 */ /* 772/80 */ !important;
      margin-top: 13vh !important;
      background-image: url("../assets/img/dtjk_pic.png");
      background-size: 100% 100%;

      background-repeat: no-repeat;
      background-color: transparent;
    }
    .el-overlay {
      overflow: hidden;
    }
    .el-dialog__body {
      padding-top: 0.125rem /* 10/80 */;
    }
    .el-dialog__headerbtn .el-dialog__close {
      font-size: 0.375rem /* 30/80 */ /* 20/80 */;
      color: #fff;
    }
    .el-dialog__title {
      color: #fff;
      font-size: 0.3rem /* 24/80 */;
    }
    .el-dialog__header {
      padding: 0.266667rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .el-carousel__container {
      height: 7.3125rem !important /* 585/80 */;
    }
    .box {
      & > ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 0.1875rem /* 15/80 */ /* 11/80 */ /* 12/80 */;

        & > li {
          width: 3.825rem /* 306/80 */ /* 403/80 */;
          height: 2.3125rem /* 185/80 */ /* 246/80 */;
          position: relative;
          background: rgba(24, 50, 82, 0.73);
          margin: 0 0.125rem /* 12/80 */ /* 14/80 */ 0.125rem /* 10/80 */
            /* 15/80 */ 0;
          color: #fff;
          font-size: 0.2rem /* 16/80 */;
          & > span:first-child {
            position: absolute;
            left: 0.225rem /* 18/80 */;
            top: 0.325rem /* 26/80 */;
          }
          & > span:last-child {
            position: absolute;
            right: 0.1625rem /* 13/80 */;
            bottom: 0.1875rem /* 15/80 */;
          }
        }
        & > li:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
    .slideshowBtn {
      margin-left: 0.1875rem /* 15/80 */ /* 10/80 */;
      display: flex;
      align-items: center;
      .radio_check {
        margin-right: 40px;
      }
      .el-slider {
        width: 400px;
        display: flex;
        .el-slider__button {
          width: 16px;
          height: 16px;
          border: 2px solid #4396f3;
          background-color: #4396f3;
        }
        .el-slider__bar,
        .el-slider__runway {
          height: 4px;
          background-color: #313131;
        }
        .el-slider__stop {
          top: -6px;
          height: 15px;
          width: 15px;
          background-color: #313131;
        }
        .el-slider__marks-text {
          white-space: nowrap;
          color: #fff;
          font-size: 0.15rem /* 12/80 */;
          margin-top: 0.14rem;
        }
      }
    }
  }
}
</style>
