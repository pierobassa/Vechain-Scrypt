const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map', //Fixes Eval error: Refused to evaluate a string as Javascript becuse 'unsafe-eval' is not an allowed source.
})