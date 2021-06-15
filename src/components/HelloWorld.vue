<template>
  <div class="hello">
    <Left  class="left animate__animated " :class="fade?'animate__fadeOutLeft':'animate__fadeInLeft'" />
    <div class="container">
      <iframe class="box"  src="http://183.62.170.2:8110/" allowfullscreen='true' frameborder="0"></iframe>
   </div>
   <button class="btn" @click="handleClick">按钮</button>
   <Right class="right animate__animated "  :class="fade?'animate__fadeOutRight':'animate__fadeInRight'" />
  </div>
</template>

<script>
import Left from './left.vue'
import Right from './right.vue'
export default {
  name: 'HelloWorld',
  data(){
    return{
      fade:false
    }
  },
  components:{
    Left,
    Right
  },
  methods:{
      handleClick(){
        this.fade=! this.fade
      }
  }
}
</script>

<style scoped>
.hello{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

}
.btn{
  width: 80px;
  height: 50px;
  background-color: #fff;
  color: red;
  border: 1px solid red;
  position: absolute;
  left: 50%;
  top: 0;
}
.left{
  position: absolute;
  left: 0;
  top: 0;
}
.right{
  position: absolute;
  right: 0;
  top: 0;
}
.container{
  width: 100%;
  height: 100%;

}
.box{
  width: 100%;
  height: 100%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* .box{
  width: 750px;
  height: 200px;
  background-color: red;
} */
</style>
