const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require ('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  resolve:{
    extensions:[".js",".json",".jsx"]
  },
  // devtool: 'source-map',
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
              loader: 'babel-loader',
              options: {
                  presets: ['env','react','stage-0']
         }
       }
     },
       {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins:[
                require('autoprefixer')(),
                require('cssnano')()
                ]
              }
            }
          ]
        })
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
      new ExtractTextPlugin({
        filename:'bundle.min.css'
      }),
        new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false,
        }
      }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"',
        }),
        new HtmlWebpackPlugin({
          title: 'My App',
          template: 'public/index.html',
          filename: 'index.html'
        }),
        new CleanWebpackPlugin(['dist']),
    ]
}
