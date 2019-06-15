module.exports = {
    outputDir: 'example-blog.github.io',
    devServer: {
      disableHostCheck: true
    },
    pwa: {
      workboxOptions: {
        skipWaiting: true
      }
    }
  }
