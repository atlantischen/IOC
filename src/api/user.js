import instance from '@/utils/request.js'
import qs from 'qs'


export function loginApi(data) {
  return instance({
    url: 'campus-auth/oauth/token?' + qs.stringify(data),
    method: 'post'
  })
}

const api = {
  loginApi
}
export default api



