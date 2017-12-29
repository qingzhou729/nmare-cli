/**
 * @description  After the user create a project tips
 * @author yuki.yang
 */

const chalk = require('chalk');

module.exports = name => {
    console.log()
    console.log(chalk.green('    你已经成功初始化nightmare项目:'))
    console.log()
    console.log(chalk.magenta('    你可以这样去启动它:'))
    console.log()
    console.log(`    $  cd ${name}`)
    console.log()
    console.log('    $  npm install')
    console.log()
    console.log('    $  node index.js')
    console.log()
    console.log(chalk.gray('    # 如果install出现 node install.js 卡顿问题，你可以对npm配置做一些修改, 如下:'))
    console.log()
    console.log('    $  npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/')
    console.log()
    console.log(chalk.gray('    # 再次npm install请先删掉之前的node_modules'))
    console.log()
    console.log(chalk.yellow('    祝你好运，更多信息请参考README'))
    console.log()
}