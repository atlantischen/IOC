import instance from '@/utils/request.js'
import qs from 'qs'

// 获取天气
// params: city
export function getWeather(params) {
    return instance({
        url: 'http://wthrcdn.etouch.cn/weather_mini',
        method: 'get',
        params
    })
}

const api = {
    getWeather
}
export default api



