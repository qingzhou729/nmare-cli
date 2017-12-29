/**
 * @description  a simple demo
 * @author yuki.yang
 */

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true }); // options

nightmare
  .goto('https://www.google.com') // open google
  .type('#lst-ib', 'nightmare') 
  .wait('input[name="btnK"]') 
  .click('input[name="btnK"]') 
  .wait(3000) 
  .end() 
  .catch((error) => {
    console.error('Search failed:', error);
 });
