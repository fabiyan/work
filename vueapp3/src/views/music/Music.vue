<template>
    <div id="music">
        <ul>
            <li v-for="(obj,index) in music" :key="index"><img :src="obj.bg" alt="" @click="goList">
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios';
    export default {
        data()
        {
            return {
                music:[]
            }
        },
        created() {
            Axios.get("/data/musiclist.json")
            .then((result)=>{
                console.log(result);
                this.music= result.data.albums;
            })
            .catch('获取资源失败')
        },
        methods: {
            goList(){
                // 路由跳转，跳到固定的路由页面
                this.$router.push('/musiclist')
            }
        },

 }
</script>

<style scoped>
ul{
    padding:0.5rem auto;
}
img{
    width: 3.2rem;
    height: 3.2rem;;


}
#music li{
    float: left;
}
</style>