const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src/client'),
    entry: {
        app:'./index.js'
    },

    output: {
        filename: 'meli.js',
        path: path.resolve(__dirname, 'dist/static'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(svg|png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/images',
                    outputPath: 'images'
                }
            },
            {
                test: /\.(ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/fonts',
                    outputPath: 'fonts'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'src/client')
    },

    devtool: 'inline-source-map'
}