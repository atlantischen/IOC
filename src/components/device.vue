<template>
  <IOCRight :fade="_fade" style="right: 0; width: auto; z-index: 1000">
    <div class="box">
      <div class="box_t">显示设备</div>
      <i class="el-icon-close close" @click="handleClick(true)"></i>
      <ul class="sb_list">
        <li
          :class="{'toGrey':!item.isShow}"
          ref="item"
          v-for="(item,index) in equipmentList"
          :key="index"
          @click="setClick(item.id)"
        >
          <img :src="item.url" alt="" />
          <span>{{ item.title }}</span>
        </li>
      </ul>
      <div class="btn">
        <div @click="allClick">全部显示</div>
        <div @click="cancelClick">全部隐藏</div>
      </div>
    </div>
  </IOCRight>
</template>

<script>
export default {
  data() {
    return {
      equipmentList: [
        {
          url: require("../assets/img/device/jinggai_pic.png"),
          title: "井盖",
          id: 3,
          isShow: false,
        },
        {
          url: require("../assets/img/device/miehuoqi_pic.png"),
          title: "灭火器",
          id: 8,
          isShow: false,
        },
        {
          url: require("../assets/img/device/xiaofanshezhi_pic.png"),
          title: "消防设备",
          id: 1,
          isShow: false,
        },
        {
          url: require("../assets/img/device/shengxiangtou_pic.png"),
          title: "监控",
          id: 0,
          isShow: false,
        },
        {
          url: require("../assets/img/device/LEDping_pic.png"),
          title: "广告牌",
          id: 4,
          isShow: false,
        },
        {
          url: require("../assets/img/device/lajitong_pic.png"),
          title: "垃圾桶",
          id: 2,
          isShow: false,
        },
        {
          url: require("../assets/img/device/yingxiang_pic.png"),
          title: "音响",
          id: 5,
          isShow: false,
        },
        {
          url: require("assets/img/device/yanwuchuangganqi_pic.png"),
          title: "烟雾传感器",
          id: 7,
          isShow: false,
        },
        {
          url: require("assets/img/device/jiankong_pic.png"),
          title: "摄像头",
          id: 6,
          isShow: false,
        },
        {
          url: require("assets/img/device/menjin_pic.png"),
          title: "门禁",
          id: 9,
          isShow: false,
        },
        {
          url: require("assets/img/device/chongdianzhuang_pic.png"),
          title: "充电桩",
          id: 10,
          isShow: false,
        },
      ],
      arrList:null,
      
    };
  },
  props: {
    _fade: {
      type: Boolean,
    },
    idArry: {
      type: Array,
      require:true
    },
    // disabeld: {
    //   type: Boolean,
    // },
  },
  watch: {
    _fade: function(n, o) {
      this.fade = n;
    },

     idArry: {
      handler (n, o) {
        if(n){
           this.init()
        //   this.cancelClick()
        //  this.allClick()
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick(val) {
      this.$emit("chageFade", true);
    },
    setClick(i){
      // this.arrList= this.idArry
      this.equipmentList.forEach(item=>{
        if(item.id ===i){
          item.isShow = !item.isShow
          switch (item.isShow) {
          case true:
           this.arrList.push(i)
           let arr = this.arrList.toString()
          
          this.$SendMessageToUnity("ShowIoTDevice_IOCMap",{strList:arr});
          break;
          case false:
            this.arrList.splice(this.arrList.findIndex(item => item === i), 1)            
            console.log(this.arrList);
            let res=this.arrList.toString()
            this.$SendMessageToUnity("ShowIoTDevice_IOCMap",{strList:res});
            break;  
          default:
            break;
        }
        }
        
      })
      console.log(this.equipmentList,'equipmentList~~~~~~~');

    },
    init(){
      this.equipmentList.forEach(item=>{
        item.isShow=false
      })
      this.equipmentList.forEach((item) => {
        this.idArry.forEach((element) => {
          if (item.id == element) {
            item.isShow = true;
          }
        });
      });
      this.arrList= [...this.idArry]

    },
    allClick(){
    
      this.arrList= [...this.idArry]
      let arr = this.idArry.toString()
      this.init()
      this.$SendMessageToUnity("ShowIoTDevice_IOCMap",{strList:arr});

    },
    cancelClick(){
      this.arrList= []
      this.equipmentList.forEach(item=>{
          item.isShow = false
      })
       this.$SendMessageToUnity("ShowIoTDevice_IOCMap",{strList:''});
    }
  
  },
  created() {

    this.init()
    // this.allClick()

  },
};
</script>

<style lang="less" scoped>
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
    top: 0.3rem /* 24/80 */;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.225rem /* 18/80 */;
  }
  .close {
    position: absolute;
    top: 0.25rem /* 20/80 */;
    right: 0.2375rem /* 19/80 */;
    font-size: 0.25rem /* 20/80 */;
  }
  .sb_list {
    position: absolute;
    top: 1.0125rem /* 81/80 */;
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.25rem /* 20/80 */;
    // justify-content: center;
    & > li {
      width: 1.125rem /* 90/80 */;
      height: 1.125rem /* 90/80 */;
      position: relative;
      margin: 0 0.175rem 0.175rem /* 14/80 */ 0;
      border: 1px solid #4396f3;
      border-radius: 0.05rem /* 4/80 */;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > img {
        width: 0.675rem; /* 54/80 */
        height: 0.675rem;
        margin-bottom: 0.0625rem /* 5/80 */;
      }

      //  &::before{
      //   content:"";
      //   position:absolute;
      //   left:0;
      //   top:0;
      //    width: 100%;
      // height: .5625rem /* 45/80 *//* 90/80 */;
      //   box-sizing:border-box;
      //   border-bottom:1px solid deeppink;
      //   transform-origin:bottom center;
      //   transform:rotateZ(45deg) scale(1.414);
      //   // animation:slash 5s infinite ease;
      // }
    }
   
    & > li:nth-child(3n) {
      margin-right: 0;
    }
  }

  .btn {
    position: absolute;
    bottom: 0.25rem /* 20/80 */;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 0.3375rem /* 27/80 */;

    & > div {
      width: 1.5rem /* 120/80 */;
      height: 0.4375rem /* 35/80 */;
      border-radius: 0.0625rem /* 5/80 */;
      text-align: center;
      line-height: 0.4375rem /* 35/80 */;
      font-size: 0.2rem /* 16/80 */;
    }
    & > div:first-child {
      background-color: rgba(67, 150, 243, 1);
    }
    & > div:last-child {
      background: linear-gradient(0deg, #6f7c9c, #d8e8fa);
    }
  }
}
</style>
