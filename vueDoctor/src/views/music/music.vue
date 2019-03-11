<template>
    <div>
        
        <img v-for="(obj,index) in imglist" :key="index" :src="obj.bg" alt="" @click="gomusic">

    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            imglist:[]
        }
    },
    created(){
        axios.get('/data/musiclist.json')
        .then((result)=>{
            console.log(result.data.img);
            this.imglist=result.data.img;
        }).catch('请求资源失败');
    },
    methods: {
        gomusic(){
            this.$router.push('/musicdetail');
        }
    },
}
</script>
<style>
    img{
        width:50%;
    }
</style>