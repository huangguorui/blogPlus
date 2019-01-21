import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import about from './views/about.vue'
import article from './views/article.vue'
import anchor from './views/anchor.vue'
import user from './views/user.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/article/id/:id',
      name: 'article',
      component: article
    },
    {
      path: '/anchor',
      name: 'anchor',
      component: anchor
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})