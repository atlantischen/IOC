<template>
<div style="width:100%;height: 100%" >
  <video class="video_play" :src="url" controls  controlslist="nodownload  noremoteplayback" autoplay loop  muted :disablePictureInPicture="true"></video>

</div>
</template>

<script>
export default {
    props:{
        url:{
            type:String
        }
    }
}
</script>

<style lang="less" scoped>
.video_play{
    height: 100%;
    width: 100%;
    object-fit: fill;
}
.video_play:focus {
outline: -webkit-focus-ring-color auto 0px;
}

</style>