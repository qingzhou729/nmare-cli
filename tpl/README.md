

### 1、Directory structure description
```
your-project-name  // Initialization file name
│   README.md      
│   package.json   
│   .gitignore     
│   index.js       // entrance
│   start.sh       // shell
│
└───src
│   │   demo.js
│   
└───login  // login demo
    │   cookie.js
    │   index.js
```
### 2、Installation dependent

```
cd [your-project-name]
npm install
```
If there is a `node install.js` stuttering problem, you can do this as below
```
npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/
```

Or manually add in `~/.npmrc`
```
electron_mirror="https://npm.taobao.org/mirrors/electron/"
```

once again `npm install`, please delete before`node_modules`.

reference link: https://segmentfault.com/q/1010000007594059

### 3、Run the project
``` bash
node index.js
```
You can write test cases under `./src` or `./index.js`.