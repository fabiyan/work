import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   color:'#3b3939',
   name:'图书',
   photos:[]
  },
  mutations: {
    change(state,obj){
      state.color=obj.bg;
      state.name=obj.name;
    },
    add(state,obj){
      state.photos=[...obj];
    }
  },
  getters: {
   
  },
  actions: {

  }
})
