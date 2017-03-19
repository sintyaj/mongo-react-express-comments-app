/**
 * Created by sergey-raichman on 17/03/2017.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, './client'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './statics'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', { 'modules': false }], "react", "stage-0"
                        ],
                        plugins: ['transform-decorators-legacy']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [new ExtractTextPlugin('Styles.css')],
    resolve: {
        modules: [path.resolve(__dirname, './client'), 'node_modules']
    }
};