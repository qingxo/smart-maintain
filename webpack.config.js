const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js',
    angular: ['angular-ui-router', 'angular-sanitize']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  externals: {
    'angular': 'angular'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'angular']
    }),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      md5: 'md5'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),

    new ExtractTextPlugin('[name].bundle.css'),

    new DashboardPlugin()
  ],

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: './src/assets',
    stats: 'minimal',
    port:'8089',
    proxy: {
      '/api': {
        target: 'http://172.16.110.64:8080',
        // target: 'http://172.16.150.173:8080',
        pathRewrite: {'^/api' : ''},
        changeOrigin:true,
        secure: false
      }
    }
  }
}
