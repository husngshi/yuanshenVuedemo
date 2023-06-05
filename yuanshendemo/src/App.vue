<template>
  <div id="app">
   <Daohang/>
   <div class="videoContainer">
      <video class="fullscreenVideo" id="bgVid"  autoplay="" muted="" loop="" height="900px">
        <source src="@/assets/beijin/backgroundvideo.mp4" type="video/mp4">
      </video>
    </div>
    
   <!-- <zhuye/> -->
    <router-view></router-view> 
  </div>
</template>

<script>

import Daohang from '@/components/daohang.vue';
import zhuye from './components/zhuye.vue';


export default {
  name: 'App',
  components: {
    zhuye,Daohang,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body{
  padding:0;
  border:0;
  margin: 0px;
  background: #0e0e0e;
  height: 100%;
}
.home {
    position: relative;
    justify-content: center;
    background-image: url('https://ys.mihoyo.com/main/_nuxt/img/5c125a1.png');
}
.videoContainer{
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -100;
}

.videoContainer:before{
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  top: 0;
  left: 0;
  background: rgba(25,29,34,.65);
}

</style>
