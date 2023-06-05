<template>
  <div class="city__content">
    <img src="https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917401911066.png" class="city__icon"> 
    <h1 class="city__name">稻妻</h1> 
    <div class="city__desc"><p>位于提瓦特大陆远东的封闭群岛。<br>
越过无尽的雷暴，踏上红枫与绯樱眷顾的诸岛，在环绕的砂堤、高耸的断崖与幽秘的山林之中，见
证御建鸣神主尊大御所大人所追寻的永恒。</p>
</div> 
</div>
</template>

<script>
export default {
    name:'daoqi'

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