module.exports = {
  indexPath: '../index.html',
  publicPath: process.env.NODE_ENV === 'production' ? 'dist' : '/',
  configureWebpack: {
    externals: {
      'vue':'Vue',
      'vuex': 'Vuex'
    }
  }
}
