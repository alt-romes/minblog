module.exports = {
  outputDir: 'minblogdemo',
  publicPath: 'minblogdemo',
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
}