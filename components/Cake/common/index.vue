<!--这是父组件-->
<template>
    <div>
  
        <tfooter></tfooter>
    </div>
</template>
<style scoped>
  
</style>

<script>
//1.引入子组件
import footer from "./footer"
//1.2引入json文件【数据】
export default {
    data(){
       return{
           
       }
    },
    components:{
        //2.在这里注册子组件
        "tfooter":footer 
    },
    methods: {
      
    },
}
</script>