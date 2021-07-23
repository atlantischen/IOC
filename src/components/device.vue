<template>
   <IOCRight  :fade="fade" style="right:0; width:auto;z-index:1000">
      <div class="box">
          <div class="box_t">显示设备</div>
          <i class="el-icon-close close" @click="handleClick(true)"></i>
          <ul class="sb_list">
            <li v-for="item in equipmentList" :key="item">
              <img :src="item.url" alt="">
            </li>
          </ul>
        <div class="btn">
          <div>全部显示</div>
          <div>全部隐藏</div>
        </div>
      </div>
    </IOCRight>
</template>

<script>
export default {
data() {
    return {
        fade:true,
        equipmentList:[
        {
          url:require('../assets/img/sb1.png')
        },
        {
          url:require('../assets/img/sb2.png')
        },
        {
          url:require('../assets/img/sb3.png')
        },
        {
          url:require('../assets/img/sb4.png')
        },
        {
          url:require('../assets/img/sb5.png')
        },
        {
          url:require('../assets/img/sb6.png')
        },
        {
          url:require('../assets/img/sb7.png')
        },
        {
          url:require('../assets/img/sb9.png')
        },
        {
          url:require('../assets/img/sb10.png')
        },
        {
          url:''

        },
        {
         url:''

        },
        {
         url:''

        },
        {
          url:''

        },
        {
         url:''

        },
        {
          url:''
        }
      ]
    }
},
//  props: {
//     fade: {
//       type: Boolean,
//     },
//   },
    methods:{
        handleClick(val){
            this.$emit('chageFade',true)

        }
//     event (event) {
//       if ((typeof event.data == 'string' && event.data.indexOf('data') != -1) || (typeof event.data == 'object' && event.data.data != undefined)) {
//         let res = JSON.parse(event.data)
//         console.log(res);
//         if (res.action === "ShowUserInterface") {
//           this.fade = true;
//         } 
//       }
//     },
//     },
//   mounted () {
//     window.addEventListener("message", this.event, true);
    
//   },
//   beforeDestory () {
//     window.removeEventListener("message", this.event, true);
//   },
//  props: {
//     fade: {
//       type: Boolean,
//     },
  },
}
</script>

<style lang='less' scoped>
.box {
  width: 4.25rem /* 340/80 */;
  height: 8.425rem /* 674/80 */;
  background-image: url("../assets/img/sb_bj.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  text-align: center;
  .box_t {
    position: absolute;
    top: .3rem /* 24/80 */;
    left: 50%;
    transform: translateX(-50%);
    font-size: .225rem /* 18/80 */;
  }
  .close{
    position: absolute;
    top: .25rem /* 20/80 */;
    right: .2375rem /* 19/80 */;
    font-size: .25rem /* 20/80 */;
  }
  .sb_list{
        position: absolute;
        top: 1.0125rem /* 81/80 */;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &>li{
          width: 1.125rem /* 90/80 */;
          height: 1.125rem /* 90/80 */;
          margin: 0 .175rem /* 14/80 */ .175rem /* 14/80 */ 0;
          // background-color: red;
          border: 1px solid #4396f3;
          border-radius: .05rem /* 4/80 */;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &>li:nth-child(3n){
          margin-right: 0;
        }


  }
  .btn{
    position: absolute;
    bottom: .25rem /* 20/80 */;
      display: flex;
      width: 100%;
  justify-content: space-between;
  padding: 0 .3375rem /* 27/80 */;

    &>div{
      width: 1.5rem /* 120/80 */;
      height: .4375rem /* 35/80 */;
      border-radius: .0625rem /* 5/80 */;
      text-align: center;
      line-height: .4375rem /* 35/80 */;
      font-size:.2rem /* 16/80 */ ;
      
    }
      &>div:first-child{
        background-color: rgba(67, 150, 243, 1);
      }
        &>div:last-child{
        
background: linear-gradient(0deg, #6F7C9C, #D8E8FA);
      }

  }
}
</style>