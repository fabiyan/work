import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Book from './views/book/Book.vue'
import Movie from './views/movie/Movie.vue'
import Music from './views/music/Music.vue'
import Photo from './views/photo/Photo.vue'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
