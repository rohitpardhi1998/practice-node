const http=require("http");
const fs = require('fs');

http.createServer((req,res)=>{
    console.log("server running at poer")
    res.write("hello")
    res.end()
  
}).listen(2400)

// fs.writeFileSync("rohit.txt","this is my information"); // to add file 
// fs.unlinkSync("rohit.txt"); // to remove file
const path = require("path")
// const dirpath = path.join(__dirname,"hello.txt");
const dirpath2 = path.join(__dirname,"crud");
const filepath = `${dirpath2}/apple5.txt`;
fs.writeFileSync(filepath,"this is my information");
// console.log("dirpath",dirpath)
// console.log("path",path)
fs.readFile(filepath,(error,item)=>{
    console.log("path",item)
});