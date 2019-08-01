<!--这是子组件-->
<template>
  <div class="CakeList">
    <div class="CakeAll" v-for="(item,i) of list" :key="i">
      <!--蛋糕页大图-->
      <div class="CakeListImg">
        <a href="#">
          <img :src="'http://127.0.0.1:3000/img/index/'+item.pic">
        </a>
      </div>
      <!--大图下文字-->
      <div class="CakeListText">
        <span class="text1">{{item.Ctitle}}</span>
        <span class="text2">新品</span>
        <!--购物车按钮-->
        <div class="ListShop">
          <a href="#">
            <img src="../assets/shop.png">
          </a>
        </div>
        <div class="Etext">{{item.Etitle}}</div>
        <div class="ListPrice">￥{{item.price}}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .CakeList{
    background:#fff;
   display:flex;
    flex-wrap:wrap;/*自动换行 */
    justify-content:space-between;}
  .CakeAll{margin:3px 0px;}
  .CakeListImg>a>img{
    max-width:176px;
    max-height:176px;
    margin:3.75px 3.75px;
  }
  .CakeListText{
    display:block;
    position:relative;
  }
  .text1{
    color:#000;
    font-size:.267rem;
    font-weight:700;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    max-width:80%;
    overflow:hidden;
    margin:.0.5rem;
    float: left;
  }
  .text2{
    float:left;
    background-color:#ffe32a;
    font-size:.3rem;
    display:inline-block;
    line-height:13px;
    padding:.02rem .1rem 0;
    margin-top:.01rem;
    margin-left:.1rem;
    margin-bottom:5px;
    width:25px;
    height:13px;
  }
  .text2:after{
    content:'';
    display:block;
    clear:both;
  }
  .ListShop>a>img{
    width:30px;
    height:30px;
    float:left;
    margin-left:40px;
    margin-top:-5px;
  }
  .ListShop:after{
    content:'';
    display:block;
    clear:both;
  }
  .Etext{
    overflow:hidden;
    margin-top:-3px;
    margin-left:9px;
    content:'';
    display:block;
    clear:both;
    position:relative;
    color:#7F7F7F;
    font-size:.1rem;
  }
  .ListPrice{
    font-size:.260rem;
    overflow:hidden;
    margin:8px 9px;
  }
</style>
<script>
//导出默认的对象
export default {
  data:function(){//当前组件共享的数据
    return {
      list:[],
      pno:43
    }//数据
  },
  created(){
    //虚拟树创建完成(页面刷新)
    var url="index";
        var opn={pno:this.pno}
        this.axios.get(url,{params:opn}).then(result=>{
          // console.log(result.data.data);
         this.list=(result.data).slice(35);
          console.log(result)
      //  console.log(result.data,123456)
        })
        .catch(err=>{
          console.log(err)
        })
    }
  }
</script>
