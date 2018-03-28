var path = require('path');
var webpack = require ("webpack");
module.exports = {
    entry:  __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            },
            {
                test:/\.css$/, 
                use:['style-loader','css-loader','less-loader']
            },
            { 
                test: /\.(png|jpg|gif)$/, 
                use: ["url-loader?limit=20000&name=images/[hash:16].[ext]"], 
                exclude: "/node_modules/" 
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compress: {
            warnings: false
          }
        })
   ]
}