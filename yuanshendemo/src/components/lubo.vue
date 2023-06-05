<template>
    <div class="block">
        <el-carousel :interval="4000"  type="card" height="450px" width="100%">
        <el-carousel-item v-for="item in jueshe" :key="item.id">
        <span class="demonstration"></span>
        <img :src="item.url" height="450px" alt="图片暂时找不到了" :title="item.name">
    </el-carousel-item>
    </el-carousel>
  </div>
  </template>
  
  <script>
  export default {
    name:'lubo',
    data(){
        return{
            jueshe:[
                {id:0,name:'欢迎来到蒙德',url:'https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921550320292.jpg'},
                {id:1,name:'欢迎来到璃玥',url:'https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921552395638.jpg'},
                {id:2,name:'欢迎来到稻妻',url:'https://uploadstatic.mihoyo.com/contentweb/20210719/2021071918001232800.jpg'},
                {id:3,name:'欢迎来到须弥',url:'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/8969f683b92839ac427c875d0d742be2_4825576482548821743.jpg'}
            ],//接收接口数据
        }
    }, 
    

}
  </script>
  
  <style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #ffffff;
     
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #ffffff;
  }
  </style>