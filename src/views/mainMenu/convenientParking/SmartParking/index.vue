<template>

    <div class="left ioc_animated fadeInLeft0">
          <LicensePlateSearch
      @search="search"
      :searchData="searchData"
        @sevenCarNum="sevenCarNum"
        @eightCarNum="eightCarNum"
    ></LicensePlateSearch>
    <div class="search_box" v-if="carListRes.length !=0">
      <ul class="scroll">
        <li v-for="(item, index) in carListRes" :key="index" @click="confirmClick(index)">
          <div>
            <img :src="item.url" alt="" />
          </div>
          <div>
            <span>{{ item.name }}</span>
            <span>{{ item.reason }}</span>
          </div>
        </li>
      </ul>
      <span class="search_total">共搜索到{{carListRes.length}}条结果</span>
    </div> 
    </div>

  <IOCRight :fade="fade" class="right">
    <div class="list_box">
      <ul class="list_title">
        <li v-for="(item, index) in arrList" :key="index">
          <span>{{item}}</span>
        </li>
      </ul>
      <div class="close" @click="handleClick(true)">
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <ul class="list_content">
        <li v-for="(item, index) in tableList" :key="index">
          <span>{{ item.idCar }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.reason }}</span>
          <span @click="clickTrack">
            <i>{{ item.operation }}</i>
          </span>
        </li>
      </ul>
      <div class="page">
        <el-pagination
          layout="prev, pager, next"
          :page-size="pageSize"
          v-model:current-page.sync="currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="blacklist.length"
        >
        </el-pagination>
      </div>
    </div>
  </IOCRight>
   <div class="open" v-show="fade" @click="handleClick(false)">
        <i class="iconfont icon-youjiantou"></i>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchData:'',
      arrList:['车牌','姓名','拉黑事由','操作'],
      currentPage: 1,
      pageSize: 11,
      fade: false,

      blacklist: [
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BFS325",
          name: "陈新",
          reason: "月卡欠费",
          operation: "追踪",
        },
        {
          idCar: "粤BD3671",
          name: "韦孟",
          reason: "多次违规停车",
          operation: "追踪",
        },
        {
          idCar: "粤BF0688",
          name: "李建华",
          reason: "月卡欠费",
          operation: "追踪",
        },
    
       
        
      ],
      carList:[
        {
          url:require('@/assets/img/car_pic.png'),
          name:'陈新-粤A00000',
          reason:'月卡欠费',
          num:'粤A00000',
          id:0,
          floor:'1'
        },
       
        {
          url:require('@/assets/img/car_pic2.png'),
          name:'韦孟-粤AD367C',
          reason:'多次违规停车',
          reason:'月卡欠费',
          num:'粤AD367C',
          id:2,
          floor:'2'

          
        },
         {
          url:require('@/assets/img/car_pic1.png'),
          name:'吴泉洋-赣A8720B',
          reason:'多次违规停车',
          num:'赣A8720B',
          id:1,
           floor:'3'
        },
        {
          url:require('@/assets/img/car_pic2.png'),
          name:'陶敏-赣B26354',
          reason:'多次违规停车',
          num:'赣B26354',
  
          id:3,
           floor:'1'

        },
         {
          url:require('@/assets/img/car_pic.png'),
          name:'罗灿-湘A45623',
          reason:'多次违规停车',
          num:'湘A45623',
          id:4,
           floor:'2'

        },
        {
          url:require('@/assets/img/car_pic1.png'),
          name:'余振-鄂JF358B',
          reason:'月卡欠费',
          num:'鄂JF358B',
          id:5,
           floor:'3'

        },
        {
          url:require('@/assets/img/car_pic2.png'),
          name:'赵伟-川AD367C',
          reason:'多次违规停车',
          num:'川AD367C',
          id:6,
           floor:'1'

        },
        {
          url:require('@/assets/img/car_pic2.png'),
          name:'龚玲-鄂CD3675',
          reason:'多次违规停车',
          num:'鄂CD3675',
          id:7,
           floor:'2'

        },
        {
          url:require('@/assets/img/car_pic2.png'),
          name:'黄智源-粤A23659',
          reason:'多次违规停车',
          num:'粤A23659',
          id:8,
           floor:'3'

        }

      ],
      tableList: [],
      carListRes:[],
      resData:''
    };
  },

  methods: {
    search(val) {
      this.getCarList(this.carList)
    },
    handleClick(val) {
      this.fade = val;
    },
    confirmClick(i){
      const id= this.carListRes[i].id
      this.$SendMessageToUnity("QueryCarExitRoute", {"index":id});
    },
    clickTrack(){
      this.$SendMessageToUnity("QueryCarExitRoute", {"index":8});
    },
    sevenCarNum(val){
      this.searchData=val
    },
    eightCarNum(val){
      this.searchData=val
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.init();
    },
    init() {
      let _data = this.blacklist;
      let i = (this.currentPage - 1) * this.pageSize;
      this.tableList = _data.slice(i, i + this.pageSize);
    },
    getCarList(list){
      this.searchData=this.$store.state.carNum
      this.carListRes=list.filter(item=>{
        if(item.num===this.searchData){   
            this.$SendMessageToUnity("QueryCarExitRoute", {"index":item.id,"floor":item.floor});  
            return item
        }
      })  
     if(this.carListRes.length===0)
        this.$message({ message: "未查询到车牌号", type: "error" });

    }
  },
  created(){
    this.init();
     this.getCarList(this.carList)

  },
  mounted() {
    // this.searchData = JSON.parse(this.$route.params.value);
   

    // console.log(this.$route.params.value,'searchData' );
    // this.init();
  },
};
</script>

