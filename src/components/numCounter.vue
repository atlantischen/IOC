<template>
  <div class="num" ref="numberGrow">{{ value }}</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    _filter: {
      type: String,
      default: '',
    },
  },
  mounted () {
    this.animateValue(this.$refs.numberGrow, this.value, 2000);

  },
  methods: {
    animateValue (obj, end, duration) {
      let start = 0;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const y = String(end).indexOf(".") + 1;
        if (this._filter == 'f') {
          if (y > 0) {
            const res = (progress * (end - start) + start).toFixed(2);
            obj.innerHTML = this.$filterNum(res);
          } else {
            obj.innerHTML = this.$filterNum(Math.floor(progress * (end - start) + start));
          }
        } else {
          if (y > 0) {
            const res = (progress * (end - start) + start).toFixed(2);
            obj.innerHTML = res;
          } else {
            obj.innerHTML = Math.floor(progress * (end - start) + start);
          }
        }
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },
  },
};
</script>

<style></style>
