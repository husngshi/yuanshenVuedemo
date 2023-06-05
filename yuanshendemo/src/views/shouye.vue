<template>
    <div>
        <Lubo/>
        <router-view></router-view>
        <el-popover
  ref="popover2"
  placement="bottom"
  title="欢迎"
  width="200"
  trigger="click"
  content="来到原神主题站">
</el-popover>
<el-button v-popover:popover2>请点击<music2></music2></el-button>
<music2/>
    </div>
    
</template>

<script>



//1.引入实现路由切换的组件
import Lubo from '@/components/lubo.vue';

import music2 from './music2.vue';

export default {
name:'shouye',
components: {
    Lubo,
music2,
Lubo,
}

}
</script>

<style>

</style>