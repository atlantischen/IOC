<template>
  <div class="container">
    <div class="warper">
      <el-dialog
        center
        :title="title"
        v-model="dialogVideoVisible"
        @close="closeDialog"
        @open="openDialog"
        :destroy-on-close="true"
      >
        <el-carousel height="150px" :autoplay="false" indicator-position="none">
          <!-- <el-carousel-item v-for="item in 1" :key="item"> -->
            <div class="box">
              <ul>
                <li v-for="(item,index) in monitorLists " :key="index">
                   <FrequencyVideo :url="item.url"></FrequencyVideo>

          <!-- <Player :dialogShow="$store.state.videoShow"  class="video_player" height='185'  width="24.5"  :monitorList="monitorList" ></Player> -->
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
import {urlArry} from '@/utils/flv_url.js'

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
    monitorList:urlArry.moreVideoList ,
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
    },
    monitorLists:{
      type: Array,

    }
  },
  watch: {
    dialogShow(val) {
      this.dialogVideoVisible = val;
    },
  },
  methods: {
    closeDialog() {
      this.$emit("dialogShowChange", false);
      this.$store.commit('setVideoShow',false)
      console.log(this.$store.state.videoShow,'this.$store.state.videoShow');
      this.$store.commit('setDialogShow',true)

      // this.$emit("videoShow",true);
      // this.$refs.player3.destoryVideo()

    },
    openDialog(){
      this.$store.commit('setVideoShow',true)
      this.$store.commit('setDialogShow',false)
      // this.videoShow=true

      // console.log('我打开了');
      // this.$emit("videoShow",false);
      // this.$refs.player3.createVideo()


    },
    changeIscarousel(val) {
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
        justify-content: space-around;
        padding: 0 0.1875rem /* 15/80 */ /* 11/80 */ /* 12/80 */;
        & > li {
          width: 24.7%;
          height: 2.3125rem /* 185/80 */;
          margin-bottom: .0625rem /* 5/80 */;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .video_player{
                width: 3.825rem /* 306/80 */ /* 403/80 */;
                height: 2.3125rem /* 185/80 */ /* 246/80 */;
                background: rgba(24, 50, 82, 0.73);

          }
          // width: 3.825rem /* 306/80 */ /* 403/80 */;
          // height: 2.3125rem /* 185/80 */ /* 246/80 */;
          // position: relative;
          // background: rgba(24, 50, 82, 0.73);
          // margin: 0 0.125rem /* 12/80 */ /* 14/80 */ 0.125rem /* 10/80 */
          //   /* 15/80 */ 0;
          // color: #fff;
          // font-size: 0.2rem /* 16/80 */;
          // & > span:first-child {
          //   position: absolute;
          //   left: 0.225rem /* 18/80 */;
          //   top: 0.325rem /* 26/80 */;
          // }
          // & > span:last-child {
          //   position: absolute;
          //   right: 0.1625rem /* 13/80 */;
          //   bottom: 0.1875rem /* 15/80 */;
          // }
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
    .video_player{
                width: 3.825rem /* 306/80 */ /* 403/80 */;
          height: 2.3125rem /* 185/80 */ /* 246/80 */;
          background: rgba(24, 50, 82, 0.73);

          }
}
</style>
