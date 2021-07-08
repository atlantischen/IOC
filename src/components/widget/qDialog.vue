<template>
  <div class="qDialog">
    <el-dialog
      class="hd_scrollbar"
      :title="title"
      v-model="dialogVisible"
      @close="openClose(false)"
      @open="openClose(true)"
    >
      <template #title> </template>
      <slot name="main" class="el-dialog__body"></slot>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "tipBox",
  props: {
    _data: {
      type: Object
    },
    title: {
      type: String
    },
    Visible: {
      type: Boolean
    },
    d_style: {
      type: String
    }
  },
  data () {
    return {
      dialogVisible: false
    };
  },
  components: {},
  mounted () {
  },
  watch () {
    this.dialogVisible = this.Visible
  },
  methods: {
    openClose (val) {
      this.dialogVisible = val
      this.$emit('off', val)
    }
  },
};
</script>

<style scoped lang="less">
.el-dialog {
  width: 1392px;
  height: 772px;
}
</style>
