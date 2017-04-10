# 智慧医疗

## 技术架构

### 服务端

node 的平台，express 的 http 框架。

- 利用 express-http-proxy 进行 api 的代理转发
- use hemlet for http header protection
- use compression for http gzip

### 客户端

- 开发工程脚手架：webpack
- 框架：angular
- 路由：angular-ui-router
- 图表：echarts
- DOM 操作库：jQuery

## 使用

```
npm install
```

或者（推荐）：

```
npm install -g yarn
yarn install
```

### 开发

```
npm start
```

浏览器打开 `http://localhost:8089` 进行调试

### build 打包

```
npm run build
```

### 布署

将构建后的项目传至服务器，利用 pm2 进行管理：

- 启动服务：`pm2 start pm2.json`
- 停止服务：`pm2 stop <APP_NAME>`
- 重启服务：`pm2 restart <APP_NAME>`
- 删除服务：`pm2 delete <APP_NAME>`
