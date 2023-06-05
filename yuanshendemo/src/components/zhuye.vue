<template>
    <div>
  <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid"  autoplay="" muted="" loop="" height="900px">
        <source src="@/assets/beijin/backgroundvideo.mp4" type="video/mp4">
      </video>
    </div>
    <twtpv/>
    <h1>欢迎来到提瓦特大陆</h1>
</div>
</template>

<script>
import twtpv from '../views/qypv/twtpv.vue';
export default {
    name:'zhuye',
    components:{
      twtpv,
    }

}
</script>

<style>

</style>