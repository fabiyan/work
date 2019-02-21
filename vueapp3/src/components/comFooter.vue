<template>
    <div class="footer" :style="{background:color}">
        <ul id="colo">
          <li v-for="(obj,index) in men" :key="index">
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex';
    export default {
      props:['men'],
      computed:mapState(['color','name']),
      methods:mapMutations(['change'])

    }
  
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
    list-style: none;
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
      text-decoration: none;
}

/* 使点击时的字体颜色变色 */
.footer a.router-link-active{
    color:pink;
} 
</style>