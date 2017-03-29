const webpack = require('webpack');

module.exports = {
    entry: {
        vendors: [
            'webpack-dev-server/client',
            'babel-polyfill',
            'mobx',
            'mobx-react',
            // 'whatwg-fetch',
            'lodash',
            'react',
            'react-dom',
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader'
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
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};