<style lang="less" scoped>
.right {
  right: 0;
  top: 40%;
}
.left{ 
  position: fixed;
  left: 0.575rem;
  top:40%;
  height: 6.5125rem /* 521/80 */;



  
}
.search_box {
  width: 3.35rem /* 268/80 */;
  border: 1px solid #4396f3;
  border-radius: 0 0 0.075rem 0.075rem;
  background-color: rgba(0, 17, 26, 0.7);
  & > ul {
    max-height: 4.65rem /* 372/80 */;
    overflow-y: scroll;
    & > li {
      height: 1.1625rem /* 93/80 */;
      border-bottom: 1px solid rgba(67, 150, 243, 0.3);
      // display: flex;
      // justify-content: center;
      // align-items: center;
      padding: 0.3125rem 0.4375rem 0 /* 35/80 */;
      display: flex;
      & > div:first-child {
        width: 0.675rem /* 54/80 */;
        height: 0.675rem /* 54/80 */;
        margin-right: 0.2rem /* 16/80 */;
      }
      & > div:last-child {
        display: flex;
        flex-direction: column;
        & > span:first-child {
          margin-bottom: 0.1625rem /* 13/80 */;
        }
      }
    }
  }
  .search_total {
    display: block;
    height: 0.5rem /* 40/80 */;
    width: 100%;
    line-height: 0.5rem;
    text-align: center;
  }
}
.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.6rem /* 128/80 */;
  color: #fff;
}
.list_box {
  width: 100%;
  height: 6.5125rem /* 521/80 */ /* 500/80 */;
  position: relative;
  background-color: #0f2033;
  border: 1px solid #4396f3;
  border-radius: 0.125rem /* 10/80 */ 0px 0px 0.125rem;
  padding: 0.2375rem /* 19/80 */ 0.15rem /* 12/80 */ 0 0.15rem;
  .list_title {
    display: flex;
    font-size: 0.175rem /* 14/80 */;
    & > li {
      flex: 1;
      text-align: center;
    }
  }
  .close {
      width:.25rem /* 20/80 *//* 18/80 */ /* 20/80 */;
    height: 0.325rem /* 26/80 */ /* 28/80 */;
    background: #4396F3;
     border: 1px solid #4396F3;
    border-radius:0 .0625rem /* 5/80 */ .0625rem  0/* 2/80 */;
    position: absolute;
    left: 0.15rem /* 12/80 */;
    top: 0.2375rem /* 19/80 */;
    line-height: 0.325rem;
    text-align: center;
  }
  .list_content {
    display: flex;
    flex-direction: column;
    margin-top: 0.2375rem /* 19/80 */;
    & > li {
      height: 0.45rem /* 36/80 */;
      font-size: 0.175rem /* 14/80 */;
      line-height: 0.45rem;
      & > span {
        width: 25%;
        text-align: center;
        white-space: nowrap
      }
      & > span > i {
        width: 0.625rem /* 50/80 */;
        height: 0.325rem /* 26/80 */;
        display: inline-block;
        border: 1px solid #4696ef;
        color: #4696ef;
        border-radius: 0.05rem /* 4/80 */;
        line-height: 0.325rem;
      }
    }
    & > li:nth-child(odd) {
      background-color: rgba(34, 55, 82, 0.6);
    }
  }
  :deep(.page) {
    position: absolute;
    bottom: 0.125rem;
    right: 0.125rem;

    .el-pager li,
    .btn-next,
    .btn-prev {
      color: #fff;
      background-color: transparent;
    }
    .el-pager li.active {
      color: #fff;
      background-color: #409eff;
    }
  }
}
.open{
  position: fixed;
  right: 0;
  top: 15.2%;
  width:.25rem /* 20/80 *//* 18/80 */ /* 20/80 */;
    height: 0.325rem /* 26/80 */ /* 28/80 */;
    background: #4396F3;
    border: 1px solid #4396F3;
        border-radius:0 .0625rem /* 5/80 */ .0625rem  0/* 2/80 */;

    line-height: 0.325rem ;
    text-align: center;
    transform: rotate(180deg);
}

</style>
