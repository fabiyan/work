import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:'#3b3939',
    name:'旅游'
  },
  mutations: {
    change(state,obj){
      state.color=obj.bg;
      state.name=obj.name;
    }
  },
  actions: {

  }
})
