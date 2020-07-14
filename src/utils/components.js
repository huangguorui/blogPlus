import drawerM from '@/components/drawerM/drawerM';
import pageM from '@/components/pageM/pageM';
import tableM from '@/components/tableM/tableM';
import modalM from '@/components/modalM/modalM'
export default (Vue) => {
    Vue.component("drawer-m", drawerM)
    Vue.component('page-m', pageM)
    Vue.component('table-m', tableM)
    Vue.component('modal-m', modalM)
}