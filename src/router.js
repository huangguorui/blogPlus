import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import about from './views/about.vue'
import article from './views/article.vue'
import anchor from './views/anchor.vue'
import user from './views/user.vue'
import order from './views/orderList.vue'
import a from './views/additional.vue'
import nofound from './views/404.vue'

Vue.use(Router)
import iView from 'iview';
Vue.use(iView);
const router = new Router({
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
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/a',
      name: 'a',
      component: a
    },
    {
      path: '*',
      name: '404',
      component: nofound
    }
  ],
  scrollBehavior(to, from, savePosition) { //点击浏览器的前进后退或切换导航触发
    //to   当前需要进入的目标路由对象（要去向哪里）
    //from  离开的路由对象    （从哪里来）
    //savePosition   滚动的坐标
    console.log(to);
    console.log(from);
    console.log(savePosition);
    if (savePosition) {
      return savePosition;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

export default router