<template>
  <div class="city__content">
    <img src="https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/f77d0c308b54728b6a1f3bc525e42955_6051524677514174999.png" class="city__icon">
     <h1 class="city__name">须弥</h1> 
     <div class="city__desc">
      <p>位于提瓦特大陆中西部的学城之都。<br>
同时拥有葱郁雨林与荒芜沙土的奇异国度，无数智慧的果实在这里生长、埋葬。无论是穿越丛林踏
上学城的台阶，还是深入沙漠挖掘赤土的遗迹，远道而来的旅者都可以在此获取宝贵的智识。</p>
  </div>
</div>
</template>

<script>
export default {
    name:'xumi'
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
    line-height: 1.8;
    margin: auto;
}
</style>