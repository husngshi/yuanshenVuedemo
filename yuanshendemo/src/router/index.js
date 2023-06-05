//1.引入vue-router
import VueRouter from "vue-router";
//2.引入创建的路由组件
import Mende from '../views/mende.vue'
import Liyue from '../views/liyue.vue'
import Daoqi from '../views/daoqi.vue'
import Xumi from '../views/xumi.vue'
import Shouye from '../views/shouye.vue'
import Gjh from '../views/diqu/md/gjh.vue'
import Gk from '../views/diqu/ly/gk.vue'
import Ld from '../views/diqu/dq/ld.vue'
import Hcg from '../views/diqu/xm/hcg.vue'
import Zhuye from '../components/zhuye.vue'
import Jsqb from "../components/jsqb.vue"
import Gywm from '../views/gywm.vue'
 

//3.创建并暴露一个VueRouter
export default new VueRouter({
    //配置路由路径和路由组件
    routes:[
        {
            path:'/gywm',
            component:Gywm,
        },
        {
            path:'/zhuye',
            component:Zhuye,
        },
        {
            path:'/jsqb',
            component:Jsqb,
            children:[//配置嵌套路由
            
        ]
        },
        {
            path:'/mende',//配置路径
            component:Mende,//跳转路径对应的组件

            //配置嵌套路由的路径
            // children:[//配置嵌套路由
            // {
            //     path:'TestA',//子路由路径不加斜杠/
            //     component:TestA,
            // }
        // ]
        },
        {
            path:'/liyue',
            component:Liyue,
            // children:[
            //     {
            //         path:'TestB',
            //         component:TestB
            //     }
            // ]
        },
        {
            path:'/daoqi',
            component:Daoqi,
        },
        {
            path:'/xumi',
            component:Xumi,
        },
        {
            path:'/shouye',
            component:Shouye,
        },
        {
            path:'/gjh',
            component:Gjh,
        },
        {
            path:'/gk',
            component:Gk
        },
        {
            path:'/ld',
            component:Ld
        },
        {
            path:'/hcg',
            component:Hcg
        }
    ]
})