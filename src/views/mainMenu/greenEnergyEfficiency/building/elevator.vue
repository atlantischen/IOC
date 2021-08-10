<template>
    <IOCLeft>
      <div class="elevator">
        <div class="tittle">电梯一览</div>
        <div class="total">
          <ul>
            <li>
              <span class="font_text">07</span>
              <span>客梯总数</span>
            </li>
            <li>
              <span class="font_text">01</span>
              <span>货梯总数</span>
            </li>
            <li>
              <span class="font_text">30°C</span>
              <span>电梯机房温度</span>
            </li>
          </ul>
        </div>
        <div class="box">
          <ul>
             <li v-for="(item,index) in elevatorList" :key="index">
               <span>{{item.text}}</span>
                 <div>
                   <img class="elevator_img" src="../../../../assets/img/dt_pic.png"  alt="">
                 <div>
                  <img v-if="item.state===0" src="../../../../assets/img/dt_pic1.png" alt="">
                 <img v-else-if="item.state===1" src="../../../../assets/img/dt_pic2.png" alt="">
                 <img v-else src="../../../../assets/img/dt_pic9.png" alt="">
                   <div >
                     <span>{{item.up}}</span>
                     <span>{{item.behavior}}</span>
                   </div>
                 </div>
               </div>
             </li>
          </ul>
        </div>
      </div>
    </IOCLeft>
    <IOCRight>
      <div class="monitor">
        <div class="tittle">轿厢监控</div>
        <div class="box">
          <div class="videos" @click="videoShowChange(true,'carData')">
          <img src="../../../../assets/img/dt_pic7.png" alt="">
          <span class="font_text">视频回放</span>
        </div>
        <ul>
          <li  @click="lookVideo(`${++index}号客梯`)">
             <!-- <Vloading v-show="showIfame" /> -->

          <Player  width="49"  :dialogShow="$store.state.dialogShow"  ref="player1" :monitorList="monitorList" ></Player>
         <!-- <iframe
          v-show="!showIfame"
          scrolling="no"
          v-if="item.url"
          class="iframeVideo"
          id="iframe"
          :ref="'iframeVideo' +index"
          style="width: 100%; height: 100%"
          :src="item.url + '&protocol=FLV&iframe=yes'"
          allowfullscreen
          allow="autoplay; fullscreen"
        ></iframe>   -->

          </li>
        </ul>
        <div class="floor" @click="dialogShowChange(true,'carData')">
          <img src="../../../../assets/img/dt_pic6.png" alt="">
          <span>查看更多</span>
        </div>
        </div>
        
      </div>
      <div class="monitor">
        <div class="tittle">电梯间监控</div>
        <div class="box">
          <div class="videos" @click="videoShowChange(true,'elevatorData')">
          <img src="../../../../assets/img/dt_pic7.png" alt="">
          <span class="font_text">视频回放</span>
        </div>
        <ul>
          <li  @click="lookVideo(`${++index}号客梯`)">
            <!-- <span>2020-12-31    14:40</span>
            <span>{{item++}}号客梯</span> -->
           <!-- <Vloading v-show="showIfame" /> -->

          <Player  width="49" :dialogShow="$store.state.dialogShow"  ref="player" :monitorList="monitorList1" ></Player>
         <!-- <iframe
          v-show="!showIfame"
          scrolling="no"
          v-if="item.url"
          class="iframeVideo"
          name="iFrame"
          id="iframe"
          :ref="'iframeVideo' +index"
          style="width: 100%; height: 100%"
          :src="item.url + '&protocol=FLV&iframe=yes'"
          allowfullscreen
          allow="autoplay; fullscreen"
        ></iframe>   -->
            
          </li>
        </ul>
        <div class="floor" @click="dialogShowChange(true,'elevatorData')">
          <img src="../../../../assets/img/dt_pic6.png" alt="">
          <span>查看更多</span>
        </div>
        </div>
        
      </div>
    </IOCRight>
    <Dialog :dialogShow="dialogShow"   :title='title'  @dialogShowChange="dialogShowChange"></Dialog>
    <VideoPlayback :title='title' :backShow="backShow" @videoShowChange="videoShowChange"></VideoPlayback>
  <LookVideo :Visible="Visible" :title="dialogTitle" @off="openCloseDialog" />
  <ElevatorMonitoring  :ElevatorVisible="ElevatorVisible"  :dataList="dataList"  @off="ElevatorCloseDialog" />


