const webpack = require('webpack')
const path = require('path')
const env = process.env.ENV || 'dev'

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
  configureWebpack: {
    externals: {
      moment: 'moment',
      vue: 'Vue',
      'vue-router': 'VueRouter'
    },

    resolve: {
      alias: {
        env: path.join(__dirname, './src/env', env)
      }
    },
    
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  }
}
