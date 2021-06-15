// import axios from 'axios'
// import { ElMessage } from 'element-plus'

// import router from '../router'
// // import store from '../store'

// // let lastTime
// // function alertInfo (msg) {
// //   const nowTime = new Date().getTime()
// //   if (!lastTime || nowTime - lastTime > 3000) {
// //     ElMessage.error(msg)
// //   }
// //   lastTime = new Date().getTime()
// // }

// const instance = axios.create({
//   baseURL: process.env.VUE_APP_URL,
//   // timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   }
// })

// instance.interceptors.request.use(
//   config => {
//     // let Bearer = getToken() || getCookie()
//     let Bearer
//     if (getToken()) Bearer = 'Bearer ' + getToken()
//     config.headers['version'] = process.env.VUE_APP_Version;
//     if (Bearer) {
//       config.headers.Authorization = Bearer
//     }
//     return config
//   },
//   error => {
//     console.log(error.response)
//     // ElMessage.error(error.response)
//     return Promise.reject(error)
//   }
// )

// // 响应拦截
// instance.interceptors.response.use(
//   response => {
//     // /* 代码here */
//     // 加密
//     // return CryptoInfo.encryptByAES(response)
//     // 对响应数据做点什么
//     const status = response.data.code
//     const msg = response.data.msg
//     // if(status == 200){
//     //   // store.commit('SET_EMPTY_TEXT','没有更多喽～')
//     //   // apiLoading ? glo_loading.loadingHide() : ''
//     // } else if (status == 500) {
//     //   // Message.error(msg)
//     //   //   Message({
//     //   //     showClose: true,
//     //   //     message: msg,
//     //   //     type: "error",
//     //   //     center: true,
//     //   //     duration: 1000
//     //   // })
//     //   // apiLoading ? glo_loading.loadingHide() : ''
//     //   // return response
//     // }  else if (status == 1002) {
//     //   // Message.error(msg,1000)
//     //   // Message.error('无效token，请重新登录！')
//     //   // 清除token
//     //   // localStorage.removeItem('token')
//     //   removeToken()
//     //   setCookie('',0)
//     //   // apiLoading ? glo_loading.loadingHide() : ''
//     //   // 页面跳转
//     //   router.push('/login')
//     //   // return response
//     // } else if(status == 3000){
//     //   // Message.warning(`请先登录！`,1000)
//     //   setCookie('',0)
//     //   sessionStorage.clear()
//     //   localStorage.clear()
//     //   // apiLoading ? glo_loading.loadingHide() : ''
//     //   window.location.href="/login"
//     //   // return response
//     // } else if(status == 5001){
//     //   // Message.warning(msg,1000)
//     //   // apiLoading ? glo_loading.loadingHide() : ''
//     //   // return response
//     // }else {
//     //   // apiLoading ? glo_loading.loadingHide() : ''
//     // }
//     // if(status !== 200){
//     //   // store.commit('SET_EMPTY_TEXT','加载失败')
//     // }
//     // console.log(response)
//     // return response

