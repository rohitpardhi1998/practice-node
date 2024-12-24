const dbConnect = require("./mongodb")


const mains =async()=>{
 let data= await dbConnect();
 data = await data.find().toArray();
console.log("Data",data);
}

mains();