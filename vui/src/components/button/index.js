import component from './main.vue'

const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.component(component.name, component)
}

component.install = install

export default component
