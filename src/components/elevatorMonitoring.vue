<template>
  <div class="LookVideo">
    <div class="qDialog">
      <el-dialog
        class="hd_scrollbar"
        :title="dataList.LiftMonitorName"
        v-model="dialogVisible"
        @close="openClose(false)"
        @open="openDialog"
      >
        <div class="videoBox" ref="videoBoxRef">
          <iframe :src="`${dataList.IpAddress}&iframe=yes&aspect=640x360`" id="iframe" name='item' allowfullscreen allow="autoplay; fullscreen"></iframe>
            <div class="iframe">
                
            </div>
            <div class="desc">
                <ul>
                    <li>
                        <div>型号:</div>
                        <div>{{dataList.TypeNum}}</div>
                    </li>
                     <li>
                        <div>当前载重:</div>
                        <div>{{dataList.CurLoad}}</div>
                    </li>
                     <li>
                        <div>锁定载重:</div>
                        <div>{{dataList.LockingLoad}}</div>
                    </li>
                     <li>
                        <div>厂家:</div>
                        <div>{{dataList.Manufacturers}}</div>
                    </li>
                     <li>
                        <div>联系人:</div>
                        <div>{{dataList.Linkman}}</div>
                    </li>
                     <li>
                        <div>联系电话:</div>
                        <div>{{dataList.PhoneNum}}</div>
                    </li>
                   
                </ul>
            </div>
    
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { nextTick } from "@vue/runtime-core";
export default {
  name: "LookVideo",
  props: {
  ElevatorVisible: {
      type: Boolean,
    },
   dataList:{
      type: Object,

   } 
  },
  data() {
    return {
      dialogVisible:false,
      ElevatorList:{
            CurLoad: 500,
            IpAddress: "http://172.21.71.225:10800/play.html?channel=3",
            LiftMonitorName: "5#1号电梯",
            Linkman: "王双",
            LockingLoad: 500,
            Manufacturers: "上海三菱",
            PhoneNum: "13859243329",
            SerialNum: 0,
            TypeNum: "GPS30K",
      }

    };
  },
  components: {},
  watch: {
    ElevatorVisible: {
      handler(newVal) {
        this.dialogVisible = newVal;
      },
    },
  },
  mounted() {
  
  },
  beforeDestroy() {
  
  },
  methods: {

    openClose(val) {
      this.dialogVisible = val;
      this.$emit("off", val);
    },
    openDialog(){
    // this.form={...this.formData}
    console.log(this.dataList,'dataList');


    }

 
  },
};
</script>

<style scoped lang="less">
.LookVideo {
  overflow: hidden;
  :deep(.qDialog) {
    .el-dialog {
      width: 10rem /* 800/80 */ /* 1000/80 */ /* 1350/80 */ /* 1392/80 */ !important;
    //   height:10.25rem /* 820/80 */ /* 850/80 */ /* 800/80 *//* 900/80 */ /* 772/80 */ !important;
      .el-dialog__body {
        padding: .25rem/* 29/80 */ /* 30/80 */;
      }
      .el-dialog__footer {
        padding: 0;
      }
    }
    .videoBox {
      position: relative;
      text-align: center;
      // width: 16.675rem /* 1334/80 */;
      // height: 8.425rem /* 674/80 */;
        .desc{
            width: 100%;
            margin-top: .25rem /* 20/80 */;
            &>ul{
                display: flex;
                flex-wrap: wrap;
                &>li{
                    width: 30%;
                    text-align: left;
                    font-size: .225rem /* 18/80 *//* 20/80 */;
                    color: #fff;
                  
                }
                 &>li:first-child{
                     margin-bottom: .125rem /* 10/80 */;
                 }
            }
        }
    }
  }
  #iframe{
    width: 100% /* 1216/80 *//* 1250/80 */; 
    height:5.35rem /* 428/80 */;
  }
}
</style>
