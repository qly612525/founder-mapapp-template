const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    devtool: false,
    context: path.join(__dirname, 'src'),
    entry: {
        main: [
            'babel-polyfill',
            'whatwg-fetch',
            './styles/index.scss',
            './index.js'
        ],
    },
    output: {
        path: path.join(__dirname, 'build/static'),
        filename: '[name].bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            ENV: '"dist"',
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url-loader',
            options: {
                name: 'fonts/[hash].[ext]',
                limit: 5000,
                mimetype: 'application/font-woff'
            }
        }, {
            test: /\.(ttf|eot|svg)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[hash].[ext]'
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};
