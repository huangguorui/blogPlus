import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.use(iView);

import ViewUI from 'view-design';

// import style
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
import constDefault from './utils/constDefault';

//elementui引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false



// 组件注册
import components from '@/utils/components.js'
Vue.use(components)

//导入全局组件
import axios from 'axios'
Vue.prototype.$axios = axios
//注入原型，全局通用
Vue.prototype.$constDefault = constDefault.constDefaule

//组件注册

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')