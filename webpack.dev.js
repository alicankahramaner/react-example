const webpack = require('webpack'),
    merge = require('webpack-merge'),
    base = require('./webpack.base.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge.smart(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});