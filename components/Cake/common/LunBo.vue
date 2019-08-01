<template>
  <div id="slider">
    <!--window上图中红线框-->
    <div class="window">   
      <!--注意这里的:style 这是图片列表，排成一排-->
      <ul class="container" :style="containerStyle">  
        <!--列表最前面的辅助图，它和图3一样，用于无限滚动-->
        <li>  
          <img :src="sliders[sliders.length - 1].img">
        </li>
        <!--通过v-for渲染的需要展示的3张图-->
        <li v-for="(item, index) in sliders" :key="index">  
          <img :src="item.img">
        </li>
        <!--列表最后面的辅助图，它和图1一样，用于无限滚动-->
        <li>  
          <img :src="sliders[0].img">
        </li>
      </ul>
      <!--两侧的箭头-->
      <!-- <ul class="direction">  
        <li class="left">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>          
        </li>
        <li class="right">
          <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>          
        </li>
      </ul> -->
      <!--下面的小圆点-->
      <ul class="dots">  
        <li v-for="(dot, i) in sliders" :key="i" 
        :class="{dotted: i === (currentIndex-1)}"
        >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'slider',
  data () {
    return {
      sliders:[
        {
          img:'http://127.0.0.1:3000/img/index/0.jpg'
        },
        {
          img:'http://127.0.0.1:3000/img/index/0.jpg'
        },
        {
          img:'http://127.0.0.1:3000/img/index/0.jpg'
        }
      ],
      currentIndex:1,
      distance:-600
    }
  },
  computed:{
    //这里用了计算属性，用transform来移动整个图片列表
    containerStyle() {  
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    }
  }
}
</script>