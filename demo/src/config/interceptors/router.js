
// 全局守卫
export const routerBeforeProcessor = (to, from, next) => {
  document.title = to.meta.title || 'title'
  next()
}


export default {
  routerBeforeProcessor,
}
