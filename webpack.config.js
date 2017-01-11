var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loaders: ["file"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader:'file'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
    })]
};
