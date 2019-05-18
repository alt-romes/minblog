module.exports = {
    publicPath: '/minblog',
    outputDir: 'docs',
    devServer: {
      disableHostCheck: true
    },
    pwa: {
      workboxOptions: {
        skipWaiting: true
      }
    }
  }