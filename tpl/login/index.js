/**
 * @description Binding login cookie, 
 * solve the login can not automatically fill in the verification code problem
 * I just provide a way of thinking
 * You can try place your processed cookie under your website domain 
 * @param {loginCookie} cookie
 * @author yuki.yang
 */

const loginCookie = require('./cookie').loginCookie;

module.exports = () => {
    const splitArr = loginCookie.split(';');
    const cookieArr = [];
    splitArr.forEach(function(item){
        let temp = [];
        temp = item.split('=');
        cookieArr.push({
            name: temp[0].trim(),
            value: temp[1].trim(),
            path: '/',
            secure: true,
            domain: '.xx.xx.com'
        })
    })

    return cookieArr;
};



