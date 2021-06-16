<template>
  <div class="url">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu v-for="(item,i) in mainMenus" :index="'/'+item.path" :key="i">
        <template #title>
          <!-- <i class="el-icon-location"></i> -->
          <span>{{item.meta.name}}</span>
        </template>
          <el-menu-item v-for="(_t,ii) in item.children" v-show="ii != 0" :key="ii" :index="_t.path" @click="toPath" >{{_t.meta.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import mainMenus  from '@/router/mainMenus/index'
export default {
  name: 'url',
  data () {
    return {
      mainMenus: mainMenus
    }
  },
  mounted() {
    console.log(mainMenus)
  },
  methods: {
    handleOpen: function(val){
      // this.$router.replace(val)
      window.open(val)
      // console.log(val)
    },
    handleClose: function(val){
      console.log(val)
    },
    toPath: function(val){
      window.open(val.indexPath[0]+'/'+val.index)
      // this.$router.replace(val.indexPath[0]+'/'+val.index)
      // console.log(val)
    }
  }
}
</script>

<style lang='less' scoped>
</style>
