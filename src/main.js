import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store.js'

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:3000'
//你配了$ajax你就用$ajax 
Vue.prototype.$ajax = axios
//全局守卫
// router.beforeEach((to,from,next)=>{
//   if (to.path=='/login'||to.path=='/register') {
//     next();
//   }else{
//     alert('还没有登录，请先登录！');
//     next('/login')
//   }
// })

//后置钩子
// router.afterEach((to,from)=>{
//   alert("afterEach")
// })

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}
    // return {selector:'.btn'}
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
