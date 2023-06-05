<template>
  <div class="city__content">
    <img src="https://uploadstatic.mihoyo.com/contentweb/20200317/2020031714245390532.png" class="city__icon"> 
    <h1 class="city__name">璃月</h1> 
    <div class="city__desc"><p>位于提瓦特大陆东方的富饶港湾。<br>
傲然矗立的山麓与石林、广袤的平原与生机勃勃的河滩共同构成了璃月的丰富地貌，在四季分明的
气候下焕发出多彩的风华。山石奇景间，又埋藏了多少岩之魔神的古老馈赠等待着人们发掘呢？</p>
</div> 
</div>
</template>

<script>
export default {
    name:'liyue'
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