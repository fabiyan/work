import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    men:[
      {
        path:'/book',
        name:'图书',
        bg:'#3b3939'
      },{
        path:'/movie',
        name:'电影',
        bg:'#ff3012'
      },{
        path:'/music',
        name:"音乐",
        bg:'#845900'
      },{
        path:'/photo',
        name:'图片',
        bg:'#532369'
      }
    ],
    bgc:''

  },
  mutations: {

  },
  getters: {
    fcolor:(state)=>{
      state.bgc=state.men.bg
      return state.bgc;
    }
  },
  actions: {

  }
})
