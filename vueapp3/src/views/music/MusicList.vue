<template>
    <div>
       <aplayer  :music="mlist[0]" v-if="isShow" :list="mlist" showLrc/>
   
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import Axios from "axios"
    export default {
        components:{
            Aplayer
        },
        computed: {
            music(){
                return this.mlist[0]
            }
        },
        data(){
            return{
                mlist:[],
                isShow:false
            }
        },
        created() {
             Axios.get("/data/musicdata.json")
            .then((result)=>{
                console.log(result);
            //    var data =  JSON.stringify(result);
            //     var a = JSON.parse(data)
                // this.mlist= result.data.musicData;
                console.log(result.data.musicData)
               
                result.data.musicData.forEach(obj => {
                    let olist={
                        title:obj.title,
                        artist:obj.author,
                        src:obj.src,
                        pic:obj.musicImgSrc,
                        // 
                        lrc:`http://localhost:8080/${obj.lrc}`
                    }
                    this.mlist.push(olist);
                    this.isShow=true;
            
                });
                console.log(this.mlist);
            }).catch('获取资源失败');
        },
    }
</script>

<style scoped>

</style>