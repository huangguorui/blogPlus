import http from '../utils/http'

export default {
    getListApi(params) {
        return http.get(`user/list`, params)
    },
    postSaveApi(params) {
        return http.post(`user/save`, params)
    },
    postDeleteApi(params) {
        return http.post(`user/delete`, params)
    }



}