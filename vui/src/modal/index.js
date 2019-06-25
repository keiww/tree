import component from './main.vue'

export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(component.name, component)
}

export default component
