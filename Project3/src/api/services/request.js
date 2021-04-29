import address from '../services/address.js'
import axios from 'axios'

const baseUrl = address.host;

const service = axios.create({
    baseURL:baseUrl,
    timeout:8000,
    headers:{'Content-Type': 'application/json;charset=utf-8'}
})

service.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.status === 201 || res.status === 400 || res.status === 401 || res.status === 403 || res.status === 404) {
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service
