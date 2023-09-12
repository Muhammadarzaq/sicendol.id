
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass') // Menggunakan Dart Sass
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false
}
