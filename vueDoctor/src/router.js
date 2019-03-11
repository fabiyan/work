import Vue from 'vue'
import Router from 'vue-router'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
import Scenic from './views/scenic/scenic.vue'
import Food from './views/food/food.vue'
import Music from './views/music/music.vue'
import Read from './views/read/read.vue'
import Musicdetail from './views/music/musicdetail.vue'
import Fooddetail from './views/food/fooddetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'./scenic'
    },
    {
      path: '/scenic',
      component: Scenic
    },
    {
      path: '/food',
      component: Food
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/read',
      component: Read
    },
    {
      path:'/musicdetail',
      component: Musicdetail
    },{
      path:'/fooddetail/:foodId',
      component: Fooddetail
    }
  ]
})
