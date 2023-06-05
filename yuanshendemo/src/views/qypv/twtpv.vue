<template>
  <div class="video">
            <div class="video-container">
             <video
             ref="videoPlayer"
             :src="videoSrc"
             :autoplay="autoplay"
             :controls="controls"
             :loop="loop"
             ></video>
            </div>
</div>
</template>

<script>
export default {
name:'twtpv',
data(){
    return{
      videoSrc:"https://webstatic.mihoyo.com/upload/op-public/2020/09/27/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4",
      autoplay: false,
      controls: true,
      loop: false,
    }
  },

  mounted() {
    // 播放器准备就绪后，重新设置视频窗口的大小和位置
    this.$refs.videoPlayer.addEventListener('loadedmetadata', () => {
      const videoPlayer = this.$refs.videoPlayer
      const container = this.$el.querySelector('.video-container')
      if (container && videoPlayer.videoWidth && videoPlayer.videoHeight) {
        const aspectRatio = `${(videoPlayer.videoHeight / videoPlayer.videoWidth) * 95}%`
        container.style.paddingTop = aspectRatio
      }
    })
  }
}

</script>

<style>
@import url("./1.css");
</style>