import instance from '@/utils/request.js'
import { getToken } from '@/utils/token.js'
import qs from 'qs'

// 上传图片
export function uploadImgApi(data) {
  return instance({
    url: 'campus-admin/api/v1/admin/upload/upload_object',
    method: 'post',
    data,
    headers: {
      "content-type": "multipart/form-data"
    }
  })
}
// 泉洋服务
export function uploadImgApi2(data) {
  return instance({
    url: 'http://172.21.70.246:8110/api/upload',
    method: 'post',
    data,
    headers: {
      "content-type": "multipart/form-data"
    }
  })
}

const api = {
  uploadImgApi,
  uploadImgApi2
}
export default api



