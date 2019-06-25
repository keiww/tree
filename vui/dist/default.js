import button from './button'
import card from './card'
import modal from './modal'

var components = [
  button,
  card,
  modal,
]

var plugin = {
  install: function(Vue) {
    components.forEach(function(comp) {
      comp.install(Vue)
    })
  }
}

export default plugin
