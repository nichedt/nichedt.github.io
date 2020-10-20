const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: './src/frontend/index.tsx',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:8080',
            '/login': 'http://localhost:8080'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            title: 'Nicholas Tan',
            bodyHtmlSnippet: '<div id="root"></div>',
        })
    ]
};
