// dev: {
//     // Paths
//     assetsSubDirectory: 'static',
//     assetsPublicPath: '/',
//     // 后端请求地址代理，配置后testIp再之后的页面调用时就直接指代 http://197.82.15.15:8088
//     proxyTable: {
//       '/testIp': {
//         target: 'http://197.82.15.15:8088',
//         changeOrigin: true,
//         pathRewrite: { 
//           '^/testIp': ''
//         }
//       },
//       '/elseIp': {
//         target: 'http://182.83.19.15:8080',
//         changeOrigin: true,
//         pathRewrite: { 
//           '^/esleIp': ''
//         }
//       },
//     },

//     // Various Dev Server settings
//     host: 'localhost', // can be overwritten by process.env.HOST
//     port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//     autoOpenBrowser: false,
//     errorOverlay: true,
//     notifyOnErrors: true,
//     poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


//     /**
//      * Source Maps
//      */

//     // https://webpack.js.org/configuration/devtool/#development
//     devtool: 'cheap-module-eval-source-map',

//     // If you have problems debugging vue-files in devtools,
//     // set this to false - it *may* help
//     // https://vue-loader.vuejs.org/en/options.html#cachebusting
//     cacheBusting: true,

//     cssSourceMap: true
//   },