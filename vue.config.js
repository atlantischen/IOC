'use strict'
const Timestamp = new Date().getTime();
const CompressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
module.exports = {
    lintOnSave: false,
    // publicPath:'./', 
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    productionSourceMap: false, // 关闭生产环境的 source map
    configureWebpack: {
      plugins: [
        new CompressionPlugin({
          test: productionGzipExtensions, // 需要压缩的文件正则
          threshold: 10240, // 文件大小大于这个值时启用压缩
          deleteOriginalAssets: true // 压缩后保留原文件
        })
      ],
      output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
        filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
        chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
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
    
    

    

      
}