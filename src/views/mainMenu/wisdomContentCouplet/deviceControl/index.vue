<template>
  <!-- 设备控制 -->
  <div class="deviceControl">
    <div class="mask" @mouseenter="deviceChangeShow"></div>
    <Device
      v-show="deviceShow"
      :_fade="_fade"
      :idArry="idArry"
      @chageFade="chageFade($event)"
    ></Device>
    <div class="mask" @mouseenter="deviceChangeShow"></div>
  </div>
</template>

<script>
export default {
  name: 'deviceControl',
  data(){
    return{
       deviceShow: false,
      _fade: false,
      idArry: [6, 7, 8, 9],
    }
  },
  components:{ },
  methods:{
     deviceChangeShow() {
      this.deviceShow = true;
      this._fade = false;
    },
     chageFade(val) {
      this._fade = val;
    },
  },
  created() {
    this.$SendMessageToUnity('ShowIoTDevice_IOCMap', {
      strList: '6,7,8,9',
    });
  },
}
</script>

<style lang='less' scoped>
 .mask {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.75rem /* 60/80 */ /* 100/80 */ /* 300/80 */;
    height: 6.25rem /* 500/80 */ /* 300/80 */;
    // background-color: red;
  }
</style>
