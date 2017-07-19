/**
 * Created by PC-01 on 18/07/2017.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  devtool: 'source-map',
  entry: ['./src/app/app.module'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader/url" },
          { loader: "file-loader" },
          { loader: "postcss-loader"}
        ]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: ['Chrome 59', 'IE 11']
              }
            }]]
          }
        }
      }
    ]
  }
};