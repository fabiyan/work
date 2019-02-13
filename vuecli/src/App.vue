<template>
  <div id="app">
    <button @click="prev()">&lt;</button>
     <button @click="next()">&gt;</button>
      <button @click="home()">pull</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/abc">ABC</router-link> |
        <router-link to="/Home">redirect</router-link> |
         <router-link to="/redict/xx/6">Redict</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
       <router-link to="/about/lisi/5">About</router-link> |
      <!-- <router-link to="/Mine">Mine</router-link> | -->
      <router-link :to="{name:'Mine',params:{name:'zs',id:'001'}}">Mine</router-link> |
      <router-link to="/Test">Test</router-link> |
      <!-- <router-link to="/xxxxxx">Error</router-link> | -->
       <router-link to="/count">Count</router-link> |
      


    </div>
    <transition name="faded">
     <router-view/>
    </transition>
   
  </div>
</template>
<script>
export default {
  methods:{
     prev(){
    this.$router.go(-1);
  },
    next(){
       this.$router.go(1);
    },
    home(){
      this.$router.push('/');
    }
  }
 
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.faded-enter{
  transform: translateX(-100%);
}
.faded-enter-active{
  transition: transform 2s ease;
}
.faded-enter-to{
  transform: translateX(0);
}
.faded-leave{
  opacity: 1;
}
.faded-leave-active{
  transition: opacity 2s ease;
}
.faded-leave-to{
  opacity: 0;
}
</style>
