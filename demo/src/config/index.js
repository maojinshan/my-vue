// 是否开启监控
export const MONITOR_ENABLE = true
// 路由默认配置
export const ROUTER_DEFAULT_CONFIG = {
  base: '/',
  waitForData: true,
  transitionOnLoad: true
}

// axios默认配置
export const AXIOS_DEFAULT_CONFIG = {
  timeout: 20000,
  maxContentLength: 2000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}

// 上传文件时axios配置
export const UPLOAD_CONFIG = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
// 开发用接口地址

const devBaseURL = 'http:xxxx.xxx.com'
const testBaseURL = 'http:xxxx.xxx.com'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : testBaseURL


// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
  strict: process.env.NODE_ENV !== 'production'
}

export const CONSOLE_REQUEST_ENABLE = false // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = false // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE = false // 监控记录打印
