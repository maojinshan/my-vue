import axios from './axios'
import myMixin from '@/mixins'
import Element from 'element-ui'
import '@/assets/styles/main.scss'
import components from '../components'

const installComponent = (Vue, components) => {
  Object.entries(components).forEach(([key, comp]) => {
    Vue.component(comp.name, comp)
  })
}

export default {
  install: (Vue, options) => {
    // 需要在业务中便捷访问的API，统一放置在此处进行注入挂载
    Vue.prototype.$ajax = axios

    Vue.use(Element)

    Vue.mixin(myMixin)

    installComponent(Vue, components)

  }
}
