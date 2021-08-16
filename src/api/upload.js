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

const api = {
  uploadImgApi
}
export default api



