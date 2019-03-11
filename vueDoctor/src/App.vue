<template>
  <div id="app">
      <c-header></c-header>
      <div class="content">
        <router-view></router-view>
      </div>
      <c-footer :list="list"></c-footer>
  </div>
</template>

<script>
import CHeader from './components/Header'
import CFooter from './components/Footer'
import {mapMutations} from 'vuex';
export default {
  data(){
    return{
    list:[
       {
          path:'/scenic',
          name:'旅游',
          bg:'#3b3939'
        },{
          path:'/food',
          name:'美食',
          bg:'#f6e20a'
        },{
          path:'/music',
          name:"音乐",
          bg:'#845900'
        },{
          path:'/read',
          name:'阅读',
          bg:'#532369'
        }
      ]
    }
  },
  components:{
    CHeader,
    CFooter
  },
   methods:mapMutations(["change"]),
  created () {
      let result = this.list.filter((obj,index)=>{
        return obj.path == this.$route.path;
      });
      if(result.length){
        // 修改state中存的name color 改成result[0].name result[0].bgColor
        this.change(result[0]);
      }
  }
}

</script>
<style>
.content {
 margin:1rem 0;
 background: whitesmoke;
}
</style>