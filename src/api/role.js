import http from '../utils/http'


export default {
    getListApi(params) {
        return http.get(`role/list`, params)
    },
    postSaveApi(params) {
        return http.post(`role/save`, params)
    },
    postDeleteApi(params) {
        return http.post(`role/delete`, params)
    },
    //提交请求
    postAddUserAndRole(params) {
        return http.post(`role/addUserAndRole`, params)
    }


}