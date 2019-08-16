/**
 * @file request
 * @author wangjunfa
 */

import axios from 'axios'
import qs from 'qs'

import {devBaseApi, prodBaseApi} from './apiConfig.js'


function setInterceptors(service, options) {
    // 添加请求拦截器
    service.interceptors.request.use(config => {
        let key = config.method === 'get' ? 'params' : 'data';
        config[key] = options.data;
        if (config.method === 'post') {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            config.data = qs.stringify(config.data)
        }
        return config
    });

    // 添加响应拦截器
    service.interceptors.response.use(response => {
        return response
    });
}

export default function require(options) {
    const service = axios.create({
        baseURL: process.env.NODE_ENV === 'development' ? devBaseApi : prodBaseApi,
        timeout: 5000
    })
    setInterceptors(service, options)
    return service(options);
}
