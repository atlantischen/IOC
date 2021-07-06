<template>
  <div class="allcom">
    <component
      v-for="(item, i) in _Info"
      :key="i"
      :is="item.type"
      :_data="item"
      :class="'item-id-' + item.type"
      :type="1"
    />
  </div>
</template>

<script>
export default {
  name: "allcom",
  props: ['_Info'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import "~@/style/gl.less";
.allcom {
}
</style>
