<template>
  <!-- 绿色能效 -->
  <div class="container ">
      <ul class="title ioc_animated fadeInDownTop">
          <li v-for="item in list" :key="item" @click="handleClick(item.path)">{{item.name}}</li>
      </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'building',
  data(){
    return{
     list: [
        {
          path: "/greenEnergyEfficiency/building/codesource",
          name: "冷源",
        },
        {
          path: "/greenEnergyEfficiency/building/airConditioner",
          name: "空调",
        },
        {
          path: "/greenEnergyEfficiency/building/elevator",
          name: "电梯",
        },
        {
          path: "/greenEnergyEfficiency/building/lighting",
          name: "照明",
        },
        {
          path: "/greenEnergyEfficiency/building/primaryAirSystem",
          name: "新风",
        },
        {
          path: "/greenEnergyEfficiency/building/watersupply",
          name: "给排水",
        },
      ],
    }
  },
  components:{ },
  methods:{
    handleClick(path){
      this.$router.push(path)
    }
  }
}
</script>

<style lang='less' scoped>
ul{
    position: fixed;
    display: flex;
    top: 1rem /* 80/80 */;
    left: 50%;
    transform: translateX(-50%);
    li{
        width: 200px;
        height: .625rem /* 50/80 */;
        background-color: red;
    }
}
</style>
