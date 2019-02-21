<template>
    <div class="footer" :style="{background:obj.bg}">
        <ul id="colo">
            <li v-for="(obj,index) in menu" :key="index">
                <router-link :to="obj.path" @click.native="color(obj)">{{obj.name}}</router-link>
            </li>
            <!-- <li><router-link to="/music">音乐</router-link></li>
            <li><router-link to="book">图书</router-link></li>
            <li><router-link to="photo">图片</router-link></li>  -->
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                obg:{}
            }
        },
        props:['menu','obj'],
        methods:{
        color(obj){
            this.obg=obj;
            // this.$emit('bgcolor',this.bg)
             this.$emit('bgcolor',obj)
        }
    }
    }
//   created(){
//     let result=this.menu.filter((obj,index)=>{
//       return obj.path==this.$route.path;
//     });
//     this.obj=result[0];
//     console.log(this.obj);
//   }
  
</script>

<style scoped>
.footer{
     position:fixed;
    width:100%;
    height:1rem;
    left:0;
    bottom:0;
    background: #3b3939;
}
.footer ul{
    display: flex;
}
li{
     flex-grow: 1;
    line-height: 1rem;
    text-align: center;
    color: #fff;
}
.footer a{
    color:#fff;
    outline: none;
}

/* 使点击时的字体颜色变色 */
.footer a.router-link-active{
    color:pink;
} 
</style>