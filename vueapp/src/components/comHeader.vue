<template>
    <div>
         <!-- <header  :style="{background:bgc}"> -->
       <header  :style="{background:obj.bg}">
            <span class="goHome">首页</span>
         {{obj.name}}
        </header>
    </div>
</template>

<script>
    export default {
        // props:['bgc'],
        props:['obj']
       
    }
</script>

<style scoped>
   header{
        height:1rem;
        background: #3b3939;
        text-align: center;
        position: fixed;
        top:0px;
        left:0;
        width:100%;
        line-height: 1rem;
        color: white
    }
    .goHome{
        position: absolute;
        left:0.1rem;
        top:50%;
        transform: translateY(-50%);
    }
    
</style>