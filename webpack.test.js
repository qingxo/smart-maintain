const ENV = process.env.ENV = process.env.NODE_ENV = 'test'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/},
      {test: /\.css$/, loader: 'style!css'},
      {
        test: /\.scss$/,
        // loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
        loader: 'style!css!sass'
      },
      {test: /\.html/, loader: 'raw'},
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url?limit=50000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css')
  ]
}
