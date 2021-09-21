<template>
  <div class="vLoading x_c">
    <span v-if="text">{{ text }}</span>
    <svg
      v-else
      class="svg_loading"
      width="24px"
      height="30px"
      viewBox="0 0 24 30"
      style="enable-background: new 0 0 50 50"
      xml:space="preserve"
    >
      <rect
        v-for="(item, i) in datas"
        :key="i"
        :x="item.x"
        y="0"
        width="4"
        height="10"
        fill="#ccc"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          :begin="item.begin"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "vLoading",
  props: {
    text: {
      type: String
    },
    Visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      datas: [
        {
          x: 0,
          begin: '0s'
        },
        {
          x: 10,
          begin: '0.2s'
        },
        {
          x: 20,
          begin: '0.4s'
        },
      ],
    };
  },
  mounted () {
  },
  methods: {
  },
};
</script>

<style scoped lang="less">
.vLoading {
  width: 100%;
  height: 100%;
}
</style>
