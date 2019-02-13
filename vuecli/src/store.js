import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0,
    a:11
  },
  mutations: {
    add(state){
      state.count++;
    },
    add2(state,num){
      state.count+=num;
    }
  },
  getters: {
    sum:(state)=>{
      return state.count+state.a
    } 
  },
  actions: {

  },
});
