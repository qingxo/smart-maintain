const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js',
    angular: ['angular-ui-router', 'angular-sanitize']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  externals: {
    'angular': 'angular'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'ng-annotate!strip-loader?strip[]=console.log,strip[]=console.table!babel',
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

    new ExtractTextPlugin('[name].[hash].bundle.css'),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{
    //     warnings: true
    //   },
    //   mangle: {
    //     except: ['$super', '$', 'exports', 'require', 'angular'],
    //     keep_fnames: true
    //   }
    // }),

    new webpack.NoErrorsPlugin(),

    // new webpack.optimize.DedupePlugin(),

    new CopyWebpackPlugin([
      { from: './src/assets' }
    ])
  ],

  devtool: 'cheap-module-source-map'
}
