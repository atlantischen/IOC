import instance from '@/utils/request.js'
import qs from 'qs'

// 上传图片
export function uploadImgApi(data) {
    return instance({
      url: 'http://139.9.26.115:28003/api/v1/admin/upload/upload_object',
      method: 'post',
      data,
    })
}

const api = {
    uploadImgApi
}
export default api



