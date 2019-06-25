import path from 'path'
import postcss from 'rollup-plugin-postcss'

import { getComponents, resolveRoot } from './utils'

export default (dir) => (
  getComponents().map(comp => ({
    input: resolveRoot(`src/components/${comp}/style.css`),
    output: {
      format: 'esm',
      file: resolveRoot(`${dir}/${comp}.css`)
    },
    plugins: [
      postcss({
        extract: resolveRoot(`${dir}/${comp}.css`)
      })
    ]
  }))
)