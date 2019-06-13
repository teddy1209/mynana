'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://127.0.0.1:8080"', //接口的地址
  IMG_API: "'https://mynana.oss-cn-beijing.aliyuncs.com/img'", //图片的服务器
})
