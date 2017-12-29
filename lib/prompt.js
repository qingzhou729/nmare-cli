/**
 * @description  After the user create a project tips
 * @author yuki.yang
 */

const chalk = require('chalk');

module.exports = name => {
    console.log()
    console.log(chalk.green('    You have successfully initialized the nightmare project:'))
    console.log()
    console.log(chalk.magenta('    You can start it like this:'))
    console.log()
    console.log(`    $  cd ${name}`)
    console.log()
    console.log('    $  npm install')
    console.log()
    console.log('    $  node index.js')
    console.log()
    console.log(chalk.gray('    # If there is a `node install.js` stuttering problem, you can do this as below'))
    console.log()
    console.log('    $  npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/')
    console.log()
    console.log(chalk.gray('    # once again `npm install`, please delete before`node_modules`.'))
    console.log()
    console.log(chalk.yellow('    Good luck, please refer to README for more information'))
    console.log()
}