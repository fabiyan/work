<template>
    <div class="pdetail">
      <router-link to="/photo">
      <v-touch class="photo" v-on:swipeleft="next()" v-on:swiperight="pre()">
        <!-- {{$route.params.index}} -->
        <img :src="$store.state.photos[iNow].src" class="image">
    </v-touch>
    </router-link>  
    </div>
</template>

<script>
  import {mapState} from 'vuex';
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data(){
            return {
                iNow:this.$route.params.index
            }
        },
        computed: {
            ...mapState(['photos'])
        },
        created() {
            if(this.photos.length==0){
                this.$router.push('/photo');
            }
        },
        methods: {
            next(){
                this.iNow++;
                console.log(this.iNow)
            },
            pre(){
                 this.iNow--;
            }
        },
    }
</script>

<style scoped>
    .pdetail .photo{
        position:fixed;
        left:0;
        bottom: 0;
        top:0;
        right: 0;
        background: black;
        z-index:1;
    }
    .pdetail .image{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        
       /* width:100%;
         */
    }
</style>