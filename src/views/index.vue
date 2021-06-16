<template>
  <div class="index">
   

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
.index{
  width: 100%;
  height: 100%;
  .container{
    width: 100%;
    height: 100%;
     .box{
    width: 100%;
    height: 100%;
  }
  }
 
}

</style>
