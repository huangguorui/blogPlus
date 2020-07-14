import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
// let resquest = "/testIp/request/"

// get请求
export default {
    getListApi(params) {
        return http.get(`permission/list`, params)
    },
    postSaveApi(params) {
        return http.post(`permission/save`, params)
    },
    postDeleteApi(params) {
        return http.post(`permission/delete`, params)
    },
    //提交请求
    postAddRoleAndPermission(params) {
        return http.post(`permission/addRoleAndPermission`, params)
    }

}