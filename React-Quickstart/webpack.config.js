/* global __dirname */

const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Define directories
const DIR_APP = path.resolve(__dirname, 'app');
const DIR_SRC = path.resolve(DIR_APP, 'src');
const DIR_HTML = path.resolve(DIR_APP, 'html');
const DIR_BUILD = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(DIR_SRC, 'main.js'),
    output: {
        path: DIR_BUILD,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: DIR_BUILD
    },
    module: {
        rules: [
            // CSS
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },

            // JS / JSX
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loaders: [
                    'eslint-loader',
                ],
                enforce: 'pre',
            },
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                ],
            },
        ]
    },
    plugins: [
        // Replace modules when they're changed
        new webpack.HotModuleReplacementPlugin(),
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: DIR_HTML } // to: output.path
        ]),
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
