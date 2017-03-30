const testWebpackConfig = require('./webpack.test.js')

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    colors: true,
    port: 9876,

    basePath: '',
    files: ['webpack.karma.context.js'],
    preprocessors: { 'webpack.karma.context.js': ['webpack'] },
    exclude: [],

    webpack: testWebpackConfig,
    webpackMiddleware: { stats: 'errors-only'},
  })
}
