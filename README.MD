
一个`nightmare`自动化测试脚手架。

### 1、安装

``` 
$ npm install -g @base/nmare --registry http://10.2.223.167:7001/
```
出现权限问题可以加个`sudo`试试

### 2、初始化项目
1、初始化项目
``` bash
$ nmare init
```

2、如果本地存在同名目录，我们将会为你放在新目录(`your-project-name + random`)下。

### 3、目录结构说明
```
your-project-name  // 初始化文件名
│   README.md      // 使用说明
│   package.json   // 项目信息
│   .gitignore     
│   index.js       // 入口文件
│   start.sh       // shell 脚本
│
└───demo   // 测试用例demo
│   │   loginDemo.js  // 自动登录案例
│   │   simpleDemo.js // 基础demo
│   
└───login  // 自动登录处理
    │   cookie.js  // 存放登录cookie
    │   index.js   // 处理登录cookie
```
### 4、安装依赖

```
cd [your-project-name]
npm install
```

如果 `npm install`出现 `node install.js` 卡顿问题
解决方法：
```
npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/
```

或者手动`在~/.npmrc` 添加
```
electron_mirror="https://npm.taobao.org/mirrors/electron/"
```

再次`npm install`请先删掉之前的`node_modules`

参考链接：https://segmentfault.com/q/1010000007594059

### 5、运行项目
``` bash
node index.js
```

可以修改`index.js`中引入的`demo`来启动不同的测试用例。

目前的demo有: (1）简单使用`demo/simpleDemo.js` (2) 自动登录`demo/loginDemo.js