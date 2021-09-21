<template>
  <div class="LookVideo">
    <div class="qDialog">
      <el-dialog
        custom-class="hd_scrollbar"
        v-model="dialogVisible"
        @close="openClose(false)"
        @open="openDialog"
      >
        <div class="videoBox" ref="videoBoxRef">
        
            <div class="video">
              <Player :dialogShow="dialogShow"   :monitorList="dataList" ></Player>
            </div>
           
    
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>


export default {
  name: "LookVideo",
  props: {
  monitorVisible: {
      type: Boolean,
      require:true

    },
   dataList:{
      type: Object,
      require:true

   } 
  },
  data() {
    return {
      dialogVisible:false,
      ElevatorList:{
            CurLoad: 500,
            IpAddress: "http://10.10.7.27:10800/play.html?channel=1",
            LiftMonitorName: "5#1号电梯",
            Linkman: "王双",
            LockingLoad: 500,
            Manufacturers: "上海三菱",
            PhoneNum: "13859243329",
            SerialNum: 0,
            TypeNum: "GPS30K",
      },
      dialogShow:true,
      // theParkServiceList: urlArry.elevatorList
    };
  },
  components: {},
  watch: {
    monitorVisible: {
      handler(newVal) {
        this.dialogVisible = newVal;
      },
    },
  },
  mounted() {
    console.log(this.dataList);
    
  },
  beforeDestroy() {
  
  },
  methods: {
    openClose(val) {
      this.dialogShow=false
      this.dialogVisible = val;
      this.$emit("off", val);
    },
    openDialog(){
      this.dialogShow=true
    // this.form={...this.formData}
  


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
        .video{
             width: 100% /* 1216/80 *//* 1250/80 */; 
    height:5.35rem /* 428/80 */;
        }
    }
  }
  :deep(.hd_scrollbar){
    // top:50% !important;
    // transform: translateY(-50%) !important;
    margin-top:30vh !important;
  }

}
</style>
