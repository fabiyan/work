<template>
    <div class="content">
        <ul>

            <li v-for="(obj,index) in foods" :key="index" @click="go(index)">
                <img :src="obj.url" alt="">
                <div class="fooddetail">
                    <h4>{{obj.title}}</h4>
                   
                    <h6>{{obj.detail}}</h6>
                    
                     <h3>￥:{{obj.price}}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            foods:[]
        }
    },
    created(){
        axios.get('/data/food.json')
        .then((result)=>{
            console.log(result.data);
            this.foods=result.data.data;
        }).catch('请求资源失败')
    },
    methods: {
        go(index){
            this.$router.push('/fooddetail/'+index)
        }
    },
}
</script>
<style>
li{
    display: flex;
    height:3.1rem;
}
.fooddetail{
    flex-grow:1;
}
h6{
    border-top: 1px black dotted;
    border-bottom: 1px black dotted;
}
h3{
    color:#ff0036;
}
</style>