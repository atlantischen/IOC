<template>
  <div id="MainMenu">
    <iframe
      id="iframe3D"
      src="http://172.21.70.246:8110/"
      allowfullscreen="true"
      frameborder="0"
    ></iframe>
    <router-view  v-if="isShow" class="comEntry"></router-view>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      isShow:false
    };
  },
  computed:{
    getUnityData(){
      return this.$store.state.unitySendData;
    }
  },
  watch:{
    getUnityData(val){
      if(val.action.indexOf('/') === 0){
       this.$router.push(val.action)
      }
    }
  },
  created(){
       window.addEventListener("message", (event) => {
          this.$store.commit('setData',event.data);
          if(event.data.data === "IOCHOME") {
              console.log('页面显示');
                this.isShow= true
          } 
       })
       
  },
  methods: {},

};
</script>

<style lang="less" scoped>
#MainMenu {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}
#iframe3D {
  // position: absolute;
  width: 100%;
  height: 100%;
}
.comEntry {
  // position: absolute;
  // color: red;
  // background: #000;
}
</style>
