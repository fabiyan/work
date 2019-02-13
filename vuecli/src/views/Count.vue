<template>
    <div>
        <h1>store</h1>
        <h3>{{$store.state.count}}</h3>
        <h3>{{count}}</h3>
        <h3>{{a}}</h3>
        <h3>结果为：{{sum}}</h3>
        <button @click="$store.commit('add')">add</button>
          <button @click="$store.commit('add2',2)">add+2</button>
          <button @click="add2(3)">add+3</button>
    </div>
</template>

<script>
    import {mapState ,mapMutations, mapGetters} from 'vuex';
    export default {
         computed: {
             ...mapState(['count','a']),
             ...mapGetters(['sum'])

         },
         methods: mapMutations(['add2'])
    }
   
</script>

<style scoped>

</style>