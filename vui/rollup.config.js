import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'

function injectStylePlugin() {
  return {
    name: 'injectStylePlugin',
    generateBundle(outputOptions, bundle, isWrite) {
      Object.keys(bundle).forEach(id => {
        const chunk = bundle[id]
        if (id === 'index.js') {
          chunk.code = `import './style.css';\n` + chunk.code
        }
      })
    }
  }
}

function build(comp) {
  return {
    input: `src/${comp}/index.js`,
    output: {
      format: 'esm',
      file: `dist/${comp}/index.js`
    },
    plugins: [
      vue({
        css: false
      }),
      postcss({
        extract: `dist/${comp}/style.css`
      }),
      babel(),
      commonjs(),
      injectStylePlugin(),
    ]
  }
}


const batch = ['button', 'card', 'modal'].map(item => build(item))

export default {
  input: {
    button: 'src/button/index.js',
    card: 'src/card/index.js',
    modal: 'src/modal/index.js',
  },
  output: {
    format: 'esm',
    dir: `esm`,
    // entryFileNames: `[name].js`
  },
  plugins: [
    vue({
      css: false
    }),
    postcss({
      // extract: `esm/[name].css`
    }),
    babel(),
    commonjs(),
    injectStylePlugin(),
  ]
}
