'use strict';

// 倚赖
const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const helmet = require('helmet');
const compression = require('compression')
const config = require('./config');

// express 实例
const app = express();

// 设置 HTTP 头
// reference: http://expressjs.com/zh-cn/advanced/best-practice-security.html
app.use(helmet());

// 开启 gzip 压缩
// reference: http://expressjs.com/zh-cn/advanced/best-practice-performance.html
app.use(compression());

// 静态资源服务
app.use(express.static(path.join(__dirname, 'dist')));

// api proxy
app.use('/webplatform', proxy(config.api, {
  forwardPath: function (req, res) {
    console.log("req's url:"+req.url);
    return require('url').parse('/webplatform' + req.url).path;
  }
}));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

const port = config.port || process.env.PORT
app.listen(port, function () {
  console.log('🌎 => App is running on port %s', port)
})
