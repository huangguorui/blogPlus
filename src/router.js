import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import about from './views/about'
import article from './views/article'
import user from './views/user'
import nofound from './views/404'
import role from './views/role'
import permission from './views/permission'
import rolePermission from './views/rolePermission'
import userRole from './views/userRole'
import tableTab from './views/tableTab'
// import tableTab2 from './views/tableTab2'

import turnTable from './views/turnTable'

Vue.use(Router)
import iView from 'iview';
Vue.use(iView);
const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [{
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: "首页-前端博客",
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
      name: '',
      component: article,
      meta: {
        title: "",
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
      path: '/role',
      name: 'role',
      component: role,
      meta: {
        title: "角色管理",
      }
    },
    {
      path: '/turntable',
      name: 'turntable',
      component: turnTable
    }, {
      path: '/permission',
      name: 'permission',
      component: permission
    },
    {
      path: '/rolePermission',
      name: 'rolePermission',
      component: rolePermission
    },
    {
      path: '/tableTab',
      name: 'tableTab',
      component: tableTab
    }, {
      path: '/userRole',
      name: 'userRole',
      component: userRole
    },
    // {
    //   path: '/tableTab2',
    //   name: 'tableTab2',
    //   component: tableTab2
    // },
    {

      path: '/404',
      name: '404',
      component: nofound
    },
    {
      path: "*", // 此处需特别注意置于最底部
      redirect: "/404"
    }
  ],
  scrollBehavior(to, from, savePosition) { //点击浏览器的前进后退或切换导航触发
    //to   当前需要进入的目标路由对象（要去向哪里）
    //from  离开的路由对象    （从哪里来）
    //savePosition   滚动的坐标
    //console.log(to);
    //console.log(from);
    //console.log(savePosition);
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

    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    meta.name = 'viewport';
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  //console.log('拦截到的数据为',to)

  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

export default router