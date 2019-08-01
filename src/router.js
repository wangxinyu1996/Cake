//router.js引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
//1:引入index.vue父组件
import index from "./components/Cake/common/index.vue"
//2:引入index_list.vue子组件
import index_list from "./components/Cake/common/index_list.vue"
//3:引入LunBo.vue子组件
import LunBo from "./components/Cake/common/LunBo.vue"
//4:引入CakeList.vue子组件
import CakeList from "./components/Cake/common/CakeList.vue"
//5:
import top from "./components/Cake/common/top.vue"


Vue.use(Router)
//2:为Exam01.vue配置路径
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/index',component:index},
    {path:'/index_list',component:index_list},
    {path:'/LunBo',component:LunBo},
    {path:'/CakeList',component:CakeList},
    {path:'/top',component:top}
  ],
  mode:'history'
})
