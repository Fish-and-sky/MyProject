// 引入jq需要加入以下代码
const webpack = require('webpack')

module.exports = {
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    },
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8014',
        https: false,
        hotOnly: false, 
        proxy: {
            '/api': {
                target: 'http://192.168.2.117:8001/api', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
}