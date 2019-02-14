<template>
  <div id="app">
    <Cheader></Cheader>
     <div id="content">
           <router-view></router-view>
      </div>
      
      <Cfooter></Cfooter>
  </div>
</template>
<script>
import Cheader from './components/comHeader.vue'
import Cfooter from '@/components/comFooter.vue'
export default {
   components:{
    Cheader,
    Cfooter
  }
}
</script>
<style>
*{
  margin:0;
  padding:0;
}
#content {
 margin:3rem 0;
 margin-left:0;
 
 background: gray;
}

</style>
