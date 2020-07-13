import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/testIp/request/"

// get请求
export default {
    getList(params) {
        return http.get(`permission/list`, params)
    },
    postSave(params) {
        return http.post(`permission/save`, params)
    },
    postDelete(params) {
        return http.post(`permission/delete`, params)
    }


}

// import http from '../utils/http'

// /**
//  *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
//  *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
//  */
// // let resquest = "/testIp/request/"

// // get请求
// export function getList(params) {
//     return http.get(`permission/list`, params)
// }
// // post请求
// export function postSave(params) {
//     return http.post(`permission/save`, params)
// }
// export function postDelete(params) {
//     return http.post(`permission/delete`, params)
// }
// // // delete 请求
// // export function deleteListAPI(params){
// //     return http.delete(`${resquest}/deleteList.json`,params)
// // }