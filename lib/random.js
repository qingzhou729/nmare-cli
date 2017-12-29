/**
 * @description  If user-defined file name repeated, plus a random number
 * @author yuki.yang
 */

const exists = require('fs').existsSync;

const findNoFile = name => {
    let random = `${name}${Math.random().toFixed(2)*100}`;
    if(!exists(random)){
        return random;
    } else {
        this.findNoFile(name);
    }
}

module.exports.findNoFile = findNoFile;