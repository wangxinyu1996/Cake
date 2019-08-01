<template>
   <div>
     <!--面板-->

     <mt-tab-container v-model='selected'>
     <!--微信面板-->
      <mt-tab-container-item id="m1">
          <h3>微信(512)</h3>
          <div class="body">
              <div class="d1" v-for="(item,i) of list" :key="i">
                  <img :src="item.pi" alt="" >
                  <div>item.pi</div>
                  <h4 class="h4">{{item.title}}</h4><br><span>{{item.text}}</span>
              </div>
          </div>
       </mt-tab-container-item>
       <mt-tab-container-item id="m2">
         <!--蛋糕-->
         <list-cake></list-cake>
       </mt-tab-container-item>
       <mt-tab-container-item id="m3">
         <!--小食-->
         <list-small></list-small>
       </mt-tab-container-item>
       <mt-tab-container-item id="m4">
         我的
       </mt-tab-container-item>
     </mt-tab-container>
     <!--底部导航栏-->
     <mt-tabbar class='mt-tabbar' fixed v-model="selected">
       <mt-tab-item id="m1" class='mt-item'>
          精选
       </mt-tab-item>
       <mt-tab-item id="m2" class='mt-item'>
          蛋糕
       </mt-tab-item>
       <mt-tab-item id="m3" class='mt-item'>
          小食
       </mt-tab-item>
       <mt-tab-item id="m4" class='mt-item'>
          购物车
       </mt-tab-item>
     </mt-tabbar>
   </div>
</template>

<script>
  //引入子组件
import index_list from "./index_list";
import index_small from "./index_small"
//导出默认的对象
export default {
  data(){//当前组件共享的数据
    return {
      selected:'微信',
      list:[
        {pi:"/img/1.c876b82e.jpg",title:'腾讯新闻',text:'美女留学生秀中文绕口令&nbsp;台下惊呆了'},
        {pi:"../../assets/logo.png",title:'腾讯新闻',text:'美女留学生秀中文绕口令&nbsp;台下惊呆了'}
      ]
    }//数据

  },
   components:{
        //2.在这里注册子组件
        "list-cake":index_list,
        "list-small":index_small
    },
}

</script>
<style scoped>
  .mt-tabbar{
    width:100%;
    height:50px;
  }
    #m1{
    width:93px;
    height:50px;
    text-align:center;
     line-height:2;
    font-size: 17px;
  }
  .mt-item:after{
    content='|'
    display:inline;
  }
</style>