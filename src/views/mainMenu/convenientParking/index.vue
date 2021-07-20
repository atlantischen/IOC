<template>
  <!-- 便捷停车 -->
  <div class="convenientParking">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "convenientParking",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style>
.el-select-dropdown { 
  /* width: 3.35rem !important  268/80; */
  background-color: rgba(14, 30, 48, 0.9);
 }
.el-popper.is-light {
  border-color: red;
}
.el-select-dropdown__item {
  padding: 0 0.1rem;
  color: #fff;
}
.el-select-dropdown__item.selected {
  color: #4396f3;
}
.el-select-dropdown__item:hover {
  background-color: transparent;
  color: #4396f3;
}
.el-select-dropdown__list {
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* padding: 0 0.125rem 10/80  */
} 
.el-picker-panel{
  background-color: rgba(14, 30, 48, 0.9);
  color: #fff;
}
.el-picker__popper.el-popper[role=tooltip]{
  background-color: rgba(14, 30, 48, 0.9);
}

</style>
