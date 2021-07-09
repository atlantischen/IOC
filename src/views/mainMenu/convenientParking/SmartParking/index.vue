<template>
  <IOCLeft  style="width:auto">
    <LicensePlateSearch
      @search="search"
      :searchData="searchData"
    ></LicensePlateSearch>
    <div class="search_box">
    <ul >
      <li v-for="(item,index) in carList" :key="index">
        <div>
          <img :src="item.url" alt="">
        </div>
        <div>
          <span>{{item.name}}</span>
          <span>{{item.reason}}</span>
        </div>
      </li>
    </ul>
    <span class="search_total">共搜索到3条结果</span>
  </div>
  </IOCLeft>
  
  <TipBox :_data="tipList" class="center" />

  <IOCRight :fade="fade" class="right">
    <div class="list_box">
      <ul class="list_title">
        <li v-for="(item, index) in 4" :key="index">
          <span>车牌</span>
        </li>
      </ul>
      <div class="close" @click="handleClick">
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <ul class="list_content">
        <li v-for="(item, index) in tableList" :key="index">
          <span>{{ item.idCar }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.reason }}</span>
          <span>
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
</template>

<script>
export default {
  data() {
    return {
      searchData: {},
      currentPage: 1,
      pageSize: 11,
      fade: false,
      tipList: [
        {
          text: "告警！2021-04-30 15:00{李玲}在{公寓广场}发生了{黑名单告警}",
        },
      ],
      blacklist: [
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },

        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
        {
          idCar: "粤BAS325",
          name: "李玲",
          reason: "涉嫌诈骗",
          operation: "追踪",
        },
      ],
      carList:[
        {
          url:require('@/assets/img/car_pic.png'),
          name:'陈新-粤BAS325',
          reason:'月卡欠费'
        },
        {
          url:require('@/assets/img/car_pic1.png'),
          name:'李玲-粤BF358B',
          reason:'多次违规停车'
        },
        {
          url:require('@/assets/img/car_pic2.png'),
          name:'韦孟-粤BD367C',
          reason:'多次违规停车'
        },
        {
          url:require('@/assets/img/car_pic2.png'),
          name:'韦孟-粤BD367C',
          reason:'多次违规停车'
        }
        
      ],
      tableList: [],
    };
  },

  methods: {
    search(val) {},
    handleClick() {
      this.fade = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.init();
    },
    init() {
      let _data = this.blacklist;
      let i = (this.currentPage - 1) * this.pageSize;
      this.tableList = _data.slice(i, i + this.pageSize);
      console.log(this.tableList);
    },
  },
  mounted() {
    this.searchData = JSON.parse(this.$route.params.value);
    this.init();
  },
};
</script>

<style lang="less" scoped>
.right {
  right: 0;
}
.search_box{
  width: 3.35rem /* 268/80 */;
  border: 1px solid #4396F3;
  background-color: rgba(0, 17, 26, .7);
  &>ul{
    &>li{
      height: 1.1625rem /* 93/80 */;
      border-bottom: 1px solid rgba(67, 150, 243 ,.3);
      // display: flex;
      // justify-content: center;
      // align-items: center;
      padding:.3125rem  .4375rem  0/* 35/80 */ ;
      display: flex;
      &>div:first-child{
          width: .675rem /* 54/80 */;
          height: .675rem /* 54/80 */;
          margin-right:.2rem /* 16/80 */ ;
      }
      &>div:last-child{
          display: flex;
          flex-direction: column;
          &>span:first-child{
          margin-bottom:.1625rem /* 13/80 */ ;
          }
      }
    }
  }
  .search_total{
    display: block;
    height: .5rem /* 40/80 */;
    width: 100%;
    line-height: .5rem;
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
    width: 0.225rem /* 18/80 */ /* 20/80 */;
    height: 0.325rem /* 26/80 */ /* 28/80 */;
    background: #3699ff;
    position: absolute;
    left: 0.15rem /* 12/80 */;
    top: 0.2375rem /* 19/80 */;
    line-height: 0.35rem;
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
</style>
