<template>
  <div class="tittle">{{tittle}}</div>
</template>

<script>
export default {
  name:'tittle' ,
   props: {
    tittle: {
      type: String
    },
   
  },

}
</script>

<style lang="less" scoped>
.tittle{
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    font-style: italic;
    color: #CCCCCC;
    padding-left:20px ;
    background-image: url('../assets/img/tiitle.png');
    background-repeat: no-repeat;
    background-size: 13px 13px;
    background-position: 0 50%;
}


</style>

