<template>
   <div>
      <ul >
          <li v-for="(obj,index) in scenicList" :key="index">
              <div class="img">
                  <img :src="obj.imgurl" alt="">
                 <div class="desc">
                    <h5>景点：{{obj.title}}</h5>
                    <h5>级别：{{obj.grade}}</h5>
                    <h5>票价：{{obj.price_min}}</h5>
                    <h5>所在地：{{obj.address}}</h5>
                 </div>
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
            scenicList:[]
        }
    },
   created(){
       axios.get('/data/scenic.json')
       .then((result)=>{
        //    console.log(result.data.result);
           this.scenicList=result.data.result;
       }).catch('数据请求失败');
   }
}
</script>
<style>
 .img{
     border-bottom: 1px solid gray;
     width:7rem;
     height: 3rem;
     margin-top:1px;
     display: flex;
 }
 .desc{
     flex-grow: 1;
 }
 /* h5{
     text-align:center;
 } */
</style>
