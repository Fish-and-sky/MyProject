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
        host: "0.0.0.0", 
        port: '8012',
        https: false,
        hotOnly: false, 
        proxy: {
            '/api': {
                target: 'http://192.168.2.112:8002/api', //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    },
}