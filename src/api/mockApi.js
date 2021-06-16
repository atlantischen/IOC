import instance from '@/utils/request.js'
import qs from 'qs'

// // 引入axios
// import axios from 'axios'
// // 请求模拟数据
// axios('/meun').then(req => {
//   console.log('xxxxxxxxx', req)
// })

export function aaa (params) {
  return instance({
    url: '/meun',
    method: 'get' || 'post',
    params
  })
}

const api = {
  aaa
}
export default api


