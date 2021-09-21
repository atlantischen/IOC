const KEY = 'YUAN_TOKEN'

export const setToken = (token) => {
  sessionStorage.setItem(KEY, token)
}
export const getToken = () => {
  return sessionStorage.getItem(KEY)
}
export const removeToken = () => {
  sessionStorage.removeItem(KEY)
}
