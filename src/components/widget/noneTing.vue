<template>
  <div class="x_c noneTing">
    <p>
      {{ _text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "noneTing",
  props: {
    _text: {
      typeof: String,
    },
  },
  data () {
    return {
    };
  },
  components: {},
  mounted () { },
  beforeDestroy () {
  },
  methods: {
  },
};
</script>

<style lang="less">
@import "~@/style/gl.less";
.noneTing {
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
