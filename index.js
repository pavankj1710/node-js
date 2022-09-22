//const colors = require('colors');
//console.log("packagejson".red);
// console.warn(" nodemon successfully am verry happpy")
// console.warn(100+20);
const http = require('http');
const data=require('./data');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data ));
resp.end();
}).listen(6008);