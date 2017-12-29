/**
 * @description  User-defined options
 * @author yuki.yang
 */

 const path = require('path');
const getGitUser = require('./git-user');

let opts = [{
    type: 'input',
    message: 'A project name',
    name: 'name',
    default: 'e2e-test'
},{
    type: 'input',
    message: 'A project version',
    name: 'version',
    default: '1.0.0'
},{
    type: 'input',
    message: 'A project description',
    name: 'description',
    default: 'A nightmare e2e project.'
},{
    type: 'input',
    message: 'author',
    name: 'author',
    default: getGitUser().trim()
}];

module.exports = opts;