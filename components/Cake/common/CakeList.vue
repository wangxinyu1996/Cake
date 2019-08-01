<template>
  <div class="cakelist">
    <div class="ListTitle">
      <!--价格-->
      <div class="price">
        <div class="PriceText">
          ¥ 298.00
        </div>
      </div>
      <!--内容块1-->
      <div class="DetailsText1">
        <div class="text">
          <div class="title1">
            <img src="../assets/clock.png">
            <span>提前5小时预订</span>
          </div>
          <div class="title2">
            <img src="../assets/rule.png">
            <span>约高：9.5cm</span>
          </div>
          <div class="title2">
            <img src="../assets/cake.png">
            <span>681g</span>
          </div>
          <div class="title3">
            <img src="../assets/icon_nb1.png">
            <span>标配餐具x5份</span>
          </div>
        </div>
      </div>
      <!--内容块2-->
      <div class="DetailsText2">
        <div class="text">
          <img src="../assets/rule.png">
          <span>芝士</span>
          <span>水果</span>
        </div>
      </div>
      <!--提示-->
      <div class="danger">
        <div class="text">
          <img src="../assets/danger.png">
          <span>玫瑰花过敏者慎选、玫瑰花不建议食用</span>
        </div>
      </div>
      <!--介绍-->
      <div class="introduce">
        <div class="Cintroduce">
          甜糯的荔枝果肉，是相逢的小欢喜。玫瑰花汁的香意，似今夕的风拂入梦。树莓果茸仿若琥珀，几丝微酸让思念转浓。请住进爱人的眼中，默读这份地久天长。
        </div>
        <div class="Eintroduce">
          La douce chair de litchi est une joie heureuse.Le parfum du jus de rose est comme le vent ce soir.La chair de framboise ressemble à de l'ambre et quelques traces d'acidité amincissent les pensées.S'il vous plaît vivre dans les yeux de amant, la lecture silencieuse cela dure toujours.
        </div>
      </div>
      <!--促销-->
      <div class="promotion">
        <div class="text">
          <span class="pro">促销</span>
          <div class="redemption">
            <span class="red">换购</span>
            <span class="buy">买蛋糕可参加优惠换购</span>
          </div>
          <span class="details">
            <a href="#">
              详情
              <img src="../assets/right.png">
            </a>
          </span>
        </div>
      </div>
      <!--DetailsEvaluate-->





    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },

}
</script>
<style scoped>
  a{text-decoration:none;}
  /*价格*/
  .PriceText{
    font-size:20px;
    margin-left:5px;
  }
  .cakelist{
    background-color:#fff;
    width:100%;
    padding:.2rem .2rem 0;
  }
  /*内容块1*/
  .DetailsText1{
    display: flex;
    border-top: 1px solid #e9e9e9;
    margin-top:5px;
  }
  .DetailsText1 .text{
    text-align:left;
    margin-top:15px;
  }
  .DetailsText1 .text div{
    position: relative;
  }
  /*图1*/
  .DetailsText1 .title1{
    float:left;
    margin-left:5px;
  }
  /*图片1,2,3*/
  .DetailsText1 img{
    height:15px;
    width:15px;
    position:absolute;
    left:1px;
    top:4px;
  }
  /*图片文字*/
  .DetailsText1 span{
    color:#8D8D8D;
    font-size:1px;
    line-height: 21px;
    margin-left:22px;
  }
  /*图2,3*/
  .DetailsText1 .title2{
    float:left;
    margin-left:23px;
  }
  /*图4*/
  .DetailsText1 .title3{
    padding-top:26px;
  }
  /*图片4*/
  .DetailsText1 .title3 img{
    height:15px;
    width:15px;
    position:absolute;
    left:6px;
    top:31px;
  }
   /*图片4文字*/
  .DetailsText1 .title3 span{
    color:#8D8D8D;
    font-size:1px;
    line-height:21px;
    margin-left:27px;
  }
  /*内容块2*/
  .DetailsText2{
    display:flex;
    border-top:1px solid #e9e9e9;
    margin-top:10px;
    padding-top:10px !important;
  }
  .DetailsText2 .text{
    position: relative;
  }
  /*图片*/
  .DetailsText2 img{
    height:15px;
    width:15px;
    position:absolute;
    left:7px;
    top:6px;
  }
  /*图片文字*/
  .DetailsText2 span{
    color:#000;
    font-size:1px;
    display:inline-block;
    width:55px;
    height:20px;
    text-align:center;
    line-height:20px;
    border:1px solid #ccc;
    border-radius:8px;
    margin-left:32px;
  }
  /*提示*/
  .danger{
    display:flex;
    border-top:1px solid #e9e9e9;
    margin-top:10px;
    padding-top:10px !important;
  }
  .daner .text{
    position: relative;
  }
  /*图片*/
  .danger .text img{
    height:25px;
    width:25px;
    position:absolute;
    left:5px;
    top:162px;
  }
  /*图片文字*/
  .danger .text span{
    color:red;
    line-height:21px;
    margin-left:35px;
  }
  /*介绍*/
  .introduce{
    border-top:1px solid #e9e9e9;
    margin-top:10px;
    padding-top:10px !important;
  }
  .introduce .Cintroduce{
    color:#000;
    font-size:1px;
    font-weight:bold;
    width:345px;
    height:60px;
    letter-spacing:2px;
    text-align: justify;
    margin-left:6px;
  }
  .introduce .Eintroduce{
    color:#8d8d8d;
    font-size:1px;
    width:345px;
    height:95px;
    letter-spacing:1px;
    text-align: justify;
    margin-left:6px;
  }
  /*促销*/
  .promotion{
    margin-top:10px;
    padding-top:10px !important;
    margin-left:5px;
  }
  /*促销文字*/
  .promotion .pro{
    color:#8d8d8d;
    font-size:1px;
    display:inline;
  }
  /*换购*/
  .promotion .redemption{
    display:inline-flex;
    margin-left:25px;
  }
  .promotion .red{
    color:red;
    font-size:1px;
    display:inline-block;
    width:45px;
    height:20px;
    text-align:center;
    line-height:20px;
    border:1px solid red;
    border-radius:8px;
  }
  /*换购后文字*/
  .promotion .buy{
    display:inline-block;
    font-size:1px;
    color:#8d8d8d;
    height:20px;
    text-align:center;
    line-height:20px;
    margin-left:5PX;
  }
  /*详情*/
  .promotion .details a{
    display:inline-block;
    font-size:1px;
    color:#8d8d8d;
    height:20px;
    text-align:center;
    line-height:20px;
    margin-left:70px;
  }
  .promotion .details a img{
    height:15px;
    width:20px;
    vertical-align:middle;
  }
</style>