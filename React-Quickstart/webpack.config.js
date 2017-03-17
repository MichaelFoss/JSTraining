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
            {
                test: new RegExp(DIR_SRC + '/.js$'),
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ]
            }
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