</template>

<script>
export default {
  data(){
    return{
      showIfame: true,
      Visible: false,
      ElevatorVisible:false,
      dataList:{},
      dialogTitle:'',
      elevatorList:[ 
        {
          text:'1号客梯',
          up:'电梯上行',
          behavior:'Upward',
          state:0
        },
         {
          text:'2号客梯',
          up:'电梯下行',
          behavior:'Down',
          state:0
        },
         {
          text:'3号客梯',
          up:'故障',
          behavior:'Fault',
          state:1
        },
        {
          text:'4号客梯',
          up:'电梯上行',
          behavior:'Upward',
          state:0
        },
        {
          text:'5号客梯',
          up:'F1',
          behavior:'Idle',
          state:2
        },
         {
          text:'6号客梯',
          up:'电梯下行',
          behavior:'Down',
          state:0
        },
         {
          text:'7号客梯',
          up:'F13',
          behavior:'Idle',
          state:2
        },
         {
          text:'8号客梯',
          up:'电梯上行',
          behavior:'Upward',
          state:0
        },
      ],
      dialogShow:false,
       videoShow:false,
      backShow:false,
      title:'轿厢监控',
       monitorList:[
       {
          id: this.$uuid(),
          url: "http://10.10.7.27:8086/live?app=live&stream=cctv1",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8086/live?app=live&stream=cctv2",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8086/live?app=live&stream=cctv3",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8086/live?app=live&stream=cctv4",
        },
         
      ],
        monitorList1:[
       {
          id: this.$uuid(),
          url: "http://10.10.7.27:8087/live?app=live&stream=cctv6",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8087/live?app=live&stream=cctv7",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8087/live?app=live&stream=cctv8",
        },
        {
          id: this.$uuid(),
          url: "http://10.10.7.27:8087/live?app=live&stream=cctv9",
        },
         
      ]
    }
  },
  methods:{
    dialogShowChange(val,name){
      if(name==='carData'){
        this.title='轿厢监控'
      }else if(name==='elevatorData'){
        this.title='电梯间监控'
      }
      //  this.$refs.player1.destoryVideo();

      this.dialogShow=val
      // this.$store.commit('setDialogShow',false)


    },
    // videoShow(val){
    //   if(val){
    //     console.log('打开触发了');

    //     this.$refs.player1.createVideo();
    //     this.$refs.player.createVideo();
    //   }else{
    //     console.log('关闭触发了');
    //     this.$refs.player1.destoryVideo();
    //     this.$refs.player.destoryVideo();
    //   }
        
    // },
    videoShowChange(val,name){
      if(name==='carData'){
        this.title='轿厢视频回放'
      }else if(name==='elevatorData'){
        this.title='电梯间视频回放'
      }
      this.backShow=val

    },
     lookVideo (val) {
      this.dialogTitle = val
      this.openCloseDialog(true)

    },
    openCloseDialog (val) {
      this.Visible = val
    },
    ElevatorCloseDialog(val) {
      this.ElevatorVisible = val
    },
     event (event) {
        let res = JSON.parse(event.data)
        if(res.action ==='OpenElevatorVideo' && JSON.stringify(res.data) !== "{}"){
            this.ElevatorVisible=true
            this.dataList=res.data
        }


      // if ((typeof event.data == 'string' && event.data.indexOf('data') != -1) || (typeof event.data == 'object' && event.data.data != undefined)) {
        // let res = JSON.parse(event.data)
        // console.log(res,'电梯');
      }
    // },
  },
  created(){
      this.$store.commit('setDialogShow',true)
      this.$store.commit('setVideoShow',false)

  },
  mounted () {
    window.addEventListener("message", this.event, true);
    // this.$afterIframeOnload('iframeVideo0', () => {
    //   this.showIfame = false 
    // })
    
  },
  beforeRouteLeave(to, from, next) {
    if (to.path != from.path) {
      this.$store.commit('setVideoShow',false)
      this.$store.commit('setDialogShow',false)
    }
    next();
  },
  destroyed() {
    window.removeEventListener("message", this.event, true);
  },

}
</script>

