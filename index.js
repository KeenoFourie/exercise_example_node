// Please work on the following nodejs modules: path, os, and fs

const path = require('path')
console.log(path.join(__filename, 'index.js'));

const os = require('os')
console.log(os.userInfo());



const http = require('http')
const firstName = 'Keeno'
const lastName = 'Fourie'
http.createServer((req, res)=> {
    res.end('That is a good name!')
}).listen(firstName, lastName, ()=> {
    console.log(
        `Welcome ${firstName}. I hope you enjoy it here Mr.${lastName}`
        );
})