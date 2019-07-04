module.exports = {
    outputDir: 'minblogdemo',
    devServer: {
      disableHostCheck: true
    },
    pwa: {
      workboxOptions: {
        skipWaiting: true
      }
    }
  }