//     // if (!response) {
//     //   return
//     // }
//     // if (response.config.url.indexOf('/run/home/QX21') !== -1 || response.config.url.indexOf('/api/getinstallfile') !== -1 || response.config.url.indexOf('/api/checkfile/home/QX21') !== -1 || response.config.url.indexOf('/api/getip') !== -1) {
//     //   return response
//     // }
//     // if (response.status === 299) {
//     //   sessionStorage.clear()
//     //   alertIntervalTime('登录超时, 请重新登录')
//     //   setTimeout(() => {
//     //     router.push({ name: '登录' })
//     //   }, 500) // 为确保能够在wbesocket连接后关闭websocket,需加定时器进行延时
//     // }
//     switch (status) {
//       case 'A0230': // token 过期
//       // 更新token
//         if (sessionStorage.getItem('R_QXZNSYS_TOKEN')) {
//           setToken(sessionStorage.getItem('R_QXZNSYS_TOKEN'))
//           sessionStorage.setItem('R_QXZNSYS_TOKEN', null)
//         } else {
//           ElMessage.error(msg)
//           // ElMessage.error('token已过期！')
//           // sessionStorage.clear()
//         }
//         return response
//         break
//       case 'A0210' || 'A0301' :
//         return response
//         break
//       case 'B0001':
//         // ElMessage.error({ dangerouslyUseHTMLString: true, message: status +`错误`})
//         ElMessage.error({ dangerouslyUseHTMLString: true, message: msg })
//         break
//       case '200':
//         return response
//       // case '30015':
//       //   alertIntervalTime(msg)
//       //   if (response.config.url.indexOf('/saas/scene/save') !== -1 || response.config.url.indexOf('/saas/scene/change') !== -1 || response.config.url.indexOf('/saas/scene/delete') !== -1 || response.config.url.indexOf('/saas/node/save') !== -1) {
//       //     return response
//       //   }
//       //   break
//       default:
//         if(response.data.status == 1000){
//           // console.log(response.data.status)
//           return response
//         }else{
//           ElMessage.error({ dangerouslyUseHTMLString: true, message: msg })
//         }
//         break
//     }
//   },
//   error => {
//     console.log(error)
//     console.log(error.response)
//     if (error.response) {
//       const status = error.response.status
//       if (status == 503) {
//         ElMessage.error('服务繁忙,请稍后重试！(503)')
//         // alert('服务繁忙,请稍后重试！(503)')
//       } else if (status == 500) {
//         ElMessage.error('服务重建中... (500)')
//         // alert('服务重建中... (500)')
//       } else if (error.message.includes('timeout')) {
//         ElMessage.error('请求超时，请稍后再试！')
//         // alert('请求超时，请稍后再试！')
//       } else if (status == 404) {
//         ElMessage.error('Not Found (404)')
//         // alert('Not Found (404)')
//       } else {
//         ElMessage.error(error.response)
//       }
//     } else {
//       if (error == 'Error: Network Error') {
//         alert(error)
//       } else {
//         ElMessage.error(error.response)
//         // removeToken()
//         // setCookie('',0)
//         // ElMessage.error('请重新登录！')
//         // router.push('/login')
//       }
//     }

//     // return Promise.reject(error);
//     return

//     // apiLoading ? glo_loading.loadingHide() : ''
//     // return Promise.reject(error);

//     if (error.config.url.indexOf('/checkfile/home/QX21') !== -1 && (error.response.status === 404 || error.response.status === 504)) {
//       return Promise.reject(error.response)
//     }
//     if (error.config.url.indexOf('/api/saas/lighting/equip/control') !== -1) {
//       return error.response
//     }
//     if (error.config.url.indexOf('/api/saas/voice/control') !== -1) {
//       return error.response
//     }
//     if (error.response) {
//       switch (error.response.status) {
//         // 返回401，清除token信息并跳转到登录页面
//         case 401:
//           sessionStorage.clear()
//           alertIntervalTime('登录超时, 请重新登录')
//           router.push({ name: '登录' })
//           return
//         case 500:
//           alertIntervalTime(error.msg)
//           return error
//       }
//       // 返回接口返回的错误信息
//     }
//   })

// // // get请求封装
// // export const get = (url, data = {}, config) => {
// //   return new Promise((resolve, reject) => {
// //     axios.get(url, data, config).then((response) => {
// //       // console.log(response)
// //       if (url.indexOf('/saas/meter/excel') > 0) {
// //         resolve(response)
// //       }
// //       if (response) {
// //         resolve(response.data)
// //       }
// //     }).catch(err => {
// //       console.log(err)
// //       reject(err)
// //     })
// //   })
// // }
// // // post请求封装
// // export const post = (url, data = {}, config) => {
// //   return new Promise((resolve, reject) => {
// //     axios.post(url, data, config).then((response) => {
// //       if (response) {
// //         resolve(response.data)
// //       }
// //     }).catch(err => {
// //       reject(err)
// //     })
// //   })
// // }

// export default instance
