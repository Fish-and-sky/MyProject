import request from  '../services/request.js'

export function get(prourl) {
    return request({
        url: prourl,
        method: 'get',
        params: { "ai": "ai" }
    })
}

export function post(prourl,data) {
    return request({
        url: prourl,
        method: 'post',
        data,
        headers:{'Content-Type': 'application/json;charset=UTF-8'},
    })
}
// ‘Flutter: Run Flutter Doctor’ action