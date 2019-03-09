<template>
  <div id="movie">
    <ul class="container">
      <li v-for="(obj,index) in movieList" :key="index" @click="godetail(obj.id)">
        <img :src="obj.images.small" alt>
        <div class="info">
          <h3>{{obj.title}}</h3>
          <p>
            <span v-for="(actor,index) in obj.casts" :key="index">{{actor.name}} |</span>
          </p>
          <p>{{obj.collect_count}}人已观看</p>
          <p>年份：{{obj.year}}</p>
          <p>
            <span v-for="(type,index) in obj.genres" :key="index">{{type}}/</span>
          </p>
        </div>
      </li>
    </ul>
    <img class="loading" src="@/assets/imgs/loading.gif" alt v-show="isShow">
    <div v-show="isBottom">到底了 ~ ~ ~</div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow: false,
      isBottom: false
    };
  },
  created() {
    this.getMovie();
    window.onscroll = () =>{
      // 滚动条滑出的高度
      console.log(document.documentElement.scrollTop);
      let st = document.documentElement.scrollTop;
      // 页面的高度
      console.log(document.documentElement.clientHeight);
      let ch = document.documentElement.clientHeight;
      // 整个文档的高度
      console.log(document.documentElement.scrollHeight);
      let sh = document.documentElement.scrollHeight;

      if (st + ch == sh && !this.isBottom) {
        this.getMovie();
      }
    }
    // Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10')
  },
  methods: {
    getMovie() {
      this.isShow = true;
      // Axios.get('/movie.json')
      Axios.get(
        "https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start=" +
          this.movieList.length +
          "&count=5"
      )
      // Axios.get('/movie'+this.movieList.length+'.json')
        .then(result => {
          console.log(result);
          // this.movieList=result.data.subjects;
          this.movieList = [...this.movieList, ...result.data.subjects];
          this.isShow = false;
          if (this.movieList.length == result.data.total) this.isBottom = true;
        })
        .catch(() => {
          console.log("获取资源失败");
        });
    },
    godetail(id){
                this.$router.push('/moviedetail/'+id);
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0.1rem;
}
img {
  width: 90px;
  height: 124px;
}
li {
  display: flex;
  border-bottom: 1px solid gray;
}
.info {
  flex-grow: 1;
  margin-left: 0.2rem;
}
.loading {
  width: 0.5rem;
  height: 0.5rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>