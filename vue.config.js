'use strict'
const path = require('path')
function resolve(dir){

  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径

}
var webpack = require('webpack')
const Timestamp = new Date().getTime();
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
    lintOnSave: false,
    // publicPath:'./', 
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false, // 关闭生产环境的 source map
    devServer: {
      port: 9000,
      host: '0.0.0.0',
      https: false,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      hotOnly: false,
      disableHostCheck: true,
      proxy: null, // 设置代理
      open: true // 配置自动启动浏览器
    },
    configureWebpack: config => {
      config.optimization = {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: { // 删除注释
                comments: false
              },
              compress: {
                //warnings: false, // 若打包错误，则注释这行
                drop_debugger: true,
                drop_console: true,
                pure_funcs: ['console.log']
              }
            },
            sourceMap: false,
            parallel: true
          })
        ]
      }
      config.output.filename = `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
      config.output.chunkFilename = `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
      const pluginsPro = [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }),
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 5,
          minChunkSize: 100
        })
      ]
      if (process.env.NODE_ENV === 'production') {
        if (process.env.VUE_APP_FLAG === 'pro') {
          config.plugins.push = [...pluginsPro]
        } else {
        }
      } else {
        // dev 开发环境
      }
    },
    pages: {
      index: {
        entry: 'src/main.js',
        template: 'src/index.html',
        filename: 'index.html',
        title: '智慧园区管理平台',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    },
    css: {  
      extract: false, // 是否使用css分离插件 ExtractTextPlugin
	    sourceMap: true, // 开启 CSS source maps?
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        rootValue: 80, //换算基数， 默认100
                        // propList: ["*"],
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        // exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        // selectorBlackList: [], //要忽略并保留为px的选择器
                        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        // mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
                        // minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    })
                ]
            }
        }
    },
    chainWebpack:(config)=>{

            config.resolve.alias
      
            .set('@',resolve('./src'))
      
          .set('components',resolve('./src/components'))
      
          .set('views',resolve('src/views'))
      
          .set('assets',resolve('src/assets'))
      
            // //set第一个参数：设置的别名，第二个参数：设置的路径
      
          }
    
    

    

      
}