<style lang="less" scoped>
.box{
  // padding:0 .18rem /* 20/80 */;
  box-sizing: border-box;
}
.videos{
  display: flex;
  justify-content: flex-end;
  margin-bottom: .125rem /* 10/80 */;
  img{
    width: .3rem /* 24/80 */;
    height: .2625rem /* 21/80 */;
    margin-right:.1625rem /* 13/80 */ ;
  }
  span{
    color: #4396F3;
    font-size: .2rem /* 16/80 */;
  }
}

.elevator{
  
  .total{
    &>ul{
      display: flex;
      justify-content: space-around;
      margin: .25rem /* 20/80 */ 0;
      &>li{
        display: flex;
        flex-direction: column;
        text-align: center;
        span:first-child{
          font-size: .25rem /* 20/80 */;
          margin-bottom: .125rem /* 10/80 */;
        }
        span:last-child{
          font-size: .15rem /* 12/80 */;
        }
      }
    }
  }
  .box{
    width: 100%;
    margin-top:.375rem /* 30/80 */ ;

    &>ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &>li{
        width: 1.95rem /* 156/80 */;
        height:1.5rem /* 120/80 */ ;
        padding: .2125rem /* 17/80 */ .125rem /* 10/80 */;
        background-color: rgba(0, 17, 26, .7);
        margin-right: .125rem /* 10/80 */;
        margin-bottom: .25rem /* 20/80 */;
        &>span{
          font-size: .175rem /* 14/80 */;
        }
        &>div{
         display: flex;
         margin-top: .35rem /* 28/80 */;
         .elevator_img{
           width: .375rem /* 30/80 */;
           height: .4125rem /* 33/80 */;
         }
          &>div{
            display: flex;
            margin-left: .35rem /* 28/80 */;
            &>img{
              width: .1875rem /* 15/80 */;
              height: .175rem /* 14/80 */;

            }
              &>div{
                display: flex;
                flex-direction: column;
                margin-left: .0625rem /* 5/80 */ /* 2/80 */;
                span:first-child{
                  font-size: .175rem /* 14/80 */ /* 20/80 */;
                  margin-bottom: .0625rem /* 5/80 */ /* 10/80 */;
                }
                span:last-child{
                  font-size: .15rem /* 12/80 */;
                }
              }
          }
         
        }
      }
    }
  }
}
.monitor{
  ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;


    li{
      width: 100% /* 174/80 */ /* 112/80 */;
      height: 100% /* 112/80 */;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      //  #iframe{
      //     width: 100% /* 174/80 *//* 112/80 */;
      //     height: 1.4rem !important /* 112/80 *//* 112/80 */;
      // }
      // margin: 0 .1rem /* 8/80 */ .1rem /* 8/80 */ 0;
      
      // span:first-child{}
      // span:last-child{
      //   position: absolute;
      //   bottom: .125rem /* 10/80 */;
      //   right: .1625rem /* 13/80 */;
      // }
    }
    // li:nth-child(2n){
    //   margin-right: 0;
    // }
  }
  .floor{
    height: .45rem /* 36/80 */;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(67, 150, 243, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    img{
      width: .2625rem /* 21/80 */;
      height: .2625rem /* 21/80 */;
      margin-right: .1125rem /* 9/80 */;
    }
    span{
      font-size: .2rem /* 16/80 */; 
      color: #4396F3;
    }
  }
}
</style>