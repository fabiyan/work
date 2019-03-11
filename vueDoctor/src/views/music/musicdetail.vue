<template>
    <div>
        <aplayer autoplay :music="mlist[1]" :list="mlist" v-if="isShow" showLrc/>
    </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'
export default {
    data(){
        return{
            mlist:[],
            isShow :false
        }
    },
    components:{
        Aplayer
    },
    created(){
        axios.get('/data/musicdetail.json')
        .then((result)=>{
            result.data.musicData.forEach(obj => {
                    let obj1 = {
                        title:obj.title,
                        artist:obj.author,
                        src:obj.src,
                        pic:obj.musicImgSrc,
                        lrc:`http://localhost:8080/${obj.lrc}`
                    }
                    // http://localhost:8080/lrc/我要你.lrc
                    this.mlist.push(obj1);
                });
               
            // this.mlist=[...result.data.musicData];
             this.isShow = true;
            console.log(this.mlist);
        })
    }
}
</script>
