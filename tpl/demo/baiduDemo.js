/**
 * @description  一个自动登录的例子
 * @author yuki.yang
 */

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true }); // options

nightmare
  .goto('https://www.baidu.com') // 前往百度
  .type('#kw', '买母婴上贝贝') // 搜索框输入搜索文案
  .wait('#su') // 等待百度一下按钮
  .click('#su') // 点击百度一下
  .wait(3000) // 等待3秒钟
  .end() // 结束
  .catch((error) => {
    console.error('Search failed:', error);
 });
