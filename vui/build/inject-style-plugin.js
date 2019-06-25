export default () => ({
  name: 'inject-style-plugin',
  generateBundle(outputOptions, bundle, isWrite) {
    Object.keys(bundle).forEach(id => {
      const chunk = bundle[id]
      if (id.match(/\.js$/) && !id.match(/^chunk/)) {
        chunk.code = `import './${id.replace(".js", "")}.css';\n` + chunk.code
      }
    })
  }
})
