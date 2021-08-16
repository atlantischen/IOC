import axios from 'axios'
import {
  ElMessage
} from 'element-plus'
import { setToken, getToken, removeToken } from '@/utils/token.js'
import router from '../router'

// import store from '../store'


const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  // timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

instance.interceptors.request.use(
  config => {
    let Bearer
    if (getToken()) Bearer = 'bearer ' + getToken()
    config.headers['version'] = process.env.VUE_APP_Version;
    if (Bearer) {
      config.headers.Authorization = Bearer
    }
    return config
  },
  error => {
    console.log(error.response)
    // ElMessage.error(error.response)
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    const status = response.data.code
    const msg = response.data.msg
    switch (status) {
      case '200':
        return response
      default:
        // if (response.data.status == 1000) {
        //   return response
        // } else {
        //   ElMessage.error({
        //     dangerouslyUseHTMLString: true,
        //     message: msg
        //   })
        // }
        return response
    }
  },
  error => {
    console.log(error)
    if (error.response) {
      const status = error.response.status
      if (status == 503) {
        ElMessage.error('服务繁忙,请稍后重试！(503)')
        // alert('服务繁忙,请稍后重试！(503)')
      } else if (status == 500) {
        ElMessage.error('服务重建中... (500)')
        // alert('服务重建中... (500)')
      } else if (error.message.includes('timeout')) {
        ElMessage.error('请求超时，请稍后再试！')
        // alert('请求超时，请稍后再试！')
      } else if (status == 404) {
        ElMessage.error('Not Found (404)')
        // alert('Not Found (404)')
      } else {
        ElMessage.error(error.response)
      }
    } else {
      if (error == 'Error: Network Error') {
        alert(error)
      } else {
        ElMessage.error(error.response)
        // removeToken()
        // setCookie('',0)
        // ElMessage.error('请重新登录！')
        // router.push('/login')
      }
    }
    return Promise.reject(error);
  })
export default instance