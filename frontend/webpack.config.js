'use strict';

let path = require('path');
let webpack = require('webpack');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin")

const rootPath = path.join(__dirname, '.');
const srcPath = path.join(__dirname, '/src');
const appPath = `${srcPath}/app/`;
const outPath = path.join(__dirname, '/build/resources/main/public');

module.exports = {
    context: srcPath,
    entry: [
        './app/app'
    ],
    devtool: 'eval-source-map',
    cache: true,
    debug: true,
    output: {
        path: outPath,
        filename: 'app/app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: '...',
            filename: 'index.html',
            template: `${srcPath}/templates/index-template.html`
        }),
        new CopyWebpackPlugin([
            { from: `${rootPath}/assets` }
        ]),
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel'],
                include: appPath
            },
            {
                test: /\.html$/,
                loader: 'raw',
                include: appPath
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=app/[path][name].[ext]?[hash]&context=./src/'
            },

            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]

    }
};