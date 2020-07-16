import drawerM from '@/components/drawerM/drawerM';
import pageM from '@/components/pageM/pageM';
import tableM from '@/components/tableM/tableM';
import tableExpandRow from '@/components/tableM/tableExpandRow';
import tableExpandRow2 from '@/components/tableM/tableExpandRow2';


import modalM from '@/components/modalM/modalM'
export default (Vue) => {
    Vue.component("drawer-m", drawerM)
    Vue.component('page-m', pageM)
    Vue.component('table-m', tableM)
    Vue.component('modal-m', modalM)
    Vue.component('table-expand-row', tableExpandRow)
    Vue.component('table-expand-row2', tableExpandRow2)
}