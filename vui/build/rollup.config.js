import rollupVue from './rollup.vue'
import rollupStyle from './rollup.style'
import { resolveRoot } from './utils'

const dir = resolveRoot('dist/esm')

export default [rollupVue(dir), ...rollupStyle(dir)]
