

### 1、安装依赖

```
npm install 
```
如果 `npm install`出现 `node install.js` 卡顿问题
解决方法：`在~/.npmrc` 添加
```
electron_mirror="https://npm.taobao.org/mirrors/electron/"
```
参考链接：https://segmentfault.com/q/1010000007594059

### 2、运行项目
```
cd [your-project-name]
node index.js
```

可以修改`index.js`中引入的`demo`来启动不同的测试用例。

目前的demo有: (1）简单使用`demo/simpleDemo.js` (2) 自动登录`demo/loginDemo.js`

### 3、绑定自动登录

1、绑定自动登录主要是解决登录中需要手动输入验证码问题。

2、如果需要自动登录可以修改`index.js`尝试运行`demo/loginDemo.js`。

3、如果cookie过期或上述运行不成功，可以重新手动绑定cookie。

4、手动在绑定有效期登录的`cookie`=>在`login`文件下处理

5、具体步骤:

  (1) 这个`cookie`需要在M站(h5相关页面)登录成功后，在某个页面的`NETWORK中`(在`html`资源的 => `request` => `headers` => `cookie`)复制并替换`login/cookie.js`中`loginCookie`。

  (2) 具体位置如下图:
 ![](http://h0.hucdn.com/open/201752/85acb1e43200b4c4_800x414.png)

  (3) 可以在cookie中自定义预发等(`HX-BETA=1`)字段，具体详见`login`文件。

  (4) 如果7天此`cookie`登录过，有效期会继续延长7天。

### 4、接入悟空

1、登入`xx.xx.xx.xx`服务器

2、将你的项目放到 `/test`目录下。

3、在你 `nmare init` 初始化项目时，你的`start.sh`文件已经生成。
如果你更改的项目文件名，请将 `start.sh`中 `your-project-name`同步更改，如下:
```
output=$(xvfb-run -a node /test/your-project-name/index.js);
```
