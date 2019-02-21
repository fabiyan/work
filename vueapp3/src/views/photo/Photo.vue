<template>
    <div class="photo">
        <img v-for="(obj,index) in $store.state.photos" :key="index" :src="obj.src" alt="" @click="godetail(index)">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                // photo:[]
            }
        },
        created() {
            axios.get("/data/photodata.json")
            .then((result)=>{
                // this.photo=[...result.data.photoData]; 
                this.$store.commit('add',result.data.photoData)  
            })
        },
        methods: {
            godetail(index){
                this.$router.push('/photodetail/'+index);
            }
        },
    }
</script>

<style scoped>
   
    .photo img{
        width:50%;
    }
</style>