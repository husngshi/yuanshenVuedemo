<template>
    <div>
    <el-menu :router="true" :default-active="$route.path" 
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/zhuye"><img src="@/assets/beijin/yslogo.png" alt="" height="65px" width="100%"></el-menu-item>
    <el-menu-item index="/shouye">首页</el-menu-item>
    <el-menu-item index="/jsqb">角色情报</el-menu-item>
    <el-submenu index="5">
      <span slot="title">区域</span>
          <el-menu-item index="/mende">蒙德</el-menu-item>
          <el-menu-item index="/liyue">璃玥</el-menu-item>
          <el-menu-item index="/daoqi">稻妻</el-menu-item>
          <el-menu-item index="/xumi">须弥</el-menu-item>
        </el-submenu>
    <el-submenu index="3">
        <span slot="title">区域详解</span>
        <el-submenu index="3-1">
          <template slot="title">蒙德</template>
          <el-menu-item index="/gjh">果酒湖</el-menu-item>
          <el-menu-item index="3-1-2" plain disabled>鹰翔沙滩</el-menu-item>
          <el-menu-item index="3-1-3" plain disabled>誓言岬</el-menu-item>
          <el-menu-item index="3-1-4" plain disabled>晨曦酒庄</el-menu-item>
          <el-menu-item index="3-1-5" plain disabled>清泉镇</el-menu-item>
          <el-menu-item index="3-1-6" plain disabled>千风神殿</el-menu-item>
        </el-submenu>
        <el-submenu index="3-2">
          <template slot="title">璃玥</template>
          <el-menu-item index="/gk">港口</el-menu-item>
          <el-menu-item index="3-2-2" plain disabled>天衡山</el-menu-item>
          <el-menu-item index="3-2-3" plain disabled>荻花州</el-menu-item>
          <el-menu-item index="3-2-4" plain disabled>望舒客栈</el-menu-item>
          <el-menu-item index="3-2-5" plain disabled>轻策庄</el-menu-item>
          <el-menu-item index="3-2-6" plain disabled>绝云间</el-menu-item>
        </el-submenu>
        <el-submenu index="3-3">
          <template slot="title">稻妻</template>
          <el-menu-item index="/ld">离岛</el-menu-item>
          <el-menu-item index="3-3-2" plain disabled>稻妻城</el-menu-item>
          <el-menu-item index="3-3-3" plain disabled>镇守之森</el-menu-item>
          <el-menu-item index="3-3-4" plain disabled>鸣神大社</el-menu-item>
          <el-menu-item index="3-3-5" plain disabled>神无冢·踏鞴砂</el-menu-item>
          <el-menu-item index="3-3-6" plain disabled>九条阵屋</el-menu-item>
          <el-menu-item index="3-3-7" plain disabled>无想刃狭间</el-menu-item>
          <el-menu-item index="3-3-8" plain disabled>蛇神之首</el-menu-item>
          <el-menu-item index="3-3-9" plain disabled>名椎滩</el-menu-item>
        </el-submenu>
        <el-submenu index="3-4">
          <template slot="title">须弥</template>
          <el-menu-item index="/hcg">化城郭</el-menu-item>
          <el-menu-item index="3-4-2" plain disabled>禅那园</el-menu-item>
          <el-menu-item index="3-4-3" plain disabled>喀万驿</el-menu-item>
          <el-menu-item index="3-4-4" plain disabled>奥摩斯港</el-menu-item>
          <el-menu-item index="3-4-5" plain disabled>须弥城</el-menu-item>
          <el-menu-item index="3-4-6" plain disabled>无郁稠林</el-menu-item>
          <el-menu-item index="3-4-7" plain disabled>水天丛林</el-menu-item>
          <el-menu-item index="3-4-8" plain disabled>降魔诸山</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="7" class="title" plain disabled></el-menu-item>
    <el-menu-item index="/gywm"><a href="https://www.mihoyo.com/" target="_blank">关于我们</a></el-menu-item>
    </el-menu>
    </div>
</template>
    
  
  <script>
import mende from '../views/mende.vue';
    export default {
  components: { mende },
        name:'daohang',
      data() {
        return {
          activeIndex: '1',
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>
  <style>

a {
  text-decoration: none;
  color: #fff;
}
.title{
	width: 61%;
}
</style>