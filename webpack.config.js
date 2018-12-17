var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        port: 4000,
        contentBase: __dirname + '/public/'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }]
        }, {
            test: /\.css$/,
            use: {
                loader: 'css-loader'
            }
        }, {
            test: /\.svg$/,
            use: {
                loader: 'file-loader'
            }
        }]
    },

    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};