import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import about from './views/about.vue'
import article from './views/article.vue'
import anchor from './views/anchor.vue'
import user from './views/user.vue'
import nofound from './views/404.vue'

import game from './views/game.vue'
import turnTable from './views/turnTable.vue'

Vue.use(Router)
import iView from 'iview';
Vue.use(iView);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: "测试测试测试",
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: "测试测试测试",
      }
    },
    {
      path: '/article/id/:id',
      name: 'article',
      component: article,
      meta: {
        title: "article",
      }
    },
    {
      path: '/anchor',
      name: 'anchor',
      component: anchor,
      meta: {
        title: "锚点测试界面",
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        title: "用户中心",
      }
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/turntable',
      name: 'turntable',
      component: turnTable
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

  /* 路由发生变化修改页面meta */
  if (to.meta.content) {
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');

    meta.content = 'width=device-width, initial-scale=1';
    meta.name = 'viewport';
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

export default router