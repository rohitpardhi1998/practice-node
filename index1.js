const result = require("./app10")
const fs =require("fs");
const http =require('http');
const data =require('./data');
http.createServer((req,res)=>{
    // res.write("hello")
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify({data})),
    res.end()
}).listen(4500);

console.log("inodejs");
console.log("result",result.y);
console.log("result",__dirname);
fs.writeFileSync('hello.txt',"thsi is javsacirpt file")
var a =20;
var b=44;
console.log(a+b);

//filter map and reduce will give new array value  
// core module are global module and local module local modulen need to require from thr nodejs and global are used gfrom browser just like the console.log
// create de;ete file 
// process.argv used to get argument in the data 
console.log(process)
