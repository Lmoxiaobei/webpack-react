const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    compress:true,
    port:3000,
    hot:true,
    historyApiFallback: true
  },
  resolve:{
    extensions:[".js",".json",".jsx"]
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
              loader: 'babel-loader',
              options: {
                  presets: ['env','react','stage-0'],
  //                 "plugins": [
  //   ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }] // `style: true` 会加载 less 文件
  // ]
         }
       }
     },
       {
          test: /\.css$/,
          use: ['style-loader','css-loader']
      },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                // outputPath:'build/'
              }
            }
          ]
        }
    ]
  },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'My App',
          template: 'public/index.html',
          filename: 'index.html'
        }),
        new OpenBrowserPlugin({
          url:"http://localhost:3000/"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

    ]
}
