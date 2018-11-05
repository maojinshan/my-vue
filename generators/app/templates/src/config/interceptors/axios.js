
import { CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE } from '../index.js'
import Utils from '@/utils'
// import router from '@/plugins/router'

export const requestSuccessProcessor = config => {
  CONSOLE_REQUEST_ENABLE && console.info('requestSuccessProcessor', `url: ${config.url}`, config)

  let token = window.localStorage.getItem('token')

  if (token) config.headers.common['token'] = token

  if (config.method === 'post' && config.data instanceof FormData) config.headers['Content-Type'] = 'multipart/form-data'

  return config
}

export const requestErrorProcessor = error => {
  return Promise.reject(error).catch(error => {
    console.log(error)
    return null
  })
}

export const responseSuccessProcessor = response => {
  CONSOLE_RESPONSE_ENABLE && console.info('responseSuccessProcessor', response)

  let { code, message } = response.data

  switch (code) {
    case 0: // 业务处理成功

      return response.data

    default:
      // 其他特殊业务逻辑
      // 实现其他错误逻辑
      return null
  }
}

export const responseErrorProcessor = error => {
  if (error.toString().search('timeout') !== -1) {
    // 实现超时的逻辑
  }
  return Promise.reject(error).catch(error => {
    console.log(error)
    return null
  })
}
