import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import constDefault from './utils/constDefault';



Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(iView);
Vue.use(ElementUI);

//导入全局组件
import axios from 'axios'
Vue.prototype.$axios = axios
//注入原型，全局通用
Vue.prototype.$constDefault = constDefault.constDefaule

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')