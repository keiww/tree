import Vue from 'vue'
import App from './App.vue'

import 'vui/base.css'

// import VUI from 'vui'
// Vue.use(VUI)

// import { VuiButton, VuiModal } from 'vui'
// Vue.use(VuiButton)
// Vue.use(VuiModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
