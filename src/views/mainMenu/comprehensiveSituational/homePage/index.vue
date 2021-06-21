<template>
  <!-- 综合态势 -->
  <div class="one">
    综合态势
  </div>
</template>

<script>
import { aaa } from '@/api/mockApi'
import axios from 'axios'
export default {
  name: 'one',
  data(){
    return{
    }
  },
  components:{ },
  mounted() {
    // aaa().then(r=>{
    //   console.log(r)
    // })
    // axios('/meun').then(req => {
    //   console.log('xxxxxxxxx', req)
    // })
  },
  methods:{
  }
}
</script>

<style lang='less' scoped>
</style>
