<template>

 <div class="con">
 
     <ul class="slide">  
         <transition-group name="fade">
            <li v-for='(value,index) in imgs' :key="index" v-show="iNow==index">
                <img :src="value" alt="">
            </li>
              </transition-group> 
        </ul>
        <ul class="btns">
            <li v-for='(value,index) in imgs' :key="index" :class="{active:iNow==index}"></li>
        </ul>
        
    </div>

   
</template>

<script>
    export default {
        data(){
            return {
              
                iNow:0
            }
        },
        props:['imgs'],
        created() {
            setInterval(()=>{
                this.iNow++;
                if(this.iNow==this.imgs.length)
                this.iNow=0;
        },2000)
    }
}
</script>

<style scoped>
.slide li{
    width:100%;
    position: absolute;
    left:0;
    top:0;
}
.slide img{
    width:100%;
    height:6rem;
}
.btns li{
    width:0.2rem;
    height:0.2rem;
    background: tomato;
    border-radius: 50%;
      float:left;
      margin-right:0.05rem;
}
.con{
    position: relative;
    overflow: hidden;
     height:6rem;
}
.btns{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom:0.1rem;
}
.btns li.active{
    background:turquoise;
}
.fade-enter{
transform: translateX(100%);
}
.fade-enter-active{
transition: transform 1s ease;
}
.fade-enter-to{
    transform: translateX(0)
}
.fade-leave{
transform: translateX(0);
}
.fade-leave-active{
transition: transform 1s ease;
}
.fade-leave-to{
    transform: translateX(-100%)
}
</style>