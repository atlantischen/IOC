<template>
  <ul class="centerData_c x_c">
    <li v-for="(item, i) in list" :key="i" class="y_c">
      <!-- <span>{{ item.val }}</span> -->
      <span><NumCounter :value="item.val"></NumCounter></span>
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "centerData",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data () {
    return {
      fade: false,
    };
  },
  components: {},
  mounted () {
    // console.log(this.$store)
    // document.onclick = function() {
    //   this.handleClick();
    // };
  },
  methods: {
    handleClick () {
      this.fade = !this.fade;
    },
  },
};
</script>

<style lang="less">
@import "~@/style/gl.less";
.centerData_c {
  width: 100%;
  height: 100%;
  li {
    padding: 0 0.5rem /* 40/80 */;
    span {
      white-space: nowrap;
      &:first-child {
        .datas_s(.375rem /* 30/80 */);
        color: #ffb400;
      }
      &:last-child {
        .text_s(.175rem /* 14/80 */);
      }
    }
  }
}
</style>
