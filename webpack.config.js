var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 

config = {

    entry: {
        "index": './index.jsx'    
    },

    output: {
        path: path.resolve(__dirname, 'static'),
        publicPath: "/static/",
        filename: 'js/[name].js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('js/comm.js'),

        // 给js中剥离的css的文件指定名称
        new ExtractTextPlugin('/css/[name].css')
    ],

    module: {
        loaders: [

            {
                test: /\.jsx$/,
                exclude: [nodeModulesPath],
                loader: 'babel?presets[]=es2015!jsx-loader'
            }, 
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=2048&name=imgs/[name]_[hash:4].[ext]'
            } 

        ]

    }
};

module.exports = config;