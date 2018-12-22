const merge = require('webpack-merge'),
    base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: 'production',
    devtool: 'source-map'
});