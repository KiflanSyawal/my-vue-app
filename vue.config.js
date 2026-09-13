const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-vue-app/'  // 👈 change this to your repo name
    : '/',
  transpileDependencies: true
})

