<template>
  <div class="box ioc_animated fadeInDownTop"   :class="fade ? 'fadeOutDownTop' : 'fadeInDownTop'">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="font_text">
          <NumCounter :value="item.num"></NumCounter>
        </div>
        <div>{{ item.describe }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    list: {
      type: Object,
      default: {}
    },
     fade: {
      type: Boolean,
    },
  },
  created () {
  },
}
</script>

<style lang="less" scoped>
.box {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.6rem /* 128/80 */;
  color: #fff;
  ul {
    display: flex;

    & > li {
      margin-right: 0.5rem /* 60/80 */;
      & > div:nth-child(1) {
        text-align: center;
        width: 1.25rem /* 100/80 */ /* 80/80 */;
        font-size: 0.375rem /* 30/80 */;
        color: #ffc659;
        margin-bottom: 0.125rem /* 10/80 */;
      }
      & > div:nth-child(2) {
        opacity: 0.7;
        text-align: center;
      }
    }
    & > li:last-child {
      margin-right: 0;
    }
  }
  & > li:last-child {
    margin-right: 0;
  }
}
</style>