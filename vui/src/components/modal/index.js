import component from './main.vue'
import VuiCard from '../card'

component.components = {
  VuiCard
}

const install = (Vue) => {
  if (install.installed) return
  install.installed = true
  Vue.component(component.name, component)
}

component.install = install

export default component
