<template>
  <div id="app">
    <!-- <Cheader :bgc="bgc" :menue="men"> -->
      <Cheader :obj="obj" :menue="men">
    </Cheader>
     <div id="content">
           <router-view></router-view>
      </div>
      
      <Cfooter :menu="men" :obj="obj" @bgcolor="color"></Cfooter>
  </div>
</template>
<script>
import Cheader from './components/comHeader.vue'
import Cfooter from '@/components/comFooter.vue'
export default {
  components:{
    Cheader,
    Cfooter
  },
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
        }
      ],
      // bgc:''
      obj:{  path:'/book',
          name:'图书',
          bg:'#3b3939'}
    }
  },
  methods: {
    color(obj){
      // console.log(bg)
      // this.bgc=bg;
      this.obj=obj;
    },
    
  },
  created(){
    let result=this.men.filter((obj,index)=>{

      // 判断当前所用的组件this.$route
      return obj.path==this.$route.path;
    });
    if(result.length>0)
      this.obj=result[0];
    console.log(this.obj);
  }
};
</script>
<style>
#content {
 margin:1rem auto;
 background: gray;
}

</style>
