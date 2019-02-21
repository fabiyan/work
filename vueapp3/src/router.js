import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Book from './views/book/Book.vue'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Photo from './views/photo/Photo.vue'
import PhotoDetail from './views/photo/photodetail.vue'
import MusicList from './views/music/MusicList.vue'
import Moviedetail from './views/movie/MovieDetail.vue'
import Slide from './components/slide.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/movie'
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/movie',
      component: Movie
    },{
      path: '/music',
      component: Music
    },{
      path: '/photo',
      component: Photo
    },{
      path: '/photodetail/:index',
      component: PhotoDetail
    },{
      path: '/musiclist',
      component:MusicList
    }
    ,{
      path: '/moviedetail/:movieId',
      component:Moviedetail
    },{
      path:'/slide',
      component:Slide
    }
  ]
})
