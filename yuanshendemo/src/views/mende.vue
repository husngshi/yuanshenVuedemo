<template>
    <div class="city__content">
      <img src="https://uploadstatic.mihoyo.com/contentweb/20200317/2020031714242066580.png" class="city__icon"> 
      <h1 class="city__name">蒙德</h1> 
      <div class="city__desc"><p>位于提瓦特大陆东北部的自由城邦。<br>
群山和广袤的平原间，自由之风携着蒲公英的气息吹拂过果酒湖，为坐落于湖心岛上的蒙德城送去风神巴巴托斯的祝福与恩泽。</p>
</div>
  </div>
</template>

<script>
export default {
    name:'mende',
}
</script>

<style>
.city_content{
  display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 19vh;
}
.city_icon{
  width: 12vh;
}
.city__name {
    position: relative;
    font-weight: 400;
    font-size: 4.6vh;
    line-height: 9vh;
}

.city__desc {
    width: 608px;
    text-align: center;
    color: #000;
    line-height: 1.8;
    margin: auto;
}
</style>