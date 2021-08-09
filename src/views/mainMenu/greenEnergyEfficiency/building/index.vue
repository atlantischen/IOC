<template>
  <!-- 绿色能效 -->
  <div class="container ">
    <ul class="title">
      <li
        :class="$store.state.activeIndex === index ? 'active' : ''"
        v-for="(item, index) in list"
        :key="index"
        @click="handleClick(item.path, index, item.name)"
      >
        {{ item.name }}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "building",
  data() {
    return {
      activeIndex: this.$store.state.activeIndex,
      // imgCdnUrl:require('../../../../assets/img/ly_bj.png'),
      list: [
        {
          path: "/greenEnergyEfficiency/building/codesource",
          name: "冷源",
        },
        {
          path: "/greenEnergyEfficiency/building/airConditioner",
          name: "空调",
        },
        {
          path: "/greenEnergyEfficiency/building/primaryAirSystem",
          name: "新风",
        },
        {
          path: "/greenEnergyEfficiency/building/watersupply",
          name: "给排水",
        },
        {
          path: "/greenEnergyEfficiency/building/elevator",
          name: "电梯",
        },
        {
          path: "/greenEnergyEfficiency/building/lighting",
          name: "照明",
        },
      ],
    };
  },
  components: {},
  methods: {
    handleClick(path, index, name) {
      this.$store.commit('setActiveIndex',index)
      this.$router.push(path);
      this.$SendMessageToUnity("OnChangePage", { name: name });

    },
  },
  // watch: {
  //   $route(to, from) {
  //     if(to.path !=from.path){
  //       // this.$router.go(0)
  //     }
  //   },
  // },
};
</script>

<style lang="less" scoped>
ul {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50% /* 80/80 */;
  left: 6.125rem /* 490/80 */ /* 500/80 */;
  transform: translateY(-50%);
  li {
    width: 1.025rem /* 82/80 */;
    height: 0.4625rem /* 37/80 */;
    margin-bottom: 0.375rem /* 30/80 */;
    background-image: url("../../../../assets/img/ly_bj1.png");
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center;
    line-height: 0.4625rem;
    font-size: 0.175rem /* 14/80 */ /* 20/80 */;
    color: #fff;
  }
  li:last-child {
    margin-bottom: 0;
  }
  .active {
    // background-color:#4396f3;
    background-image: url("../../../../assets/img/ly_bj.png");
    background-size: contain;
  }
}
</style>
