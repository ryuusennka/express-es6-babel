### babel
使用 babel 可以：
1. 创建 `.babelrc` 文件
2. 或者在 `package.json` 里面添加 `babel` 属性

第一种方法：
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

第二种方法：
```javascript
{
  "name": "es6-express",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "server": "babel-node server/server.js"
  },
  "dependencies": {
    "@babel/core": "^7.1.2",
    "@babel/node": "^7.0.0",
    "@babel/preset-env": "^7.1.0",
    "express": "^4.16.4",
    "nodemon": "^1.18.5"
  },
+  "babel": {
+    "presets": [
+      "@babel/preset-env"
+    ]
+  }
}
```

---

### 自动刷新
```
yarn add nodemon
```

修改 `package.json` `script` 代码: 添加 `--exec babel-node --` 就可以监听文件了。
```javascript
{
  "name": "es6-express",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
-    "server": "babel-node server/server.js"
+    "server": "nodemon --exec babel-node -- server/server.js"
  },
  "dependencies": {
    "@babel/core": "^7.1.2",
    "@babel/node": "^7.0.0",
    "@babel/preset-env": "^7.1.0",
    "express": "^4.16.4",
    "nodemon": "^1.18.5"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}

```

### 安装
```
npm install
# or
yarn install
```

### 转 es6
nodemon 是用于开发环境的， 线上环境可以直接使用 node 命令，所以就又需要把es6转化一下：
```
yarn add -D @babel/cli
```
编译 `server` 目录到 `buildServer` 目录
```
babel -d ./buildServer ./server -s
```
- `-d` 输出目录
- `-s` 保留 source-map

编译玩之后运行可以使用 `node ./buildServer/server.js` 运行项目。

以上步骤可以添加到 `package.json` 的 `scripts` 中
```
"scripts": {
-  "server": "nodemon --exec babel-node -- server/server.js"
+  "dev": "nodemon --exec babel-node -- server/server.js",
+  "build": "rm -rf ./buildServer && babel -d ./buildServer ./server -s",
+  "prestart": "yarn run build",
+  "start": "node ./buildServer/server.js",
+  "help": "babel --help"
},
```

### 运行
运行测试环境
```
npm run dev
# or
yarn run dev
```
运行开发环境
```
npm run start
# or
yarn run start
```

访问

[http://localhost:8083/](http://localhost:8083/)
