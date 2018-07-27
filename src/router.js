import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Catalog from './views/Catalog.vue'

import Post from './views/Post.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: Home
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/catalog/:tag/:id',
        name: 'post',
        component: Post
    }
  ]
})
