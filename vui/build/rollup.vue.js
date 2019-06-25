import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy'

import injectStylePlugin from './inject-style-plugin'
import { getComponents, resolveRoot } from './utils'

export default (dir) => ({
  input: getComponents().reduce((input, comp) => ({
     ...input,
     [comp]: resolveRoot(`src/components/${comp}/index.js`)
  }), {}),

  output: {
    format: 'esm',
    preferConst: false,
    strict: true,
    dir
  },

  plugins: [
    vue({ css: false }),
    css({ output: false }),
    commonjs(),
    babel({
      // runtimeHelpers: true,
      extensions: ['.js', '.ts', '.vue'],
    }),
    injectStylePlugin(),
    copy({
      targets: [
        { src: resolveRoot('src/index.js'), dest: dir },
        { src: resolveRoot('src/index.default.js'), dest: dir },
        { src: resolveRoot('src/base.css'), dest: dir },
        { src: resolveRoot('package.json'), dest: dir }
      ]
    })
  ]
})
