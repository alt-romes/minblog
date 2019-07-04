module.exports = {
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
