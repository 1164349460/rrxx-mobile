
import axios from 'axios'

import Qs from 'qs'

import router from '../router/index'
import storage from '@/utils/cookie'
import { Toast } from 'vant';
axios.defaults.crossDomain = true;


export default function (path, params, method = "GET", headerType = "json") {
    let baseURL = '';
    let headers = {};
    let data = {}

    if (process.env.NODE_ENV == "development") {
        baseURL = "/apis"
    } else if (process.env.NODE_ENV == 'production') {
        baseURL = 'http://airjob.333job.com:86/'  //正式
    } else if (process.env.NODE_ENV == 'testing') {
        baseURL = 'http://192.168.101.106:8200/'
    }

    //  设置请求头
    if (method == "post") {
        if (headerType == "json") {
            headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json;charset=UTF-8',
                'Cache-Control': 'no-cache'
            }
            data = params
        } else if (headerType == "form-data") {
            headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'multipart/form-data;charset=UTF-8',
                'Cache-Control': 'no-cache'
            }
            data = params
        } else {
            headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Cache-Control': 'no-cache'
            }
            data = Qs.stringify(params);
        }
    } else if (method == "put") {
        if (headerType == "json") {
            headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json;charset=UTF-8',
                'Cache-Control': 'no-cache'
            }
            data = params
        } else {
            headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Cache-Control': 'no-cache'
            }
            data = Qs.stringify(params);
        }
    } else {
        if (headerType !== "json") {
            headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Cache-Control': 'no-cache'
            }
            data = Qs.stringify(params);
            path = path + '?' + data
            data = {};
        } else {
            headers = {
                'X-Requested-With': 'XMLHttpRequest',
                'Cache-Control': 'no-cache'
            }
            data = Qs.stringify(params);
            path = path + '?' + data
            data = {};
        }
    }


    //   请求拦截
    axios.interceptors.request.use(config => {
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            duration: 200
        });
        let token = storage.getStorage('token');
        if (token) {
            config.headers['token'] = token;
        }
        return config;
    }, error => {
        return Promise.reject(error)
    })
    //请求响应
    axios.interceptors.response.use(response => {
        setTimeout(() => {
            Toast.clear();
        }, 2000)
        return response;
    }, error => {
        return Promise.resolve(error.response)
    })

    //  开始请求
    return new Promise((resolve, reject) => {
        let times = 8000
        axios({
            baseURL,
            method: method,
            url: path,
            data: data,
            timeout: times,
            headers: headers
        }).then(result => {
            resolve(result.data);
        }).catch(err => {
            console.log(err)
            reject(err);
        });
    });
};