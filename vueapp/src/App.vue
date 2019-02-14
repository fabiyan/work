<template>
  <div id="app">
    <Cheader :bgc="bgc" :menue="men">
    </Cheader>
     <div id="content">
           <router-view></router-view>
      </div>
      
      <Cfooter :menu="men" @bgcolor="color"></Cfooter>
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
      bgc:''
    }
  },
  methods: {
    color(bg){
      console.log(bg)
      this.bgc=bg;
    }
  },
}
</script>
<style>
#content {
 margin:1rem auto;
 background: gray;
}

</style>
