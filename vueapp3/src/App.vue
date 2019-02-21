<template>
  <div id="app">
    <Cheader></Cheader>
     <div id="content">
           <router-view></router-view>
      </div>
      
      <Cfooter :men="men"></Cfooter>
  </div>
</template>
<script>
import Cheader from './components/comHeader.vue'
import Cfooter from '@/components/comFooter.vue'
import {mapMutations} from 'vuex'
export default {
   data(){
    return {
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
        }]
    }
},
   components:{
    Cheader,
    Cfooter
  },
  methods: mapMutations(['change']),
  created() {
    let result=this.men.filter((obj,index)=>{
      return obj.path==this.$route.path;
    });
    if(result.length>0)
      this.change(result[0]);
  }

}
</script>
<style>
#content {
 margin:1rem 0;
 background: whitesmoke;
}

</style>
