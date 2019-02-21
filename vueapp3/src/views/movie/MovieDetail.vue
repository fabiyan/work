<template>
    <div>
        <img :src="mdetail.images.small" alt="">
        {{$route.params.movieId}}
        {{mdetail.title}}
    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data(){
            return{
                mdetail:{}
            }
        },
        created() {
            Axios.get('/data/moviedetail.json')
            .then((result)=>{
                console.log(result);
                //  console.log(result.data.id);
                this.mdetail=result.data;
            }).catch('获取资源失败')
        },
        
    }
</script>

<style scoped>

</style>