<template>
  <div class="dropDown">
    <el-dropdown trigger="click" :max-height="'200px'">
      <span class="el-dropdown-link">
        {{ activedName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, i) in list"
            @click="changeItem(i)"
            :key="i"
            :class="{ 'is-checed': activedName == item[name] }"
            >{{ item[name] }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "dropDown",
  props: {
    name: {
      type: String,
    },
    list: {
      type: Object,
      default: () => [],
    },
  },
  data () {
    return {
      activedName: this.list[0][this.name],
    };
  },
  components: {},
  mounted () { },
  methods: {
    changeItem (val) {
      this.activedName = this.list[val][this.name];
      this.$emit("_cg", val);
    },
  },
};
</script>

<style lang="less">
@import "~@/style/gl.less";

.dropDown {
  .el-dropdown-link {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    i {
      background: rgba(30, 57, 87, 0.7);
      padding: 2px 6px;
      margin-left: 8px;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}
</style>
