import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上三行不要动保存原来的位置
//原因：引入有序
//第三方组件库在下面引入
//1：完整引入mint-ui
import MintUI from 'mint-ui'
//2：单引入mint-ui样式
import'mint-ui/lib/style.css'
//3：将mint-ui注册Vue
Vue.use(MintUI);
//4:引入图标字体样式文件
import "./font/iconfont.css"
// 5：在main.js引入axios.js文件
import axios from "./axios"


//6:引入axios.js
import Vuex from "vuex"
//7.注册vue组件
Vue.use(Vuex);
//8.创建store
var store=new Vuex.Store({
  state:{cartCount:0},//这是vuex中全局共享的数据
  //修改vuex中全局共享数据
  mutations:{
    //购物车数量加1
    increment(state){
      state.cartCount++;
    },
    //购物车数量增加指定值5
    updateCount(state,c){
      state.cartCount+=c;
    }
  },
  // 获取vuex中全局共享的数据
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
})


//9.将store保存进vue实例中
Vue.config.productionTip = false
//Vue.prototype.axios=axios;//这样在xxx.vue中就可以直接用:this.axios.get()来访问了 但是用axios有一个坑，因为axios默认不带钥匙(验证信息)到服务器，也就是无法打开自己的柜子，打开访问自己的信息，解决：在main.js中要求axios必须携带钥匙，   axios.defaults.withCredentials=true;


new Vue({
  router,
  render: h => h(App),//这是创建组件的操作
  store,//第9步
}).$mount('#app')
