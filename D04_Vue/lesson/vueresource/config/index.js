// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 设置代理
    /*
     * 其中 '/api' 为匹配项，target 为被请求的地址
     * 因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的
     * 所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '/'
     * 如果本身的接口地址就有 '/api' 这种通用前缀，就可以把 pathRewrite 删掉
     */
    proxyTable: {
        '/api': {
        target: 'http://127.0.0.1:8081/',
        changeOrigin: true,
        pathRewrite: {
          // ^ 是正则表达式：以 / 开头
          '^/api': '/'
        }
      },
      // 获取豆瓣电影的排名前 250
      '/v2/movie/top250': {
            target: 'https://api.douban.com',
            changeOrigin: true,
            pathRewrite: {
              '^/v2/movie/top250': '/v2/movie/top250'
            }
        }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
